import { useState } from "react";
import "./styles.css";

const musicDatabase = {
  rap: [
    { name: "lose yourself", artist: "Eminem" },
    { name: "homecoming", artist: "Ye" }
  ],
  rock: [
    { name: "Free bird", artist: "Lynyrd Skynyrd" },
    { name: "Charlie", artist: "RHCP" }
  ],

  pop: [
    { name: "Electrify me", artist: "Zhu" },
    { name: "linked", artist: "Bonobo" }
  ]
};

var musiclist = Object.keys(musicDatabase);

export default function App() {
  const [genre, setGenre] = useState("rap");

  return (
    <div className="App">
      <h1>🎵Songs</h1>
      <h2>Checkout my favorite songs. Select a genre to get started</h2>
      <div>
        {musiclist.map((item) => (
          <button
            onClick={() => setGenre(item)}
            style={{
              padding: "10px",
              width: "100px",
              margin: "20px",
              fontWeight: "bold",
              fontSize: "1.2rem",
              border: "None",
              borderRadius: "5px",
              backgroundColor: "goldenrod"
            }}
          >
            {item}
          </button>
        ))}
      </div>
      <hr />

      <div style={{ border: "solid white 1px", margin: "auto", width: "70%" }}>
        <ul style={{ textAlign: "left" }}>
          {musicDatabase[genre].map((music) => (
            <li
              style={{
                border: "solid grey 1px",
                borderRadius: "5px",
                listStyle: "none",
                margin: "5px",
                padding: "5px",
                width: "50%"
              }}
            >
              <div style={{ fontWeight: "bold", fontSize: "1.1rem" }}>
                {music.name}
              </div>
              <div style={{ fontStyle: "italic", fontSize: "0.8rem" }}>
                {music.artist}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
