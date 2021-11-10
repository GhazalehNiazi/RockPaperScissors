
const app = document.querySelector('.app');
const user = document.querySelector('.user');
const check = document.querySelector('.check');

let random = Math.trunc(Math.random()*3+1)

//rock 1 ,paper 2 ,scissor 3
if(random === 1){app.textContent = "rock"
}else if(random === 2){app.textContent = "paper"
}else if(random === 3){app.textContent = "scissor"}

check.addEventListener('click', function(){
    if(!user.value){
        return;
    }else if(user.value === "rock" && random===2 
    || user.value === "rock" && random===3 
    || user.value === "paper"  && random=== 1
    || user.value === "scissor"  && random=== 2){
        console.log("bordi");
    }else if(
    user.value === "rock"  && random=== 2
    || user.value === "paper"  && random=== 3
    || user.value === "scissor"  && random=== 1
    ){console.log("bakhti")}
    else{
        console.log("mosavi shod")
    }
})
