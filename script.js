const computerChoise = document.getElementById('computer-choise')
const yourChoise = document.getElementById('your-choise')
const result = document.getElementById('result')
const possible = document.querySelectorAll('button')

let userChoise
let compChoice
let resulty

possible.forEach(possibles => possibles.addEventListener('click', (e) => {
    userChoise = e.target.id
    yourChoise.innerHTML = userChoise

    generateR()
    judge()
    
}))
function generateR(){
    const ran = Math.floor(Math.random() * 3) +1
    // console.log(ran)

    if (ran===1) {
        compChoice = "paper"
    }
    if (ran===2) {
        compChoice = "ston"
    }
    if (ran===3) {
        compChoice = "scissor"
    }

    computerChoise.innerHTML=compChoice
}

function judge(){
    if (compChoice===userChoise) {
        resulty = "it's draw"
    }
    if (compChoice=== "paper" && userChoise==="ston") {
        resulty = "you lose"
    }
    if (compChoice=== "paper" && userChoise==="scissor") {
        resulty = "you win"
    }
    if (compChoice=== "ston" && userChoise==="scissor") {
        resulty = "you lose"
    }
    if (compChoice=== "ston" && userChoise==="paper") {
        resulty = "you lose"
    }
    if (compChoice=== "scissor" && userChoise==="paper") {
        resulty = "you win"
    }
    if (compChoice=== "scissor" && userChoise==="ston") {
        resulty = "you lose"
    }

    result.innerHTML=resulty
}

// console.log(3>4);

// var b = 60
// if (70>=b) {
//     // var b = 60
//     console.log("pass")
// } else {
//     console.log("fail")
    
// }
  
                         // scope
// let x = 10;
// function outer(){
//     let y = 20;
//     function inner(){
//         let z = 40;
//         console.log(x,y,z)
//     }
//     inner()

// }
// outer()

                     // closure

// function outer() {
//     let counter = 0
//     function inner() {
//         counter ++
     
//         console.log(counter)
//     }
//     return inner
    
// }
// let man =outer()
// man()
// man()
// man()

                 // currying

// function sum(a,s,d) {
//     return a + s +d 
// }                
// console.log(sum(1,2,30))


// function obj (name){
//     sum()
// console.log(`hello my name is ${name}`)
// }
// obj('hafiz')


// const pwrson ={
//     name:"jone",
//     myname:function(){
//         console.log(`my name is ${this.name} `)

//     }
// }
// pwrson.myname()

// function myname(){
//     console.log(`my f name is ${this.name} `)

// }
// myname.call(pwrson)