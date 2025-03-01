import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import Header from './Header'


const Content = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div>
    <div>
      <Header />
    </div>
      <div>
        <Carousel activeIndex={index} onSelect={handleSelect}>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/3/3f6d1e2a-5ef6-4921-be5d-443a11b11d801651599573985-Dresses_Desk.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/3/bc89bda3-e7dc-42fc-91f8-e380f36303c11651599573964-Tops---Tees_Desk.jpg"
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/4/10/7feef02b-0072-4c1b-b83d-4e46a5d93c6b1649530621162-Sangria_Desk_Banner.jpg"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <img
          src="https://outofoffice.la/cdn/shop/files/collection_des_2.svg?v=1733786437"
          alt="Banner"
          style={{ width: "50%", maxWidth: "690px" }}
        />
      </div>
      <div className="row" style={{ marginTop: "10px" }}>
        <div className="col-3">
          <img
            src="https://assets.ajio.com/medias/sys_master/root/20241224/M7Ba/676ab2750f47f80c871e74bb/-473Wx593H-469709310-navy-MODEL.jpg"
            alt=""
            style={{width:"100%"}}
          />
        </div>
        <div className="col-3">
          <img
            src="https://assets.ajio.com/medias/sys_master/root/20221216/qTZW/639c9712f997ddfdbdda7f01/-473Wx593H-441227153-rose-MODEL.jpg"
            alt=""
            style={{width:"100%"}}
          />
        </div>
        <div className="col-3">
          <img
            src="https://assets.ajio.com/medias/sys_master/root/20241130/0NKq/674ad375c148fa1b30fe09c0/-473Wx593H-700834857-black-MODEL.jpg"
            style={{width:"100%"}}
          />
        </div>
        <div className="col-3">
          <img
            src="https://assets.ajio.com/medias/sys_master/root/20240918/so8v/66eaa5e8260f9c41e80f6f64/-473Wx593H-700272010-white-MODEL.jpg"
            style={{width:"100%"}}
            alt=""
          />
        </div>
      </div>
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <img
          src="https://outofoffice.la/cdn/shop/files/choose_a_category.svg?v=1733786437"
          alt="Banner"
          style={{ width: "50%", maxWidth: "690px" }}
        />
      </div>
      <div className="row mt-4">
        <div className="col-3">
          <img
            src="https://assets.ajio.com/medias/sys_master/root/20240822/o1uo/66c641f71d763220fa8d6097/-473Wx593H-700310053-black-MODEL.jpg"
            alt=""
            style={{width:"100%"}}
          />
        </div>
        <div className="col-3">
          <img
            src="https://assets.ajio.com/medias/sys_master/root/20250124/ulQw/6793806f0431850e0dc02c74/-473Wx593H-701098117-cream-MODEL2.jpg"
            style={{width:"100%"}}
          />
        </div>
        <div className="col-3">
          <img
            src="https://assets.ajio.com/medias/sys_master/root/20240814/xnR5/66bc87091d763220fa7a321c/-473Wx593H-700287828-navy-MODEL.jpg"
            alt=""
            style={{width:"100%"}}
          />
        </div>
        <div className="col-3">
          <img
            src="https://assets.ajio.com/medias/sys_master/root/20250130/Q3OR/679b58b0bc78b543a90aab92/-473Wx593H-701054892-beige-MODEL.jpg"
            alt=""
            style={{width:"100%"}}
          />
        </div>
      </div>

      <div className="row text-center" style={{ marginTop: "70px" }}>
        <div className="col-3">
          <img
            src="https://outofoffice.la/cdn/shop/files/HANDCRAFTED.svg?v=1733786436&width=100"
            alt="Handcrafted"
            style={{ width: "80px", height: "80px" }}
          />
          <h5>Happy Customers</h5>
        </div>

        <div className="col-3">
          <img
            src="https://outofoffice.la/cdn/shop/files/3_YEAR_WARRANTY.svg?v=1733786436&width=100"
            alt="3-Year Warranty"
            style={{ width: "80px", height: "80px" }}
          />
          <h5>Desgined Dress</h5>
        </div>

        <div className="col-3">
          <img
            src="https://outofoffice.la/cdn/shop/files/SHIPPING.svg?v=1733786436&width=100"
            alt="Fast Shipping"
            style={{ width: "80px", height: "80px" }}
          />
          <h5>Fast Shipping</h5>
        </div>

        <div className="col-3">
          <img
            src="https://outofoffice.la/cdn/shop/files/RETURNS.svg?v=1733786436&width=100"
            alt="Easy Returns"
            style={{ width: "80px", height: "80px" }}
          />
          <h5>Easy Returns</h5>
        </div>
      </div>
    </div>
  );
};

export default Content;
