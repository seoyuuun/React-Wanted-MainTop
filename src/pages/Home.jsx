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
        <Slider show={3} infiniteLoop={true}>
          {sliderData.map((item, index) => {
            return (
              <div
                // className={
                //   currentIndex === index
                //     ? "carousel_slide_active"
                //     : "carousel_slide"
                // }
                data-index={index}
              >
                <img
                  src={item.url}
                  alt={item.title}
                  className="carousel_image"
                />
                {/* {currentIndex === index + 1 ? ( */}
                <div className="banner_info">
                  <h2>{item.title}</h2>
                  <h3>{item.description}</h3>
                  <hr />
                  <a className="carousel_link" href={item.link}>
                    바로가기 &#62;
                  </a>
                </div>
                {/* ) : null} */}
                {/* {currentIndex === index + 1 ? null : (
                    <HandleCarouselOpacity />
                  )} */}
              </div>
            );
          })}
        </Slider>
      </main>
    </div>
  );
};

export default Home;
