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
