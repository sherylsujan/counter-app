let counterValue = 0
function updateCount(){
document.getElementById('counter-value').innerText=counterValue
}

function increment(){
    counterValue++
    updateCount()

}
function decrement(){
   if (counterValue > 0) 
   counterValue--
    updateCount()

}
function reset(){
    counterValue=0
    updateCount()
}
