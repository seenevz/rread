import emptyImg from "../assets/images/background_empty.jpg";
import { emptyFeed } from "../styles/home.module.css";

export default function EmptyFeed() {
  return (
    <main className={emptyFeed}>
      <figure>
        <img src={emptyImg} style="transform: rotate(90deg)" />
      </figure>
      <h2>It's a bit empty here...</h2>
      <h3>Add some feeds to start</h3>
    </main>
  );
}
