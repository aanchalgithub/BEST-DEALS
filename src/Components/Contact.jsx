import React from "react";

export default function Contact() {
  return (
    <>
      {/* <!-- breadcrumb-section --> */}
      <div class="breadcrumb-section breadcrumb-bg">
        <div class="container">
          <div class="row">
            <div class="col-lg-8 offset-lg-2 text-center">
              <div class="breadcrumb-text">
                <p>Get 24/7 Support</p>
                <h1>Contact us</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- end breadcrumb section --> */}

      <div class="contact-from-section my-5">
        <div class="container">
          <div class="row">
            <div class="col-lg-7 mb-5 mb-lg-0">
              <div class="form-title">
                <h2>Have you any question?</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Pariatur, ratione! Laboriosam est, assumenda. Perferendis, quo
                  alias quaerat aliquid. Corporis ipsum minus voluptate? Dolore,
                  esse natus!
                </p>
              </div>
              <div id="form_status"></div>
              <div class="contact-form">
                <form
                  type="POST"
                  id="fruitkha-contact"
                  onSubmit="return valid_datas( this );"
                >
                  <p>
                    <input
                      type="text"
                      placeholder="Name"
                      name="name"
                      id="name"
                    />
                    <input
                      type="email"
                      placeholder="Email"
                      name="email"
                      id="email"
                    />
                  </p>
                  <p>
                    <input
                      type="tel"
                      placeholder="Phone"
                      name="phone"
                      id="phone"
                    />
                    <input
                      type="text"
                      placeholder="Subject"
                      name="subject"
                      id="subject"
                    />
                  </p>
                  <p>
                    <textarea
                      name="message"
                      id="message"
                      cols="30"
                      rows="10"
                      placeholder="Message"
                    ></textarea>
                  </p>
                  <input type="hidden" name="token" value="FsWga4&@f6aw" />
                  <p>
                    <input type="submit" value="Submit" />
                  </p>
                </form>
              </div>
            </div>
            <div class="col-lg-5">
              <div class="contact-form-wrap">
                <div class="contact-form-box">
                  <h4>
                    <i class="fas fa-map"></i> Shop Address
                  </h4>
                  <p>
                    H-221 <br /> ibyteinfomatics <br /> noida <br /> UP. <br /> India
                  </p>
                </div>
                <div class="contact-form-box">
                  <h4>
                    <i class="far fa-clock"></i> Shop Hours
                  </h4>
                  <p>
                    MON - FRIDAY: 8 to 9 PM <br /> SAT - SUN: 10 to 8 PM
                  </p>
                </div>
                <div class="contact-form-box">
                  <h4>
                    <i class="fas fa-address-book"></i> Contact
                  </h4>
                  <p>
                    <i className="fa fa-phone"></i> <a href="tel:9760382953"> +91 9760382953 </a> <br /> <a href="mailto:vermaaanchal546@gmail.com"><i className="fa fa-envelope"></i> vermaaanchal546@gmail.com</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- end contact form --> */}

      {/* <!-- find our location --> */}
      <div class="find-location blue-bg">
        <div class="container">
          <div class="row">
            <div class="col-lg-12 text-center">
              <p>
                {" "}
                <i class="fas fa-map-marker-alt"></i> Find Our Location
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- end find our location --> */}

      {/* <!-- google map section --> */}
      <div class="embed-responsive embed-responsive-21by9">
        <div class="mapouter">
          <div class="gmap_canvas">
            <iframe
              width="100%"
              height="500px"
              id="gmap_canvas"
              src="https://maps.google.com/maps?q=ibyte%20infomatics%20infomatics&t=&z=13&ie=UTF8&iwloc=&output=embed"
              frameBorder="0"
              scrolling="no"
              marginHeight="0"
              marginWidth="0"
            ></iframe>
          </div>
        </div>
      </div>
      {/* <!-- end google map section --> */}
    </>
  );
}
