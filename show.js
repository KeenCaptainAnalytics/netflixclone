let sc= document.getElementById('sc1')
let he = document.getElementById('he1')


function abc(){
    he.style.display ="block"
}

function abc2(){
    he.style.display ="none"
}

sc.addEventListener('mouseenter',abc )
sc.addEventListener('mouseleave', abc2)
