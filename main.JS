let pinfoNode = document.querySelector(`#p-info`);
let paintingNode = document.querySelector(`#painting`);
let otvetNode = document.querySelector(`#otvet`);
let paintzoneNode = document.querySelector(`#paint-zone`);
let buttonclearNode = document.querySelector(`#button-clear`);

draw = false

paintzoneNode.addEventListener(`click`, function(){
    if(draw == false){
        draw = true;
    }else{
        draw = false;
    }
});

let num = 0

let dotNode = ``

paintzoneNode.addEventListener(`mousemove`, function(event){
    if(draw == true){
        num++
        let X = event.clientX - 10;
        let Y = event.clientY - 10;

        dotNode = paintzoneNode.innerHTML += `
        <div 
            class="dot" 
            id="dot" 
            style="left: ${X}px; top: ${Y}px"; background-color: >
        </div>
        `

        if(num == 100){
            otvetNode.innerHTML = `это тюремная камера?`
        }else if(num == 300){
            otvetNode.innerHTML = `это конь?`
        }else if(num == 550){
            otvetNode.innerHTML = `это крокодил?`
            paintingNode.classList.add(`borderr`)
        }
    }
}); 

buttonclearNode.addEventListener(`click`,function(){
    num = 0;
    otvetNode.innerHTML = ``;
    paintingNode.classList.remove(`borderr`)
    paintzoneNode.innerHTML = ``
});