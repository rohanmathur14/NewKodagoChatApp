export default async function Categories() {
    try {
        var requestOptions = {
            method: "POST",
            body: JSON.stringify({ "token": "" }),

        };
        var APIpath = `${process.env.BASE_URL}/api/protect/categories-home`

        const res = await fetch(APIpath, requestOptions);
        const resJson = await res.json();
        //console.log(resJson,"JJJJJJSSSSSSSSSSSSSSSSSSSSSSSSSS")
        if (resJson.status == 200) {
            return resJson.data;
        }
        else {
            return [];
        }

    }
    catch (err) {

        return [];

    }
}