var maxValue, rolledNum;
function roll(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}
function moreDice() {
    var form = $(document.createElement('form')).appendTo('.jumbotron').attr({role: "form"});
    var diceLabel = $(document.createElement('input')).appendTo('form').attr({id: "label",type: "text",placeholder: "Enter label", class:"form-control"});
    var diceMax = $(document.createElement('input')).appendTo('form').attr({id: "maxVal",type: "text",placeholder: "Enter max value", class:"form-control"});
    var rolled = $(document.createElement('span')).appendTo('form').attr('id', 'rolled');
    var set = $(document.createElement('input')).appendTo('form').attr({id: 'set', class: 'btn btn-default', type: "button", value: "Set"});
    var roll = $(document.createElement('input')).appendTo('form').attr({id: 'roll', class: 'btn btn-default', type: "button", value: "Roll"});
    var pageBreak = $(document.createElement('br')).appendTo('form');
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
