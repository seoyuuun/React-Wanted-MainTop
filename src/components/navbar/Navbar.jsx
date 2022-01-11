import "./navbar.scss";
import { FaSistrix } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="navbar">
      <nav className="navbar_container">
        <div className="navbar_dropmenu_logo">
          <img
            src="https://static.wanted.co.kr/images/icon-menu.png"
            alt="hamberger menu"
          />
          <img
            src="//theme.zdassets.com/theme_assets/9309779/480a35976bf401a88dd7388d8f5c19d77227cd35.png"
            alt="원티드로고"
            id="heder_logo_image"
          />
        </div>
        <ul className="navbar_main_menu">
          <li>채용</li>
          <li>이벤트</li>
          <li>직군별 연봉</li>
          <li>이력서</li>
          <li>커뮤니티</li>
          <li>프리랜서</li>
          <li>AI 합격예측</li>
        </ul>
        <aside className="navbar_aside_menu">
          <ul>
            <li className="searchButton">
              <FaSistrix className="search_icon" />
            </li>
            <li className="signButton">회원가입/로그인</li>
            <li className="dashboardButton leftDevision">기업서비스</li>
          </ul>
        </aside>
      </nav>
    </div>
  );
};

export default Navbar;
