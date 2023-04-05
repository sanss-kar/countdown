let endDate= "7 april 2023 10:00 PM";

// alert("hi")
document.getElementById("end-Date").innerText = endDate;
const input = document.querySelectorAll("input");

function clock()
{
    const end = new Date(endDate);
    const now = new Date();
    const diff = (end - now)/1000;
    console.log(end);
    //convert into days
    input[0].value = (Math.floor (diff/ 3600 /24));
    // convert into houer
    input[1].value = (Math.floor (diff / 3600)%24);
    // covert into mintues
    input[2].value = (Math.floor (diff / 60)% 60);
    // convert into sec
    input[3].value = (Math.floor (diff) % 60);
    
}
clock();


setInterval ( 
    ()=>{
        clock();
    },
    1000
)