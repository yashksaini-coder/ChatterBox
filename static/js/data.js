let myDiv = document.getElementById('error-txt').innerHTML;
let div=document.getElementById('error-txt');
if (myDiv.length == 7) {
    div.style.backgroundColor = '#fff';
    div.style.border='none';
} 
else{
    div.style.backgroundColor = '#ffc6c6';
    div.style.border='1px solid #f5c6cb';
}

function show(){
    let eye=document.getElementById('eye');
    let closeeye=document.getElementById('eye-close');
    let password=document.getElementById('password');
    if(password.type=="password"){
        eye.style.display="none";
        password.style.width="90%";
        closeeye.style.display="inline-block";
        password.type="text";
    }
    else{
        eye.style.display="inline-block";
        closeeye.style.display="none";
        password.type="password";
    }
}
function notshow(){
    let eye=document.getElementById('eye');
    let closeeye=document.getElementById('eye-close');
    let password=document.getElementById('password');
    if(password.type=="text"){
        eye.style.display="inline-block";
        closeeye.style.display="none";
        password.type="password";
    }
    else{
        eye.style.display="none";
        password.style.width="90%";
        closeeye.style.display="inline-block";
        password.type="text";
    }
}