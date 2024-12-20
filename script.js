let h2=document.getElementById('h2');
let button=document.querySelector('button');
let input1=document.getElementById('input-1');
let input2=document.getElementById('input-2');
let para1=document.getElementById('para-1');
let para2=document.getElementById('para-2');



let func=()=>{
  let random1=(Math.floor(Math.random()*6+1));
  let img1=document.getElementById('img-1');
  img1.setAttribute('src',`./dice${random1}.png`)

  let random2=(Math.floor(Math.random()*6+1));
  let img2=document.getElementById('img-2');
  img2.setAttribute('src',`./dice${random2}.png`)
    
   if(random1>random2){
      
     h2.innerText=input1.value+ " " +"WIN";
     h2.className="text-center mt-5";
     para1.innerText="Total Win :";
     para1.className="text-center text-white"

   }else if(random2>random1){
    
     h2.innerText=input2.value+ " " + "WIN";
     h2.className="text-center mt-5";
    }else{
      h2.innerText="Draw"
   }
  
}
button.addEventListener("click",func)
