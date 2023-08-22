// type define as '' => datetime , 1=> date , 2=>time , 3=>year, 4 => short day name, 5=> Long day Name
export const getDateTime = (type = "", dateNow = "") => {
  var now = dateNow != "" ? new Date(dateNow) : new Date();
  var year = now.getFullYear();
  var month = now.getMonth() + 1;
  var day = now.getDate();
  var hour = now.getHours();
  var minute = now.getMinutes();
  var second = now.getSeconds();

  if (month.toString().length == 1) {
    month = "0" + month;
  }
  if (day.toString().length == 1) {
    day = "0" + day;
  }
  if (hour.toString().length == 1) {
    hour = "0" + hour;
  }
  if (minute.toString().length == 1) {
    minute = "0" + minute;
  }
  if (second.toString().length == 1) {
    second = "0" + second;
  }
  if (type == 2) {
    var dateTime = hour + ":" + minute + ":" + second;
  } else if (type == 1) {
    var dateTime = year + "-" + month + "-" + day;
  } else if (type == 3) {
    var dateTime = year;
  } else if (type == 4) {
    var day = now.getDay();
    let weekday = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"][day];
    var dateTime = weekday;
  } else if (type == 5) {
    var day = now.getDay();
    let weekday = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ][day];
    var dateTime = weekday;
  } else {
    var dateTime =
      year + "-" + month + "-" + day + " " + hour + ":" + minute + ":" + second;
  }
  return dateTime;
};

export const sendOTPphone = (phone) => {
  try {
    let OTP = Math.floor(100000 + Math.random() * 9000);
    /*
          //call API
          const APIpath = "http://sms.smsmenow.in/sendsms.jsp?user=spinemat&password=0dcd71d573XX&senderid=SPIMAT&mobiles=" + receiverPhone + "&sms=Dear%20Customer,%20%0AYour%20OTP%20for%20Spinemat%20is%20" + OTP + ".%0AUse%20this%20Passcode%20to%20login%20your%20account.%20%0ATeam,%0ASpinemat";
          console.log(APIpath)
          const resOTP = await fetch(APIpath);
          console.log(resOTP)
          if (resOTP.status != "undefined" && resOTP.status == 200) {
              return true;
 
          }
          else {
              return false;
          }
          */
    return true;
  } catch (err) {
    return false;
  }
};

export const generatePassword = (passwordLength) => {
  var numberChars = "0123456789";
  var upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowerChars = "abcdefghijklmnopqrstuvwxyz";
  var special_char = "!@#$%()";
  var allChars = numberChars + upperChars + lowerChars + special_char;
  var randPasswordArray = Array(passwordLength);
  randPasswordArray[0] = numberChars;
  randPasswordArray[1] = upperChars;
  randPasswordArray[2] = lowerChars;
  randPasswordArray[3] = special_char;
  randPasswordArray = randPasswordArray.fill(allChars, 4);
  return shuffleArray(
    randPasswordArray.map(function (x) {
      return x[Math.floor(Math.random() * x.length)];
    })
  ).join("");
};

function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

//get file extension using filename
export const getFileExtension = (filename) => {
  var re = /(?:\.([^.]+))?$/;
  var ext = re.exec(filename)[1]; // "txt"
  return ext;
};

export const formatAmPm = (
  dateTimeIn,
  timeForm = "2",
  inFormat = "full",
  outFormat = "full"
) => {
  //inFormat -> full (2022-09-09 10:10:00) , H:i , Hi, H:i:s
  // tomeForm -> //1 -> Military, 2 -> AM/PM
  if (
    dateTimeIn === null ||
    typeof dateTimeIn === "undefined" ||
    dateTimeIn == ""
  ) {
    return "";
  } else {
    //get format
    var company_time_format = timeForm;
    dateTimeIn = dateTimeIn.trim();
    if (inFormat == "H:i") {
      //add static date
      var dateTime = "2021/06/03 " + dateTimeIn;
    } else if (inFormat == "Hi") {
      var dateTime =
        "2021/06/03 " + dateTimeIn.substr(0, 2) + ":" + dateTimeIn.substr(2, 2);
    } else if (inFormat == "H:i:s") {
      var dateTime = "2021/06/03 " + dateTimeIn;
    } else {
      //if date format is Y-m-d then change it to Y/m/d
      var dateTime = dateTimeIn.replaceAll(/-/g, "/");
    }
    dateTime = new Date(dateTime);
    var hours = dateTime.getHours();
    var minutes = dateTime.getMinutes();

    var ampm = "";

    if (company_time_format == 2) {
      ampm = hours >= 12 ? "PM" : "AM";
      hours = hours % 12;
      hours = hours ? hours : 12; // the hour '0' should be '12'
    }
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;

    var date = "";
    if (outFormat == "H:i") {
      var time = hours + ":" + minutes + " " + ampm;
      var outDateTime = time;
    } else if (outFormat == "Hi") {
      var time = hours + "" + minutes + " " + ampm;
      var outDateTime = time;
    } else {
      (month = "" + (dateTime.getMonth() + 1)),
        (day = "" + dateTime.getDate()),
        (year = dateTime.getFullYear());
      if (month.length < 2) month = "0" + month;
      if (day.length < 2) day = "0" + day;
      date = [year, month, day].join("-");
      var time = hours + ":" + minutes + " " + ampm;
      var outDateTime = date + " " + time;
    }
    return outDateTime;
  }
};

//Convert simple array into two-dimensional array (matrix)
export const listToMatrix = (list, elementsPerSubArray) => {
  var matrix = [],
    i,
    k;
  for (i = 0, k = -1; i < list.length; i++) {
    if (i % elementsPerSubArray === 0) {
      k++;
      matrix[k] = [];
    }
    matrix[k].push(list[i]);
  }
  return matrix;
};

//display the time difference in the format "Just now," "1 hour ago," or "1 day ago" based on the provided datetime
export const TimeAgo = (datetime) => {
  //const TimeAgo = ({ datetime }) => {
  const getTimeAgo = (timestamp) => {
    const currentDate = new Date();
    const timestampDate = new Date(timestamp);
    const timeDifference = currentDate - timestampDate;

    // Convert time difference to seconds
    const seconds = Math.floor(timeDifference / 1000);

    if (seconds < 60) {
      return "Just now";
    } else if (seconds < 3600) {
      const minutes = Math.floor(seconds / 60);
      return `${minutes} minute${minutes !== 1 ? "s" : ""} ago`;
    } else if (seconds < 86400) {
      const hours = Math.floor(seconds / 3600);
      return `${hours} hour${hours !== 1 ? "s" : ""} ago`;
    } else {
      const days = Math.floor(seconds / 86400);
      return `${days} day${days !== 1 ? "s" : ""} ago`;
    }
  };

  return getTimeAgo(datetime);
};

//Format the date&time
export const formatDateTime = (inputDateTime) => {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const dateObj = new Date(inputDateTime);
  const day = dateObj.getDate();
  const month = months[dateObj.getMonth()];
  const year = dateObj.getFullYear();
  let hours = dateObj.getHours();
  const minutes = dateObj.getMinutes();
  const ampm = hours >= 12 ? "PM" : "AM";

  // Convert hours to 12-hour format
  if (hours > 12) {
    hours -= 12;
  } else if (hours === 0) {
    hours = 12;
  }

  // Pad single-digit day and minutes with leading zeros
  const formattedDay = day.toString().padStart(2, "0");
  const formattedMinutes = minutes.toString().padStart(2, "0");

  return `${formattedDay}, ${month} ${year} ${hours}:${formattedMinutes} ${ampm}`;
};
