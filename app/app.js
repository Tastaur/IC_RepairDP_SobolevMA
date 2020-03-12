// Переменные для слайдера в секции Projects
const buttonSlideMin = document.querySelector('#changeArrowLeft');
const buttonSlidePlus = document.querySelector('#changeArrowRight');
const sliderCircle = document.querySelectorAll('.circle_change');
const sliderRow = document.querySelector('.change_arrow_slider');
const sliderText = document.querySelectorAll('.project-container-container-content-detail-content_subtitle');
const linksSlider = document.querySelectorAll('.project-container-navigation__item');
const imgSlider = document.querySelectorAll(`.project_first_image`);
let slide = 0;


// Работа слайдера в секции Projects
let pickCircle = () => {
  if (slide == 0) {
    sliderCircle[0].classList.add('circle_change-active');
    sliderCircle[1].classList.remove('circle_change-active');
    sliderCircle[2].classList.remove('circle_change-active');
    linksSlider[0].classList.add('project-container-navigation__item-active');
    linksSlider[1].classList.remove('project-container-navigation__item-active');
    linksSlider[2].classList.remove('project-container-navigation__item-active');
    imgSlider[0].classList.remove(`project_first_image-hide`);
    imgSlider[1].classList.add(`project_first_image-hide`);
    imgSlider[2].classList.add(`project_first_image-hide`);


    sliderText[0].innerText = (`Rostov-on-Don 
    LCD admiral`);
    sliderText[1].innerText = ('3.5 months');
    sliderText[2].innerText = ('81 m2');
    sliderText[3].innerText = ('Upon request');
    linkLeft()
    cirLeft()
  } else if (slide == -1) {
    sliderCircle[1].classList.add('circle_change-active');
    sliderCircle[0].classList.remove('circle_change-active');
    sliderCircle[2].classList.remove('circle_change-active');
    linksSlider[1].classList.add('project-container-navigation__item-active')
    linksSlider[0].classList.remove('project-container-navigation__item-active');
    linksSlider[2].classList.remove('project-container-navigation__item-active');
    imgSlider[1].classList.remove(`project_first_image-hide`);
    imgSlider[0].classList.add(`project_first_image-hide`);
    imgSlider[2].classList.add(`project_first_image-hide`);

    sliderText[0].innerHTML = (`Sochi Thieves <br><br>`);
    sliderText[1].innerText = ('4 months');
    sliderText[2].innerText = ('105 m2');
    sliderText[3].innerText = ('Upon request');
    linkCenter ();
    cirCenter()
  } else if (slide == -2) {
    sliderCircle[2].classList.add('circle_change-active');
    sliderCircle[1].classList.remove('circle_change-active');
    sliderCircle[0].classList.remove('circle_change-active');
    linksSlider[2].classList.add('project-container-navigation__item-active');
    linksSlider[0].classList.remove('project-container-navigation__item-active');
    linksSlider[1].classList.remove('project-container-navigation__item-active');
    imgSlider[2].classList.remove(`project_first_image-hide`);
    imgSlider[1].classList.add(`project_first_image-hide`);
    imgSlider[0].classList.add(`project_first_image-hide`);

    sliderText[0].innerText = (`Rostov-on-Don Patriotic 
    
    `);
    sliderText[1].innerText = ('3 months');
    sliderText[2].innerText = ('93 m2');
    sliderText[3].innerText = ('Upon request');
    linkRight();
    cirRight();
  } 
}
buttonSlideMin.onclick = prevSlide
function prevSlide () {
    slide += 1
  if (slide > 0) {
    slide = -2
  };
  sliderRow.style.slide = slide ;
  pickCircle ()
}

buttonSlidePlus.onclick = nextSlide
function nextSlide () {
    slide -= 1
  if (slide < -2) {
    slide = 0
  };
  sliderRow.style.slide = slide;
  pickCircle ()
}

// Links
linksSlider[0].onclick = () => {
  prevSlide()
}

linksSlider[2].onclick = () => {
  nextSlide()
}
function linkCenter () {
  linksSlider[0].onclick = () => {
    prevSlide()
  }
  linksSlider[2].onclick = () => {
    nextSlide()
  }
}
function linkLeft () {
  linksSlider[1].onclick = () => {
    nextSlide()
  }
  linksSlider[2].onclick = () => {
    prevSlide()
  }
}
function linkRight () {
  linksSlider[1].onclick = () => {
    prevSlide()
  }
  linksSlider[0].onclick = () => {
    nextSlide()
  }
}


// Circle
function cirCenter () {
  sliderCircle[0].onclick = () => {
    prevSlide()
  }
  sliderCircle[2].onclick = () => {
    nextSlide()
  }
}
function cirLeft () {
  sliderCircle[1].onclick = () => {
    nextSlide()
  }
  sliderCircle[2].onclick = () => {
    prevSlide()
  }
}
function cirRight () {
  sliderCircle[1].onclick = () => {
    prevSlide()
  }
  sliderCircle[0].onclick = () => {
    nextSlide()
  }
}

sliderCircle[0].onclick = () => {
  prevSlide()
}

sliderCircle[2].onclick = () => {
  nextSlide()
}


//mobile

const mobSliderRow = document.querySelector('.mobile_slider_image_container')
let mobImg = 0;
const mobBtnPrev = document.querySelector('.mobile_slider_btn_lft').onclick = () => {
  mobImg += 100
  
  if (mobImg > 0) {
    mobImg = -200
  }
  mobSliderRow.style.left = mobImg + '%'
  mosileSlideText();
}
const mobBtnNext = document.querySelector('.mobile_slider_btn_rght').onclick = () => {
  mobImg -= 100
 
  if (mobImg < -200) {
    mobImg = 0
  }
  mobSliderRow.style.left = mobImg + '%'; 
  mosileSlideText()
}
let mosileSlideText = () => {
  if (mobImg == 0) {
    sliderText[0].innerHTML = (`Rostov-on-Don <br> LCD admiral`);
    sliderText[1].innerText = ('3.5 months');
    sliderText[2].innerText = ('81 m2');
    sliderText[3].innerText = ('Upon request');
  } else if (mobImg == -100) {
    sliderText[0].innerText = (`Sochi Thieves 

    `);
    sliderText[1].innerText = ('4 months');
    sliderText[2].innerText = ('105 m2');
    sliderText[3].innerText = ('Upon request');
  } else if (mobImg == -200) {
sliderText[0].innerText = (`Rostov-on-Don
     Patriotic`);
    sliderText[1].innerText = ('3 months');
    sliderText[2].innerText = ('93 m2');
    sliderText[3].innerText = ('Upon request');
  } 
}