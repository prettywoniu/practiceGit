function countdown(num){
    let counter = num;
    
    const interval = setInterval(function() {
        console.log(counter);
        counter -= 1;

        if (counter <= 0) {
            clearInterval(interval);
            console.log("DONE!");
        }
    }, 1000);      
} 

function randomGame() {
    let counter = 0;
    let num;

    const interval = setInterval(function (){
        num = Math.random();
        counter += 1;
        console.log(counter, num);  

        if (num > 0.75) {
            clearInterval(interval);
            console.log(counter);
        }
    }, 1000); 
}

countdown(5);

randomGame();