import React, { useState } from 'react';
import '../AppForAll.css';

const GetGiphy = () => {
  const [text, setText] = useState('');

  return (
    <div>
      <h1 className='center-text'>Giphy</h1>
      <div className='search-container'>
        <button
          className='big'
          onChange={() => { }}
        >
          Search Giphy
        </button>
        <input
          className='big'
          placeholder='Search'
          type='text'
          onChange={(e) => { setText(e.target.value) }}
        />
      </div>
    </div>
  );
}

export default GetGiphy;