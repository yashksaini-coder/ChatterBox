let chat_options = document.getElementById("selected_option")
let options = document.getElementById("options")
let down_arrow = document.querySelector("div#chat_options p i")

chat_options.addEventListener("click", () => {
    if (chat_options.classList.contains("opened")) {
        options.style.display = "none";
        down_arrow.style.transform = "rotate(0)"
    } else {
        options.style.display = "block";
        down_arrow.style.transform = "rotate(-180deg)"
    }
    chat_options.classList.toggle("opened")
})
let sub=document.getElementById("submit");
sub.addEventListener("click", () => {
    let chats = document.querySelector('.chats');
    chats.scrollTop = chats.scrollHeight;
})
window.addEventListener('load', () => {
    let chats = document.querySelector('.chats');
    chats.scrollTop = chats.scrollHeight;
});