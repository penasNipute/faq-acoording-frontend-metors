console.log("viva1");


const question1 = document.querySelector('#q1')
const answer1 = document.querySelector('#a1')
const question2 = document.querySelector('#q2')
const answer2 = document.querySelector('#a2')
const question3 = document.querySelector('#q3')
const answer3 = document.querySelector('#a3')
const question4 = document.querySelector('#q4')
const answer4 = document.querySelector('#a4')
console.log(question1)

question1.addEventListener('click', (e)=>{
  e.preventDefault();
  if(answer1.classList.contains('inactive'))
  {
    /*
    remove a clase inactive do paragrafo que contem a classe .answer
    & muda o atributo da src da imagem de modo a trovar a imagem do mais(+) para menos(-)

    */
    answer1.classList.remove('inactive')
    question1.children[1].setAttribute('src','assets/images/icon-minus.svg')
  } else{
    /*
    addiciona a classe inactive ao paragrafo
    & muda o atributo da src da imagem de modo a trovar a imagem do menos(-) para mais(+)
    */
    answer1.classList.add('inactive')
    question1.children[1].setAttribute('src','assets/images/icon-plus.svg')
  }
})

question2.addEventListener('click', (e)=>{
  e.preventDefault();
  if(answer2.classList.contains('inactive'))
  {
    /*
    remove a clase inactive do paragrafo que contem a classe .answer
    & muda o atributo da src da imagem de modo a trovar a imagem do mais(+) para menos(-)

    */
    answer2.classList.remove('inactive')
    question2.children[1].setAttribute('src','assets/images/icon-minus.svg')
  } else{
    /*
    addiciona a classe inactive ao paragrafo
    & muda o atributo da src da imagem de modo a trovar a imagem do menos(-) para mais(+)
    */
    answer2.classList.add('inactive')
    question2.children[1].setAttribute('src','assets/images/icon-plus.svg')
  }
})

question3.addEventListener('click', (e)=>{
  e.preventDefault();
  if(answer3.classList.contains('inactive'))
  {
    /*
    remove a clase inactive do paragrafo que contem a classe .answer
    & muda o atributo da src da imagem de modo a trovar a imagem do mais(+) para menos(-)

    */
    answer3.classList.remove('inactive')
    question3.children[1].setAttribute('src','assets/images/icon-minus.svg')
  } else{
    /*
    addiciona a classe inactive ao paragrafo
    & muda o atributo da src da imagem de modo a trovar a imagem do menos(-) para mais(+)
    */
    answer3.classList.add('inactive')
    question3.children[1].setAttribute('src','assets/images/icon-plus.svg')
  }
})

question4.addEventListener('click', (e)=>{
  e.preventDefault();
  if(answer4.classList.contains('inactive'))
  {
    /*
    remove a clase inactive do paragrafo que contem a classe .answer
    & muda o atributo da src da imagem de modo a trovar a imagem do mais(+) para menos(-)

    */
    answer4.classList.remove('inactive')
    question4.children[1].setAttribute('src','assets/images/icon-minus.svg')
  } else{
    /*
    addiciona a classe inactive ao paragrafo
    & muda o atributo da src da imagem de modo a trovar a imagem do menos(-) para mais(+)
    */
    answer4.classList.add('inactive')
    question4.children[1].setAttribute('src','assets/images/icon-plus.svg')
  }
})