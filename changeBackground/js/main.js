const button = document.getElementById('button'); 
const GetColor=()=>{ 

let symboles = "0123456789ABCDEF"; 
let color= "#"; 
  for(let i=0; i<6 ; i++){
    color +=  symboles[Math.floor(Math.random()*16)]
  } 
  return color; 
} ; 
//console.log(GetColor());  
   //make function to change the style of body by function   
const BackGroundColor =()=> { 
    document.body.style.backgroundColor=GetColor();  


}; 
button.addEventListener("click",BackGroundColor); 

// function change background color when the page loaded 
window.onload=()=>{ 

BackGroundColor(); 

}