function changethegreeting(){
    const name=document.getElementById('nameinput').value.trim();
    const greet=document.getElementById('greet');
    greet.textContent=name ? `Hello, ${name}` : 'Hello, User';
}
document.getElementById('greetbtn').addEventListener('click', changethegreeting);
const colors=['red', 'blue', 'green', 'yellow'];
colors.forEach(color=>{
    const box=document.getElementById(color);
    box.addEventListener('click', () => {
        box.style.backgroundColor=color;
    });
});
