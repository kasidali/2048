var board = new Array();//存放数据
var score = 0;

$(document).ready(function(){
    newgame();
});

function newgame() {
    init();
}

function init() {
    for(var i = 0; i<4; i++)
        for(var j = 0; j<4; j++){
            var gridCell = $("#grid-cell-"+i+"-"+j);
            gridCell.css('top',  getPosTop(i,j));
            gridCell.css('left', getPosLeft(i,j));
        }
}