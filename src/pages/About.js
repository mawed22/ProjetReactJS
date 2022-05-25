import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const About = () => {
    return (
        <div>
        <Header />
<div>
  <section className="heading-link">
    <h3>about us</h3>
    <p> <a href="home.html">home</a> / about </p>
  </section>
  {/* about section starts  */}
  <section className="about">
    <div className="image">
      <img src="images/about-img.jpg" alt />
    </div>
    <div className="content">
      <h3 className="about-title">we have best courses for you</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam hic magnam fugit exercitationem neque, quae laboriosam natus. Ut maxime assumenda facere ea quasi accusamus dolores delectus tempora animi, expedita iste.</p>
      <div className="icons-container">
        <div className="icons">
          <img src="images/about-icon-1.png" alt />
          <h3>350+</h3>
          <span>courses</span>
        </div>
        <div className="icons">
          <img src="images/about-icon-2.png" alt />
          <h3>1200+</h3>
          <span>students</span>
        </div>
        <div className="icons">
          <img src="images/about-icon-3.png" alt />
          <h3>10+</h3>
          <span>awards</span>
        </div>
      </div>
    </div>
  </section>
  {/* about section ends */}
  {/* teachers section starts  */}
  <section className="teachers">
    <h1 className="heading">expert teachers</h1>
    <div className="swiper teachers-slider">
      <div className="swiper-wrapper">
        <div className="swiper-slide slide">
          <div className="image">
            <img src="images/teacher-1.png" alt />
            <div className="share">
              <a href="#" className="fab fa-facebook-f" />
              <a href="#" className="fab fa-twitter" />
              <a href="#" className="fab fa-instagram" />
              <a href="#" className="fab fa-linkedin" />
            </div>
          </div>
          <div className="content">
            <h3>john deo</h3>
            <span>expert tutor</span>
          </div>
        </div>
        <div className="swiper-slide slide">
          <div className="image">
            <img src="images/teacher-2.png" alt />
            <div className="share">
              <a href="#" className="fab fa-facebook-f" />
              <a href="#" className="fab fa-twitter" />
              <a href="#" className="fab fa-instagram" />
              <a href="#" className="fab fa-linkedin" />
            </div>
          </div>
          <div className="content">
            <h3>john deo</h3>
            <span>expert tutor</span>
          </div>
        </div>
        <div className="swiper-slide slide">
          <div className="image">
            <img src="images/teacher-3.png" alt />
            <div className="share">
              <a href="#" className="fab fa-facebook-f" />
              <a href="#" className="fab fa-twitter" />
              <a href="#" className="fab fa-instagram" />
              <a href="#" className="fab fa-linkedin" />
            </div>
          </div>
          <div className="content">
            <h3>john deo</h3>
            <span>expert tutor</span>
          </div>
        </div>
        <div className="swiper-slide slide">
          <div className="image">
            <img src="images/teacher-4.png" alt />
            <div className="share">
              <a href="#" className="fab fa-facebook-f" />
              <a href="#" className="fab fa-twitter" />
              <a href="#" className="fab fa-instagram" />
              <a href="#" className="fab fa-linkedin" />
            </div>
          </div>
          <div className="content">
            <h3>john deo</h3>
            <span>expert tutor</span>
          </div>
        </div>
        <div className="swiper-slide slide">
          <div className="image">
            <img src="images/teacher-5.png" alt />
            <div className="share">
              <a href="#" className="fab fa-facebook-f" />
              <a href="#" className="fab fa-twitter" />
              <a href="#" className="fab fa-instagram" />
              <a href="#" className="fab fa-linkedin" />
            </div>
          </div>
          <div className="content">
            <h3>john deo</h3>
            <span>expert tutor</span>
          </div>
        </div>
        <div className="swiper-slide slide">
          <div className="image">
            <img src="images/teacher-6.png" alt />
            <div className="share">
              <a href="#" className="fab fa-facebook-f" />
              <a href="#" className="fab fa-twitter" />
              <a href="#" className="fab fa-instagram" />
              <a href="#" className="fab fa-linkedin" />
            </div>
          </div>
          <div className="content">
            <h3>john deo</h3>
            <span>expert tutor</span>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* teachers section ends */}
  {/* students reviews section starts  */}
  <section className="reviews">
    <h1 className="heading"> our students review </h1>
    <div className="swiper reviews-slider">
      <div className="swiper-wrapper">
        <div className="swiper-slide slide">
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim animi atque numquam harum libero nemo, eligendi laboriosam beatae quo iure corrupti, neque rerum possimus non nisi quia! Cumque, tempora sit.</p>
          <img src="images/pic-1.png" alt />
          <h3>john deo</h3>
          <div className="stars">
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star-half-alt" />
          </div>
        </div>
        <div className="swiper-slide slide">
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim animi atque numquam harum libero nemo, eligendi laboriosam beatae quo iure corrupti, neque rerum possimus non nisi quia! Cumque, tempora sit.</p>
          <img src="images/pic-2.png" alt />
          <h3>john deo</h3>
          <div className="stars">
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star-half-alt" />
          </div>
        </div>
        <div className="swiper-slide slide">
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim animi atque numquam harum libero nemo, eligendi laboriosam beatae quo iure corrupti, neque rerum possimus non nisi quia! Cumque, tempora sit.</p>
          <img src="images/pic-3.png" alt />
          <h3>john deo</h3>
          <div className="stars">
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star-half-alt" />
          </div>
        </div>
        <div className="swiper-slide slide">
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim animi atque numquam harum libero nemo, eligendi laboriosam beatae quo iure corrupti, neque rerum possimus non nisi quia! Cumque, tempora sit.</p>
          <img src="images/pic-4.png" alt />
          <h3>john deo</h3>
          <div className="stars">
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star-half-alt" />
          </div>
        </div>
        <div className="swiper-slide slide">
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim animi atque numquam harum libero nemo, eligendi laboriosam beatae quo iure corrupti, neque rerum possimus non nisi quia! Cumque, tempora sit.</p>
          <img src="images/pic-5.png" alt />
          <h3>john deo</h3>
          <div className="stars">
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star-half-alt" />
          </div>
        </div>
        <div className="swiper-slide slide">
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim animi atque numquam harum libero nemo, eligendi laboriosam beatae quo iure corrupti, neque rerum possimus non nisi quia! Cumque, tempora sit.</p>
          <img src="images/pic-6.png" alt />
          <h3>john deo</h3>
          <div className="stars">
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star-half-alt" />
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* students reviews section ends */}
</div>

<Footer />
        </div>
    );
};

export default About;