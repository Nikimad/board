import "./Aside.css";

const Aside = () => (
  <aside className="aside">
    <h1 className="title">Boards</h1>
    <div className="navbar">
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
