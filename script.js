const contribute_chain=document.querySelector(".cont")
const learn_chain=document.querySelector(".learn")
const container=document.querySelector(".container")
var contribute_counter=localStorage.getItem("contribute_count") ||-1
var learn_counter=localStorage.getItem("learn_count") ||-1
var contribute_content=[]
var learn_content=[]
for(let i=0;i<120;i++){
    const day=document.createElement("div")
    day.className="day"
    contribute_chain.appendChild(day)
    const day_clone=day.cloneNode()
    learn_chain.appendChild(day_clone)
    if(i<28){
        day.style.borderTop="1px solid black"
        day_clone.style.borderTop="1px solid black"
    }
    day.style.color="balck"
}
for(let k=0;k<JSON.parse(localStorage.getItem("contribute"))?.length;k++){
    contribute_chain.querySelectorAll("div")[k].innerText="X"
}
for(let y=0;y<JSON.parse(localStorage.getItem("learn"))?.length;y++){
    learn_chain.querySelectorAll("div")[y].innerText="X"
}
contribute_chain.querySelectorAll("div").forEach((day,index)=>{
    day.addEventListener("click",function(e){
        contribute_counter++
        if(index==contribute_counter){
            e.target.innerText="X"
            contribute_content[index]="X"
            localStorage.setItem("contribute",JSON.stringify(contribute_content))
            localStorage.setItem("contribute_count",contribute_counter)
        }
        else{
            contribute_counter--
            return
        }
    })
})
learn_chain.querySelectorAll("div").forEach((day,index)=>{
    day.addEventListener("click",function(e){
        learn_counter++
        if(index==learn_counter){
            e.target.innerText="X"
            learn_content[index]="X"
            localStorage.setItem("learn",JSON.stringify(learn_content))
            localStorage.setItem("learn_count",learn_counter)
        }
        else{
            learn_counter--
            return
        }
    })
})

container.querySelectorAll(".day").forEach(day=>{
    day.addEventListener("mouseenter",function(e){
        e.target.style.color="white"
    })
})
container.querySelectorAll(".day").forEach(day=>{
    day.addEventListener("mouseleave",function(e){
        e.target.style.color="black"
    })
})