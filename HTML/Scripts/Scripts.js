/* function for selecting CV language */
function onClick() {
    if (document.getElementById("Suomi").checked) {
        document.getElementById("ECV").style.display = "none";
        document.getElementById("SCV").style.display = "none";
        document.getElementById("FCV").style.display = "block";
    } else if(document.getElementById("Svenska").checked){
        document.getElementById("SCV").style.display = "block";
        document.getElementById("FCV").style.display = "none";
        document.getElementById("ECV").style.display = "none";
    }else{
        document.getElementById("ECV").style.display = "block";
        document.getElementById("FCV").style.display = "none";
        document.getElementById("SCV").style.display = "none";
     
    }
}


