const adviceBtn=document.getElementById('advice-btn');
const adviceText=document.getElementById('advice-text');
const adviceId=document.getElementById('advice-id');

async function fetchAdvice(){
    try {
        const response=await fetch('https://api.adviceslip.com/advice');
        const data=await response.json();

        adviceText.textContent=`${data.slip.advice}`;
        adviceId.textContent=data.slip.id

        
    } catch (error) {
        adviceText.textContent="Sorry we couldn't fetch advice right now try again later!";
        console.log(error)
        
    }
}

adviceBtn.addEventListener('click',fetchAdvice)