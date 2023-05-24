// on initializing mpesa payment//
const consumerKey = "your_consumer_key";
const consumerSecret = "your_consumer_secret";
const accessToken = "http://api.safaricom.co.ke/oauth...";
const balanceUrl = "your_account_number";
const form = document.getElementById('payment');
const paymentEndpoint = "http://api.safaricom.co.ke/oauth...";


form.addEventListener('submit',function(e){
    e.preventDefault();
    intiatePayment();
 });

 async function intiatePayment(){
    const phoneNumber = document.querySelector('#phonenumber').value;
    const amount = document.querySelector('#amount').value;
    const referenceNumber = Math.floor(math.random()*9000000000) + 1000000000;

    const response = await fetch(paymentEndpoint,{
        method:'POST',
        headers:{
            'Authorization':'Basic'+ btoa(consumerKey + ':' + consumerSecret),
            'Content-Type':'application/json'
        },
        body:JSON.stringify({
            'BusinessShortCode':'YOUR_SHORTCODE',
            'Password':btoa('YOUR_SHORTCODE' + 'YOUR_PASSKEY' + Date.now().toString().slice(0,-3)),
            'Timestamp':Date.now().toString().slice(0,-3),
            'TransactionType':'CustomerPayBillOnline',
            'Amount':amount,
            'PartyA':phoneNumber,
            'partyB':'YOUR_SHORTCODE',
            'PhoneNumber':phoneNumber,
            'CallBackURL':'YOUR_CALLBACKURL',
            'AccountReference':'Daraja Payment',
            'TransactionDesc':'Daraja Payment',
            'Remark':'Daraja Payment',
            'QueueTimeOutURL':'YOUR_TIMEOUT_URL',
            'ResultURL':'YOUR_RESULT_URL',
            'stkPushApp':'YOUR_APP_NAME',
            'stkPushId':referenceNumber.toString(),
        })
    });
    const data = await response.JSON();
   document.write(data);
 }