// Exercise 1

const circle = document.getElementById("circle");
var text = document.getElementById("text");

circle.addEventListener("mouseover",function(){
    text.textContent = "you are in the circle";
});

circle.addEventListener("mouseout",function(){
    text.textContent = "you are outside of the circle";
});


circle.addEventListener("click", function(){
    document.body.style.backgroundColor = "grey";
});

circle.addEventListener("dblclick", function(){
    document.body.style.backgroundColor = "blue";
});
