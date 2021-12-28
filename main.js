//soundを宣言
let sound = new Audio("bom.mp3");
//soundを永遠にループさせる
sound.loop = true;

//一桁の数字に0を加えて二桁表示にする関数
function addZero(time) {
    //timeが10未満(一桁)の場合0をつける 三項演算子
    return (time < 10) ? "0" + time : time;
}

//現在の時刻を表示
setInterval(function () {
    //変数timerに#realTimeを代入
    let timer = document.getElementById('realTime');

    //Dateを用いて時間、分、秒を取得
    let day = new Date();
    let Hour = day.getHours();
    let Min  = day.getMinutes();
    let Sec  = day.getSeconds();

    //#realTimeに表示する文字列を代入
    timer.textContent = addZero(Hour) + ":" + addZero(Min) + ":" + addZero(Sec) ;
    
    //1秒に1回読み込み ※setIntervalを使って1秒毎に特定の処理
    },1000);
    
////起きる時刻設定のプルダウンの中身 Option()を使う！////
//時間のオプション設定
 function hoursMenu(){

    //alarmhourの要素を取得
	let select = document.getElementById('alarmhour');

    //時間のmaxを23にして代入
	let hrs = 23

    //0からhrs(23)まで繰り返しiに値が代入され、かつ1桁の数字には頭に一つ0を補う
	for (i=0; i <= hrs; i++) {
		select.options[select.options.length] = new Option( i < 10 ? "0" + i : i, i);
	}
}
hoursMenu();

//分のオプション設定
function minMenu(){

    //alarmminuteの要素を取得
	let select = document.getElementById('alarmminute');

    //分のmaxを59にして代入
	let min = 59;

    //0からmin(59)まで繰り返しiに値が代入され、かつ1桁の数字には頭に一つ0を補う
	for (i=0; i <= min; i++) {
		select.options[select.options.length] = new Option(i < 10 ? "0" + i : i, i);
	}
}
minMenu();

//秒のオプション設定
function secMenu(){

    //alarmsecondの要素を取得
	let select = document.getElementById('alarmsecond');

    //秒のmaxを59にして代入
	let sec = 59;

    //0からmin(59)まで繰り返しiに値が代入され、かつ1桁の数字には頭に一つ0を補う
	for (i=0; i <= sec; i++) {
		select.options[select.options.length] = new Option(i < 10 ? "0" + i : i, i);
	}
}
secMenu();

//setbuttonに設定する、アラーム時刻を決定する処理
function alarmSet(){
    
    //alertを鳴らす場所のIDを取得
    let alarm = document.getElementById('alartTime');

    //hr(時間)、mn(分)、se(秒)にプルダウンのIDを持たせる
    let hr = document.getElementById('alarmhour');
    let mn = document.getElementById('alarmminute');
    let se = document.getElementById('alarmsecond');

    //selectedindexプロパティを使ってユーザーが選択肢したオプションの値を取得
    let selectedHour = hr.options[hr.selectedIndex].value;
    let selectedMinuet = mn.options[mn.selectedIndex].value;
    let selectedSecond = se.options[se.selectedIndex].value;

    //アラームの設定時刻を定義する(alarttime) ※？？？？consoleが数字しか表示されない?????
    alarm.textContent = addZero(selectedHour) + ':' + addZero(selectedMinuet) + ':' + addZero(selectedSecond);
    
    //disabledを使って「セットする」ボタンを押したら時間の設定を行えないようにする
    document.getElementById('alarmhour').disabled = true;
    document.getElementById('alarmminute').disabled = true;
    document.getElementById('alarmsecond').disabled = true;

    //1秒に1回、現実の時間とセットした時間が等しいか確かめ、=になったらサウンドを鳴らす
    setInterval(function(){

    //現在の時刻を時、分、秒で取得
    //変数timerに#realTimeを代入
    let timer = document.getElementById('realTime');

    //Dateを用いて時間、分、秒を取得
    let day = new Date();
    let Hour = day.getHours();
    let Min  = day.getMinutes();
    let Sec  = day.getSeconds();

    //#realTimeに表示する文字列を代入
    timer.textContent = addZero(Hour) + ":" + addZero(Min) + ":" + addZero(Sec) ;

    //テストコード
    let currentTime = timer.textContent
    console.log(currentTime);

    let alarm = document.getElementById('alartTime');

    //hr(時間)、mn(分)、se(秒)にプルダウンのIDを持たせる
    let hr = document.getElementById('alarmhour');
    let mn = document.getElementById('alarmminute');
    let se = document.getElementById('alarmsecond');

    //selectedindexプロパティを使ってユーザーが選択肢したオプションの値を取得
    let selectedHour = hr.options[hr.selectedIndex].value;
    let selectedMinuet = mn.options[mn.selectedIndex].value;
    let selectedSecond = se.options[se.selectedIndex].value;

    //アラームの設定時刻を定義する(alarttime) ※？？？？consoleが数字しか表示されない?????
    alarm.textContent = addZero(selectedHour) + ':' + addZero(selectedMinuet) + ':' + addZero(selectedSecond);
    
    let alarmTime = alarm.textContent

    if (currentTime == alarmTime) {
    sound.play();
//sound.playのカウントをこの中に書き込む
    

    }        
    //1秒に1度この処理を行う
    },1000);
}

//resetbuttonに設定する、setbuttonで設定したアラームを解除する処理 (disabled使う)
function alarmReset(){
    document.getElementById('alarmhour').disabled = false;
    document.getElementById('alarmminute').disabled = false;
    document.getElementById('alarmsecond').disabled = false;
    //音を止める処理
    sound.pause();
}