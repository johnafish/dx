var maxValues = new Array();
var rolledNums = new Array();
var labels = new Array();
var slot = 0;
function roll(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}
function moreDice() {
    var div = $(document.createElement('div')).appendTo('form').attr({class: "form-group b"+slot.toString(), id: "b"+slot.toString()});
    var diceLabel = $(document.createElement('input')).appendTo('.b'+slot.toString()).attr({id: "label",type: "text",placeholder: "Enter label", class:"form-control dlabel d"+slot.toString()}).on("keyup change", labelHandler);
    var diceMax = $(document.createElement('input')).appendTo('.b'+slot.toString()).attr({id: "maxVal",type: "text",placeholder: "Enter max value", class:"form-control diceMax d"+slot.toString()}).on("keyup change", diceMaxHandler);
    var rolled = $(document.createElement('span')).appendTo('.b'+slot.toString()).attr({class: "rolled d"+slot.toString()});
    var set = $(document.createElement('input')).appendTo('.b'+slot.toString()).attr({class: 'btn btn-default set d'+slot.toString(), type: "button", value: "Set"}).click(setHandler);
    var roll = $(document.createElement('input')).appendTo('.b'+slot.toString()).attr({class: 'btn btn-default roll d'+slot.toString(), type: "button", value: "Roll"}).click(rollHandler);
    var pageBreak = $(document.createElement('br')).appendTo('.b'+slot.toString());
    $("input.roll.d"+slot.toString()).hide();
    slot += 1;
}
function setHandler() {
	var parent = $(this).parent().attr("id").substring(1);
    $("input.diceMax#"+parent).replaceWith("<span>d"+maxValues[parent]+"=</span>");
    $(".dlabel.d"+parent).replaceWith("<span>"+labels[parent]+": </span>");
    $(this).hide();
    $(".roll").show();
}
function rollHandler() {
	var parent = $(this).parent().attr("id").substring(1);
    rolledNums[parent]=roll(1, maxValues[parent]);
    $(".rolled.d"+parent).text(rolledNums[parent]);
}
function diceMaxHandler() {
	var parent = $(this).parent().attr("id").substring(1);
    maxValues[parent] = this.value;
}
function labelHandler() {
	var parent = $(this).parent().attr("id").substring(1);
	labels[parent] = this.value;
}
moreDice();
$("#add").click(function(){
    moreDice();
});