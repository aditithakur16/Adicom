import React from "react";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import BlogCard from "../components/BlogCard";

const Home = () => {
  return (
    <>
      <section className="home-wrappr-1 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <div className="main-banner position-relative p-3">
                <img
                  src="images/main-banner-1.jpg"
                  className="img-fluid-rounded-3"
                  alt="main banner"
                />
                <div className="main-banner-content position-absolute">
                  <h4>SUPERCHANGED FOR PROS.</h4>
                  <h5>iPad S13+ Pro.</h5>
                  <p>From $999.00 or $49.62/mo.<br/>
                  Top 20 mo. Footnote*</p>
                  <Link className="button">BUY NOW</Link>
                </div>
              </div>
             </div>
             <div className="col-6">
               <div className="d-flex flex-wrap gap-10 justify-content-between align-items-center">
               <div className="small-banner position-relative ">
                <img
                  src="images/catbanner-01.jpg"
                  className="img-fluid-rounded-3"
                  alt="main banner"
                />
                <div className="small-banner-content position-absolute">
                  <h4>Best Sell</h4>
                  <h5>Laptops Max</h5>
                  <p>From $1699.00 <br/>
                  or $64.62/mo.</p>
                </div>
              </div>
              <div className="small-banner position-relative ">
                <img
                  src="images/catbanner-02.jpg"
                  className="img-fluid-rounded-3"
                  alt="main banner"
                />
                <div className="small-banner-content position-absolute">
                  <h4>15%off</h4>
                  <h5>Smartwatch 7</h5>
                  <p>Shop the latest brand<br/>
                  styles and colors.</p>
                </div>
              </div>
              <div className="small-banner position-relative ">
                <img
                  src="images/catbanner-03.jpg"
                  className="img-fluid-rounded-3"
                  alt="main banner"
                />
                <div className="small-banner-content position-absolute">
                  <h4>New Arrival</h4>
                  <h5>Buy IPad Air</h5>
                  <p>From $599 <br/>
                  or $49.91/mo. for 12 mo.*</p>
                </div>
              </div>
              <div className="small-banner position-relative ">
                <img
                  src="images/catbanner-04.jpg"
                  className="img-fluid-rounded-3"
                  alt="main banner"
                />
                <div className="small-banner-content position-absolute">
                  <h4>Free Engraving</h4>
                  <h5>Airpods Max</h5>
                  <p>High fidellity playback &<br/>
                  ultra low distortion</p>
                </div>
              </div>         
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
           <div className="col-12">
            <div className="servies d-flex align-items-center justify-content-between">
              <div className="d-flex align-items-center gap-10">
                <img src="images/service.png" alt="services"/>
                <div>
                  <h6>Free Shipping</h6>
                  <p mb-0>From all orders over $5</p>
                </div>
              </div>
              <div className="d-flex align-items-center gap-10">
                <img src="images/service-02.png" alt="services"/>
                <div>
                  <h6>Daily Surprise Offers</h6>
                  <p mb-0>Save up to 25% off</p>
                </div>
              </div>
              <div className="d-flex align-items-center gap-10">
                <img src="images/service-03.png" alt="services"/>
                <div>
                  <h6>Support 24/7</h6>
                  <p mb-0>Shop with an expert</p>
                </div>
              </div>
              <div className="d-flex align-items-center gap-10">
                <img src="images/service-04.png" alt="services"/>
                <div>
                  <h6>Affordable Prices</h6>
                  <p mb-0>Get Factory Default Price</p>
                </div>
              </div>
              <div className="d-flex align-items-center gap-10">
                <img src="images/service-05.png" alt="services"/>
                <div>
                  <h6>Secure Payments</h6>
                  <p mb-0>100% Protected Payment </p>
                </div>
              </div>
            </div>
           </div>
          </div>
        </div>
      </section>
      <section className="home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="categories d-flex justify-content-between flex-wrap align-items-center">
                <div className="d-flex gap-30 align-items-center">
                  <div>
                    <h6>Computers & Laptop</h6>
                    <p>8 Items</p>
                  </div>
                  <img src="images/laptop.jpg" alt="laptop"/>
                  </div>
                  <div className="d-flex gap-30 align-items-center">
                  <div>
                    <h6>Cameras & Videos</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/camera.jpg" alt="camera"/>
                  </div>
                  <div className="d-flex gap-30 align-items-center">
                  <div>
                    <h6>Smart Telivision</h6>
                    <p>12 Items</p>
                  </div>
                  <img src="images/tv.jpg" alt="tv"/>
                  </div>
                  <div className="d-flex gap-30 align-items-center">
                  <div>
                    <h6>Smartwatches</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/watch-1.jpg" alt="watch"/>
                  </div>
                  <div className="d-flex gap-30 align-items-center">
                  <div>
                    <h6>Headphones</h6>
                    <p>6 Items</p>
                  </div>
                  <img src="images/headphone.jpg" alt="headphone"/>
                  </div>
                  <div className="d-flex gap-30 align-items-center">
                  <div>
                    <h6>Accessories</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/acc.jpg" alt="accessories"/>
                  </div>
                  <div className="d-flex gap-30 align-items-center">
                  <div>
                    <h6>Portable Speaker</h6>
                    <p>8 Items</p>
                  </div>
                  <img src="images/speaker.jpg" alt="speaker"/>
                  </div>
                  <div className="d-flex gap-30 align-items-center">
                  <div>
                    <h6>Home Applications</h6>
                    <p>6 Items</p>
                  </div>
                  <img src="images/homeapp.jpg" alt="homeapplications"/>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="marquee-wrapper py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="marquee-inner-wrapper card-wrapper">
              <Marquee className="d-flex">
                <div className="mx-4 w-25">
                  <img src="images/brand-01.png" alt="brand"/>
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-02.png" alt="brand"/>
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-03.png" alt="brand"/>
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-04.png" alt="brand"/>
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-05.png" alt="brand"/>
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-06.png" alt="brand"/>
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-07.png" alt="brand"/>
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-08.png" alt="brand"/>
                </div>
              </Marquee>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="blog-wrapper py-5 home-wrapper-2">
       <div className="container-xxl">
        <div className="row">
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </div>
       </div>
      </section>
    </>
  );
};

export default Home;
