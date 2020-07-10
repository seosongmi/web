var jsonData = [{ "id": 1, "first_name": "Huntley", "last_name": "Hendrich", "email": "hhendrich0@cisco.com", "gender": "Male", "ip_address": "254.240.21.24" },
        { "id": 11, "first_name": "Vern", "last_name": "Fasham", "email": "vfashama@vk.com", "gender": "Male", "ip_address": "50.79.137.134" },
        { "id": 12, "first_name": "Anni", "last_name": "Siman", "email": "asimanb@statcounter.com", "gender": "Female", "ip_address": "140.50.252.180" },
        { "id": 13, "first_name": "Magdaia", "last_name": "Klouz", "email": "mklouzc@nationalgeographic.com", "gender": "Female", "ip_address": "81.136.118.29" },
        { "id": 14, "first_name": "Yolanthe", "last_name": "Dougharty", "email": "ydoughartyd@shop-pro.jp", "gender": "Female", "ip_address": "128.19.116.128" },
        { "id": 15, "first_name": "Northrop", "last_name": "Poe", "email": "npoee@blinklist.com", "gender": "Male", "ip_address": "63.216.117.7" }]

var titles = [ 'id', 'first_name', 'last_name', 'email', 'gender'];

$(document).ready(function() {
    var $table = $('<table />').attr('border','1');
    var $tr = $('<tr />');
    titles.forEach(function(o) {
        $tr.append($('<td />').text(o));
    });
    $table.append($tr);
    //데이터 영역.
    jsonData.forEach(function(o) {
        $tr = $('<tr />').mouseenter(mouseenterFunc)
                         .mouseout(mouseoutFunc);
        titles.forEach(function(f) {
            $tr.append($('<td />').text(o[f]));
        })
        // $tr.append($('<button />').text('Click').click(btnFunc));
        $table.append($tr);
    })
    $('#show').append($table);
})

function mouseenterFunc() {
    $(this).css('background','yellow');
}
function mouseoutFunc() {
    $(this).css('background','');
}