export default async function CitiesList() {
    try {
        var requestOptions = {
            method: "POST",
            body: JSON.stringify({ "currentCity": "" }),

        };
        var APIpath = `${process.env.BASE_URL}/api/protect/cities-list`

        const res = await fetch(APIpath, requestOptions);
        const resJson = await res.json();
        
        if (resJson?.status == 200) {
            return resJson?.data;
        }
        else {
            return [];
        }

    }
    catch (err) {

        return [];

    }
}