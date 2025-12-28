// カレンダー日替わり画像付き js
// auth 堀田拓郎

//カレンダー部
const specificDate = new Date();
const year = specificDate.getFullYear();  //year 現在の西暦
const month = specificDate.getMonth() + 1; //month 現在の月
const date = specificDate.getDate(); // date 現在の日
const day = specificDate.getDay(); // day 現在の曜日（0～6）
const weekday = ["日","月","火","水","木","金","土"]; // weekday[] 曜日（日～土）
console.log(`今日は${year}年${month}月${date}日${weekday[day]}曜日`);
const specificDate2 = new Date(year, month-1, 1);
const day2 = specificDate2.getDay(); // day2 月初めの曜日
//console.log(specificDate2);
console.log(`月初めは${year}年${month}月1日${weekday[day2]}曜日`);
const specificDate3 = new Date(year, month, 0);
const date3 = specificDate3.getDate(); // date3 月終わりの日付
const day3 = specificDate3.getDay(); // day3 月終わりの曜日
console.log(`月末は${year}年${month}月${date3}日${weekday[day3]}曜日`);
const specificDate4 = new Date();
const year4 = specificDate4.getFullYear(); // year4 任意の年を今年に設定
const month4 = specificDate4.getMonth()+1; // month4 任意の月を今月に設定
let date4, date5, date6, i,j,k; // date4, date5, date6 任意の日付  i,j,k カウンタ
let day4 = [0, 1, 2, 3, 4, 5, 6];
let day31 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];
let day30 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];
let day29 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29];
let day28 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28];

// タイトル年月の表示
const yyear = document.getElementById(`titleYear`);
yyear.innerHTML = year;
const mmonth = document.getElementById(`titleMonth`);
mmonth.innerHTML = month;
const d2date = document.getElementById(`titleDate`);
d2date.innerHTML = date;

// 日付枠の作成
for (i=1; i<=date3; i++) {
    //カレンダー
    if (i == 1) {
        date4 = day2; //1日を任意の曜日に割り当て
    }
    const ddate = document.getElementById(`d${date4}`);
    ddate.innerHTML = i; //日付をカレンダーに記入
    date4++;
}

// 画像枠の作成
for (j=1; j<=date3; j++) {
    if (j == 1) {
        date5 = day2;
    }
    const boxdate = document.getElementById(`box${date5}`);
    date5++;
}

//　画像挿入
for (k=1; k<=date3; k++) {
    if (k == 1) {
        date6 = day2 + 1;
    }
    const imgdata = document.getElementById(`n${date6}`);
    const imgd = `https://picsum.photos/400?random=${Math.random()}`;

    const link = document.createElement('a');
    imgdata.src = imgd;
    date6++;
}

// 画像選択および表示
document.querySelectorAll('.bi').forEach(img => {
  img.addEventListener('click', function() {
    // 1. 他の画像boxの選択状態（枠線クラスなど）をすべて解除
    const isActive = this.classList.contains('border-primary');
    document.querySelectorAll('.bi').forEach(el => {
      el.classList.remove('selected', 'border','border-primary', 'border-3'); // 排他制御
    });

    // 2. クリックした画像boxが未選択だった場合のみ選択状態にする（トグル）
    if (!isActive) {
      this.classList.add('selected', 'border','border-primary', 'border-3');
    }

    // 3. クリックした画像boxの中の画像を下部表示エリアに出力
    const selectImgValue = this.classList[3].substr(3,2); // 選択した画像のimg**を取得
    const selectImgNumber = document.getElementById(`n${selectImgValue}`); // img**からn**を紐づけ
    if (selectImgNumber.src.substr(0, 4)!=='http'){ // n**のsrcの頭がhttpでないとき（imgが存在しない場所を選択するとsrcの頭がfile://になる)
        this.classList.remove('selected', 'border','border-primary', 'border-3'); // 画像が無い場所は選択できないようにする（選択状態を解除する）
    }
    const showPicture = document.getElementById('showPicture'); // 画面下部の表示エリア取得
    showPicture.src = selectImgNumber.src; // n**のsrcを画面下部の表示エリアのsrcに合わせる
  });
});