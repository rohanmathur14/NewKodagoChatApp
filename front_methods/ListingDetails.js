export async function BasicDetails(id) {
    try {
        var requestOptions = {
            method: "POST",
            body: JSON.stringify({ "id": id }),

        };
        var APIpath = `${process.env.BASE_URL}/api/protect/business-details`

        const res = await fetch(APIpath, requestOptions);
        const resJson = await res.json();
        //console.log(resJson,"===============================DATA FETCHED")
        if (resJson?.status == 200) {
            return resJson;
        }
        else {
            return [];
        }

    }
    catch (err) {

        return [];

    }
}