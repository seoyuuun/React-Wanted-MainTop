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
        <Slider sliderData={sliderData} setSlideTime={4000}></Slider>
      </main>
    </div>
  );
};

export default Home;
