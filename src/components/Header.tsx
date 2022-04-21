import rssIcon from "../assets/icons/rss-square-solid.svg";
import { navbar, hamburger } from "../styles/header.module.css";

export default function Header() {
  return (
    <nav class={navbar} role="navigation" aria-label="main navigation">
      <a>
        <img src={rssIcon} style={"width: 2em"} />
      </a>
      <a
        role="button"
        class={hamburger}
        aria-label="menu"
        aria-expanded="false">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </nav>
  );
}
