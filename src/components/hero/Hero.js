import React from "react";

function Hero({banner, title, description, cta, ctaLink}) {
  return (
    <div className="hero-body">
      <section class="banner-area py-7">
        <div class="container">
          <div class="row  align-items-center">
            <div class="col-md-12 col-lg-7 text-center text-lg-left">
              <div class="main-banner">
                <h1 class="display-4 mb-4 font-weight-normal">
                  {title}
                </h1>

                <p class="lead mb-4">
                    {description}
                </p>

                <p class="mb-4">
                  <a
                    href={ctaLink}
                    target="_blank"
                    style={{ 
                      borderRadius: "4px",
                      padding: "0.75rem 1.5rem",
                      fontSize: "1rem",
                      fontWeight: "600",
                      textTransform: "uppercase",
                      letterSpacing: "0.1rem",
                      border: "2px solid #21C87A",
                      transition: "all 0.3s ease-in-out",
                      backgroundColor: "#21C87A", borderColor: "#21C87A" }}
                    class="btn btn-primary btn-circled" rel="noreferrer"
                  >
                    {cta}
                  </a>
                </p>
              </div>
            </div>

            <div class="col-lg-5 d-none d-lg-block">
              <div class="banner-img-block">
                <img src={banner} alt="banner-img" class="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
