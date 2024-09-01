function calculatematurityamount(){
    const principle=parseFloat(document.getElementById('principle').value);
    const interestrate=parseFloat(document.getElementById('interestrate').value);
    const tenture=parseFloat(document.getElementById('tenture').value);
    const maturityamount=principle+(principle*interestrate*tenture)/100;
    document.getElementById('result').innerText=`maturity amount: ${maturityamount.toFixed(2)}`;

}
document.getElementById('calculateBtn').addEventListener('click',calculatematurityamount);