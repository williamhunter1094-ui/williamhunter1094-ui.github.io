// About
// 堀田拓郎

//カレンダー部
const specificDate = new Date();
const year = specificDate.getFullYear();  //year 現在の西暦
const month = specificDate.getMonth() + 1; //month 現在の月
const date = specificDate.getDate(); // date 現在の日

// タイトル年月の表示
const yyear = document.getElementById(`titleYear`);
yyear.innerHTML = year;
const mmonth = document.getElementById(`titleMonth`);
mmonth.innerHTML = month;
const d2date = document.getElementById(`titleDate`);
d2date.innerHTML = date;