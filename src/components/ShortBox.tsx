import "../styles/ShortBox.scss";
import { useState } from "react";

type ShortenResponse = {
  result_url?: string;
  error?: string;
};

async function fetchShortenedLink(url: string): Promise<string> {
  const apiUrl =
    "https://corsproxy.io/?url=" + "https://cleanuri.com/api/v1/shorten";

  const response = await fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({ url }),
  });

  if (!response.ok) {
    throw new Error("Network error while shortening URL");
  }

  const data: ShortenResponse = await response.json();
  return data.result_url || "Error shortening URL";
}

const ShortBox: React.FC = () => {
  const [url, setUrl] = useState("");
  const [error, setError] = useState("");
  const [links, setLinks] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  const isValidUrl = (string: string): boolean => {
    try {
      new URL(string);
      return true;
    } catch {
      return false;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!url) {
      setError("Please add a link");
      return;
    }

    if (!isValidUrl(url)) {
      setError("Please enter a valid link");
      return;
    }

    setError("");

    try {
      setLoading(true);
      const shortened = await fetchShortenedLink(url);
      setLinks((prev) => [shortened, ...prev]);
      setUrl("");
    } catch (err) {
      setError("Failed to shorten the URL. Please try again.");
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="short_link_box">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="shortLink"
          className={`input_field ${error ? "input_error" : ""}`}
          placeholder="Shorten a link here..."
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />

        <input
          type="submit"
          value={loading ? "Loading..." : "Shorten It!"}
          className="input_button"
          disabled={loading}
        />

        {error && <p className="error_message">{error}</p>}
      </form>

      {links.length > 0 && (
        <div className="shortened_links">
          {links.map((link, index) => (
            <p key={index} className="shortened_url">
              Shortened URL:{" "}
              <a href={link} target="_blank" rel="noopener noreferrer">
                {link}
              </a>
            </p>
          ))}
        </div>
      )}
    </section>
  );
};

export default ShortBox;
