// Astronomy Picture of the Day (APOD) 検索プログラム
// 堀田拓郎

//カレンダー部
const specificDate = new Date();
const year = specificDate.getFullYear();  //year 現在の西暦
const month = specificDate.getMonth() + 1; //month 現在の月

// タイトル年月の表示
const yyear = document.getElementById(`titleYear`);
yyear.innerHTML = year;
const mmonth = document.getElementById(`titleMonth`);
mmonth.innerHTML = month;
const d2date = document.getElementById(`titleDate`);
d2date.innerHTML = date;

// datepicker設定
/*
const input_form = document.querySelector('#date_sample');
input_form.datepicker({
    format: 'yyyy-mm-dd'
});*/

const form = document.querySelector(`#searchForm`);
form.addEventListener('submit', async function(e) {
    e.preventDefault();

    const searchTermInput = form.elements.query;
    const config = {
        params: {
            api_key: "DEMO_KEY",
            date: searchTermInput.value
        }
    }
    const res = await axios.get('https://api.nasa.gov/planetary/apod', config);
    console.log(`res.data is ${res.data.url}`);
    searchTermInput.value = '';
    
    const img = document.createElement('IMG');
    img.src = res.data.url;
    document.body.append(img);
});