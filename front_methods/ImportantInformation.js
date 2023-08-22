export async function ImportantCategoriesSubcategories(search='') {
    try {
        var requestOptions = {
            method: "POST",
            body: JSON.stringify({ "search_filter": search })
        };

        let res = await fetch(`${process.env.BASE_URL}/api/protect/important-cat-sub-category`,requestOptions)
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

//get important information Contact listing by city id and subcategory
export async function ImportantSubcategoriesContactList(argu) {
    try {
        var requestOptions = {
            method: "POST",
            body: JSON.stringify(argu)
        };

        let res = await fetch(`${process.env.BASE_URL}/api/protect/important-contact-list`,requestOptions)
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



