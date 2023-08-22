
//import { S3img } from '../lib/S3img'

export async function ListingDetails(db,business_id) {
    try {
        
       const businesID = business_id || '';

        
        if (businesID) {

            var records = await db.query("SELECT mb.id,mb.name,mb.logo,mb.phone_number,mb.address,ct.name as city_name,mb.city_id,st.name as state_name,mb.state_id,mb.lat,mb.pincode,mb.lng,mb.is_claimed,mb.is_verified,mb.keywords,(SELECT GROUP_CONCAT(id) FROM master_keywords WHERE FIND_IN_SET(id,mb.keywords)) as keywords_name,mb.company_description,mb.additional_information,mb.professional_association,mb.past_experience,mb.awards,mb.business_more_info,mb.logo,mb.contact_person,mb.phone_number,mb.tollfree,mb.landmark,mb.area_id,mr.name as area_name,mb.pincode,mb.category,(SELECT GROUP_CONCAT(name) FROM master_categories WHERE FIND_IN_SET(id,mb.category)) as category_name,mb.subcategory,(SELECT GROUP_CONCAT(name) FROM master_sub_categories WHERE FIND_IN_SET(id,mb.subcategory)) as subcategory_name,mb.type_of_business,(SELECT GROUP_CONCAT(name) FROM master_type_of_business WHERE FIND_IN_SET(id,mb.type_of_business)) as type_of_business_name,mb.prefrence,mb.is_active,de.year_establishment,de.whatsapp_no,de.ivr_number,de.book_now_url,de.business_pdf,de.gst_document,de.is_gst_verified,de.register_no,de.register_document,de.is_register_verified,de.pancard_number,de.pancard_document,de.is_pancard_verfied,de.store_front_image,de.store_back_image,de.head_office,de.branch_office,de.other_office,de.no_of_employee FROM businesses mb LEFT JOIN business_details de ON de.business_id = mb.id LEFT JOIN master_states st ON st.id = mb.state_id LEFT JOIN master_cities ct ON ct.id = mb.city_id LEFT JOIN master_areas mr ON mr.id = mb.area_id WHERE mb.is_active = '1' AND mb.id = ?", [businesID])
            //console.log(records)
            if (records?.length > 0) {
                

                console.log("newData", records)
                return json.stringify(records);
            }
            else {
                return false;
            }
        }
        else {
            return false; // no records of this user logout
        }

    }
    catch (err) {
        console.log("error", err)
        return false;
    }


}


export async function UserDetails(db, user_id) {
    try {
        
       const userID = user_id || '';

        
        if (userID) {

            var records = await db.query("SELECT id,name,mobile,is_verify_email,is_verify_mob,email,password FROM users WHERE is_active='1' AND deleted_at IS NULL AND id=?", [userID])
            //console.log(records)
            if (records?.length > 0) {
                console.log("newData", records)
                return records;
            }
            else {
                return false;
            }
        }
        else {
            return false; // no records of this user logout
        }

    }
    catch (err) {
        console.log("error", err)
        return false;
    }

    
}
