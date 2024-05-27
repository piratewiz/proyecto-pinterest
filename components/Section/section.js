export const createSection = () => {
  return `
  <div class="img-container">
        <button class="info">
          <div class="bgContainer">
            <span>chicken</span>
            <span>chicken</span>
          </div>
          <div class="arrowContainer">
            <svg
              width="25"
              height="25"
              viewBox="0 0 45 38"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M43.7678 20.7678C44.7441 19.7915 44.7441 18.2085 43.7678 17.2322L27.8579 1.32233C26.8816 0.34602 25.2986 0.34602 24.3223 1.32233C23.346 2.29864 23.346 3.88155 24.3223 4.85786L38.4645 19L24.3223 33.1421C23.346 34.1184 23.346 35.7014 24.3223 36.6777C25.2986 37.654 26.8816 37.654 27.8579 36.6777L43.7678 20.7678ZM0 21.5L42 21.5V16.5L0 16.5L0 21.5Z"
                fill="black"
              ></path>
            </svg>
          </div>
        </button>
        <div class="first">
          <img
            src="https://s.pinimg.com/webapp/center-c2550bb2.png"
            alt="chicken-salad"
          />
        </div>
        <div class="second">
          <img
            src="https://s.pinimg.com/webapp/topRight-647cf6f2.png"
            alt="chinese"
          />
        </div>
        <div class="third">
          <img
            src="https://s.pinimg.com/webapp/right-a7fc68f0.png"
            alt="chicken"
          />
        </div>
      </div>
      <div class="presentation">
        <h1>Find an idea</h1>
        <p>
          What do you want to try next? Think of something that interests you,
          like "easy chicken dinner recipe," and see what you discover.
        </p>
        <li><a href="header">Explore</a></li>
      </div>
      `
}

const printSection = () => {
  document.querySelector('section').innerHTML = createSection()
}
printSection()
