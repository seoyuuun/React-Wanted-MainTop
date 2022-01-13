import "./home.scss";
import Navbar from "../components/navbar/Navbar";
import Slide from "../components/slide/Slide";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Slide />
    </div>
  );
};

export default Home;
