//var $ = function (id) {
 //   return document.getElementById (id);
//}

    let game = ['ELEPHANTS', 'TIGERS', 'RACOONS', 'WALABEES', 'CROCODILE', 'JELLYFISH']
    let choice = Math.floor(Math.random()*6) ;
    let answer = game[choice];
    let myLength = answer.length ;
    let display = [myLength];
    let win = myLength;
    let letters = answer.split('');
    let attempsLeft = 10;
    let output = "";
    let userLetter = "";
     

let setup = function()
{
    for (var i= 0; i < answer.length; i++)
    {
        display[i] = "_ ";
        output = output + display[i];
    }
    document.getElementById("h3").innerHTML = output;
    output = "";
}

let submit = function()
{
    var letter = document.getElementById("letter").value;

    if (letter.length > 0) {
        for (var i=0; i < game.length; i++) {
            answerArray[i] = '_';
        }
    }
    //output = '';
    //userLetter= $('letter').value;
   // $('letter').value = '';

    for (var c= 0; c < answer.length; c++)
    {
        //alert(letters[c]);
        if(userLetter.toUpperCase() == letters[c])
        {
            display[c] = userLetter.toUpperCase();
            
        }
        output = output + display[c] + ' ';
    }
    document.getElementById('h3').innerHTML = output;
    output='';
    attempsLeft--;
    
    if (win < 1)
    {
        document.getElementById('winCount').innerHTML = "YOU WINN!";

    }
    else if (attempsLeft < 1)
    {
        document.getElementById('lossCount').innerHTML = "YOU LOSSE!!";

    }
    else 
    {
        document.getElementById('guessesRemaining').innerHTML = 'You Have ' + attempsLeft + ' Guesses Left';
        	
    }
}




window.onload = function()
{
    setup();
    submit().onclick = submit;
    //$('submit').onclick = submit;
}
