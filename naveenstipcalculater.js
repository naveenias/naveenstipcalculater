function calculateTip() {
    let billAmountInputValue = document.getElementById("billAmount").value;
    let percentageTipInputValue = document.getElementById("percentageTip").value;


    if (billAmountInputValue === "") { //Here, if the bill input value is empty, error message will be displayed
        document.getElementById("errorMessage").textContent = errorMessage;
    } else if (percentageTipInputValue === "") { //Here, if the percentage tip input value is empty, error message will be displayed
        document.getElementById("errorMessage").textContent = errorMessage;
    } else {
        document.getElementById("errorMessage").textContent = ""; //Here, if the both input values are not empty, error message will be removed
        let billAmount = parseInt(billAmountInputValue); //getting bill amount and converting to integer
        let percentageTip = parseInt(percentageTipInputValue); //getting tip percentage and converting to integer

        let calculatedTip = (percentageTip / 100) * billAmount; //calculating tip
        let calculatedTotal = billAmount + calculatedTip; //calculating total


        document.getElementById("tipAmount").value = calculatedTip; //assigning CalculatedTip to the input
        document.getElementById("totalAmount").value = calculatedTotal; //assigning total bill amount to the input
    }
}