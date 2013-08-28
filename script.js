var maxValues = new Array();
var rolledNums = new Array();
var slot = 0;
function roll(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}
function moreDice() {
    var form = $(document.createElement('div')).appendTo('form').attr({class: "form-group "+slot.toString()});
    var diceLabel = $(document.createElement('input')).appendTo('.'+slot.toString()).attr({id: "label",type: "text",placeholder: "Enter label", class:"form-control"});
    var diceMax = $(document.createElement('input')).appendTo('.'+slot.toString()).attr({id: "maxVal",type: "text",placeholder: "Enter max value", class:"form-control diceMax "+slot.toString()});
    var rolled = $(document.createElement('span')).appendTo('.'+slot.toString()).attr('id', 'rolled');
    var set = $(document.createElement('input')).appendTo('.'+slot.toString()).attr({class: 'btn btn-default set '+slot.toString(), type: "button", value: "Set"});
    var roll = $(document.createElement('input')).appendTo('.'+slot.toString()).attr({class: 'btn btn-default roll '+slot.toString(), type: "button", value: "Roll"});
    var pageBreak = $(document.createElement('br')).appendTo('.'+slot.toString());
    slot += 1;
}
moreDice();
$(document).ready(function(){
    $("input.roll").hide();
});
$(".set").click(function(){
    alert("h");
    $("input.diceMax."+(slot-1).toString()).replaceWith("<span>d"+maxValues[slot-1]+"=</span>");
    $("#label").replaceWith("<span>"+label+": </span>");
    $(this).hide();
    $(".roll").show();
});
$(".diceMax").on("keyup change", function(){
    maxValues[slot-1] = this.value;
    alert(maxValues[slot-1]);
});
$("#label").on("keyup change", function(){
    label = this.value;
});
$(".roll").click(function(){
    rolledNums[slot-1]=roll(1, maxValues[slot-1]);
    $("#rolled").text(rolledNums[slot-1]);
});
$("#add").click(function(){
    moreDice();
});