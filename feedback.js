function validateForm() {
    var a = document.getElementById("yes").checked;
    var b = document.getElementById("no").checked;
    var c = document.getElementById("yes2").checked;
    var d = document.getElementById("no2").checked;
    var e = document.getElementById("somewhat").checked;
    var f = document.getElementById("yes3").checked;
    var g = document.getElementById("no3").checked;
    var h = document.getElementById("yes4").checked;
    var i = document.getElementById("no4").checked;

    var k = document.getElementById("date").value;
    /*
    if (a =="") {
        if(b ==""){
            alert("Please fill in the first question.");
            return false;
        }
    }else if(c==""){
        if(d == ""){
            alert ("Please fill in the third question.")
            return false;
        }else if(e==""){
            alert ("Please fill in the third question.")
            return false;
        }else{
            return true;
        }
    }*/

    if(a=="" && b==""){
        alert("Please fill in the first question.");
        return false;
    }else if(k==""){
        alert("Please fill in the second question.");
        return false;
    }else if(c=="" && d=="" && e==""){
        alert("Please fill in the third question.");
        return false;
    }else if(f=="" && g==""){
        alert("Please fill in the fourth question.");
        return false;
    }else if(h=="" && i==""){
        alert("Please fill in the fifth question.");
        return false;
    }else{
        alert("We have received your feedback! Have a nice day!");
        return true;
    }
}