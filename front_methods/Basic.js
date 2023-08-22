export default async function SignupPageDetails(){
    try {
        var requestOptions = {
            method: "POST",
            body: JSON.stringify({ "token": "" }),

        };
        var APIpath = `${process.env.BASE_URL}/api/protect/signup-details`

        const res = await fetch(APIpath, requestOptions);
        const resJson = await res.json();

        if (resJson.status == 200) {
            return resJson.data;
        }
        else {
            return "";
        }

    }
    catch (err) {
        
        return "";

    }
}