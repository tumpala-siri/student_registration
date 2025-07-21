btn=document.getElementById("sub")
let ul=document.getElementById("res")

btn.onclick=function(){
    
    nam=document.getElementById("name").value
    age=document.getElementById("age").value
    cour=document.getElementById("cour").value 
    let li=document.createElement("li")
    li.textContent=`Name : ${nam} , Age : ${age} , course : ${cour}`
    ul.appendChild(li)
    document.getElementById("sec2").style.display="block"

}
