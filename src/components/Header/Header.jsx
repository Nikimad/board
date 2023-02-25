import "./Header.css";

const Header = () => (
  <header className="header">
    <h2>Platform Launch</h2>
    <button className="header__button">
      <span>+</span>
      <span className="header__button__name"> Add New Task</span>
    </button>
  </header>
);

export default Header;
