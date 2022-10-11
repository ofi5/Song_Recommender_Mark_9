import { useState } from "react";
import "./styles.css";
import eminem1 from "/public/loseurself.jpg";
import Ye from "/public/homecoming.jpg";
import cent from "/public/50cent.jpg";
import freebird from "/public/freebird.png";
import charlie from "/public/charlie.jpg";
import paradise from "/public/Paradisecity.jpg";
import zhu from "/public/zhu.jpg";
import bonobo from "/public/bonobo.jpg";
import lucky from "/public/lucky.jpg";

const musicDatabase = {
  rap: [
    {
      name: "lose yourself",
      description: "Artist:Eminem, released 2002",
      rating: "3.69 / 5.0 from 2,157 ratings",
      thumbnail: eminem1
    },
    {
      name: "homecoming",
      description: "Artist:Ye , released 2008",
      rating: "3.88 / 5.0 from 28 ratings",
      thumbnail: Ye
    },
    {
      name: "In da club",
      description: "artist: 50 Cents, released 2003",
      rating: "3.14 / 5.0 from 1,226 ratings",
      thumbnail: cent
    }
  ],
  rock: [
    {
      name: "Free bird",
      description: "Artist:Lynyrd Skynyrd, released 1977",
      rating: "3.12 / 5.0 from 1,556 ratings",
      thumbnail: freebird
    },
    {
      name: "Charlie",
      description: "Artist:RHCP , released 2007",
      rating: "3.01 / 5.0 from 5 ratings",
      thumbnail: charlie
    },
    {
      name: "Paradise City",
      description: "artist: Guns N Roses, released 2002",
      rating: "RYM Rating	3.75 / 5.0 from 85 ratings",
      thumbnail: paradise
    }
  ],

  pop: [
    {
      name: "Electrify me",
      description: "Artist:Zhu, released 2016",
      rating: "3.09 / 5.0 from 287 ratings",
      thumbnail: zhu
    },
    {
      name: "linked",
      description: "Artist:Bonobo, released 2019",
      rating: "3.44 / 5.0 from 82 ratings",
      thumbnail: bonobo
    },
    {
      name: "Get Lucky",
      description: "artist: Daft Punk, released 2013",
      rating: "3.49 / 5.0 from 2,507 ratings",
      thumbnail: lucky
    }
  ]
};

var musiclist = Object.keys(musicDatabase);

export default function App() {
  const [genre, setGenre] = useState("rap");

  return (
    <div className="App">
      <h1>
        <span role="img" aria-label="emoji name">
          🎵
        </span>
        Songs
      </h1>
      <h2>Checkout my favorite songs. Select a genre to get started</h2>
      <div>
        {musiclist.map((item) => (
          <button
            key={item}
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

      <div style={{ border: "solid white 1px", margin: "auto", width: "80%" }}>
        <ul
          style={{
            listStyle: "none",
            paddingLeft: "0",
            display: "flex",
            textAlign: "center",
            backgroundColor: "royalblue",
            borderRadius: "10px"
          }}
        >
          {musicDatabase[genre].map((music) => (
            <li
              key={music.name}
              style={{
                border: "solid grey 10px",
                borderRadius: "5px",

                margin: "auto",
                padding: "5px",

                width: "25%",
                marginBottom: "10px",
                marginTop: "10px"
              }}
            >
              <div
                style={{
                  fontWeight: "bold",
                  fontSize: "1.5rem",
                  padding: "5px"
                }}
              >
                {music.name}
              </div>
              <div
                style={{
                  fontStyle: "italic",
                  fontSize: "1.1rem",
                  padding: "5px"
                }}
              >
                {music.description}
              </div>
              <div
                style={{
                  fontWeight: "bold",
                  fontSize: "0.9rem",
                  padding: "5px"
                }}
              >
                {music.rating}
              </div>
              <div>
                <img
                  src={music.thumbnail}
                  style={{ borderRadius: "50%", width: "100%" }}
                  alt={music.name}
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
