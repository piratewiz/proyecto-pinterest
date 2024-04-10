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
      for (let i = 0; i < imagesList.length; i++) {
        const app = document.querySelector('#app')
        const image = document.createElement('img')
        const divIMG = document.createElement('div')

        divIMG.className = 'divIMG'
        image.className = 'everyIMG'
        image.src = imagesList[i].urls.thumb

        divIMG.appendChild(image)
        app.appendChild(divIMG)
      }
    }

    console.log(createImagesApi(imagesList))
  } catch (error) {
    console.error('Error fetching images:', error)
  }
}

document.addEventListener('DOMContentLoaded', () => {
  getImages('programming')
})
