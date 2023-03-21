let gregorianDaysName = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const persianDaysName = ["یکشنبه", "دوشنبه", "سه‌شنبه", "چهارشنبه", "پنجشنبه", "جمعه", "شنبه"];
let generateNewArray = [];
//generateNewArray = persianDaysName.splice(0, gregorianDaysName.length, ...gregorianDaysName);


const getDate = () =>{

    let dateObj = new Date();
    let monthDateObj = dateObj.getUTCMonth() + 1; //months from 1-12
    let dayDateObj = dateObj.getUTCDate() + 1;
    let yearDateObj = dateObj.getUTCFullYear();
    let dayName = gregorianDaysName[dateObj.getDay()];
    let today = dayName + " - " + yearDateObj + "/" + monthDateObj + "/" + dayDateObj;
    const showGregorianDate = document.getElementById("gregorian").innerHTML = today;

    let convertToday = new Date().toLocaleDateString('fa-IR');
    let persianDayName = generateNewArray[dateObj.getDay()];
    const showPersianDate = document.getElementById("persian").innerHTML = generateNewArray + convertToday;
}






// var myDate = "1402-12-04",
// dateSplitted = myDate.split("-"),
// newPersianDay = persianDate.convertPersianToGregorian(dateSplitted[0], dateSplitted[1], dateSplitted[2]);
// persianResult = newPersianDay[0] + "-" + newPersianDay[1] + "-" + newPersianDay[2];

// console.log(persianResult);