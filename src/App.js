import React from "react";
import { useState } from "react";
import "./App.css";
const dB = {
  tvShows: [
    { name: "Friends", rating: "4/5" },
    { name: "Big Bang Theory", rating: "3.5/5" },
    { name: "Riverdale", rating: "4/5" },
    { name: "Sherlock", rating: "3.5/5" },
    { name: "Kota-Factory", rating: "3.5/5" }

    
  ],
  amine: [
     { name: "Naruto", rating: "4/5" },
     { name: "DeathNote", rating: "3.5/5" },
     { name: "Demon Slayer", rating: "4/5" },
     { name: "A Silent Voice", rating: "3.5/5" },
   
  ],
  fcition: [
    { name: "Edge of Tommorrow", rating: "4/5" },
    { name: "Watchman", rating: "3.5/5" },
    { name: "Venom", rating: "4/5" },
    { name: "Black Widow", rating: "3.5/5" },
    { name: "Shang-chii", rating: "3.5/5" },
    { name: "Loki", rating: "3.5/5" },




  ],
  horror: [
    { name: "Fear Street 1,2,3 ", rating: "4/5" },
    { name: "Orphan", rating: "3.5/5" },
    { name: "Doctor Sleep", rating: "4/5" },
    { name: "Hunting of hill house", rating: "3.5/5" },
    { name: "Hunting of Bly Monor", rating: "3.5/5" },
    
  ],
  myFav: [
    { name: "Friends", rating: "4/5" },
    { name: "Loki", rating: "3.5/5" },
    { name: "Wanda Vision", rating: "4/5" },
    { name: "Kota-factory", rating: "3.5/5" },
    { name: "You", rating: "3.5/5" },
    { name: "Vampire Daries", rating: "4/5" },
    { name: "Sex Education", rating: "3.5/5" },
    { name: "locke & key", rating: "3.5/5" },

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

      <div style={{ textAlign: "centre" }}>
        <ul>
          {dB[selectedGenre].map((book) => (
            <li
              key={book}
              style={{
                textAlign: "center",
                listStyle: "none",
                padding: "0.8rem",
                border: "1px solid #D1D5DB",
                width: "30%",
                margin: "1rem 30%",
                borderRadius: "0.5rem",
              }}
            >
              {" "}
              <div
                style={{
                  textAlign: "center",
                  fontSize: "larger",
                }}
              >
                {/* {book.name}
                {book.rating} */}
                
              <div style={{ fontSize: "larger" }}> {book.name} </div>
              <div style={{ fontSize: "smaller" }}> {book.rating} </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
