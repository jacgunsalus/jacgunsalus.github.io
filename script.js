$(document).ready( function(){






var age
var weight
var health





function calculateDosage()
{
  age=$('#age').val();
  weight=$('#weight').val();

//calculate
parseInt(weight);
parseInt(age);
var message = "";

if(1<=weight && weight< 6 && age<=1) {
message = "Advil is not safe for newborn infants; please consult a doctor."; 
} else if(6<=weight && weight<=11 && age<=1) {
message = "One dose is equivalent to 1.25 mL Infant's UNCONCENTRATED drops.";

} else if(12<=weight && weight<=17 && age<=2) {
message = "One dose is equivalent to 2.5 mL Infant's UNCONCENTRATED drops OR 0.5 teaspoon Children's Suspension Liquid.";

} else if(18<=weight && weight<=23 && age <=2) {
message = "One dose is equivalent to 3.75 mL Infant's UNCONCENTRATED drops OR 0.75 teaspoon Children's Suspension Liquid OR 1.5 Children's Soft Chewable Tablets.";

} else if(24<=weight && weight<=29 && age <=3) {
message = "One dose is equivalent to 5 mL Infant's UNCONCENTRATED drops OR 1 teaspoon Children's Suspension Liquid OR 2 Children's Soft Chewable Tablets OR 1 Junior Strength Chewable Tablet.";

} else if(30<=weight && weight<=34 && age <=5){
  message = "One dose is equivalent to 6.25 mL Infant's UNCONCENTRATED drops OR 1 teaspoon Children's Suspension Liquid OR 2 Children's Soft Chewable Tablets OR 1 Junior Strength Chewable Tablet.";

} else if(35<=weight && weight<=46 && age <=8){
  message = "One dose is equivalent to 1.5 teaspoons Children's Suspension Liquid OR 3 Children's Soft Chewable Tablets OR 1.5 Junior Strength Chewable Tablets.";

} else if(47<=weight && weight<=109 && age<12){
  message = "One dose is equivalent to 2 teaspoons Children's Suspension Liquid OR 4 Children's Soft Chewable Tablets OR 2 Junior Strength Chewable Tablets OR 1 Regular Strength Tablet.";

} else if(12<=age && weight>=50 && weight<=400) {
  message = "One dose is equivalent to 4 Junior Strength Chewable Tablets OR 2 Regular Strength Tablets.";

} else {
alert("ERROR: Your input was invalid. Please make sure that you entered your correct age and weight in integers.");
}

$("#result").text(message);


}



$('button').click(function() {
    age=$('#age').val();
    weight=$('#weight').val();

    calculateDosage();
});


$(document).keypress(function(e) {
  if(e.which == 13) {
    calculateDosage();
  }
});

// $('weight').click(function (e) {//alert("Check Exist or Not");
//   if (e.keyCode === 13) {
//     // Trigger the button element with a click
//     calculateDosage();
//   }
//   else
//   {
//     console.log(e.keyCode);
//   }
// });

// Get the input field
//var input = document.getElementById("age");
//var input = document.getElementById("weight");
// Execute a function when the user releases a key on the keyboard
// input.addEventListener("keyup", function(event) {
//   // Number 13 is the "Enter" key on the keyboard
//   if (event.keyCode === 13) {
//     // Trigger the button element with a click
//     document.getElementById("button").click();
//   }

// }




  


});


//});