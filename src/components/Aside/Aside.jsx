import "./Aside.css";

const Aside = () => (
  <aside className="aside">
    <div className="navbar">
      <h1>Boards</h1>
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
