export const createHeader = () => {
  return `
      <nav id="navigator">
        <img
          width="80"
          height="80"
          src="https://img.icons8.com/plasticine/100/pinterest--v1.png"
          alt="pinterest--v1"
        />
        <ul>
          <li><a href="#footer">Features</a></li>
          <li><a href="#footer">About Us</a></li>
          <li><a href="#footer">Docs</a></li>
          <li><a href="#footer">Blog</a></li>
        </ul>
      </nav>
      <div class="switch-content">
        <div class="login-header">
          <ul>
            <li><a href="#">Login </a></li>
            <li><a href="#">Sign Up</a></li>
          </ul>
        </div>
        <div id="container" class="bi-moon">
        <div id="moon">🌙</div>
        <div id="sun" style="display: none;">☀️</div>
        </div>
      </div>
  `
}

const printHeader = () => {
  document.querySelector('header').innerHTML = createHeader()
}

printHeader()
