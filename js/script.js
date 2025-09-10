let pointSpind =document.getElementById("coins")
let point= parseInt(pointSpind.innerText)
document.getElementById("call-all-national").addEventListener("click", function(){
   
    if(point <= 0){
        alert("your coins is low ")
        return
    }
 alert("📞 Calling National Emergency call ...999")
if(point <0 ) point=0;
    point -=20; 
    pointSpind.innerText=point;
      addHistory("National Emergency Call", "999");
})
// second 2
document.getElementById("ponice-national").addEventListener("click", function(){
       
    if(point <= 0){
        alert("your coins is low ")
        return
    }
 alert("📞 Calling Police Helpline Number ...999")
if(point <0 ) point=0;
    point -=20; 
    pointSpind.innerText=point;
       addHistory("Calling Police Helpline Number", "999");
})

// third 3
document.getElementById("call-fire-srvice").addEventListener("click", function(){
       
    if(point <= 0){
        alert("your coins is low ")
        return;
    }
 alert("📞 Calling Fire Service Number ...999")


if(point <0 ) point=0;
    point -=20; 
    pointSpind.innerText=point;
    addHistory("Calling Fire Service Number", "999");

})
// fifth 5
document.getElementById("woman-child").addEventListener("click", function(){
       
    if(point <= 0){
        alert("your coins is low ")
        return;
    }
 alert("📞 Calling woman-child Number ...109")


if(point <0 ) point=0;
    point -=20; 
    pointSpind.innerText=point;
    addHistory("Calling woman-child Number ", "109");

})
// forth 4
document.getElementById("call-ambulance").addEventListener("click", function(){
       
    if(point <= 0){
        alert("your coins is low ")
        return;
    }
 alert("📞 Calling Ambulance Number ...1994-9999")


if(point <0 ) point=0;
    point -=20; 
    pointSpind.innerText=point;
     addHistory("Calling  Ambulance Number ", "1994-9999");

})

// six
document.getElementById("Anti-Corruption").addEventListener("click", function(){
       
    if(point <= 0){
        alert("your coins is low ")
        return;
    }
 alert("📞 Calling Anti-Corruption Number ...106")


if(point <0 ) point=0;
    point -=20; 
    pointSpind.innerText=point;
 addHistory("Calling  Anti-Corruption Number ", "106");
})
// seven
document.getElementById("Electricty-Outage").addEventListener("click", function(){
       
    if(point <= 0){
        alert("your coins is low ")
        return;
    }
 alert("📞 Calling Electricty Outage Number ...16216")


if(point <0 ) point=0;
    point -=20; 
    pointSpind.innerText=point;
     addHistory("Calling Electricty Outage Number ", "16216");

})
// eight
document.getElementById("Brac-Helpline").addEventListener("click", function(){
       
    if(point <= 0){
        alert("your coins is low ")
        return;
    }
 alert("📞 Calling Brac-Helpline Number ...16445")


if(point <0 ) point=0;
    point -=20; 
    pointSpind.innerText=point;
  addHistory("Calling  Brac-Helpline Number  ", "16445");
})
// nine
document.getElementById("Bangladesh-Railway").addEventListener("click", function(){
       
    if(point <= 0){
        alert("your coins is low ")
        return;
    }
 alert("📞 Calling Bangladesh-Railway Helpline Number ...163")


if(point <0 ) point=0;
    point -=20; 
    pointSpind.innerText=point;
    addHistory("Calling  Bangladesh-Railway Helpline Number  ", "163");

})


// calling alert sections end 

let heartSpind=document.getElementById("copy-button")
let heartu=parseInt(heartSpind.innerText);

document.getElementById("copy-1").addEventListener("click",function(){
    heartu +=1;
    heartSpind.innerText=heartu;
})
document.getElementById("copy-2").addEventListener("click",function(){
    heartu +=1;
    heartSpind.innerText=heartu;
})
document.getElementById("copy-3").addEventListener("click",function(){
    heartu +=1;
    heartSpind.innerText=heartu;
})
document.getElementById("copy-4").addEventListener("click",function(){
    heartu +=1;
    heartSpind.innerText=heartu;
})
document.getElementById("copy-5").addEventListener("click",function(){
    heartu +=1;
    heartSpind.innerText=heartu;
})
document.getElementById("copy-6").addEventListener("click",function(){
    heartu +=1;
    heartSpind.innerText=heartu;
})
document.getElementById("copy-7").addEventListener("click",function(){
    heartu +=1;
    heartSpind.innerText=heartu;
})
document.getElementById("copy-8").addEventListener("click",function(){
    heartu +=1;
    heartSpind.innerText=heartu;
})
document.getElementById("copy-9").addEventListener("click",function(){
    heartu +=1;
    heartSpind.innerText=heartu;
})

// heart bit section 

let copyBit=document.getElementById("heartbit")
let copy=parseInt(copyBit.innerText);


document.getElementById("heart-copy-1").addEventListener("click",function(){
    copy +=1;
    copyBit.innerText=copy;
})
document.getElementById("heart-copy-2").addEventListener("click",function(){
    copy +=1;
    copyBit.innerText=copy;
})
document.getElementById("heart-copy-3").addEventListener("click",function(){
    copy +=1;
    copyBit.innerText=copy;
})
document.getElementById("heart-copy-4").addEventListener("click",function(){
    copy +=1;
    copyBit.innerText=copy;
})
document.getElementById("heart-copy-5").addEventListener("click",function(){
    copy +=1;
    copyBit.innerText=copy;
})
document.getElementById("heart-copy-6").addEventListener("click",function(){
    copy +=1;
    copyBit.innerText=copy;
})
document.getElementById("heart-copy-7").addEventListener("click",function(){
    copy +=1;
    copyBit.innerText=copy;
})
document.getElementById("heart-copy-8").addEventListener("click",function(){
    copy +=1;
    copyBit.innerText=copy;
})
document.getElementById("heart-copy-9").addEventListener("click",function(){
    copy +=1;
    copyBit.innerText=copy;
})



// history section starts

let historyList=document.getElementById("history-list")

function addHistory(serviceName , number){
    let now= new Date();
    let time=now.toLocaleTimeString([],{
        hour:'2-digit',
        minute:'2-digit',
        second:'2-digit',
    })
let div= document.createElement("div");
div.className="p-3 bg-white shadow-md my-4 rounded-xl text-sm"
div.innerHTML=`
<div class="font-semibold text-gray-800 ">📞 ${serviceName} (${number})</div>
        <div class="text-gray-500 text-xs">🕒 ${time}</div>
`
historyList.prepend(div)

document.getElementById("clear-history").addEventListener("click",function(){
    historyList.innerText="";
})
}