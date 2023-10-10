let btn = document.getElementById("mybtn");
let clear = document.getElementById("clearbtn");
let itemName = document.getElementById("itemName");
let items = document.querySelector(".items");
let forms = items.getElementsByTagName("form");


localStorage.setItem(1,"type the new item below");
localStorage.setItem(2,"press the + to add it to list");
localStorage.setItem(3,"<-- click this to tick the current item");


function init(){
    for(let x=1;x<=localStorage.length;x++){
        add(x);
    }
}
init();

function add(x){
    let newDiv = document.createElement("div");
        newDiv.innerHTML = ` 
        <form>
        <div class="item">
          <input type="checkbox" name="checkbox">
          <p contenteditable="true">${localStorage.getItem(x)}</p>
        </div>
        </form>
        `
        items.appendChild(newDiv);
}

let len = localStorage.length + 1;

btn.addEventListener("click",()=>{
    let itemValue = itemName.value;
    if(itemValue != ""){
        localStorage.setItem(len,itemValue);
        add(len);
        len++;
    }
    else{
        alert("enter your task");
    }  
});

clear.addEventListener("click",()=>{
    localStorage.clear();  
    location.reload();
});


// for(let x=0;x<forms.length;x++){
//     let form = forms[x];
//     let checkbox = form.querySelector("input[type='checkbox']");
//     if(!checkbox.checked){
//         console.log("checked");
//     }
// }







