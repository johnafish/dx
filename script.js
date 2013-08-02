var maxValue, rolled;
function roll(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}
$("#maxVal").on("keyup change", function(){
    maxValue = this.value;
});
$("#roll").click(function(){
    rolled=roll(1, maxValue);
    $("#rolled").text(rolled);
});
