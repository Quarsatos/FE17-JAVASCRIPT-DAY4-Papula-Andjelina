// Exercise 1
document.getElementById("images").addEventListener("click", removeItem);
document.getElementById("randomcolor").addEventListener("click", ramdomcolor);

let selector = document.getElementsByTagName("img");

for(let i = 0; i < selector.length; i++){
    selector[i].onclick= removeItem;
}


function removeItem() {
    this.style.opacity = "0";
    this.style.transition = "1s";
    setTimeout(() => {
        this.remove();
    }, 1000);
}

// Exercise 2

document.getElementById("randomcolor").addEventListener("click", ramdomcolor);

function ramdomcolor(){
    let r = Math.floor(Math.random()*256);
    let g = Math.floor(Math.random()*256);
    let b = Math.floor(Math.random()*256);
    let rcolor = "rgb("+r+","+g+","+b+")";
    console.log(rcolor)
    document.body.style.backgroundColor = rcolor;
    // document.getElementById("container").style.backgroundColor = rcolor;
}


