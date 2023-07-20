import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers, faArrowsSpin, faMoneyBills } from "@fortawesome/free-solid-svg-icons";

function Stats() {
  return (
    <div className="stats-body">
      <section class="section" id="pricing">
        {/* <!-- Content --> */}
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-md-8 col-lg-6 text-center">
              <div class="section-heading">
                {/* <!-- Heading --> */}
                <h2 class="section-title mt-4 ">
                  Join a community of millions
                </h2>

                {/* <!-- Subheading --> */}
                <p>
                  Ruba has emerged as an alternative to fiat currencies and
                  offer several potential advantages over traditional
                  currencies, particularly in addressing some of the
                  disadvantages associated with fiat currencies.
                </p>
              </div>
            </div>
          </div>

          <div class="row justify-content-center mb-4">
            <div class="col-lg-4 col-sm-6 col-md-6">
              <div class="pricing-box">
                <i class="fa fa-users">
                  <FontAwesomeIcon icon={faUsers} />
                </i>
                <div class="price-block">
                  <h2>1.4M+</h2>
                  <span>Active Accounts</span>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-sm-6 col-md-6">
              <div class="pricing-box">
                <i class="fa fa-users">
                  <FontAwesomeIcon icon={faArrowsSpin} />
                </i>
                <h2>12.9M</h2>
                <span>Ruba Circulating</span>
              </div>
            </div>
            <div class="col-lg-4 col-sm-8 col-md-6">
              <div class="pricing-box ">
                <i class="fa fa-users">
                  <FontAwesomeIcon icon={faMoneyBills} />
                </i>
                <div class="price-block">
                  <h2>$12</h2>
                  <span>Average Ruba Price</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Stats;
