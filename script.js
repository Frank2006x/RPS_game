function getComputerchoice(){
    let x=Math.floor(Math.random()*3)+1

    if (x===1){
        return 'rock'
    }
    else if (x===2){
        return 'paper'
    }
    else if (x===3){
        return 'scissor'
    }

}
function gethumanchoice(){
    
    let y
    y=parseInt(prompt("Enter the choice"))
    if (y===1){
        return 'rock'

    }
    else if (y===2){
        return 'paper'
    }
    else if (y===3){
        return 'scissor'
    }
}


let Humanscore=0
let Computerscore=0
let n=0
console.log("1-rock")
console.log("2-paper")
console.log("3-rock")

while (n<6){
    const h=gethumanchoice()
    const c=getComputerchoice()
    console.log('me'+h)
    console.log('you'+c)
    if (h==c){
        console.log("it is tie")
    }
    else if (h=='rock'&& c=='scissor'){
        Humanscore++
    }
    else if (h=='scissor'&& c=='paper'){
        Humanscore++
    }
    else if (c=='rock'&& h=='paper'){
        Humanscore++
    }
    else{
        Computerscore++
    }
    n++
    console.log('me:'+Humanscore)
    console.log('you:'+Computerscore)
}