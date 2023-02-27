import "./Header.css";

const Header = ({title}) => (
  <header className="header">
    <h2>{title}</h2>
    <button className="header__button">
      <span>+</span>
      <span className="header__button__name"> Add New Task</span>
    </button>
  </header>
);

export default Header;
