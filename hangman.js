buttons=document.querySelector('.buttons');
nameelement=document.querySelector('.name');
consumed='';

zz='abcdefghijklmnopqrstuvwxyz';
db=[
'mission impossible','cars','a beautiful mind','american psycho','antman and the wasp','home alone','avengers','bad teacher',
'black panther','black swan','borat','bridesmaids','catch me if you can','deadpool','don jon','ex machina','finding nemo','finding dory','get out',
'gone girl','harold and kumar','hotel transylvania','how to train your dragon','incredibles','inside out','john wick','jojo rabbit','jumanji','lucky number slevin','neighbours',
'mystic river','ready player one','oceans eleven','predestination','prisoners'
];
chances=6;
lives=document.querySelector('.lives');
index=Math.floor(Math.random()*(db.length-1));
movie=db[index];
let guess=[];
s='';

for(i=0;i<movie.length;i++)
guess[i]=movie[i]!=' '?'_':' ';

for(i=0;i<guess.length;i++)
s+=guess[i];
nameelement.innerHTML=`<p class="display-4">${s}</p>`;
for(i=0;i<26;i++){
    buttons.innerHTML+=`  <button class="btn btn-primary">${zz[i]}</button>  `
    if((i+1)%6==0){
        buttons.innerHTML+="<br><br>";
    }
}
lives.innerHTML=`Lives left: ${chances}`;

function hangman(letter){
    if(movie.includes(letter)){
        for(i=0;i<movie.length;i++){
            if(movie[i]==letter)
            guess[i]=letter;
        }

        s='';
        for(i=0;i<guess.length;i++)
        s+=guess[i];

        nameelement.innerHTML=`<p class="display-4">${s}</p>`;
        if(!guess.toString().includes('_')){
        buttons.innerHTML='<h4>You guessed that right!</h4>'
        }
        
    }
    else{
        chances--;
        lives.innerHTML=`Lives left: ${chances}`;
        if(chances==0){
        lives.innerHTML='';
        buttons.innerHTML=`<h4> Game Over! The movie was ${movie}</h4>`;
        nameelement.innerHTML='';
        }
    }
}

buttons.addEventListener('click',e=>{
    if(e.target.tagName=='BUTTON'){
        if(!consumed.includes(e.target.textContent)){
        consumed+=e.target.textContent;
        hangman(e.target.textContent);
        e.target.setAttribute('disabled',true);
    }
}
})