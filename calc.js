const buttons = document.querySelectorAll('button');
buttonArray = Array.from(buttons);

buttonArray.forEach((item) => {
    item.addEventListener('click', (e) => {
       console.log(e.target.innerHTML) 
    })
})

console.log(buttonArray)