const inps = document.querySelector('.btn');

inps.addEventListener('click', function(){
    this.style.transform = "scale(.9)";
    setTimeout(()=>{
        this.style.transform = "none";
        console.log(this);
    }, 100);
})