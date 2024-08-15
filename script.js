let nav = document.getElementById("nav-bar");
let bar = document.getElementById('bar');
let xmark = document.getElementById('xmark');



let count = 1;

function navBar(item){

    
    if(item=="bar"){
       
        bar.style.display = 'none';
        xmark.style.display = 'flex';
        nav.style.display = 'flex';
        
    }
    else{
        xmark.style.display = "none";
        bar.style.display = 'flex';
        nav.style.display = 'none';
    
    }
    
}


let text = document.getElementById("text");
console.log(text)

const textLoad =  ()=>{
    console.log("working ");
    
    setTimeout(()=>{
        text.textContent = "Developer";
    },0);
    setTimeout(()=>{
        text.textContent = "Learner";
    },4000);

}

textLoad();
setInterval(textLoad,8000);



var images = document.querySelector('.image');
console.log(images)

function hoverContent(content,event){
    console.log("working",event);
    
    event.setAttribute('data-before', content);

}
