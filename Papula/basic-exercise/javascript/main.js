// Exercise 1

document.getElementById("submit").addEventListener("click", sort);

function sort(){
    let fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let age = Number(document.getElementById("age").value);
    let profession = document.getElementById("select").value;
 
       
    if(profession == "IT"){
        var elements = document.getElementsByClassName("display"); 
        for(i = 0; i < elements.length; i++){
            elements[i].style.backgroundColor = "purple";
        }
    }else if(profession == "Hospitality"){
        var elements = document.getElementsByClassName("display"); 
        for(i = 0; i < elements.length; i++){
            elements[i].style.backgroundColor = "yellow";
        }
    }else{
        var elements = document.getElementsByClassName("display"); 
        for(i = 0; i < elements.length; i++){
           elements[i].style.backgroundColor = "blue";
        }
    }

    if(fname.length >= 5){
        document.getElementById("display_fname").style.color = "green"
    }else{
        document.getElementById("display_fname").style.color = "red"
    }

    if( lname.length >=5){
        document.getElementById("display_lname").style.color = "green"
    }else{
        document.getElementById("display_lname").style.color = "red"
    }

    document.getElementById("display_fname").innerHTML = fname
    document.getElementById("display_lname").innerHTML = lname
    document.getElementById("display_age").innerHTML = age
    // console.log(fname, lname, age)
}