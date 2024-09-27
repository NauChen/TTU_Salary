// var buildingData = [
//     "新德惠大樓",
//     "綜合工廠區",
//     "挺生大樓",
//     "實驗大樓",
//     "北設工大樓",
// ];


$(function () {
    // 建議輸入
    $('#cultivationSpaceBuilding').typeahead({
        source: buildingData
    });

});