import { useState } from "preact/hooks";
import rssIcon from "../assets/icons/rss-square-solid.svg";
import styles from "../styles/header.module.css";

const { navbar, hamburger, aside, asideOpen } = styles;

export default function Header() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <nav className={navbar} role="navigation" aria-label="main navigation">
      <a>
        <img src={rssIcon} style={{ width: "2em" }} />
      </a>
      <button
        className={hamburger}
        aria-label="menu"
        aria-expanded="false"
        onClick={() => setSidebarOpen(val => !val)}>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </button>
      <aside className={`${aside} ${sidebarOpen && asideOpen}`}>
        <ul>
          <li>
            <a href="">One</a>
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
