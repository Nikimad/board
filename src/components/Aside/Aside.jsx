import "./Aside.css";
import { ReactComponent as Logo } from "../../assets/svg/logo.svg";

const Aside = () => (
  <aside className="aside">
    <div className="aside__presentation">
      <Logo />
      <h1 className="title">Boards</h1>
    </div>
    <div className="navbar">
      <h2 className="navbar__title">All boards (3)</h2>
      <nav className="navbar__nav">
        <a href="/path" className="navbar__nav__item active">Platform Launch</a>
        <a href="/path" className="navbar__nav__item">Marketing Plan</a>
        <a href="/path" className="navbar__nav__item">Roadplan</a>
      </nav>
      <button className="navbar__button">+ Create New Board</button>
    </div>
  </aside>
);

export default Aside;
