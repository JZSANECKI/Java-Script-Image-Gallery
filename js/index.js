const pictures = ['http://serwer2223309.home.pl/cicho_chat/img/thumb/dom/IMG8269.jpg','http://serwer2223309.home.pl/cicho_chat/img/thumb/dom/IMG_5907.jpg', 'http://serwer2223309.home.pl/cicho_chat/img/thumb/dom/IMG_1620.jpg','http://serwer2223309.home.pl/cicho_chat/img/thumb/dom/IMG_1883.JPG', 'http://serwer2223309.home.pl/cicho_chat/img/thumb/dom/IMG_5631.jpg','http://serwer2223309.home.pl/cicho_chat/img/thumb/rozne/261a9017-f384-4cc5-9393-7738fdc7df52.JPG','http://serwer2223309.home.pl/cicho_chat/img/thumb/rozne/IMG_5606.jpg','http://serwer2223309.home.pl/cicho_chat/img/thumb/rozne/IMG_5741.jpg','http://serwer2223309.home.pl/cicho_chat/img/thumb/rozne/IMG_5946.jpg','http://serwer2223309.home.pl/cicho_chat/img/thumb/rozne/IMG_5970.jpg','']


const row = document.querySelector('#gallery')    

function makeImg(x){
    div=document.createElement('div')
    row.appendChild(div)
    document.querySelectorAll('div')
    div.classList.add('col-md-3','col-sm-4','test2','gal')
    div.setAttribute('style',`background-image: url(${x});`)  
    div.innerHTML=` <a href="${x}"><div class="link"></div></a>`
};
pictures.forEach(picture => makeImg(picture))

const gal = document.querySelectorAll('.gal')
console.log(gal)



