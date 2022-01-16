import "./home.scss";
import Navbar from "../components/navbar/Navbar";
import Slider from "../components/slider/Slider";

const Home = () => {
  // const images = [
  //   "https://images.unsplash.com/photo-1449034446853-66c86144b0ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80",
  //   "https://images.unsplash.com/photo-1470341223622-1019832be824?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2288&q=80",
  //   "https://images.unsplash.com/photo-1448630360428-65456885c650?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2094&q=80",
  //   "https://images.unsplash.com/photo-1534161308652-fdfcf10f62c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2174&q=80",
  // ];

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
          <div className="slider_content_item">
            <div className="image_wrapper">
              <img
                src="https://static.wanted.co.kr/images/banners/1460/619f3af7.jpg"
                alt="개발자 성장 비결 공개!"
              />
            </div>
            <div className="info">info</div>
          </div>
          <div className="slider_content_item">
            <div>
              <img
                src="https://static.wanted.co.kr/images/banners/1486/fba2df30.jpg"
                alt="성과를 내는 마케팅"
              />
            </div>
          </div>
          <div className="slider_content_item">
            <div>
              <img
                src="https://static.wanted.co.kr/images/banners/1489/312a0c29.jpg"
                alt="2022년 달라지는 노동법령"
              />
            </div>
          </div>
          <div className="slider_content_item">
            <div className="image_wrapper">
              <img
                src="https://static.wanted.co.kr/images/banners/1487/0d36f0b5.jpg"
                alt="포트폴리오를 부탁해!"
              />
            </div>
          </div>
          <div className="slider_content_item">
            <div className="image_wrapper">
              <img
                src="https://static.wanted.co.kr/images/banners/1468/3df61cbc.jpg"
                alt="해, 커리어 EP 02 공개"
              />
            </div>
          </div>
          <div className="slider_content_item">
            <div className="image_wrapper">
              <img
                src="https://static.wanted.co.kr/images/banners/1488/baa54448.jpg"
                alt="UX 디자이너의 커리어 설계"
              />
            </div>
          </div>
          <div className="slider_content_item">
            <div className="image_wrapper">
              <img
                src="https://static.wanted.co.kr/images/banners/1484/b2853456.jpg"
                alt="성장하는 개발자가 되려면?"
              />
            </div>
          </div>
          <div className="slider_content_item">
            <div className="image_wrapper">
              <img
                src="https://static.wanted.co.kr/images/banners/1490/0b775035.jpg"
                alt="마케팅 주니어를 찾습니다"
              />
            </div>
          </div>
          <div className="slider_content_item">
            <div className="image_wrapper">
              <img
                src="https://static.wanted.co.kr/images/banners/1473/41f7b36e.jpg"
                alt="개발자 되고싶은 분들!?"
              />
            </div>
          </div>
        </Slider>
      </main>
    </div>
  );
};

export default Home;
