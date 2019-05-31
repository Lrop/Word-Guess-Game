    let game = ['elephants', 'tigers', 'racoons', 'walabees', 'crocodile', 'jellyfish']
    let choice = Math.floor(Math.random()*6) ;
    let answer = game[choice];
    let myLength = answer.length ;
    let display = [myLength];
    let win = myLength;
    let letters = answer.split('');
    let attempsLeft = 16;
    let output = "";
    let userLetter = "";
    console.log(attempsLeft);
     

const setup = function()
{
    for (let i= 0; i < answer.length; i++)
    {
        display[i] = "_ ";
        output = output + display[i];
        
    }
    document.getElementById("h3").innerHTML = output;
    output = "";
    console.log({attempsLeft});
    document.getElementById('guessesRemaining').innerHTML = 'You Have ' + '16' + ' Guesses Left';
}

document.addEventListener('keypress', event => {
    console.log(event.key);
    
}); 

function doFunction() {
 
    output = '';
    userLetter= $('#letter')[0].value;
    console.log(   $('#letter')[0]   )
    $('letter').value = '';
    console.log(userLetter);

    for (let i= 0; i < answer.length; i++)
    {
        //alert(letters[i]);
        if (userLetter == letters[i])
        {
            display[i] = userLetter;
            
        }
        output = output + display[i] + ' ';
    }
    document.getElementById('h3').innerHTML = output;
    output=' ';
    attempsLeft--;
    
    if (userLetter == output)
    {
        document.getElementById('winCount').innerHTML =  "YOU WINN!";

    }
    
    
    document.getElementById('guessesRemaining').innerHTML = 'You Have ' + attempsLeft + ' Guesses Left';
    

    if (attempsLeft === 0)
    {
        document.getElementById('lossCount').innerHTML = "NOT EVEN CLOSE!!!";
        
        

    }

    
}








window.onload = function()
{
    setup();
    doFunction();
    
}
