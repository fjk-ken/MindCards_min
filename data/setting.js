const areaTitles = ["そう思う", "どちらでもない", "そう思わない"];

const mindData = [
    {id: "type1", text: "何でも勝ちたい", color: "red", charactor: "kyousou_red.png"},
    {id: "type2", text: "やるぞ!", color: "yellow", charactor: "tassei_yellow.png"},
    {id: "type3", text: "仲良くしたい", color: "green", charactor: "kanrensei_green.png"},
    {id: "type4", text: "思いやり", color: "pink", charactor: "omoiyari_pink.png"},
    {id: "type5", text: "目立ちたい", color: "orange", charactor: "omoiyari_pink.png"},
    {id: "type6", text: "未来にワクワク", color: "purple", charactor: "sonzaikan_orange.png"},
    {id: "type7", text: "やればできる", color: "lightblue", charactor: "sinrai_sky.png"},
    {id: "type8", text: "なぜ？どうして？", color: "navy", charactor: "hakkensya_navy.png"},
    {id: "type9", text: "まかせて", color: "brown", charactor: "sinraisei_brown.png"},
    {id: "type10", text: "計画したい", color: "gray", charactor: "syusaisya_gray.png"},
];

const maxgraph = 15;

function getCurrentDateYYYYMMDD() {
    var dt = new Date();
    var year = dt.getFullYear();
    var month = ("00" + (dt.getMonth() + 1)).slice(-2);
    var day = ("00" + dt.getDate()).slice(-2);
    return year + month + day;
}

var arg  = new Object;
var url = location.search.substring(1).split('&');
for(i=0; url[i]; i++) {
   var keyval = url[i].split('=');
   arg[keyval[0]] = decodeURI(keyval[1]);
}
const urlArg = arg;