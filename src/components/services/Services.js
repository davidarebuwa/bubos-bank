import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartLine, faMaximize, faEye, faArrowsLeftRight, faGear } from "@fortawesome/free-solid-svg-icons";
import "./styles.css";

function Services() {
  return (
    <div className="services-body">
      <section class="section" id="services-2">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-md-8 col-lg-6 text-center">
              <div class="section-heading">
                {/* <!-- Heading --> */}
                <h2 class="section-title mt-4 mb-2 text-white">Meet Ruba</h2>

                {/* <!-- Subheading --> */}
                <p class="mb-5 text-white">
                  Ruba has emerged as an alternative to fiat currencies and
                  offer several potential advantages over traditional
                  currencies, particularly in addressing some of the
                  disadvantages associated with fiat currencies.
                </p>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-lg-4 col-sm-6 col-md-6 mb-30">
              <div class="web-service-block">
                <i>
                  <FontAwesomeIcon icon={faChartLine} />
                </i>
                <h3>Inflation</h3>
                <p>
                  Ruba has a limited supply that is predetermined by our
                  blockchain algorithms, which means Ruba is not subject to
                  inflation caused by governments printing more currency.
                </p>
              </div>
            </div>
            <div class="col-lg-4 col-sm-6 col-md-6 mb-30">
              <div class="web-service-block">
                <i>
                  <FontAwesomeIcon icon={faMaximize} />
                </i>
                <h3>Decentralization</h3>
                <p>
                  Unlike fiat currencies. Ruba is decentralized and are not
                  controlled by any single entity. This reduces the risk of
                  government manipulation or policy changes that can lead to
                  economic instabilitv.
                </p>
              </div>
            </div>
            <div class="col-lg-4 col-sm-6 col-md-6 mb-30">
              <div class="web-service-block">
                <i>
                  <FontAwesomeIcon icon={faEye} />
                </i>
                <h3>Transparency</h3>
                <p>
                  The blockchain technology that underlies most cryptocurrencies
                  provides a high level of transparency and security, making it
                  difficult to counterfeit or manipulate the currency.
                </p>
              </div>
            </div>

            <div class="col-lg-4 col-sm-6 col-md-6 ">
              <div class="web-service-block">
                <i>
                  <FontAwesomeIcon icon={faArrowsLeftRight} />
                </i>
                <h3>Borderless transactions</h3>
                <p>
                  Ruba facilitates borderless transactions. making international
                  trade and commerce more accessible and efficient.
                </p>
              </div>
            </div>
            <div class="col-lg-4 col-sm-6 col-md-6 ">
              <div class="web-service-block">
                <i>
                  <FontAwesomeIcon icon={faGear} />
                </i>
                <h3>User control</h3>
                <p>
                  Ruba gives users greater control over their funds. as they are
                  stored in a digital wallet that is controlled by the user,
                  rather than a centralized institution. This reduces the risk
                  of bank failures or government seizures.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;
