import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom'; 
import Home from './Home'; 
import BrowseCharacters from './BrowseCharacters'; 
import CharacterDetails from './CharacterDetails'; 
import Comics from './Comics'; 
import NotFound from './NotFound'; 

const App = () => {
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  const hardcodedCharacters = [
    {
      id: 1,
      name: "Iron Man",
      description: "A billionaire industrialist and genius inventor.",
      thumbnail: {
        path: "https://i.annihil.us/u/prod/marvel/i/mg/9/c0/527bb7b37ff55",
        extension: "jpg",
      },
      comics: {
        items: [
          { name: "Iron Man (2008) #1" },
          { name: "Iron Man (2008) #2" },
          { name: "Iron Man (2008) #3" },
        ],
      },
    },
    {
      id: 3,
      name: "Spider-Man",
      description: "A young hero with spider-like abilities.",
      thumbnail: {
        path: "https://i.annihil.us/u/prod/marvel/i/mg/3/20/5232158de5b16",
        extension: "jpg",
      },
      comics: {
        items: [
          { name: "Spider-Man (2020) #1" },
          { name: "Spider-Man (2020) #2" },
          { name: "Spider-Man (2020) #3" },
        ],
      },
    },
    {
      id: 4,
      name: "Doctor Strange",
      description: "The Sorcerer Supreme of Earth.",
      thumbnail: {
        path: "https://i.annihil.us/u/prod/marvel/i/mg/a/f0/5202887448860",
        extension: "jpg",
      },
      comics: {
        items: [
          { name: "Doctor Strange (2018) #1" },
          { name: "Doctor Strange (2018) #2" },
          { name: "Doctor Strange (2018) #3" },
        ],
      },
    },
    {
      id: 5,
      name: "Hulk",
      description: "The strongest there is.",
      thumbnail: {
        path: "https://i.annihil.us/u/prod/marvel/i/mg/e/e0/537bafa34baa9",
        extension: "jpg",
      },
      comics: {
        items: [
          { name: "Hulk (2014) #1" },
          { name: "Hulk (2014) #2" },
          { name: "Hulk (2014) #3" },
        ],
      },
    },
  ];

  return (
    <Router>
      <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
        <h1>Marvel Comic Book Library</h1>
        <nav style={{ marginBottom: '20px' }}>
          <NavLink to="/" exact activeClassName="active" style={{ marginRight: '10px' }}>
            Home
          </NavLink>
          <NavLink to="/browse" activeClassName="active" style={{ marginRight: '10px' }}>
            Browse Characters
          </NavLink>
          <NavLink to="/comics" activeClassName="active" style={{ marginRight: '10px' }}>
            Comics
          </NavLink>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/browse"
            element={<BrowseCharacters onSelectCharacter={setSelectedCharacter} />}
          />
          <Route
            path="/character/:id"
            element={<CharacterDetails characters={hardcodedCharacters} />}
          />
          <Route path="/comics" element={<Comics />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;






















