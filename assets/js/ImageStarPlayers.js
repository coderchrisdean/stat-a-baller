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
        //relevant player's short profile text:
        document.getElementById("BIO").innerHTML = "Giannis Sina Ugo Antetokounmpo is a Greek-Nigerian professional basketball player for the Milwaukee Bucks of the National Basketball Association. Antetokounmpo's country of origin, in addition to his size, speed, strength, and ball-handling skills have earned him the nickname Greek Freak.\n Born and raised in Athens to Nigerian parents, Antetokounmpo began playing basketball for the youth teams of Filathlitikos in Athens. In 2011, he began playing for the club's senior team before entering the 2013 NBA draft, where he was selected 15th overall by the Bucks. In 2016–17 he led the Bucks in all five major statistical categories and became the first player in NBA history to finish a regular season in the top 20 in all five statistics of total points, rebounds, assists, steals, and blocks.[2] He received the Most Improved Player award in 2017. Antetokounmpo has received six All-Star selections, including being selected as an All-Star captain in 2019 and 2020, as he led the Eastern Conference in voting in these two years...For more information- refer to ";
           
    } else if(noQuotations==="Nikola Jokic"){
        showImg(img_Nikola);

        document.getElementById("BIO").innerHTML = "Nikola Jokić is a Serbian professional basketball player for the Denver Nuggets of the National Basketball Association who plays the center position. A four-time NBA All-Star, he has been named to the All-NBA Team on four occasions, and won the NBA Most Valuable Player Award for the 2020–21 and 2021–22 seasons. He represents the Serbian national team.\nNicknamed the Joker,[3] Jokić was selected by the Nuggets in the second round of the 2014 NBA draft. He was voted to the NBA All-Rookie First Team in 2016. In the 2018–19 NBA season, while leading the Nuggets to the Western Conference Semifinals, he received his first All-Star and All-NBA First Team selections. In the following season, he once again received All-Star and All-NBA honors, while leading his team to the Western Conference Finals. Jokić ranks among the top 10 on the all-time list of the NBA players with the most triple-doubles (regular season and playoffs), where he is the leading European player and center, and he holds the record for fastest triple-double (achieved in 14 minutes and 33 seconds).[4][5] He also won a silver medal at the 2016 Summer Olympics...For more information- refer to ";
    
    } else if(noQuotations==="Lebron James"){
        showImg(img_Lebron);

        document.getElementById("BIO").innerHTML = "LeBron Raymone James Sr. is an American professional basketball player for the Los Angeles Lakers of the National Basketball Association. Nicknamed King James, he is widely considered one of the greatest players ever and is often compared to Michael Jordan in debates over the greatest basketball player of all time.\nJames has won four NBA championships, four NBA MVP awards, four NBA Finals MVP awards, three All-Star MVP awards, and two Olympic gold medals. James has scored the most points in the playoffs, the most career points (playoffs and regular seasons combined),[1] and the second most regular seasons points, and has the seventh most career assists. He has been selected an NBA All-Star 18 times, to the All-NBA Team a record 18 times,[b] and to the NBA All-Defensive First Team five times.[4] He has competed in 10 NBA Finals, the third most all time, including eight consecutively between 2011 and 2018 (first four with Miami, second four with Cleveland).[5] In 2021, James was selected to the NBA 75th Anniversary Team,[6] and in 2022 became the first and only player in NBA history to accumulate over 10,000 career points, rebounds, and assists...For more information- refer to ";
     
    } else if(noQuotations==="Stephen Curry"){
        showImg(img_Steph);

        document.getElementById("BIO").innerHTML = "Wardell Stephen Curry II (/ˈstɛfən/ STEF-ən; born March 14, 1988)[1] is an American professional basketball player for the Golden State Warriors of the National Basketball Association (NBA). Widely regarded as one of the greatest basketball players of all time, and as the greatest shooter in NBA history,[2] Curry is credited with revolutionizing the sport by inspiring teams and players to take more three-point shots.[3][4][5] An eight-time NBA All-Star and eight-time All-NBA selection, including four times on the first team, he has been named the NBA Most Valuable Player (MVP) twice, has won four NBA championships, and received an NBA Finals MVP Award and an NBA All-Star Game MVP Award...For more information- refer to ";
    
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
getImage();

