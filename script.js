var maxValue, rolledNum;
function roll(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}
function moreDice() {
    var diceLabel = $(document.createElement('input')).appendTo('body').attr({id: "label",type: "text",placeholder: "Enter label"});
    var diceMax = $(document.createElement('input')).appendTo('body').attr({id: "maxVal",type: "text",placeholder: "Enter max value"});
    var rolled = $(document.createElement('span')).appendTo('body').attr('id', 'rolled');
    var set = $(document.createElement('button')).appendTo('body').attr('id', 'set').text("Set");
    var roll = $(document.createElement('button')).appendTo('body').attr('id', 'roll').text("Roll");
    var pageBreak = $(document.createElement('br')).appendTo('body');
}
moreDice();
$("#maxVal").on("keyup change", function(){
    maxValue = this.value;
});
$("#label").on("keyup change", function(){
    label = this.value;
});
$("#roll").click(function(){
    rolledNum=roll(1, maxValue);
    $("#rolled").text(rolledNum);
});
$("#set").click(function(){
    $("#maxVal").replaceWith("<span>d"+maxValue+"=</span>");
    $("#label").replaceWith("<span>"+label+": </span>");
    $(this).hide();
    $("#roll").show();
});
