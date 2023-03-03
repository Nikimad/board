import "./Header.css";
import { ReactComponent as Logo } from "../../assets/svg/logo.svg";

const Header = ({title, onClick}) => (
  <header className="header">
    <div className="presentation header__presentaiton">
      <button onClick={onClick} className="presentation__button"><Logo /></button>
      <h2>{title}</h2>
    </div>
    <button className="header__button">
      <span>+</span>
      <span className="header__button__name"> Add New Task</span>
    </button>
  </header>
);

export default Header;
