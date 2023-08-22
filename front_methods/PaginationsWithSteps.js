import useSWR, { SWRConfig } from 'swr'
var PAGE_SIZE = 10;
export const usePagination = (urlLink,mainID='',otherData='',pageSize=10) => {
    PAGE_SIZE = pageSize
    const businessFetcher = async (url, pageNum, id, other) => {
        
        var resFet = await fetch(url, {
            method: 'POST',
            body: JSON.stringify({ "id": id, "page": pageNum, "other": other }),
            headers: { "Content-Type": "application/json" }
        })

        var allList = await resFet.json();

        if (allList?.status == 200) {
            return allList.data;
        }
        else {
            return []
        }


    }
    const { data: dataPagination, error, mutate, size, setSize, isValidating } = useSWRInfinite(
        (index, preViouseData) => {
            index = index + 1
            //console.log("INDEX IS => ",index)
            if (preViouseData && !preViouseData.length) return null
            return [`${process.env.BASE_URL}${urlLink}`, (index), mainID, otherData]
        }
        ,
        businessFetcher,
        {
            revalidateIfStale: true,
            revalidateOnFocus: false,
            revalidateOnReconnect: true
        }
    );

    const businessRecords = dataPagination ? dataPagination?.flat() : [];
    const isLoadingInitialData = !dataPagination && !error;
    const isLoadingMore = isLoadingInitialData || (size > 0 && dataPagination && typeof dataPagination[size - 1] === "undefined");
    const isEmpty = dataPagination?.[0]?.length === 0;

    const isReachingEnd = isEmpty || (dataPagination && dataPagination[dataPagination.length - 1]?.length < PAGE_SIZE);
    const isRefreshing = isValidating && dataPagination && dataPagination.length === size;

    //console.log("isValidating", isValidating, "size", size, "isLoadingInitialData", isLoadingInitialData, "isLoadingMore", isLoadingMore, "isReachingEnd", isReachingEnd, "isRefreshing", isRefreshing)

    return { businessRecords, isLoadingMore, isReachingEnd, isRefreshing, size, setSize, mutate };
   





}