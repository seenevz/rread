import { useState } from "preact/hooks";
import styles from "../styles/home.module.css";

const { addFeed, addForm } = styles;

export default function AddFeed() {
  const [url, setUrl] = useState("");

  return (
    <main className={addFeed}>
      <h2>Add a feed url here</h2>
      <form className={addForm}>
        <input
          type="text"
          onChange={e => setUrl(e.target.value)}
          value={url}
          placeholder="https://somefeed.com/rss"
        />
        {url.length ? <input type="submit" /> : null}
      </form>
    </main>
  );
}
