export const createFooter = () => {
  return `
      <div class="zone1">
        <div class="name">
          <div class="footer-logo">
            <img
              width="80"
              height="80"
              src="https://img.icons8.com/plasticine/100/pinterest--v1.png"
              alt="pinterest--v1"
            />
            <h2>Pinterest 3.0</h2>
          </div>
        </div>
        <section class="link-footer">
          <div class="links">
            <span>LINKS</span>
            <ul>
              <li><a href="#">Features</a></li>
              <li><a href="#">Pricing</a></li>
              <li><a href="#">Docs</a></li>
              <li><a href="#">Blog</a></li>
            </ul>
          </div>
          <div class="solutions">
            <span>SOLUTIONS</span>
            <ul>
              <li><a href="#">Slack Bot</a></li>
              <li><a href="#">Discord Bot</a></li>
              <li><a href="#">Command</a></li>
              <li><a href="#">Onsite Chat</a></li>
            </ul>
          </div>
          <div class="legal">
            <span>LEGAL</span>
            <ul>
              <li><a href="#">Terms of Service</a></li>
              <li><a href="#">Privacy Policy</a></li>
            </ul>
          </div>
        </section>
      </div>
      <div class="zone2">
        <div>
          <p>Copyright © 2024 Pinterest. All rights reserved.</p>
        </div>
        <div>
          <img
            width="48"
            height="48"
            src="https://img.icons8.com/badges/48/instagram-new.png"
            alt="instagram-new"
          />
          <img
            width="48"
            height="48"
            src="https://img.icons8.com/badges/48/twitterx.png"
            alt="twitterx"
          />
          <img
            width="48"
            height="48"
            src="https://img.icons8.com/badges/48/linkedin.png"
            alt="linkedin"
          />
        </div>
      </div>
    `
}

const printFooter = () => {
  document.querySelector('footer').innerHTML = createFooter()
}
printFooter()
