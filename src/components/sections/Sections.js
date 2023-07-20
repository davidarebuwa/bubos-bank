import React from "react";
import "./styles.css";
import  sectionLogoOne from "../../images/section-alt1.webp";
import  sectionLogoTwo from "../../images/section-2.webp";
import  sectionLogoThree from "../../images/section-3.webp";

function Sections() {
  return (
    <div className="section-body">
      <section class="section" id="process">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-md-8 col-lg-6 text-center">
              <div class="section-heading">
                {/* <!-- Heading --> */}
                <h2 class="section-title">Fiat V Naira</h2>

                {/* <!-- Subheading --> */}
                <p
                >
                  There are several downsides of fiat currency like the
                  Naira but we will focus on a few.
                </p>
              </div>
            </div>
          </div>

          <div class="row justify-content-center">
            <div class="col-lg-4 col-sm-6 col-md-6">
              <div class="process-block">
                <img src={sectionLogoOne} alt="" class="img-fluid" />

                <h3>Inflation</h3>
                <p>
                  One of the biggest disadvantages of fiat currencies is the
                  risk of inflation. Because the value of fiat currencies is not
                  tied to an underlying commodity, governments can print more
                  money at any time, leading to an increase in the money supply
                  and potentially higher prices for goods and services.
                </p>
              </div>
            </div>
            <div class="col-lg-4 col-sm-6 col-md-6">
              <div class="process-block">
                <img src={sectionLogoTwo} alt="" class="img-fluid" />

                <h3>Government policies</h3>
                <p>
                  Governments can manipulate fiat currencies through their
                  monetary an fiscal policies, such as interest rate changes and
                  tax policies. This can lead to economic instability and
                  uncertainty.
                </p>
              </div>
            </div>
            <div class="col-lg-4 col-sm-6 col-md-6">
              <div class="process-block">
                <img src={sectionLogoThree} alt="" class="img-fluid" />

                <h3>International trade imbalances</h3>
                <p>
                  Fiat currencies can also lead to international trade
                  imbalances, as countries can manipulate their currencies to
                  make their exports more competitive or to reduce their
                  imports. This can lead to trade wars and economic conflicts.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Sections;
