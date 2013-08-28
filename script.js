var maxValue, rolledNum;
function roll(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}
function moreDice() {
    var diceLabel = $(document.createElement('input')).appendTo('.jumbotron').attr({id: "label",type: "text",placeholder: "Enter label", class:"form-control"});
    var diceMax = $(document.createElement('input')).appendTo('.jumbotron').attr({id: "maxVal",type: "text",placeholder: "Enter max value", class:"form-control"});
    var rolled = $(document.createElement('span')).appendTo('.jumbotron').attr('id', 'rolled');
    var set = $(document.createElement('button')).appendTo('.jumbotron').attr('id', 'set').attr('class', 'btn btn-default').text("Set");
    var roll = $(document.createElement('button')).appendTo('.jumbotron').attr('id', 'roll').attr('class', 'btn btn-default').text("Roll");
    var pageBreak = $(document.createElement('br')).appendTo('.jumbotron');
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
