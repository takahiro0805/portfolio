var worksinfo = [
  {
    "id": "connecte",
    "name": "connecte",
    "photo_num": 2,
    "movie_num": 2,
    "svg": true,
    "year": 2018,
    "info":["留学コンパスは、「留学したいけど何から始めたらいいのかわからない」といった悩みがある留学希望者を後押しするサービスとして、留学エージェント各社一押しの留学プランを、留学初心者でも一括比較できる留学体験の比較できる。関わってきて3度目のリニューアルで、各コンテンツの見せ方のデザインや検索のUXの向上を行った。",
      "今までには会社の価値定義から、ブランディング。ペルソナの設定や、カスタマージャーニーマップの作成。現在サービスの全ページのUIデザインを行なっている。"]
    },
  {
    "id": "compass",
    "name": "ryugakucompass",
    "photo_num": 2,
    "svg": true,
    "year": 2018,
    "client_url": "https://ryugakucompass.com",
    "info":["留学コンパスは、「留学したいけど何から始めたらいいのかわからない」といった悩みがある留学希望者を後押しするサービスとして、留学エージェント各社一押しの留学プランを、留学初心者でも一括比較できる留学体験の比較できる。関わってきて3度目のリニューアルで、各コンテンツの見せ方のデザインや検索のUXの向上を行った。",
      "今までには会社の価値定義から、ブランディング。ペルソナの設定や、カスタマージャーニーマップの作成。現在サービスの全ページのUIデザインを行なっている。"]
    },
  {
    "id": "tritty",
    "name": "tritty",
    "photo_num": 1,
    "movie_num": 1,
    "svg": true,
    "year": 2017,
    "info":"セミの鳴き声を利用したIotデバイス<br>「Minmin Beatbox」を開発した<br>従来のセミ捕りをセミ録りに<br>アップデートすることで<br>普段は煩わしいセミの鳴き声を<br>楽しさに変えるデバイスを作成した<br>Yahoo! Japan主催の<br>HACK U TOKYO 2017では<br>最優秀賞などを受賞"
  },
  {
    "id": "mylife",
    "name": "mylife",
    "photo_num": 1,
    "movie_num": 2,
    "svg": true,
    "year": 2018,
    "info":"初対面の異性同士の<br>コミュニケーションを促進する<br>Iotデバイス「connecte」を開発した<br>恋人つなぎという一見敷居の高い接触を<br>デバイスを通して行うことで<br>その敷居を下げ恋人つなぎでしか<br>得られないドキドキ感は維持する<br>というデバイスである<br>さらに会話の建前を作ることにより<br>初対面でのコミュニケーションを<br>より円滑に進めることができる"
  }
]

var t;
var w;
var h;

window.onload = function onload(){
  var contentInfo = document.getElementById("contentInfo");
  var contentPhoto = document.getElementById("contentPhoto");
  w = document.documentElement.clientWidth;
  fitWindow();
  param = GetQueryString();
  if( param ) {
    var data = getData(param);
    view(data);
  }
}
window.onresize = function() {
  w = document.documentElement.clientWidth;
  fitWindow();
}

function fitWindow() {
    document.body.style.width = w + "px";
}

function GetQueryString() {
  if (1 < window.location.search.length) {
    // 最初の1文字 (?記号) を除いた文字列を取得する
    var parameter = document.location.search.slice(1);
    return parameter;
  }
  return null;
}

function getData(param) {
  return worksinfo.find(
    data => data.id === param
  );
}

function view(data) {

  contentVer.insertAdjacentHTML('beforeend','<img class="rightText" src="./data/works/' + data.id + '/' + data.name + '-ver' + '.svg">');

  if ( data.svg ) {
    contentInfo.insertAdjacentHTML('beforeend','<img class="infoImg" src="./data/works/' + data.id + '/' + data.id + '-logo' + '.svg">');
  }

  for(var i = 0; i < data.photo_num; i++){
    contentInfo.insertAdjacentHTML('beforeend','<img class="contentImg" src="./data/works/' + data.id + '/' + data.id + '_' + [i] + '.png">');
    contentInfo.insertAdjacentHTML('beforeend','<p class="info">' + data.info[i] + '</p>');
  }
  if( data.movie_num ) {
    for(var i = 0; i < data.movie_num; i++){
      contentPhoto.insertAdjacentHTML('beforeend','<video controls class="contentMovie" src="./data/works/' + data.id + '/' + data.id + '_' + [i] + '.mp4"></video>');
    }
  }
  contentInfo.insertAdjacentHTML('beforeend','<p class="year">' + data.year + '</p>');
  if ( data.client_url ) {
    contentInfo.insertAdjacentHTML('beforeend','<p class="client_url"><a href="' + data.client_url + '">' + data.client_url + '</a></p>');
  }

}

var menu = document.getElementById("menu");
var menuSp = document.getElementById("menuDrower");

var pos = 0;

function drower() {
  switch(pos){
    case 0 :
      menu.style.transform = "translateX(" + pos + "px)";
      pos = -200;
      menuSp.classList.add('active');
      break;
    case -200:
      menu.style.transform = "translateX(" + pos + "px)";
      pos = 0;
      menuSp.classList.remove('active');
      break;
  }
}

function menuClose() {
  menu.style.transform = "translateX(-200px)";
  open.style.display = "block";
  close.style.display = "none";
}
