var info = document.getElementById('presonal');
var objective = document.getElementById('objective');
var education = document.getElementById('education');
var skills = document.getElementById('skills');

///
var btninfo = document.getElementById('btnpresonal');
var btnobjct = document.getElementById('btnobj');
var btneducat = document.getElementById('btneduc');
var btnnskills = document.getElementById('btnskills');




function infoPage() {
    info.style.transform = "translateX(0%)";
    objective.style.transform = "translateX(100%)";
    education.style.transform = "translateX(100%)";
    skills.style.transform = "translateX(100%)";
//
    btninfo.style.color="#ff7845";
     btnobjct.style.color="#000";
     btneducat.style.color="#000";
     btnnskills.style.color="#000";
//
     info.style.transitionDelay = ".5s";
     objective.style.transitionDelay = "0s";
     education.style.transitionDelay = "0s";
     skills.style.transitionDelay = "0s";

}


function objectPage() {


    info.style.transform = "translateX(100%)";
    objective.style.transform = "translateX(0%)";
    education.style.transform = "translateX(100%)";
    skills.style.transform = "translateX(100%)";

    //
    btninfo.style.color="#000";
    btnobjct.style.color="#ff7845";
    btneducat.style.color="#000";
    btnnskills.style.color="#000";
    //
    info.style.transitionDelay = "0s";
    objective.style.transitionDelay = ".5s";
    education.style.transitionDelay = "0s";
    skills.style.transitionDelay = "0s";

}
function educatPage() {


    info.style.transform = "translateX(100%)";
    objective.style.transform = "translateX(100%)";
    education.style.transform = "translateX(0%)";
    skills.style.transform = "translateX(100%)";

    //
    btninfo.style.color="#000";
    btnobjct.style.color="#000";
    btneducat.style.color="#ff7845";
    btnnskills.style.color="#000";
    //
    info.style.transitionDelay = "0s";
    objective.style.transitionDelay = "0s";
    education.style.transitionDelay = "0.5s";
    skills.style.transitionDelay = "0s";

}

function skillPage() {
    
    info.style.transform = "translateX(100%)";
    objective.style.transform = "translateX(100%)";
    education.style.transform = "translateX(100%)";
    skills.style.transform = "translateX(0%)";

    //
    btninfo.style.color="#000";
    btnobjct.style.color="#000";
    btneducat.style.color="#000";
    btnnskills.style.color="#ff7845";
    //
    info.style.transitionDelay = ".0s";
    objective.style.transitionDelay = "0s";
    education.style.transitionDelay = "0s";
    skills.style.transitionDelay = ".5s";
}



























