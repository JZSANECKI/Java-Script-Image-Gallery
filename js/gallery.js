const pictures = [
  'https://images.unsplash.com/photo-1659523052948-4c82b042a7a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
  'https://images.unsplash.com/photo-1675024277803-b08c95c89883?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
  'https://images.unsplash.com/photo-1674983337206-3805c684d947?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80',
  'https://images.unsplash.com/photo-1675112519495-6d257843203d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
  'https://images.unsplash.com/photo-1674988332888-ddd1d96bc737?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=395&q=80',
  'https://images.unsplash.com/photo-1675414043704-f673ab8f6206?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80',
  'https://images.unsplash.com/photo-1675414043681-5562487a3dd9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=673&q=80',
  'https://images.unsplash.com/photo-1675384201056-a716dcc88843?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
  'https://images.unsplash.com/photo-1675384201055-a5d68374fb7a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
  'https://images.unsplash.com/photo-1675367169773-b5a6d120c185?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
  'https://images.unsplash.com/photo-1675255044451-ad6cd85881a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=436&q=80',
  'https://images.unsplash.com/photo-1675155132562-9edd55028f3b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80',
  'https://picsum.photos/800/600?random=1','https://picsum.photos/800/600?random=2','https://picsum.photos/800/600?random=3','https://picsum.photos/800/600?random=4','https://picsum.photos/1600/1800?random=5','https://picsum.photos/800/600?random=6'
];
const nextBtn=document.querySelector('.next-icon');
const prevBtn=document.querySelector('.prev-icon');
const closeBtn=document.querySelector('.close-icon');
const row = document.querySelector('#gallery');



const makeImg = (x) => {
  let classCheck = e.target.classList
  console.log(classCheck)

  let classCheckVar = classCheck.contains("gal")
 if(classCheckVar!=true){return}
  div = document.createElement('div');
  row.appendChild(div);
  document.querySelectorAll('div');
  div.classList.add('col-md-3', 'col-sm-4', 'gallery', 'gal');
  div.setAttribute('style', `background-image: url(${x});`);

}
pictures.forEach((picture) => makeImg(picture));

const gal = document.querySelectorAll('.gal');
const pop = document.querySelector('.popup-image');

const clickEventGallery = (e) => {
  gal.forEach((galvar) => removeEventListener('click', clickEventGallery));
  console.log(pop.classList);
  pop.classList.add('popup-image-active');

  const img = document.querySelector('img');

  let bgattr = e.target.getAttribute('style');
  if (bgattr !== null){
  let newurl = bgattr.slice(22, -2);
  img.setAttribute('src', newurl);


  
  
  // nawigacja
  let currentTarget = e.target;
  
  nextBtnFn =() => {
    let checkNext = currentTarget.nextSibling



    if(checkNext == null){
      return
      }
    currentTarget=currentTarget.nextSibling
    bgattrAlt = currentTarget.getAttribute('style');
    let nextUrl = bgattrAlt.slice(22, -2);
    img.setAttribute('src', nextUrl);


    }

  prevBtnFn =() => {
    let checkPrev = currentTarget.previousSibling
    if(checkPrev == null){
      return
      }
    currentTarget=currentTarget.previousSibling
    bgattrAlt = currentTarget.getAttribute('style');
    let prevUrl = bgattrAlt.slice(22, -2);
    img.setAttribute('src', prevUrl);

    }


  nextBtn.addEventListener("click", nextBtnFn)
  prevBtn.addEventListener("click", prevBtnFn)
  
  // koniec nawigacji

}

closeBtnFn = () =>{
  pop.classList.remove('popup-image-active');
  // location.reload()
}
closeBtn.addEventListener("click", closeBtnFn)

};

const width = window.innerWidth
console.log(width)
if(width > 576){
gal.forEach((galvar) => addEventListener('click', clickEventGallery));
}



