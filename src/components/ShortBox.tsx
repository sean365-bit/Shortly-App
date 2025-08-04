import "./ShortBox.scss";

function ShortBox() {
  return (
    <section className="short_box">
      <form>
        <input
          type="text"
          name="shortLink"
          className="input_field"
          placeholder="Shorten a link here..."
        />

        <input
          type="submit"
          value="Shorten It!"
          className="input_button"
        ></input>
      </form>
    </section>
  );
}

export default ShortBox;
