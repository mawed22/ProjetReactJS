import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Courses = () => {
    return (
        <div>
        <Header />
        <div>
        <section className="heading-link">
          <h3>our courses</h3>
          <p> <a href="home.html">home</a> / courses </p>
        </section>
        <section className="courses">
          <h1 className="heading"> our famous courses </h1>
          <div className="box-container">
            <div className="box">
              <div className="image">
                <img src="images/course-2-1.jpg" alt />
                <h3>development</h3>
              </div>
              <div className="content">
                <h3>choose what's best for you!</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque, odit!</p>
                <a href="#" className="btn">read more</a>
                <div className="icons">
                  <span> <i className="fas fa-book" /> 12 modules </span>
                  <span> <i className="fas fa-clock" /> 6 hours </span>
                </div>
              </div>
            </div>
            <div className="box">
              <div className="image">
                <img src="images/course-2-2.jpg" alt />
                <h3>engineering</h3>
              </div>
              <div className="content">
                <h3>choose what's best for you!</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque, odit!</p>
                <a href="#" className="btn">read more</a>
                <div className="icons">
                  <span> <i className="fas fa-book" /> 12 modules </span>
                  <span> <i className="fas fa-clock" /> 6 hours </span>
                </div>
              </div>
            </div>
            <div className="box">
              <div className="image">
                <img src="images/course-2-3.jpg" alt />
                <h3>mathemetics</h3>
              </div>
              <div className="content">
                <h3>choose what's best for you!</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque, odit!</p>
                <a href="#" className="btn">read more</a>
                <div className="icons">
                  <span> <i className="fas fa-book" /> 12 modules </span>
                  <span> <i className="fas fa-clock" /> 6 hours </span>
                </div>
              </div>
            </div>
            <div className="box">
              <div className="image">
                <img src="images/course-2-4.jpg" alt />
                <h3>doctor</h3>
              </div>
              <div className="content">
                <h3>choose what's best for you!</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque, odit!</p>
                <a href="#" className="btn">read more</a>
                <div className="icons">
                  <span> <i className="fas fa-book" /> 12 modules </span>
                  <span> <i className="fas fa-clock" /> 6 hours </span>
                </div>
              </div>
            </div>
            <div className="box">
              <div className="image">
                <img src="images/course-2-5.jpg" alt />
                <h3>science</h3>
              </div>
              <div className="content">
                <h3>choose what's best for you!</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque, odit!</p>
                <a href="#" className="btn">read more</a>
                <div className="icons">
                  <span> <i className="fas fa-book" /> 12 modules </span>
                  <span> <i className="fas fa-clock" /> 6 hours </span>
                </div>
              </div>
            </div>
            <div className="box">
              <div className="image">
                <img src="images/course-2-6.jpg" alt />
                <h3>business</h3>
              </div>
              <div className="content">
                <h3>choose what's best for you!</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque, odit!</p>
                <a href="#" className="btn">read more</a>
                <div className="icons">
                  <span> <i className="fas fa-book" /> 12 modules </span>
                  <span> <i className="fas fa-clock" /> 6 hours </span>
                </div>
              </div>
            </div>
            <div className="box hide">
              <div className="image">
                <img src="images/course-2-7.jpg" alt />
                <h3>teaching</h3>
              </div>
              <div className="content">
                <h3>choose what's best for you!</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque, odit!</p>
                <a href="#" className="btn">read more</a>
                <div className="icons">
                  <span> <i className="fas fa-book" /> 12 modules </span>
                  <span> <i className="fas fa-clock" /> 6 hours </span>
                </div>
              </div>
            </div>
            <div className="box hide">
              <div className="image">
                <img src="images/course-2-8.jpg" alt />
                <h3>designing</h3>
              </div>
              <div className="content">
                <h3>choose what's best for you!</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque, odit!</p>
                <a href="#" className="btn">read more</a>
                <div className="icons">
                  <span> <i className="fas fa-book" /> 12 modules </span>
                  <span> <i className="fas fa-clock" /> 6 hours </span>
                </div>
              </div>
            </div>
            <div className="box hide">
              <div className="image">
                <img src="images/course-2-9.jpg" alt />
                <h3>dancing</h3>
              </div>
              <div className="content">
                <h3>choose what's best for you!</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque, odit!</p>
                <a href="#" className="btn">read more</a>
                <div className="icons">
                  <span> <i className="fas fa-book" /> 12 modules </span>
                  <span> <i className="fas fa-clock" /> 6 hours </span>
                </div>
              </div>
            </div>
          </div>
          <div className="load-more"> <div className="btn">load more</div> </div>
        </section>
      </div>
      
      <Footer />
        </div>
    );
};

export default Courses;