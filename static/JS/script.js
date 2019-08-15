//Collapsible Section code
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}

var loc = [
  {name: "dhaka", temperature: "37°C", humidity: "72%"},
  {name: "chittagong", temperature: "33°C", humidity: "81%"},
  {name: "sylhet", temperature: "34°C", humidity: "79%"},
  {name: "barisal", temperature: "32°C", humidity: "75%"},
  {name: "rajshahi", temperature: "28°C", humidity: "60%"},
  {name: "khulna", temperature: "30°C", humidity: "77%"},
  {name: "rangpur", temperature: "33°C", humidity: "80%"},
  {name: "mymensingh", temperature: "32°C", humidity: "70%"},
];

$(document).ready(function(){
  $("select.district").change(function(){
      var selectedDistrict = $(this).children("option:selected").val();
      //alert("You have selected the district - " + selectedDistrict);
      console.log(selectedDistrict)
      for (var i = 0; i < loc.length; i++){
        if (loc[i].name == selectedDistrict){
          $('#temp').text(loc[i].temperature);
          $('#humid').text(loc[i].humidity);
        }
      }
  });

});