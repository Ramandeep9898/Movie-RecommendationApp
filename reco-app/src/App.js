import React from "react";
import { useState } from "react";
import "./App.css";
const dB = {
  tvShows: [
    "Friends",
    "Big Bang Theory",
    "Riverdale",
    "Sherlock",
    "Kota-Factory",
  ],
  amine: ["Naruto", "DeathNote", "Demon Slayer", "A Silent Voice"],
  fcition: [
    "Edge of Tommorrow",
    "Watchman",
    "Venom",
    "Black Widow",
    "Shang-chii",
    "Loki",
  ],
  horror: [
    "Fear Street 1,2,3",
    "Orphan",
    "Dpctor Sleep",
    "Hunting of hill house",
    "Hunting of Bly Monor",
  ],
  myFav: [
    "Friends",
    "Loki",
    "Wanda Vision",
    "Kota-factory",
    "You",
    "Vampire Daries",
    "Sex Education",
    "locke & key",
  ],
};
function App() {
  const [selectedGenre, setSelectedGenre] = useState("tvShows");
  function genreClickHandler(genre) {
    setSelectedGenre(genre);
  }
  return (
    <div className="App">
      <h1> Hey!! I Recommend Movies 🐱‍🐉</h1>
      <h3>Checkout my Movies & Series. Select a Genre to Get Started</h3>
      <div>
        {Object.keys(dB).map((genre) => (
          <button
            onClick={() => genreClickHandler(genre)}
            style={{
              cursor: "pointer",
              background: "#E5E7EB",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
              border: "1px solid black",
              margin: "1rem 0.3rem",
            }}
          >
            {genre}
          </button>
        ))}
      </div>
      <hr />

      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {dB[selectedGenre].map((book) => (
            <li
              key={book}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid #D1D5DB",
                width: "70%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem",
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}> {book} </div>
              {/* <div style={{ fontSize: "smaller" }}> {book.rating} </div> */}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
