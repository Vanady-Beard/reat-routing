// src/components/CharacterList.jsx

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const CharacterList = ({ onSelectCharacter }) => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Simulate a fetch request
    const fetchCharacters = async () => {
      try {
        setLoading(true);
        // Simulate delay for async fetching
        await new Promise((resolve) => setTimeout(resolve, 1000));

        // Hardcoded character data
        const hardcodedCharacters = [
          {
            id: 1,
            name: "Iron Man",
            description: "A billionaire industrialist and genius inventor.",
            thumbnail: {
              path: "https://i.annihil.us/u/prod/marvel/i/mg/9/c0/527bb7b37ff55",
              extension: "jpg",
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
          },
          {
            id: 4,
            name: "Doctor Strange",
            description: "The Sorcerer Supreme of Earth.",
            thumbnail: {
              path: "https://i.annihil.us/u/prod/marvel/i/mg/a/f0/5202887448860",
              extension: "jpg",
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
          },
        ]

        setCharacters(hardcodedCharacters);
        setError(null);
      } catch (err) {
        setError('Failed to fetch characters.');
      } finally {
        setLoading(false);
      }
    };


    fetchCharacters();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
        gap: '20px',
      }}
    >
      {characters.map((character) => (
        <div key={character.id} style={{ textAlign: 'center' }}>
          <h3>{character.name}</h3>
          <img
            src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
            alt={character.name}
            style={{ width: '100px', height: '100px', cursor: 'pointer' }}
          />
          <p>{character.description}</p>
          <Link
            to={`/character/${character.id}`}
            style={{
              display: 'inline-block',
              marginTop: '10px',
              color: '#007BFF',
              textDecoration: 'none',
            }}
          >
            View Details
          </Link>
        </div>
      ))}
    </div>
  );
};

export default CharacterList;
