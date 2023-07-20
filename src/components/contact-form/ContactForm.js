import React from "react";

import "./styles.css";

function ContactForm() {
  return (
    <div className="contact-form-body ">
      <section class="section" id="contact">
        <div class="container">
          <div className="row justify-content-center">
            <div className="col-md-10 col-lg-8">
              <h5>Leave a Message</h5>
              <h2 class="section-title mb-2 ">
                Tell us about <span class="font-weight-normal">yourself</span>
              </h2>

              <p class="mb-5 ">
                Whether you have questions or you would just like to say hello,
                contact us.
              </p>
            </div>
          </div>

          <div class="row justify-content-center">
            <div class="col-lg-6">
              <div class="row">
                <div class="col-12">
                  <div
                    class="alert alert-success contact__msg"
                    style={{ display: "none" }}
                    role="alert"
                  >
                    Your message was sent successfully.
                  </div>
                </div>
              </div>

              <form class="contact_form" action="mail.php">
                <div class="row">
                  <div class="col-sm-6 mb-6">
                    <div class="form-group mt-2">
                      <label class="h6 small d-block text-uppercase">
                        Your name
                        <span class="text-danger">*</span>
                      </label>

                      <div class="input-group">
                        <input
                          class="form-control"
                          name="name"
                          id="name"
                          required=""
                          placeholder="John Doe"
                          type="text"
                        />
                      </div>
                    </div>
                  </div>

                  <div class="col-sm-6 mb-6">
                    <div class="form-group mt-2">
                      <label class="h6 small d-block text-uppercase">
                        Your email address
                        <span class="text-danger">*</span>
                      </label>

                      <div class="input-group ">
                        <input
                          class="form-control"
                          name="email"
                          id="email"
                          required=""
                          placeholder="john@gmail.com"
                          type="email"
                        />
                      </div>
                    </div>
                  </div>

                  <div class="w-100"></div>

                  <div class="col-sm-6 mb-6">
                    <div class="form-group mt-2">
                      <label class="h6 small d-block text-uppercase">
                        Subject
                        <span class="text-danger">*</span>
                      </label>

                      <div class="input-group">
                        <input
                          class="form-control"
                          name="subject"
                          id="subject"
                          required=""
                          placeholder="New Subject"
                          type="text"
                        />
                      </div>
                    </div>
                  </div>

                  <div class="col-sm-6 mb-6">
                    <div class="form-group mt-2">
                      <label class="h6 small d-block text-uppercase">
                        Your Phone Number
                        <span class="text-danger">*</span>
                      </label>

                      <div class="input-group ">
                        <input
                          class="form-control"
                          id="phone"
                          name="phone"
                          required=""
                          placeholder="1-800-643-4500"
                          type="text"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div class="form-group mt-2 mb-5">
                  <label class="h6 small d-block text-uppercase">
                    How can we help you?
                    <span class="text-danger">*</span>
                  </label>

                  <div class="input-group">
                    <textarea
                      class="form-control"
                      rows="4"
                      name="message"
                      id="message"
                      required=""
                      placeholder="Hi there, I would like to ..."
                    ></textarea>
                  </div>
                </div>

                <div class="">
                  <input
                    name="submit"
                    type="submit"
                    class="btn btn-primary btn-circled"
                    value="Send Message"
                    style={{
                      borderRadius: "4px",
                      padding: "0.75rem 1.5rem",
                      fontSize: "1rem",
                      fontWeight: "600",
                      textTransform: "uppercase",
                      letterSpacing: "0.1rem",
                      border: "2px solid #21C87A",
                      transition: "all 0.3s ease-in-out",
                      backgroundColor: "#21C87A",
                      borderColor: "#21C87A",
                    }}
                  />
                  <p class="small pt-3">
                    We'll get back to you in 1-2 business days.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ContactForm;
