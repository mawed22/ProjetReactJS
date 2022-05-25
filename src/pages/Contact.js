import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Contact = () => {
    return (
        <div>

        <Header />
<div>
  <section className="contact">
    <h1 className="heading"> get in touch </h1>
    <div className="icons-container">
      <div className="icons">
        <i className="fas fa-clock" />
        <h3>opening hours :</h3>
        <p>00:07am to 00:06pm</p>
      </div>
      <div className="icons">
        <i className="fas fa-phone" />
        <h3>phone :</h3>
        <p>+221786667676</p>
        <p>+338878877</p>
      </div>
      <div className="icons">
        <i className="fas fa-envelope" />
        <h3> email : </h3>
        <p>example@gmail.com</p>
        <p>gggi@gmail.com</p>
      </div>
      <div className="icons">
        <i className="fas fa-map" />
        <h3>address :</h3>
        <p>Sénégal</p>
      </div>
    </div>
    <div className="row">
      <div className="image">
        <img src="images/contact-img.png" alt />
      </div>
      <form action>
        <h3>send us a message</h3>
        <input type="text" placeholder="name" className="box" />
        <input type="email" placeholder="email" className="box" />
        <input type="number" placeholder="phone" className="box" />
        <textarea name className="box" placeholder="message" id cols={30} rows={10} defaultValue={""} />
        <input type="submit" defaultValue="send message" className="btn" />
      </form>
    </div>
  </section>
  {/* contact section ends */}
  {/* faq section starts  */}
  <section className="faq">
    <h1 className="heading">frequently asked questions</h1>
    <div className="accordion-container">
      <div className="accordion active">
        <div className="accordion-heading">
          <h3>how to contact for help?</h3>
          <i className="fas fa-angle-down" />
        </div>
        <p className="accordion-content">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit consequatur molestias deserunt facere laborum doloremque fuga, quae aut. Recusandae officia quis temporibus! Magnam mollitia nostrum voluptatibus deserunt quidem. Natus, quo.
        </p>
      </div>
      <div className="accordion">
        <div className="accordion-heading">
          <h3>what is the best career in 2022?</h3>
          <i className="fas fa-angle-down" />
        </div>
        <p className="accordion-content">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit consequatur molestias deserunt facere laborum doloremque fuga, quae aut. Recusandae officia quis temporibus! Magnam mollitia nostrum voluptatibus deserunt quidem. Natus, quo.
        </p>
      </div>
      <div className="accordion">
        <div className="accordion-heading">
          <h3>how much fees for web development?</h3>
          <i className="fas fa-angle-down" />
        </div>
        <p className="accordion-content">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit consequatur molestias deserunt facere laborum doloremque fuga, quae aut. Recusandae officia quis temporibus! Magnam mollitia nostrum voluptatibus deserunt quidem. Natus, quo.
        </p>
      </div>
      <div className="accordion">
        <div className="accordion-heading">
          <h3>can I choose my own tutor?</h3>
          <i className="fas fa-angle-down" />
        </div>
        <p className="accordion-content">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit consequatur molestias deserunt facere laborum doloremque fuga, quae aut. Recusandae officia quis temporibus! Magnam mollitia nostrum voluptatibus deserunt quidem. Natus, quo.
        </p>
      </div>
      <div className="accordion">
        <div className="accordion-heading">
          <h3>what payment methods are availabe?</h3>
          <i className="fas fa-angle-down" />
        </div>
        <p className="accordion-content">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit consequatur molestias deserunt facere laborum doloremque fuga, quae aut. Recusandae officia quis temporibus! Magnam mollitia nostrum voluptatibus deserunt quidem. Natus, quo.
        </p>
      </div>
      <div className="accordion">
        <div className="accordion-heading">
          <h3>can I have free trial for a month?</h3>
          <i className="fas fa-angle-down" />
        </div>
        <p className="accordion-content">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit consequatur molestias deserunt facere laborum doloremque fuga, quae aut. Recusandae officia quis temporibus! Magnam mollitia nostrum voluptatibus deserunt quidem. Natus, quo.
        </p>
      </div>
    </div>
  </section>
  {/* faq section ends */}
  {/* logo slider starts  */}
  <section className="logo-container">
    <div className="swiper logo-slider">
      <div className="swiper-wrapper">
        <div className="swiper-slide"> <img src="images/partner-logo-1.png" alt /> </div>
        <div className="swiper-slide"> <img src="images/partner-logo-2.png" alt /> </div>
        <div className="swiper-slide"> <img src="images/partner-logo-3.png" alt /> </div>
        <div className="swiper-slide"> <img src="images/partner-logo-4.png" alt /> </div>
        <div className="swiper-slide"> <img src="images/partner-logo-5.png" alt /> </div>
      </div>
    </div>
  </section>
  {/* logo slider ends */}
</div>

<Footer />
        </div>
    );
};

export default Contact;