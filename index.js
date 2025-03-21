function verif() {
    let email = document.getElementById("e").value;
    if(email == "" || email.indexOf("@") == -1 || email.indexOf(".") == -1 || email.indexOf("@") > email.indexOf(".")) {
        alert("Please enter a valid e-mail");
        return false
    }
    let pass = document.getElementById("p").value;
    if (pass.length == 0 || pass.length < 8 || pass[0] < "A" || pass[0] > "Z") {
        alert("Please enter a valid password");
        return false;
    }
    return true;
 }

