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
function gethumanchoice(y){
    
    
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

let rock=document.getElementById('1');
let paper=document.getElementById('2');
let scissors=document.getElementById('3');
let text=document.getElementById('comments')
let Human=document.getElementById('human')
let Computer=document.getElementById('computer')

rock.addEventListener('click',()=>
{playround(1)}
)
paper.addEventListener('click',()=>
{playround(2)}
)
scissors.addEventListener('click',()=>
{playround(3)}
)



function playround(y){
    if (Humanscore >= 5 || Computerscore >= 5) {
        return;  
    }
    const h=gethumanchoice(y)
    const c=getComputerchoice()
    console.log('me'+h)
    console.log('you'+c)
    
    console.log(y)
    
    if (h==c){
        console.log("it is tie")
        text.textContent=("It's Tie!!")
    }
    else {
        if (h=='rock'&& c=='scissor'){
            text.textContent=' You WoN Rock beats Scissor'
            Humanscore++
            Human.textContent=`player: ${Humanscore}`
            
        }
        else if (h=='scissor'&& c=='paper'){
            text.textContent=' You WoN Scissor beats paper'
            Humanscore++
            Human.textContent=`player: ${Humanscore}`
        }
        else if (c=='rock'&& h=='paper'){
            text.textContent=' You WoN Rock beats Scissor'
            Humanscore++
            Human.textContent=`player: ${Humanscore}`
        }
        else if (h=='rock'&& c=='paper'){
            text.textContent=' You LosT Paper beats Rock'
            Computerscore++
            Computer.textContent=`player: ${Computerscore}`
        }
        else if (c=='scissor'&& h=='paper'){
            text.textContent=' You LosT Scissor beats paper'
            Computerscore++
            Computer.textContent=`player: ${Computerscore}`
        }
        else if (c=='rock'&& h=='scissor'){
            text.textContent=' You LosT Rock beats Scissor'
            Computerscore++
            Computer.textContent=`player: ${Computerscore}`
        }

        
        }
        if (Humanscore >= 5) {
            text.textContent = 'You WIN the game!!';
        } else if (Computerscore >= 5) {
            text.textContent = 'Computer WINS the game!!';
        }
        

    }
    
    console.log('me:'+Humanscore)
    console.log('you:'+Computerscore)

