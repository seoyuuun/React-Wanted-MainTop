import "./home.scss";
import Navbar from "../components/navbar/Navbar";
import Slider from "../components/slider/Slider";

import { sliderData } from "../components/slider/sliderData";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <main
        style={{
          maxWidth: 1084,
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: 25,
        }}
      >
        <Slider sliderData={sliderData} infiniteLoop={true}>
          {sliderData.map((item, index) => {
            return (
              <div className="slider_content" key={item.url + index}>
                <img
                  src={item.url}
                  alt={item.title}
                  className="slider_image"
                  style={{ borderRadius: "4px" }}
                />
                <div className="banner_info">
                  <h2>{item.title}</h2>
                  <h3>{item.description}</h3>
                  <hr />
                  <a className="slider_link" href={item.link}>
                    바로가기 &#62;
                  </a>
                </div>
              </div>
            );
          })}
        </Slider>
      </main>
    </div>
  );
};

export default Home;
