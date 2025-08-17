import "../styles/ShortBox.scss";

/*
async function fetchShortenedURL(url: string): Promise<string> {
  const apiUrl =
    "https://corsproxy.io/?url=" + "https://cleanuri.com/api/v1/shorten";
  // https://corsproxy.io/?url=https://example.com

  const response = await fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      "Access-Control-Allow-Origin": "*",
    },
    body: new URLSearchParams({
      url: url,
    }),
  });

  if (!response.ok) {
    return "Error shortening URL";
  }
  const data = await response.json();

  return data.result_url || "Error shortening URL";
}

const urlExampl: string =
  "https://github.com/ajkendal/frontend-mentor-shortly-challenge/tree/main";
*/
// console.log(fetchShortenedURL(urlExampl));

const ShortBox: React.FC = () => {
  return (
    <section className="short_link_box">
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
};

export default ShortBox;
