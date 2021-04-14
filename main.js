function calculateTip() {
    let billAmt = document.querySelector(".billAmount").value;
    let service = document.getElementById('serviceSelector').value;
    let numOfPeople = document.querySelector(".peopleAmt").value;

    //Check for input
    if (billAmt === " " || service == 0) {
        alert("Please enter some values");
        return;
    }

    //Check number of people condition
    if (numOfPeople === " " || numOfPeople <= 1) {
        numOfPeople = 1;
        document.getElementById("each").style.display = "none";
    } else {
        document.getElementById('each').style.display = "block";
    }

    //Calculation
    let total = (billAmt * service) / numOfPeople;
    total = Math.round(total * 100) / 100;

    //Allows only two decimals places
    total = total.toFixed(2);

    //Make visible
    document.getElementById("totalTip").style.display = "block";
    document.getElementById("tip").innerHTML = total;
}

// Make invisible at page load
document.getElementById("totalTip").style.display = "none";
document.getElementById("each").style.display = "none";

// Listens for button click
document.getElementById('calculate').addEventListener("click", function () {
    calculateTip();
});