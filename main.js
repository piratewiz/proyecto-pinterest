const accessKey = 'CXwB9V2ReMLR5e-eAat1BCdx2KnBUyUl5LtaADxZcE8'
const endPoint = 'https://api.unsplash.com/search/photos'

async function getImages(query) {
  const params = new URLSearchParams({
    query: query,
    per_page: 20,
    client_id: accessKey
  })

  const url = endPoint + '?' + params.toString()

  try {
    const response = await fetch(url)
    const jsonResponse = await response.json()
    const imagesList = jsonResponse.results

    function createImagesApi(imagesList) {
      const app = document.querySelector('#app')
      app.innerHTML = ''

      for (let i = 0; i < imagesList.length; i++) {
        const image = document.createElement('img')
        const divIMG = document.createElement('div')

        if (imagesList[i].height > imagesList[i].width) {
          divIMG.className = 'divIMG'
          image.className = 'everyIMG'
          image.src = imagesList[i].urls.regular

          divIMG.appendChild(image)
          app.appendChild(divIMG)
        }
      }
    }

    createImagesApi(imagesList)
  } catch (error) {
    console.error('Error fetching images:', error)
  }
}

document.addEventListener('DOMContentLoaded', () => {
  contentApp()
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

  inputBar.innerHTML = ''
  inputBar.className = 'input-search'
  inputBar.type = 'text'
  inputBar.placeholder = 'Type any Key and press "Enter"'
  inputBar.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
      getImages(this.value)
    }
  })

  titlePage.textContent = 'Your free banc wallpapers'

  paragraph.textContent =
    'Pinterest gives you the tools to build custom agents and workflows in record time '

  divElement.appendChild(inputBar)
  divElement.appendChild(divBtnContainer)
  divElement.appendChild(titlePage)
  divElement.appendChild(paragraph)
  app.appendChild(divElement)

  const recommendationButtons = ['forest', 'computers', 'ocean']
  recommendationButtons.forEach((recommendation) => {
    const button = document.createElement('button')
    button.className = 'btn-recomend'
    button.textContent = recommendation
    button.addEventListener('click', function () {
      getImages(recommendation)
    })
    divBtnContainer.appendChild(button)
  })

  const resetButton = document.createElement('button')
  resetButton.textContent = 'Reset'
  resetButton.addEventListener('click', function () {
    getImages('')
  })
  divBtnContainer.appendChild(resetButton)
}
