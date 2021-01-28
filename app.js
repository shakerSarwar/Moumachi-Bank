
//login button Event Handler
const loginBtn = document.getElementById("login");
loginBtn.addEventListener("click",function() {
 const loginArea = document.getElementById("login-area");
    loginArea.style.display ="none";

const tranArea = document.getElementById("transaction-area");
 tranArea.style.display ="block";
});

//deposit button event handler

const depositBtn = document.getElementById("addDeposit");
depositBtn.addEventListener("click",function() {
    const depositAmount = document.getElementById("depositAmount").value;
    const depositNumber = parseFloat(depositAmount);

    const currentDeposit = document.getElementById("current-deposit").innerText;
    const currentDepositNumber = parseFloat(currentDeposit);
    const totalDeposit = depositNumber + currentDepositNumber;

    document.getElementById("current-deposit").innerText = totalDeposit;
    const currentBalance = document.getElementById("currentBalance").innerText;
    const currentBalanceNumber = parseFloat(currentBalance);
    const totalBalance = depositNumber + currentBalanceNumber;
    document.getElementById("currentBalance").innerText = totalBalance;

    document.getElementById("depositAmount").value = "";
});

// withdraw button event handler
const withdrawBtn = document.getElementById("addWithdraw");
withdrawBtn.addEventListener("click",function() {
    const withAmount= document.getElementById("withdrawAmount").value;
    const withNumber = parseFloat(withAmount);

    const curWithdraw = document.getElementById("current-withdraw").innerText;
    const curWithdrawNumber = parseFloat(curWithdraw);
    const totalWithdraw = withNumber + curWithdrawNumber;
    document.getElementById("current-withdraw").innerText = totalWithdraw;

    const newBalance =totalBalance - totalWithdraw;
    document.getElementById("currentBalance").innerText = newBalance;

});