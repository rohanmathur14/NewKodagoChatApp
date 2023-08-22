export async function CategoriesList() {
    try {
        let addOptionsc = {
            method: 'POST',
            body: JSON.stringify({ "currentCity": "" }),

        };
        let addResc = await fetch(`${process.env.BASE_URL}/api/protect/categories-home`, addOptionsc)

        let addJsonc = await addResc.json();
        //console.log(addJsonc, "YYOOOOOOOOOOOO")
        if (addJsonc?.status == 200) {
            return addJsonc?.data;
        }
        else {
            return [];
        }

    }
    catch (err) {

        return [];

    }
}

export async function HomeCities() {
    try {
        let addOptionsc = {
            method: 'POST',
            body: JSON.stringify({ "currentCity": "" }),

        };
        let addResc = await fetch(`${process.env.BASE_URL}/api/protect/cities-home`, addOptionsc)

        let addJsonc = await addResc.json();
        //console.log(addJsonc, "YYOOOOOOOOOOOO")
        if (addJsonc?.status == 200) {
            return addJsonc?.data;
        }
        else {
            return [];
        }

    }
    catch (err) {

        return [];

    }
}

export async function HomeCitiesCategories() {
    try {

        let addResc = await fetch(`${process.env.BASE_URL}/api/protect/home-list`)

        let addJsonc = await addResc.json();

        if (addJsonc?.status == 200) {
            return addJsonc?.data;
        }
        else {
            return [];
        }

    }
    catch (err) {

        return [];

    }
}

export async function OurPulications() {
    try {
        var requestOptions = {
            method: "POST",
            body: JSON.stringify({ "token": "" })
        };
        var APIpath = `${process.env.BASE_URL}/api/protect/our-publications`
        const res = await fetch(APIpath, requestOptions);
        const resJson = await res.json();
        if (resJson?.status == 200) {
            return resJson?.data;
        } else {
            return [];
        }
    }
    catch (err) {

        return [];

    }
}

export async function PopularServices() {
    try {
        var requestOptions = {
            method: "POST",
            body: JSON.stringify({ "token": "" })
        };
        var APIpath = `${process.env.BASE_URL}/api/protect/popular-services`
        const res = await fetch(APIpath, requestOptions);
        const resJson = await res.json();
        if (resJson?.status == 200) {
            return resJson?.data;
        } else {
            return [];
        }
    }
    catch (err) {

        return [];

    }
}

export async function CitiesData() {
    try {
        var requestOptions = {
            method: "POST",
            body: JSON.stringify({ "token": "" })
        };
        var APIpath = `${process.env.BASE_URL}/api/protect/cities-list`
        const res = await fetch(APIpath, requestOptions);
        const resJson = await res.json();
        //console.log("DAYAYDAYAD---------------------------------------------", resJson)
        if (resJson?.status == 200) {
            return resJson?.data;
        } else {
            return [];
        }
    }
    catch (err) {

        return [];

    }
}

export async function AnalyticsData() {
    try {
        var requestOptions = {
            method: "GET"
        };
        var APIpath = `${process.env.BASE_URL}/api/analytics`
        const res = await fetch(APIpath, requestOptions);
        const resJson = await res.json();
        if (resJson?.status == 200) {
            return resJson?.data;
        } else {
            return [];
        }
    }
    catch (err) {

        return [];

    }
}