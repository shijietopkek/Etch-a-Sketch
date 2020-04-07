const container = document.querySelector("div[class='container']");
function addGrid(n){
    container.style.setProperty('grid-template-columns', `repeat(${n},1fr)`);
    container.style.setProperty('grid-template-rows', `repeat(${n},1fr)`);
    for(let i=0;i<n;i++){
        for(let j=0;j<n;j++){
            var block = document.createElement('div');
            block.classList.add('block');
            container.appendChild(block);



        }
    }
}

function getHeight(element){
    return getComputedStyle(element).getPropertyValue('height');
}
function setWidth(element){
    const height = getHeight(container)
    element.style.setProperty('width', `${height}`);

}

function hoverCommand(){
    let blocks = Array.from(document.querySelectorAll('.block'));
    blocks.forEach((block) => {block.addEventListener('mouseover', onHover)});
}

function onHover(e){
    e.target.classList.add("hoverblock");
}

function removeHover(element){
    if (!element.classList.contains('hoverblock')) return;
    element.classList.remove('hoverblock');
}

function clearGrid(){
    let blocks = Array.from(document.querySelectorAll('.block'));
    blocks.forEach((block)=>{block.classList.remove('hoverblock')});
}

function clickButton(){
    

    const n = prompt('Please input number of rows/cols: ');
    if(!parseInt(n)){
        alert("Please enter a number!")
    }else if (parseInt(n)>128){
        alert("Number is too large!")
    }else if (parseInt(n)<2){
        alert("Number is too small!")
    }else{
        let blocks = document.getElementsByClassName('block');
        while(blocks.length > 0){
        blocks[0].parentNode.removeChild(blocks[0]);
        blocks[0].remove();
        
        }
        addGrid(n);
        hoverCommand()
    }
    
}

function resetGrid(){
    const blocks = Array.from(document.getElementsByClassName('block'));
    blocks.forEach(block => removeHover(block));

}


//main
setWidth(container);
addGrid(16);
hoverCommand()

const buttonContainer=document.querySelector("div[class='button-container']");
setWidth(buttonContainer);

let button1 = document.createElement('button');
button1.textContent='Set New Grid';
button1.classList.add('button');

let button2 = document.createElement('button');
button2.textContent='Reset Grid';
button2.classList.add('button','button2');


buttonContainer.appendChild(button1);
buttonContainer.appendChild(button2);
button1.addEventListener('click', clickButton);
button2.addEventListener('click', resetGrid);


