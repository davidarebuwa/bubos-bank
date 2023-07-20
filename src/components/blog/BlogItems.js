import React from "react";

import sectionLogoOne from "../../images/blog.jpg";

import "./styles.css";

function BlogItems(){
    return (
      <div className="blog-items-body">
        <section class="section" id="blog">
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-md-8 col-lg-6 text-center">
                <div class="section-heading">
                  {/* <!-- Heading --> */}
                  <h2 class="section-title">Read our latest news</h2>

                  {/* <!-- Subheading --> */}
                  <p>
                    Our duty towards you is to share our experience we're
                    reaching in our work path with you.
                  </p>
                </div>
              </div>
            </div>

            <div class="row justify-content-center">
              <div class="col-lg-4 col-md-6">
                <div class="blog-box">
                  <div class="blog-img-box">
                    <img
                      src={sectionLogoOne}
                      alt=""
                      class="img-fluid blog-img"
                    />
                  </div>
                  <div class="single-blog">
                    <div class="blog-content">
                      <h6> 10 Jul 2023</h6>
                      <a href="#!">
                        <h3 class="card-title">Bubos Bank is Live</h3>
                      </a>
                      <p>Checkout our website via www.bubosbanking.org</p>
                      <a href="#!" class="read-more">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );

}

export default BlogItems;