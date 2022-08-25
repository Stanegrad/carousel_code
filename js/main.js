// Start writing JavaScript here!

const carousel = document.querySelector('.carousel')
const previousButton = carousel.querySelector('.previous-button')
const nextButton = carousel.querySelector('.next-button')
const dotsContainer = carousel.querySelector('.carousel__dots')

const contents = carousel.querySelector('.carousel__contents')

nextButton.addEventListener('click', e => {
    const currentSlide = contents.querySelector('.is-selected')
    const nextSlide = currentSlide.nextElementSibling
    const destination = getComputedStyle(nextSlide).left
    contents.style.left = '-' + destination
    currentSlide.classList.remove('is-selected')
    nextSlide.classList.add('is-selected')

    previousButton.removeAttribute('hidden')
    if (!nextSlide.nextElementSibling) {        //the statement inside the if is not understandable
        nextButton.setAttribute('hidden', true)
    }

    // Highlight dot
  const currentDot = dotsContainer.querySelector('.is-selected')
  const nextDot = currentDot.nextElementSibling
  currentDot.classList.remove('is-selected')
  nextDot.classList.add('is-selected')
})

previousButton.addEventListener('click', e => {
    const currentSlide = contents.querySelector('.is-selected')
    const previousSlide = currentSlide.previousElementSibling
    const destination = getComputedStyle(previousSlide).left
    
    contents.style.left = '-' + destination
    currentSlide.classList.remove('is-selected')
    previousSlide.classList.add('is-selected')

    nextButton.removeAttribute('hidden')
    if (!previousSlide.previousElementSibling) {
        previousButton.setAttribute('hidden', true)
    }

    // Highlight dot
  const currentDot = dotsContainer.querySelector('.is-selected')
  const previousDot = currentDot.previousElementSibling
  currentDot.classList.remove('is-selected')
  previousDot.classList.add('is-selected')
})

const slides = Array.from(carousel.querySelectorAll('.carousel__slide'))
const dots = Array.from(carousel.querySelectorAll('.carousel__dot'))

dots.forEach(dot => {
    dot.addEventListener('click', e => {
        let clickedDotIndex

        for (let index = 0; index < dots.length; index++) {     // this line is not understandable
          if (dots[index] === dot) {
            clickedDotIndex = index
          }
        }
        
        const slideToshow = slides[clickedDotIndex]
        const destination = getComputedStyle(slideToshow).left
        contents.style.left = '-' + destination

        const currentSlide = contents.querySelector('.is-selected')
        currentSlide.classList.remove('is-selected')
        slideToshow.classList.add('is-selected')

        dots.forEach(d => {
            d.classList.remove('is-selected')
        })
        dot.classList.add('is-selected')

        // Show / hide buttons
    if (clickedDotIndex === 0) {
        previousButton.setAttribute('hidden', true)
        nextButton.removeAttribute('hidden')
      } else if (clickedDotIndex === dots.length - 1) {
        previousButton.removeAttribute('hidden')
        nextButton.setAttribute('hidden', true)
      } else {
        previousButton.removeAttribute('hidden')
        nextButton.removeAttribute('hidden')
      }
    })
})

const slideWidth = slides[0].getBoundingClientRect().width

slides.forEach((slide, index) => {
    slide.style.left = slideWidth * index + 'px'
})


