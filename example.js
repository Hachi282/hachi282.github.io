alert("看什麼看");
alert("沒看過那麼帥的電腦嗎");
alert("我知道我的魅力很大");
alert("但是非禮勿視阿同學!!!");
/*
var a = prompt("輸入數字");
var b = prompt("標準?");
function compare(A,B){
    if(a > b){
        return"很大喔";
    }
    else if(a < b){
        return"很小喔";
    }
    else if(a == b){
        return"很剛好喔";
    }
    else {
        return"就說是數字了咩";
    }
}
alert(compare(a,b));
*/

var user = prompt("剪刀,石頭,布,蜥蜴,史巴克?");
var computer = Math.random();
if (computer <= 0.20) {
  computer = "剪刀";
}
else if (computer <= 0.40) {
  computer = "石頭";
}
else if (computer <= 0.60) {
  computer = "布";
}
else if (computer <= 0.80) {
  computer = "蜥蜴";
}
else {
  computer = "史巴克";
}
/////
alert("電腦出 " + computer);
/////
if (user == computer){
  alert("平手，勢均力敵，不分伯仲，難分高下，平分秋色");
}
else if (user == "剪刀") {
    if (computer == "布") {
        alert("你贏了，恭喜恭喜恭喜你呀，恭喜恭喜你");
    }
    else if(computer == "蜥蜴"){
        alert("你贏了，恭喜恭喜恭喜你呀，恭喜恭喜你");
    }
    else {
        alert("你輸了，出師不利，再接再厲");
    }
}
else if (user == "石頭") {
    if (computer == "剪刀"){
        alert("你贏了，恭喜恭喜恭喜你呀，恭喜恭喜你");
    }
    else if(computer == "蜥蜴"){
        alert("你贏了，恭喜恭喜恭喜你呀，恭喜恭喜你");
    }
    else {
        alert("你輸了，出師不利，再接再厲");
    }
}
else if (user == "布") {
    if (computer == "石頭"){
        alert("你贏了，恭喜恭喜恭喜你呀，恭喜恭喜你");
    }
    else if(computer == "史巴克"){
        alert("你贏了，恭喜恭喜恭喜你呀，恭喜恭喜你");
    }
    else {
        alert("你輸了，出師不利，再接再厲");
    }
}
else if (user == "蜥蜴") {
    if (computer == "布"){
        alert("你贏了，恭喜恭喜恭喜你呀，恭喜恭喜你");
    }
    else if(computer == "史巴克"){
        alert("你贏了，恭喜恭喜恭喜你呀，恭喜恭喜你");
    }
    else {
        alert("你輸了，出師不利，再接再厲");
    }
}else if (user == "史巴克") {
    if (computer == "剪刀"){
        alert("你贏了，恭喜恭喜恭喜你呀，恭喜恭喜你");
    }
    else if(computer == "石頭"){
        alert("你贏了，恭喜恭喜恭喜你呀，恭喜恭喜你");
    }
    else {
        alert("你輸了，出師不利，再接再厲");
    }
}
else {
    alert("輸入錯誤")
}