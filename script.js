let boxcont = document.getElementById('box')
boxcont.style.border= "1px solid black"


let card = document.createElement('div')
card.style.width="200px"
card.style.height="200px"
card.style.backgroundColor="blue"

let h1= document.createElement('h1')
h1.innerText = "new div created by js"
let h2 =document.createElement('h2')
h2.innerText =" new project"


boxcont.appendChild(card)
boxcont.appendChild(h1)
boxcont.appendChild(h2)



// let h = document.getElementsByTagName('h1')



// setInterval(function(){
//     for(let i =0;i<h.length ;i++){
        
//         let r= Math.random()*255
//         let g= Math.random()*255
//         let b = Math.random()*255

//         h[i].style.backgroundColor ="rgb("+r+","+g+","+b+")"
//     }
// }, 100)

// h[0].style.backgroundColor ="pink"
// h[1].style.fontSize ="20px"
// h[2].style.color ="red"
// let h1 = document.getElementById('head1');
// console.log(h1)
// h1.style.color="red"
// h1.style.border="1px solid black"
// h1.style.backgroundColor ="pink"

//  console.log("hello this is our first js session")
//  console.log("hello world")

//  console is an object in js used to 
// point to actual console on browser
