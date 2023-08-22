import { getDateTime } from '../helper/helper'
export async function CheckCouponCode(db, package_name_id, master_package_id, city_id, coupon_code) {
    try {
        const currentDate = getDateTime(1)
        if (master_package_id && coupon_code) {

            var records = await db.query("SELECT id,discount,coupon_start_date,coupon_end_date,user_limit,same_user_limit FROM coupons WHERE coupon_code =?,package_name_id=? AND master_package_id=? AND (city_id=0 || city_id=?) AND  is_active = '1' ", [coupon_code, package_name_id, master_package_id, city_id])
            //console.log(records)
            if (records?.length > 0) {
                if (currentDate >= records[0].coupon_start_date && currentDate <= records[0].coupon_end_date) {//check start and end date
                    if (records[0]?.user_limit > 0) {
                        //get coupon total limit
                        var checkUserLimit = await db.query("SELECT count(id) as used_coupon_user_limit from business_package_payments WHERE coupon_id =?  ", [coupon_id])
                        var used_coupon_limit = checkUserLimit[0]?.used_coupon_user_limit ? heckUserLimit[0]?.used_coupon_user_limit : 0
                        //check user limit
                        if (used_coupon_limit > records[0].user_limit) {
                            return JSON.stringify({ status: 201, msg: 'Exceed the limit of use this coupon.Please try another coupon' });
                        }
                    }
                    if (records[0]?.same_user_limit > 0) {
                        var user_id = 0
                        //get how many time used this coupon by same user
                        var checkNumOfUsedThisCouponByOneUser = await db.query("SELECT count(b.id) as total_used_count from businesses as b left join business_packages as bp on b.id = bp.business_id left join business_package_payments bpp on bpp.package_id=bp.id WHERE bpp.coupon_id=? AND b.user_id=?  ", [records[0].id, user_id])
                        var totalOfUsedThisCouponByUser = checkNumOfUsedThisCouponByOneUser[0]?.total_used_count ? checkNumOfUsedThisCouponByOneUser[0]?.total_used_count : 0

                        if (totalOfUsedThisCouponByUser > records[0].same_user_limit) {
                            return JSON.stringify({ status: 201, msg: 'Your coupon limit is exceed.Please try another coupon' });
                        }
                    }
                    return JSON.stringify({ status: 200, discount: records[0]?.discount, msg: 'Coupon code successfully applied' });

                } else {
                    return JSON.stringify({ status: 201, msg: 'Coupon code is not valid' });
                }
            }
            else {
                return JSON.stringify({ status: 201, msg: 'Coupon code not match' });
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