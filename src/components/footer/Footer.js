import React from "react";
import "./styles.css";

function Footer() {
  return (
    <div className="footer-body">
      <footer class="section " id="footer">
        <div class="overlay footer-overlay"></div>
        {/* <!--Content --> */}
        <div class="container">
          <div class="row justify-content-start">
            <div class="col-lg-4 col-sm-12">
              <div class="footer-widget">
                {/* <!-- Brand --> */}
                <a href="/" class="footer-brand text-white">
                  Bubos Bank
                </a>
                <p>Managed bv Bubos LTD.</p>
              </div>
            </div>

            <div class="col-lg-3 ml-lg-auto col-sm-12">
              <div class="footer-widget">
                <h3>General</h3>
                {/* <!-- Links --> */}
                <ul class="footer-links ">
                  <li>
                    <a href="#!">Terms and conditions</a>
                  </li>
                  <li>
                    <a href="#!">Privacy policy</a>
                  </li>
                  <li>
                    <a href="#!">Help and support</a>
                  </li>
                  <li>
                    <a href="#!">Frequently Asked Questions</a>
                  </li>
                </ul>
              </div>
            </div>

            <div class="col-lg-2 col-sm-6">
              <div class="footer-widget">
                <h3>About</h3>
                {/* <!-- Links --> */}
                <ul class="footer-links">
                  <li>
                    <a href="/about">About Us</a>
                  </li>
                  <li>
                    <a href="/blog">Blog</a>
                  </li>
                  <li>
                    <a href="project.html">Recent Projects</a>
                  </li>

                  <li>
                    <a href="/contacts">Contact</a>
                  </li>
                </ul>
              </div>
            </div>

            <div class="col-lg-2 col-sm-6">
              <div class="footer-widget">
                <h3>Socials</h3>
                {/* <!-- Links --> */}
                <ul class="list-unstyled footer-links">
                  <li>
                    <a href="https://www.facebook.com/">
                      <i class="fab fa-facebook-f"></i>Facebook
                    </a>
                  </li>
                  <li>
                    <a href="https://www.twitter.com/">
                      <i class="fab fa-twitter"></i>Twitter
                    </a>
                  </li>
                  <li>
                    <a href="https://linkedin.com/">
                      <i class="fab fa-linkedin"></i>linkedin
                    </a>
                  </li>
                  <li>
                    <a href="https://www.youtube.com/">
                      <i class="fab fa-youtube"></i>YouTube
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
