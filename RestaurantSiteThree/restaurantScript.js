function validateContact() {
    var customerName = document.getElementById("customerName").value;
    var customerEmail = document.getElementById("customerEmail").value;
    var phoneNumber = document.getElementById("phoneNumber").value;
    if (customerName == "")
        {
            alert("Please enter a valid name");
            return false;
        }
    else if (customerEmail == "")
        {
            alert("Please enter a valid email address");
            return false;
        }
    else if (phoneNumber == "")
        {
            alert("Please enter a valid phone number");
            return false;
        }
    else {
        alert("The information you entered is valid.  Thanks for contacting Food For You")
    }
}
