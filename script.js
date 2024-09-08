const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

    yesBtn.addEventListener("click", ()=> {
        question.innerHTM = "Aaaaa, heh so u like me den ha HAHA";
        gif.src= "https://tenor.com/view/flowers-gif-10492517158609762937";
        
    });
    
    noBtn.addEventListener("mouseover"), ()=> {
        const noBtnRect = noBtn.getBoundingClientRect();
        const maxX = window.innerWidth - noBtnRect.width;
        const maxY = window.innerHeight - noBtnRect.Height;
        
        const randomX = math.floor(Math.random() * maxX);
        const randomY = math.floor(Math.random() * maxY);
        
        noBtn.style.left = randomX + "px";
        noBtn.style.top = randomY + "px";
    }