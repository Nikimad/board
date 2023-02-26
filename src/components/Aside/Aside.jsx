import "./Aside.css";
import { ReactComponent as Logo } from "../../assets/svg/logo.svg";

const Aside = ({boards, onAdd}) => (
  <aside className="aside">
    <div className="aside__presentation">
      <Logo />
      <h1 className="title">Boards</h1>
    </div>
    <div className="navbar">
      <h2 className="navbar__title">All boards (3)</h2>
      <nav className="navbar__nav">
        {boards.map((board) => {
          return <a key={board.id} href={`/${board.name}`} className="navbar__nav__item">{board.name}</a>;
        })}
      </nav>
      <button onClick={onAdd} className="navbar__button">+ Create New Board</button>
    </div>
  </aside>
);

export default Aside;
