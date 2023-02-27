import "./Aside.css";
import { ReactComponent as Logo } from "../../assets/svg/logo.svg";
import cn from "classnames";

const Aside = ({onSet, active}) => (
  <aside className="aside">
    <div className="aside__presentation">
      <Logo />
      <h1 className="title">Boards</h1>
    </div>
    <div className="navbar">
      <h2 className="navbar__title">All boards (3)</h2>
      <nav className="navbar__nav">
        <a onClick={onSet} id="platform" href="/platform" className={cn("navbar__nav__item", {"active": active === "Platform Launch"})}>Platform Launch</a>
        <a onClick={onSet} id="marketing" href="/marketing" className={cn("navbar__nav__item", {"active": active === "Marketing Plan"})}>Marketing Plan</a>
        <a onClick={onSet} id="roadmap" href="/roadmap" className={cn("navbar__nav__item", {"active": active === "Roadmap"})}>Roadmap</a>
      </nav>
      <button className="navbar__button">+ Create New Board</button>
    </div>
  </aside>
);

export default Aside;
