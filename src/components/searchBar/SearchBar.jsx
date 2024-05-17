import React, { useState } from 'react';
import './SearchBar.css';

export const SearchBar = ({ onSearch }) => {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [tags, setTags] = useState('');
  const [rate, setRate] = useState('');

  const handleSearch = () => {
    onSearch({ name, category, tags: tags.split(','), rate });
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Nombre del producto"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Categoría"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
      <input
        type="text"
        placeholder="Etiquetas (separadas por comas)"
        value={tags}
        onChange={(e) => setTags(e.target.value)}
      />
      <input
        type="number"
        placeholder="Calificación"
        value={rate}
        onChange={(e) => setRate(e.target.value)}
      />
   
      <button onClick={handleSearch}>Buscar</button>
   
  
    </div>
  );
};
