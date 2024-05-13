const accessKey = 'CXwB9V2ReMLR5e-eAat1BCdx2KnBUyUl5LtaADxZcE8'
const endPoint = 'https://api.unsplash.com/search/photos'

async function getImages(query) {
  const params = new URLSearchParams({
    query: query,
    per_page: 25,
    client_id: accessKey
  })

  const url = endPoint + '?' + params.toString()

  try {
    const response = await fetch(url)
    const jsonResponse = await response.json()
    const imagesList = jsonResponse.results

    const imagesContainer = document.querySelector('.images-container')
    imagesContainer.innerHTML = ''

    imagesList.forEach((imageData) => {
      const { height, width, urls } = imageData
      if (height > width) {
        const image = document.createElement('img')
        const divIMG = document.createElement('div')
        const contentImages = document.createElement('div')
        contentImages.value = imageData
        divIMG.className = 'divIMG'
        image.className = 'everyIMG'
        image.src = urls.regular
        divIMG.appendChild(image)
        contentImages.appendChild(divIMG)
        imagesContainer.appendChild(contentImages)
      }
    })

    if (imagesList.length === 0) {
      createRecommendationButtons()
      showRecommendedButtons()
      hideTitleAndParagraph()
      showErrorMessage()
    } else {
      hideTitleAndParagraph()
      showRecommendedButtons()
    }
  } catch (error) {
    console.error('Error fetching images:', error)
    showRecommendedButtons()
  }
}

document.addEventListener('DOMContentLoaded', () => {
  contentApp()
  createRecommendationButtons()
})

const contentApp = () => {
  const app = document.querySelector('#app')
  const divBtnContainer = document.createElement('div')
  const divElement = document.createElement('div')
  const inputBar = document.createElement('input')
  const titlePage = document.createElement('h1')
  const paragraph = document.createElement('p')

  divElement.className = 'div-element'

  divBtnContainer.className = 'button-container'
  divBtnContainer.style.display = 'none'

  inputBar.value = ''
  inputBar.className = 'input-search'
  inputBar.type = 'text'
  inputBar.placeholder = 'Type any Key and press "Enter"'
  inputBar.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
      getImages(this.value)
      inputBar.value = ''
    }
  })

  titlePage.textContent = 'Explore the Visual Universe'

  paragraph.className = 'paragraph'
  paragraph.textContent =
    'Welcome to ImageHub, your go-to source for high-quality stock photos, illustrations, and vectors.'

  divElement.appendChild(inputBar)
  divElement.appendChild(divBtnContainer)
  divElement.appendChild(titlePage)
  divElement.appendChild(paragraph)
  app.appendChild(divElement)

  const imagesContainer = document.createElement('div')
  imagesContainer.className = 'images-container'
  app.appendChild(imagesContainer)
}

function createRecommendationButtons() {
  const divBtnContainer = document.querySelector('.button-container')

  const recommendationButtons = ['crocodile', 'greece', 'ocean']
  divBtnContainer.innerHTML = ''
  recommendationButtons.forEach((recommendation) => {
    const button = document.createElement('button')
    button.className = 'btn-recomend'
    button.textContent = recommendation
    button.addEventListener('click', function () {
      getImages(recommendation)
      hideErrorMessage()
    })
    divBtnContainer.appendChild(button)
  })

  const resetButton = document.createElement('button')
  resetButton.textContent = 'Reset'
  resetButton.id = 'resetButton'
  resetButton.addEventListener('click', function () {
    getImages('')
    showTitleAndParagraph()
    hideErrorMessage()
  })
  divBtnContainer.appendChild(resetButton)
}

function showRecommendedButtons() {
  const divBtnContainer = document.querySelector('.button-container')
  divBtnContainer.style.display = ''
}

function hideTitleAndParagraph() {
  const titlePage = document.querySelector('h1')
  const paragraph = document.querySelector('p')
  titlePage.style.display = 'none'
  paragraph.style.display = 'none'
}

function showTitleAndParagraph() {
  const titlePage = document.querySelector('h1')
  const paragraph = document.querySelector('p')
  titlePage.style.display = 'block'
  paragraph.style.display = 'block'
}

function showErrorMessage() {
  const app = document.querySelector('#app')
  const message = document.createElement('h1')
  message.textContent = 'No results found'
  message.className = 'error-message'
  message.style.display = 'block'

  app.appendChild(message)
}

function hideErrorMessage() {
  const errorMessage = document.querySelector('.error-message')
  errorMessage.style.display = 'none'
}

var toggle = document.getElementById('container')
var body = document.querySelector('body')
var links = document.querySelectorAll('a')
var spans = document.querySelectorAll('span')

toggle.onclick = function () {
  this.classList.toggle('bi-moon')
  if (this.classList.toggle('bi-brightness-high-fill')) {
    body.style.background = '#30253d'
    body.style.color = 'white'
    body.style.transition = '2s'
    links.forEach(function (link) {
      link.style.color = 'whitesmoke'
    })
  } else {
    body.style.background = 'white'
    body.style.color = 'black'
    body.style.transition = '2s'
    links.forEach(function (link) {
      link.style.color = '#30253d'
    })
    spans.forEach(function (span) {
      span.style.color = '#929bd3'
    })
  }
}
