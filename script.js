// Scrolling effects for hidden elements
const observer = new IntersectionObserver((entries) => {
  for (const entry of entries) {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    }
  }
});

const hiddenElements = document.querySelectorAll('.hidde');
for (const el of hiddenElements) {
  observer.observe(el);
}

// Scrolling effects for fourth image and moving logos
const observ = new IntersectionObserver((entries) => {
  for (const entry of entries) {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    }
  }
});

const hidden = document.querySelectorAll('.hidx');
for (const els of hidden) {
  observ.observe(els);
}

// Slide show
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  const slides = document.getElementsByClassName("mySlides");
  const dots = document.getElementsByClassName("dot");
  
  if (n > slides.length) {
    slideIndex = 1;
  }    
  if (n < 1) {
    slideIndex = slides.length;
  }
  
  for (const slide of slides) {
    slide.style.display = "none";  
  }
  
  for (const dot of dots) {
    dot.classList.remove("active");
  }
  
  slides[slideIndex - 1].style.display = "block";  
  dots[slideIndex - 1].classList.add("active");
}
