var img_Giannis = document.getElementById("Giannis_ID");
var img_Nikola = document.getElementById("Nikola_ID");
var img_Lebron = document.getElementById("Lebron_ID");
var img_Steph = document.getElementById("Steph_ID");

// get player from storage 
function getImage() {
    // get player from storage 
    storagePlayer = window.localStorage.getItem('userSearchPlayer');

    // player comes from storage as "name" this changes it to just name
    let noQuotations = storagePlayer.replace(/"([^"]+(?="))"/g, '$1')

    // set image to matching name 
    if (noQuotations === "Giannis Antetokounmpo"){
        showImg(img_Giannis);
    } else if(noQuotations==="Nikola Jokic"){
        showImg(img_Nikola);
    } else if(noQuotations==="Lebron James"){
        showImg(img_Lebron);
    } else if(noQuotations==="Stephen Curry"){
        showImg(img_Steph);
    }
}

// array of image names
var imgArray = [img_Giannis, img_Nikola, img_Lebron, img_Steph];

// show images by alternate through the array
function showImg(img) {
    for (i = 0; i < imgArray.length; i++) {
        imgArray[i].style.display = "none";
    }
    img.style.display = "block";
}

// get player from storage right away
getImage()