import "./home.scss";
import Navbar from "../components/navbar/Navbar";
import Slider from "../components/slider/Slider";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <main>
        <Slider />
      </main>
    </div>
  );
};

export default Home;
