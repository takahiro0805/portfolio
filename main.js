var worksinfo = [
  {
    "id": "connecte",
    "name": "connecte",
    "photo_num": 2,
    "movie_num": 1,
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
      "今までにはワークショップを開催しながら、会社の価値定義、ブランディング。ペルソナの設定や、カスタマージャーニーマップの作成を行ってきた。<br>また、現在留学コンパスのサービスのほぼ全てのページのUIデザインや、機能の検証、改善を行なっている。"]
    },
  {
    "id": "tritty",
    "name": "tritty",
    "photo_num": 2,
    "svg": true,
    "year": 2017,
    "info":["TRITTYは、旅先や出かけた先で使える観光情報を提供するアプリケーションである。ユーザが観光をするときにあるニーズとして、情報の新鮮さやニッチさ、その地域特有の情報、位置情報、イメージが湧きやすいものであるか、体験者の声、旅の記録ができるというのが、観光庁などの調査のデータから示されている。従来の観光情報を提供するものは、写真やその場所の情報などがまとめられてはいるが、欲しい情報に行き着くまでの導線が複雑であったり、自分の現在地からその情報までの現実での距離感がわかりにくい場合がある。地図と写真がリンクして表示されるように画面を設計した。このことにより、現在地と情報が一目でわかるようになり、地図に情報を置くことにより、情報の流動性を低くした。",
    "ユーザーが欲しい情報に行き着くまでの導線が複雑であり、現在地からその情報に対する現実的な距離感がわかりにくい場合があった。観光庁などの調査データも調べ、それらの問題点を解決しユーザーに新たな体験を提供する。"]
  },
  {
    "id": "mylife",
    "name": "mylife",
    "photo_num": 1,
    "svg": true,
    "year": 2018,
    "info":["グラフィックの授業で、自分の好きなものについてのポスターを制作する課題で制作した。自分の尊敬するアーティストであるZORNの1番好きな曲「My life」の世界を表現した。潰れた空き缶でカレンダーを表現しており、繰り返しの日々の中でも小さな幸せや輝ける日があるということを表した。"]
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
