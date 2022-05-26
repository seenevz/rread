import { useState } from "preact/hooks";
import { Link } from "react-router-dom";
import rssIcon from "../assets/icons/rss-square-solid.svg";
import styles from "../styles/header.module.css";

const { navbar, hamburger, aside, asideClose } = styles;

export default function Header() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <nav
      className={navbar}
      role="navigation"
      aria-label="main navigation"
      onClick={() => setSidebarOpen(false)}>
      <Link to="/">
        <img src={rssIcon} style={{ width: "2em" }} />
      </Link>
      <button
        className={hamburger}
        aria-label="menu"
        aria-expanded={sidebarOpen}
        onClick={e => {
          e.stopPropagation();
          setSidebarOpen(val => !val);
        }}>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </button>
      <aside className={`${aside} ${sidebarOpen ? "" : asideClose}`}>
        <ul>
          <li>
            <Link to="/feeds/add">Add a feed</Link>
          </li>
          <li>
            <a href="">Two</a>
          </li>
          <li>
            <a href="">Three</a>
          </li>
        </ul>
      </aside>
    </nav>
  );
}
