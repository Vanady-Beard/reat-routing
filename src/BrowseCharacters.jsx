
import React from 'react';
import CharacterList from './CharacterList';

const BrowseCharacters = ({ onSelectCharacter }) => {
  return (
    <div>
      <h2>Browse Characters</h2>
      <CharacterList onSelectCharacter={onSelectCharacter} />
    </div>
  );
};

export default BrowseCharacters;
