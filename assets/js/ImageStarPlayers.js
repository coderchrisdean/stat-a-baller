var img_Giannis = document.getElementById("Giannis_ID");
var img_Nikola = document.getElementById("Nikola_ID");
var img_Lebron = document.getElementById("Lebron_ID");
var img_Steph = document.getElementById("Steph_ID");


var currentPlayer=localStorage.getItem("currentPlayer");
console.log(currentPlayer);

var imgArray = [img_Giannis, img_Nikola, img_Lebron, img_Steph];

function showImg(img) {
    for (i = 0; i < imgArray.length; i++) {
        imgArray[i].style.display = "none";
    }
    img.style.display = "block";
}

if (currentPlayer==="Giannis_ID"){
    try {
        showImg(img_Giannis);
    }
    catch(error){
        console.error(error);
    };
}
else if(currentPlayer==="Nikola_ID"){
    try{
        showImg(img_Nikola);
    }
    catch(error){
        console.error(error);
    }    
    }
else if(currentPlayer==="Lebron_ID"){
    try{
        showImg(img_Lebron);    
    }
    catch(error){
        console.error(error);
    }
}
else if(currentPlayer==="Steph_ID"){
    try{
        showImg(img_Steph);
    }
    catch(error){
        console.error(error);
    }
}

