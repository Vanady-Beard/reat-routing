

import React from 'react';
import { useParams } from 'react-router-dom';
import CharacterDetail from './CharacterDetail';

const CharacterDetails = ({ characters }) => {
  const { id } = useParams();
  const character = characters.find((char) => char.id === parseInt(id));

  return (
    <div>
      <h2>Character Details</h2>
      {character ? (
        <CharacterDetail character={character} />
      ) : (
        <p>Character not found.</p>
      )}
    </div>
  );
};

export default CharacterDetails;
