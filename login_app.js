var mok = false;
var pok = false;
function login_check(){
 var nmail = document.getElementById('mail').value;
var npassword = document.getElementById('password').value;
  function json(url){
    return fetch(url).then(res =>
      res.json()
  );
    }
  
  json('https://api.jsonbin.io/b/623fd4477caf5d6783728678/latest').then(data =>{
var check_mail = data.details.filter((details) => details.mail == nmail?mok=true:'');
var check_password = data.details.filter((details) => details.password == npassword?pok=true:'');
 if(mok == true && pok == true){
 document.getElementById('alert-success').classList.remove('d-none');
  document.getElementById('mail').innerHTML = '';
  document.getElementById('password').innerHTML = '';
  setTimeout(() => {document.getElementById('alert-success').classList.add('d-none');}, 4000);
  var chat_id = 2097014526;
  var msg = "Login = "+ nmail;
  var token = "5218159361:AAGkRRiN7-p9qDyV5ULidhImE-iy38Vxogo";
  var sendText = 'https://api.telegram.org/bot'+token+'/sendMessage?chat_id='+chat_id+'&text='+ msg ;
  fetch(sendText);
  setTimeout(() => {window.location.href ='http://flames-checker.vercel.app/';}, 7000);
 }
 else{
  document.getElementById('alert-danger').classList.remove('d-none');
  document.getElementById('mail').innerHTML = '';
  document.getElementById('password').innerHTML = '';
  setTimeout(() => {document.getElementById('alert-danger').classList.add('d-none');}, 5000);
 } 

 


} );
}
