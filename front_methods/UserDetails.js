
import { resolve } from 'path';
import { S3img } from '../lib/S3img'

export async function ListingDetails(db,business_id) {
    try {
        
       let businesID = business_id || '';

        
        if (businesID) {
            
            var records = await db.query("SELECT mb.id,mb.name,mb.logo,mb.phone_number,mb.address,ct.name as city_name,mb.city_id,st.name as state_name,mb.state_id,mb.lat,mb.pincode,mb.lng,mb.is_claimed,mb.is_verified,mb.keywords,(SELECT GROUP_CONCAT(id) FROM master_keywords WHERE FIND_IN_SET(id,mb.keywords)) as keywords_name,mb.company_description,mb.additional_information,mb.professional_association,mb.past_experience,mb.awards,mb.business_more_info,mb.logo,mb.contact_person,mb.phone_number,mb.tollfree,mb.landmark,mb.area_id,mr.name as area_name,mb.pincode,mb.category,(SELECT GROUP_CONCAT(name) FROM master_categories WHERE FIND_IN_SET(id,mb.category)) as category_name,mb.subcategory,(SELECT GROUP_CONCAT(name) FROM master_sub_categories WHERE FIND_IN_SET(id,mb.subcategory)) as subcategory_name,mb.type_of_business,(SELECT GROUP_CONCAT(name) FROM master_type_of_business WHERE FIND_IN_SET(id,mb.type_of_business)) as type_of_business_name,mb.prefrence,mb.is_active,de.year_establishment,de.whatsapp_no,de.ivr_number,de.book_now_url,de.business_pdf,de.gst_document,de.is_gst_verified,de.register_no,de.register_document,de.is_register_verified,de.pancard_number,de.pancard_document,de.is_pancard_verfied,de.store_front_image,de.store_back_image,de.head_office,de.branch_office,de.other_office,de.no_of_employee FROM businesses mb LEFT JOIN business_details de ON de.business_id = mb.id LEFT JOIN master_states st ON st.id = mb.state_id LEFT JOIN master_cities ct ON ct.id = mb.city_id LEFT JOIN master_areas mr ON mr.id = mb.area_id WHERE mb.is_active = '1' AND mb.id = ?", [businesID])
            //console.log(records)
            if (records?.length > 0) {
                
                let checkPendingReq = await db.query("SELECT id FROM req_businesses WHERE business_id=? AND request_status='0'", [businesID]);

                let isPending = checkPendingReq?.length > 0 ? 1 : 0;
                let recordsBasic = {}
                let recordsCompany = {}
                let dataMedia = { images: [], video: "", pdf: "" }
                if (isPending) {
                   
                    var recordsBasic = await db.query("SELECT mb.business_id as id,mb.name,mb.lat,mb.lng,mb.city_id,mb.state_id,mb.area_id,mb.address FROM req_businesses mb LEFT JOIN master_states st ON st.id = mb.state_id LEFT JOIN master_cities ct ON ct.id = mb.city_id LEFT JOIN master_areas mr ON mr.id = mb.area_id WHERE request_status='0' AND business_id=?", [businesID])
                    //console.log("records", recordsUpdated)
                    recordsBasic = recordsBasic?.length > 0 ? recordsBasic[0] : []

                    var recordsCompany = await db.query("SELECT mb.business_id as id,bd.year_establishment ,mb.company_description,mb.additional_information,mb.professional_association,mb.past_experience,mb.awards,mb.business_more_info,mb.logo FROM req_businesses mb LEFT JOIN req_business_details bd ON bd.business_id = mb.id WHERE mb.request_status='0' AND mb.business_id=?", [businesID])
                    //console.log("records", recordsUpdated)
                    recordsCompany = recordsCompany?.length > 0 ? recordsCompany[0] : []
                    let logoUrl = await S3img(recordsCompany.logo)
                    recordsCompany.logo = logoUrl

                    var recordsMedia = await db.query("SELECT mb.business_id as id,bd.business_pdf as url,'3' as type FROM req_businesses mb LEFT JOIN req_business_details bd ON bd.business_id = mb.id WHERE mb.request_status='0' AND mb.business_id=? UNION SELECT mb.business_id as id,bd.url,bd.type FROM req_businesses mb LEFT JOIN req_business_img_videos bd ON bd.business_id = mb.id WHERE mb.request_status='0' AND mb.business_id=? AND bd.is_active='1'", [businesID, businesID])
                    //dataMedia = { images: [], video: "", pdf: "" }
                    // console.log("RECEIVED *******************", recordsUpdated)
                   let promise =  await new Promise((resolve, reject) => {
                       if (recordsMedia?.length > 0) {
                           let totalMedia = recordsMedia?.length || 0;
                           totalMedia = totalMedia-1;
                           recordsMedia.forEach(async (dataVal,i) => {

                               if (dataVal.type == "1") // images
                               {
                                   let s3Url = await S3img("uploads/company/image/" + dataVal.url, '', false)
                                   dataMedia.images.push(s3Url)
                                   //console.log("For Loop Working IMAAGES =====>", dataMedia, s3Url)
                               }
                               else if (dataVal.type == "2") { // video
                                   dataMedia.video = dataVal.url;
                               }
                               else {
                                   //pdf
                                   let s3Url = await S3img("uploads/company/pdf/" + dataVal.url, '', false)

                                   dataMedia.pdf = s3Url;
                                   //console.log("For Loop Working PDF ===>", dataMedia, s3Url)
                               }
                               if (totalMedia == i) {

                                   resolve();
                               }

                           })
                           //console.log("dataReturn ------------", dataReturn)
                           
                       }
                       else {
                           resolve();
                       }
                    })

                    
                    return JSON.stringify({ "data": records, status: 200, isPending, basicDetail: recordsBasic, recordsCompany, recordsMedia: dataMedia });
                }
                else {
                    return JSON.stringify({ "data": records, status: 200, isPending, basicDetail: recordsBasic, recordsCompany, recordsMedia: dataMedia });

                }
                
               
            }
            else {
                return JSON.stringify({ status: 201 });
            }
        }
        else {
            return JSON.stringify({ status: 201 });
        }

    }
    catch (err) {
        console.log("error", err)
        return JSON.stringify({ status: 201 });
    }
}
export async function AdvertisementDetails(db,advertise_id) {
    try {
        
       let advertiseID = advertise_id || '';
        
        if (advertiseID) {
            
            var records = await db.query("SELECT businesses.package_type,businesses.city_id, businesses.package_id,businesses.id as ads_id,businesses.business_name,businesses.banner_image,businesses.name as userName,businesses.email as userEmail,businesses.phone as userPhone,businesses.payment,businesses.per_click_price,businesses.per_impression_price,businesses.per_day_amount,(case WHEN(businesses.ads_status = '2') THEN 'Expaired'  WHEN(businesses.ads_status = '1') THEN 'Published' WHEN(businesses.ads_status = '0') THEN 'Pending' END) as ads_status,(case WHEN(businesses.is_active = '0') THEN 'Inactive'  WHEN(businesses.is_active = '1') THEN 'Active' END) as stop_start,(select GROUP_CONCAT(subCategory.name) as subcategory from master_sub_categories as subCategory where find_in_set(subCategory.id,businesses.sub_category_id) > 0 ) as subcatgoeryName,DATE_FORMAT(businesses.created_at,'%d %b %Y') as date,ct.name as city_name,package.name as package_name,businesses.sub_category_id,banner_position,ads_click,redirect_url from advertise_bussiness_requestes as businesses LEFT JOIN master_cities ct ON ct.id = businesses.city_id LEFT JOIN master_ads_packages as package on package.id = businesses.package_id WHERE businesses.id = ?", [advertiseID])
           
            if (records?.length > 0) {
                const newData = []
                    var ads_view_records = await db.query("SELECT count(id) as total_view FROM `ads_view_analytics` WHERE ads_id=? and is_clicked=2",[records[0].ads_id]);
                    var ads_click_records = await db.query("SELECT count(id) as total_click FROM `ads_view_analytics` WHERE ads_id=? and is_clicked=1",[records[0].ads_id]);
                    var totalUsedAdsAmount = (ads_view_records[0].total_view * records[0].per_impression_price) + (ads_click_records[0].total_click * records[0].per_click_price);
                   
                    var totalRaminingAmount = records[0].payment - totalUsedAdsAmount;
                    
                    var newBanner = await S3img(records[0].banner_image,'uploads/advertisements/',false);
                   
                    var data = { ...records[0], ['imagePath']: newBanner,['RemainingAmount']:totalRaminingAmount,['no_of_click']:ads_click_records[0].total_click,['no_of_views']:ads_view_records[0].total_view}

                    newData.push(data)
                    records = await newData
                    
                    // getting the time of the ads 
                    var ads_time_records = await db.query("SELECT `id`,`day`, `is_open`, `start_time`, `end_time` FROM `ads_show_times` WHERE ads_id=?",[records[0].ads_id]);
                    var ads_time_today_records = await db.query("SELECT `id`,`day`, `is_open`, `start_time`, `end_time` FROM `ads_show_times` WHERE ads_id=? and day= UPPER(SUBSTRING(DAYNAME(CURDATE()),1,3))",[records[0].ads_id]);
                    var chartCount = await db.query("SELECT date_format(date_time,'%Y-%m-%d') as analysis_date,SUM(CASE WHEN is_clicked = 1 THEN 1 ELSE 0 END) AS total_clicks,SUM(CASE WHEN is_clicked = 2 THEN 1 ELSE 0 END) AS total_impression,date_format(date_time,'%d %b') as day FROM `ads_view_analytics` WHERE ads_id=? and MONTH(date_time)=MONTH(now()) and YEAR(date_time)=YEAR(now()) group by date_format(date_time,'%d')",[records[0].ads_id]);
                    return JSON.stringify({ "data": records,'time':ads_time_records,'todaytime':ads_time_today_records,'chartCount':chartCount,status: 200, });
                }
                    else {
                    return JSON.stringify({ status: 201 });
                }
            }
            else {
                return JSON.stringify({ status: 201 });
            }
    }
    catch (err) {
        console.log("error", err)
        return JSON.stringify({ status: 201 });
    }
}
    
export async function UserDetails(db, user_id) {
    
    try {
        
       const userID = user_id || '';

       
        if (userID) {

            var records = await db.query("SELECT users.id,users.name,mobile,is_verify_email,is_verify_mob,email,password,sex,DATE_FORMAT(dob,'%Y-%m-%d') as dob,DATE_FORMAT(date_of_anniversary,'%Y-%m-%d') as date_of_anniversary,address,area_id,area.name areaName,users.city_id,city.name as cityName,users.state_id,state.name as stateName,pincode,occupation,occupation.name as occupation_name,users.image,marital_status FROM users left join master_occupations as occupation on occupation.id = users.occupation left join master_cities as city on city.id = users.city_id left join master_states as state on state.id=users.state_id left join master_areas as area on area.id=users.area_id WHERE users.is_active='1' AND users.deleted_at IS NULL AND users.id =?", [userID])
            const newData = []
    ///console.log("records",records)
            for (var i = 0; i < records.length;i++) {
            var logoID = (records[i]?.image != 'undefined' && records[i]?.image !== null && records[i]?.image != '')?'uploads/users/'+records[i]?.image : '';
            var newLogo = await S3img(logoID)
            var data = { ...records[i], ['image']: newLogo }
        
            newData.push(data)
            }
            records = await newData
            if (records?.length > 0) {

                return JSON.stringify({ "data": records, status: 200 });
            }
            else {
                return JSON.stringify({ status: 201 });
            }
        }
        else {
            return JSON.stringify({ status: 201 });
        }

    }
    catch (err) {
        console.log("error", err)
        return JSON.stringify({ status: 201 });
    }

   

}


