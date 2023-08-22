export  async function FindCareerJobs(argu) {
    try {
        var requestOptions = {
            method: "POST",
            body: JSON.stringify({ "city_id": argu.city_id,"searchTitle":argu.searchKeyword,"id":0 }),

        };
        var APIpath = `${process.env.BASE_URL}/api/protect/find-jobs`

        const res = await fetch(APIpath, requestOptions);
        const resJson = await res.json();         
        if (resJson.status == 200) {
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