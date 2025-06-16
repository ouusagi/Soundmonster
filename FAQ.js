const Question = document.querySelectorAll(".Question");

Question.forEach(q =>{
    q.addEventListener("click",()=>{
        const FAQ = q.parentElement;
        FAQ.classList.toggle("active")
    });
});