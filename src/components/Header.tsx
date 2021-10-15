import rssIcon from "../assets/icons/rss-square-solid.svg";

export default function Header() {
  return (
    <nav class="navbar is-primary" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item">
          <span class="icon is-large" style={"line-height: 0"}>
            <img src={rssIcon} style={"width: 2em"} />
          </span>
        </a>
        <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
    </nav>
  );
}
