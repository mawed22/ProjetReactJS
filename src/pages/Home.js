import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <div>
        <Header />
        <div>
  {/* home section starts  */}
  <section className="home">
    <div className="swiper home-slider">
      <div className="swiper-wrapper">
        <section className="swiper-slide slide" style={{background: 'url(images/home-slide-1.jpg) no-repeat'}}>
          <div className="content">
            <h3>the best courses you will find find here!</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas impedit labore dolore unde, quidem corrupti?</p>
            <a href="#" className="btn">get started</a>
          </div>
        </section>
        <section className="swiper-slide slide" style={{background: 'url(images/home-slide-2.jpg) no-repeat'}}>
          <div className="content">
            <h3>the best courses you will find find here!</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas impedit labore dolore unde, quidem corrupti?</p>
            <a href="#" className="btn">get started</a>
          </div>
        </section>
        <section className="swiper-slide slide" style={{background: 'url(images/home-slide-3.jpg) no-repeat'}}>
          <div className="content">
            <h3>the best courses you will find find here!</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas impedit labore dolore unde, quidem corrupti?</p>
            <a href="#" className="btn">get started</a>
          </div>
        </section>
      </div>
      <div className="swiper-pagination" />
    </div>
  </section>
  {/* home section ends */}
  {/* subjects section starts  */}
  <section className="subjects">
    <h1 className="heading">our popular subjects</h1>
    <div className="box-container">
      <div className="box">
        <img src="images/subject-icon-1.png" alt />
        <h3>graphic design</h3>
        <p>12 modules</p>
      </div>
      <div className="box">
        <img src="images/subject-icon-2.png" alt />
        <h3>mathemetics</h3>
        <p>12 modules</p>
      </div>
      <div className="box">
        <img src="images/subject-icon-3.png" alt />
        <h3>teaching</h3>
        <p>12 modules</p>
      </div>
      <div className="box">
        <img src="images/subject-icon-4.png" alt />
        <h3>development</h3>
        <p>12 modules</p>
      </div>
      <div className="box">
        <img src="images/subject-icon-5.png" alt />
        <h3>science</h3>
        <p>12 modules</p>
      </div>
      {/*<div className="box">
        <img src="images/subject-icon-6.png" alt />
        <h3>engineering</h3>
        <p>12 modules</p>
    </div> */}
    </div>
  </section>
  <section className="subjects">
    <h1 className="heading">our popular courses</h1>
    <div className="box-container">
      <div className="box">
        <img src="images/subject-icon-1.png" alt />
        <h3>graphic design</h3>
        <p>12 modules</p>
      </div>
      <div className="box">
        <img src="images/subject-icon-2.png" alt />
        <h3>mathemetics</h3>
        <p>12 modules</p>
      </div>
      <div className="box">
        <img src="images/subject-icon-3.png" alt />
        <h3>teaching</h3>
        <p>12 modules</p>
      </div>
      <div className="box">
        <img src="images/subject-icon-4.png" alt />
        <h3>development</h3>
        <p>12 modules</p>
      </div>
      <div className="box">
        <img src="images/subject-icon-5.png" alt />
        <h3>science</h3>
        <p>12 modules</p>
      </div>
      {/*<div className="box">
        <img src="images/subject-icon-6.png" alt />
        <h3>engineering</h3>
        <p>12 modules</p>
    </div> */}
    </div>
  </section>
  {/* subjects section ends */}
  {/* home courses slider section starts  */}
  {/*<section className="home-courses">
    <h1 className="heading"> our popular courses </h1>
    <div className="swiper home-courses-slider">
      <div className="swiper-wrapper">
        <div className="swiper-slide slide">
          <div className="image">
            <img src="images/course-1-1.png" alt />
            <h3>web development</h3>
          </div>
          <div className="content">
            <h3>web development</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, ratione?</p>
            <a href="#" className="btn">read more</a>
          </div>
        </div>
        <div className="swiper-slide slide">
          <div className="image">
            <img src="images/course-1-2.png" alt />
            <h3>web development</h3>
          </div>
          <div className="content">
            <h3>web development</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, ratione?</p>
            <a href="#" className="btn">read more</a>
          </div>
        </div>
        <div className="swiper-slide slide">
          <div className="image">
            <img src="images/course-1-3.png" alt />
            <h3>web development</h3>
          </div>
          <div className="content">
            <h3>web development</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, ratione?</p>
            <a href="#" className="btn">read more</a>
          </div>
        </div>
        <div className="swiper-slide slide">
          <div className="image">
            <img src="images/course-1-4.png" alt />
            <h3>web development</h3>
          </div>
          <div className="content">
            <h3>web development</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, ratione?</p>
            <a href="#" className="btn">read more</a>
          </div>
        </div>
        <div className="swiper-slide slide">
          <div className="image">
            <img src="images/course-1-5.png" alt />
            <h3>web development</h3>
          </div>
          <div className="content">
            <h3>web development</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, ratione?</p>
            <a href="#" className="btn">read more</a>
          </div>
        </div>
        <div className="swiper-slide slide">
          <div className="image">
            <img src="images/course-1-6.png" alt />
            <h3>web development</h3>
          </div>
          <div className="content">
            <h3>web development</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, ratione?</p>
            <a href="#" className="btn">read more</a>
          </div>
        </div>
      </div>
    </div>
  </section>*/}
  {/* home courses slider section ends */}
</div>

        
<Footer />

        </div>
    );
};

export default Home;