/**
 * Descrizione
Ricreiamo un feed social aggiungendo al layout di base fornito,
 il nostro script JS in cui:
Milestone 1 -
Prendendo come riferimento il layout di esempio presente nell'html,
 stampiamo i post nel nostro feed, (rimuovendo il post di prova dall'html).
Milestone 2 -
Se clicchiamo sul tasto "Mi Piace" cambiamo il colore al testo del
 bottone e incrementiamo il counter dei likes relativo.
Salviamo in un secondo array gli id dei post ai quali abbiamo messo
 il like.

BONUS
1 : Formattare le date in formato italiano (gg/mm/aaaa)
2 : Gestire l'assenza dell'immagine profilo con un elemento di fallback 
che contiene le iniziali dell'utente (es. Luca Formicola > LF).
3 : Al click su un pulsante "Mi Piace" di un post, se abbiamo già 
cliccato dobbiamo decrementare il contatore e cambiare il colore del bottone.
Consigli del giorno:
Ragioniamo come sempre a step.
Prima scriviamo nei commenti la logica in italiano e poi traduciamo in codice.
console.log() è nostro amico.
Quando un pezzo di codice funziona, chiediamoci se possiamo scomporlo 
in funzioni più piccole.
*/



const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];


//Milestone 1 - stampare i post nel feed

//prendo il container nel dom
const divContainer = document.getElementById('container');

//creo un ciclo per scrivere i tag da mettere nel div container
for (let i = 0; i < posts.length; i++) {

const post = posts[i];

//definisco il contenuto da inserire nel container
divContainer.innerHTML += `
<div class="post">
    <div class="post__header">
        <div class="post-meta">                    
            <div class="post-meta__icon">
                <img class="profile-pic" src="${post.author.image}" alt="${post.author.name}">                    
            </div>
            <div class="post-meta__data">
                <div class="post-meta__author">${post.author.name}</div>
                <div class="post-meta__time">${post.created}</div>
            </div>                    
        </div>
    </div>
    <div class="post__text">${post.content}</div>
    <div class="post__image">
        <img src="${post.media}" alt="">
    </div>
    <div class="post__footer">
        <div class="likes js-likes">
            <div class="likes__cta">
                <a class="like-button  js-like-button" href="#/" data-postid="${post.id}">
                    <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                    <span class="like-button__label">Mi Piace</span>
                </a>
            </div>
            <div class="likes__counter">
                Piace a <b id="like-counter-${posts[i].id}" class="js-likes-counter">${post.likes}</b> persone
            </div>
        </div> 
    </div>
</div>`;

};

//Milestone 2 - cambia colore al like // icrementa like counter // salva id dei likes in un array

//creo una nuova array per gli elementi liked
likedList = [];
console.log(likedList);

//inverto la stringa della data


//seleziono tutti i like button dei post
const likeButton = document.querySelectorAll('.like-button');
//seleziono tutti i contatori di like 
const likeCounter = document.querySelectorAll('.likes__counter');



//creo un ciclo per gestire i like di ogni post 
likeButton.forEach( (element, index) => {

  //creo un evento che si attiva al click del pulsante like
    element.addEventListener('click', function() {

        //controllo se il post ha già il like
        //se non ha il like
        if(!likedList.includes(posts[index].id)) {
            //aggiungo la classe per colorare il pulsante
            element.classList.add('like-button--liked');
            
            //dopo aver aggigunto il like pusho il post nel nuovo array
            likedList.push(posts[index].id);
        
            
            //aggiungo il like al contatore
            posts[index].likes++;
            newLike = posts[index].likes;
            likeCounter[index].innerHTML = `Piace a <b id="like-counter-${posts[index].id}" class="js-likes-counter">${newLike}</b> persone`;
    

        } else { //se ha il like
            //rimuovo la classe per colorare il pulsante
            element.classList.remove('like-button--liked');

            //rimuovo il like dal nuovo array
            const indexRemove = likedList.indexOf(posts[index].id);
            likedList.splice(indexRemove, 1);

            //rimuovo il like dal contatore
            posts[index].likes--;
            newLike = posts[index].likes;
            likeCounter[index].innerHTML = `Piace a <b id="like-counter-${posts[index].id}" class="js-likes-counter">${newLike}</b> persone`;
            

        }
        console.log(likedList);
        console.log(newLike);
    });

});
    

