function valid() {
    let n = document.getElementById("name").value;
    let e = document.getElementById("e").value;
    let p = document.getElementById("p").value;
    let cp = document.getElementById("cp").value;
    
    if (n == "" || e == "" || p == "" || cp == "") {
        alert("All fields must be filled out.");
        return false;
    }
    for (let i = 0; i < n.length; i++) {
        let char = n[i];
        if (!((char >= 'A' && char <= 'Z') || (char >= 'a' && char <= 'z') || char === ' ')) {
            alert("Full name can only contain letters and spaces.");
            return false;
        }
    }
    if(e == "" || e.indexOf("@") == -1 || e.indexOf(".") == -1 || e.indexOf("@") > e.indexOf(".")) {
        alert("Please enter a valid e-mail");
        return false
    }
    if (p.length<8 ){
        alert("Password must be longer than 7")
        return false
    }
    if (p!== cp) {
        alert("Passwords do not match.");
        return false;
    }
    
    alert("Form submitted successfully!");
    return true;
}