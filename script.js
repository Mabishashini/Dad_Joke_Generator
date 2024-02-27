const btnEl  =document.getElementById("btn");
const jokeEl =document.getElementById("joke")

const apikey="7ACDBpEmDtSTov3XqKzZFg==bwTTxw4a9RL9GUpw";



const options={
    method:'GET',
    headers:{
        "X-Api-Key":apikey,
    },
};

const apiurl="https://api.api-ninjas.com/v1/dadjokes?limit=1";

async function getjoke(){
    try {
        jokeEl.innerText="Updating...";
        btnEl.disabled=true;
        btnEl.innerText="Loading..."
        const response=await fetch(apiurl,options);
        const data=await response.json();
   
        btnEl.disabled=false;
        btnEl.innerHTML="TELL ME A JOKE";
        jokeEl.innerText=data[0].joke ;
        
    } catch (error) {
        jokeEl.innerText="Oops! An Error Occured.Try again Later!"
        btnEl.disabled=false;
        btnEl.innerHTML="TELL ME A JOKE";
        
    }
    
}

btnEl.addEventListener("click",getjoke);
