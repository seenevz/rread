import emptyImg from "../assets/images/background_empty.jpg";

export default function EmptyFeed() {
  return (
    <>
      <figure class="image is-square mt-6">
        <img src={emptyImg} style="transform: rotate(90deg)" />
      </figure>
      <h2 class="title is-3 has-text-centered has-text-grey-light">It's a bit empty here...</h2>
      <h3 class="subtitle is-5 has-text-centered has-text-grey-lighter">Add some feeds to start</h3>
    </>
  );
}
