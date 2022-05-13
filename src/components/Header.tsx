import { useState } from "preact/hooks";
import rssIcon from "../assets/icons/rss-square-solid.svg";
import {
  navbar,
  hamburger,
  aside,
  asideOpen,
} from "../styles/header.module.css";

export default function Header() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <nav class={navbar} role="navigation" aria-label="main navigation">
      <a>
        <img src={rssIcon} style={"width: 2em"} />
      </a>
      <button
        class={hamburger}
        aria-label="menu"
        aria-expanded="false"
        onClick={() => setSidebarOpen(val => !val)}>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </button>
      <aside class={`${aside} ${sidebarOpen && asideOpen}`}>
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
