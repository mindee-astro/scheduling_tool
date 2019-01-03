// Tue Nov 27 2018 15:28:27 GMT+0800 (UTC)
const birthday  = new Date();

// getDateComponents
const YYYY = birthday.getFullYear();    // 1980
const MM = birthday.getMonth();         // 6
const DD = birthday.getDate();          // 31

// // Turn const into strings
var todaysdate = String(YYYY)+"-"+String(MM)+"-"+String(DD);
var estenddate = String(YYYY+2)+"-"+String(MM)+"-"+String(DD);

export default datecalc;