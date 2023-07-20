import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapPin, faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

import "./styles.css";

function Blocks() {
    return (
      <div className="blocks-body">
        <section id="contact-info">
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-lg-4 col-sm-6 col-md-6">
                <div class="contact-info-block text-center">
                <FontAwesomeIcon icon={faMapPin} />
                  <h4>Address</h4>
                  <p class="lead">153 Williamson Plaza, 09514</p>
                </div>
              </div>
              <div class="col-lg-4 col-sm-6 col-md-6">
                <div class="contact-info-block text-center">
                  <FontAwesomeIcon icon={faEnvelope} />
                  <h4>Email</h4>
                  <p class="lead">supportdb@dthememascot.com</p>
                </div>
              </div>
              <div class="col-lg-4 col-sm-6 col-md-6">
                <div class="contact-info-block text-center">
                  <FontAwesomeIcon icon={faPhone} />
                  <h4>Phone Number</h4>
                  <p class="lead">+23-68017684</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );

}

export default Blocks;