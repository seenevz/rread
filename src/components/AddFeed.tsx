import { addFeed, addForm } from "../styles/home.module.css";

export default function AddFeed() {
  return (
    <main className={addFeed}>
      <h2>Add a feed url here</h2>
      <form className={addForm}>
        <input type="text" />
      </form>
    </main>
  );
}
