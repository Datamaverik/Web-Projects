const form = [...document.querySelector('.form').children];

form.forEach((item, i)=>{
    setTimeout(()=>{
        item.style.opacity=1;
    },i*100);
})
const errorMessage = document.querySelector(".alert-box");
errorMessage.style.opacity=0;
async function login(){
    const email = document.getElementsByClassName(".email");
    const password = document.getElementsByClassName(".password");
    const submitButton = document.getElementsByClassName(".submit-btn");
    
    try{
        const response = await fetch('http://localhost:3000/publiclogin',{
            method: 'POST',
            headers:{
                'Content-Type':'application/json',
            },
            body:JSON.stringify({Email: email,Password:password}),
        });
        const data = await response.json();

        if(response.ok){
            errorMessage.textContent='';
            window.location.href='/index';
        }
        else{
            errorMessage.textContent=data.ErrorMsg || 'Login failed.';
        }
    }
    catch(error){
        console.log("Error during login:",error);
    }
}