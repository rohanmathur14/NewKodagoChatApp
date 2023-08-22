import useSWRInfinite from "swr/infinite";
import { useUserContext } from "../components/UserContext";
var PAGE_SIZE = 10;
export const usePagination = (
  urlLink,
  mainID = "",
  otherData = "",
  fetchType = "",
  pageSize = 10
) => {
  PAGE_SIZE = pageSize;

  const { userId, userToken } = useUserContext();

  const businessFetcher = async (url, pageNum, id, other) => {
    const formData = new FormData(); 
    let start = (pageNum - 1) * PAGE_SIZE;
    if (start > 0) {
      start = start + 1;//like 1st time start is 0, 2nd time start is 11
    }
     
    formData.append("id", id);
    formData.append("start", start);
    formData.append("perpage", 10);
    formData.append("Authkey", process.env.NEXT_PUBLIC_AUTH_KEY);
    formData.append("Userid", userId);
    formData.append("Token", userToken);
    for (let key in other) {
      if (other.hasOwnProperty(key)) {
        const value = other[key];
        formData.append(key, value);
      }
    }
    //formData.append("get_feeds", 1);

    var resFet = await fetch(url, {
      method: "POST",
      //body: JSON.stringify({ "id": id, "page": pageNum, "other": other }),
      body: formData,
      //headers: { "Content-Type": "application/json" }
    });

    var allList = await resFet.json();
    if (allList?.status == 1) {
      if (fetchType == "feeds") { 
        return allList.data.feeds;
      } else {
        return allList.data;
      }
    } else {
      return [];
    }
  };
  const {
    data: dataPagination,
    error,
    mutate,
    size,
    setSize,
    isValidating,
  } = useSWRInfinite(
    (index, preViouseData) => {
      index = index + 1;
      //console.log("INDEX IS => ",index)
      if (preViouseData && !preViouseData.length) return null;
      return [
        `${process.env.NEXT_PUBLIC_API_URL}${urlLink}`,
        index,
        mainID,
        otherData,
      ];
    },
    businessFetcher,
    {
      revalidateIfStale: true,
      revalidateOnFocus: false,
      revalidateOnReconnect: true,
    }
  );

  const recordListings = dataPagination ? dataPagination?.flat() : [];
  const isLoadingInitialData = !dataPagination && !error;
  const isLoadingMore =
    isLoadingInitialData ||
    (size > 0 &&
      dataPagination &&
      typeof dataPagination[size - 1] === "undefined");
  const isEmpty = dataPagination?.[0]?.length === 0;

  const isReachingEnd =
    isEmpty ||
    (dataPagination &&
      dataPagination[dataPagination.length - 1]?.length < PAGE_SIZE);
  const isRefreshing =
    isValidating && dataPagination && dataPagination.length === size;

  // console.log(
  //   "isValidating",
  //   isValidating,
  //   "size",
  //   size,
  //   "isLoadingInitialData",
  //   isLoadingInitialData,
  //   "isLoadingMore",
  //   isLoadingMore,
  //   "isReachingEnd",
  //   isReachingEnd,
  //   "isRefreshing",
  //   isRefreshing
  // );

  return {
    recordListings,
    isLoadingMore,
    isReachingEnd,
    isRefreshing,
    size,
    setSize,
    mutate,
  };
};
