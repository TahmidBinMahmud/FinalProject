//Collapsible Section code
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}

var loc = [
  { name: "dhaka", temperature: "37°C", humidity: "72%" },
  { name: "chittagong", temperature: "33°C", humidity: "81%" },
  { name: "sylhet", temperature: "34°C", humidity: "79%" },
  { name: "barisal", temperature: "32°C", humidity: "75%" },
  { name: "rajshahi", temperature: "28°C", humidity: "60%" },
  { name: "khulna", temperature: "30°C", humidity: "77%" },
  { name: "rangpur", temperature: "33°C", humidity: "80%" },
  { name: "mymensingh", temperature: "32°C", humidity: "70%" },
];

$(document).ready(function () {
  
  $("select.district").change(function () {
     
    
    var selectedDistrict = $(this).children("option:selected").val();
    //alert("You have selected the district - " + selectedDistrict);
    console.log(selectedDistrict)
    $.ajax({
      method: "GET",
      url: "data/" + selectedDistrict,
     

    }).done(function (response) {
      console.log (response)
     var aqi=response.datas.aqi
      
    var humidity= response.datas.humidity
    var  landType=response.datas.landType
     var pm10= response.datas.pm10
     var temperature=response.datas.temperature
     var vocs=response.datas.vocs
    var  wqi=response.datas.wqi
    var pm25=response.datas.pm25
    var pm1=response.datas.pm01
    // var pm25= response.datas.pm25
    // var pm10=response.datas.pm10
    $('#temp').text(humidity);
      $('#humid').text(humidity);
      $('#pm10μm').text(pm10);
      $('#pm25μm').text(pm25);
      $('#pm1μm').text(pm1);
      $('#aqi').text(aqi);
      $('#wqi').text(wqi);
      $('#vocs').text(vocs);
      $('#landType').text(landType);
    



    }).fail(function (response) {
      console.log(response.responseText);
    });
  });

});

$("#datainput").click(function (event) {
  var envdata = {
    city: $('#cityI').val(),
    temperature: $('#tempI').val(),
    humidity: $('#humidI').val(),
    pm10: $('#pm10μmI').val(),
    pm25: $('#pm25μmI').val(),
    pm01: $('#pm1μmI').val(),
    aqi: $('#aqiI').val(),
    wqi: $('#wqiI').val(),
    vocs: $('#vocsI').val(),
    landType: $('#landTypeI').val()
  }
  $.ajax({
    url: "/data/new",
    method: "POST",
    data: envdata

  }).done(function (response) {
    console.log(response)
  }).fail(function (response) {
    console.log(response)
  })
})

$("#getdata").click(function (event) {
  $.ajax({
    method: "GET",
    url: "/data/list"
  }).done(function (response) {
    console.log(response);
  }).fail(function (response) {
    console.log(response.responseText);
  });

})

$("#admin").click(function (event) {
  // console.log($('#userName').val());
  if (String($('#userName').val()) == "admin" && String($('#passWord').val()) == "asdf") {
    // console.log($('#userName').val());
    $('#hide').removeClass("disabled");
  }
})

