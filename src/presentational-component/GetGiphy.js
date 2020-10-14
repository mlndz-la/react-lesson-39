import React, { useState } from 'react';
import '../AppForAll.css';

const GetGiphy = (props) => {
  const [text, setText] = useState('');
  const { fetchData } = props;
  return (
    <div>
      <h1 className='center-text'>Giphy</h1>
      <div className='search-container'>
        <button
          className='big'
          onClick={() => {
            fetchData(`https://api.giphy.com/v1/gifs/search?api_key=phjtiTpDbOexS7SoP426Sbh47lOIgEJc&q=fail&limit=25&offset=0&rating=pg-13&lang=en`);
            setText('');
          }}
        >
          Search Giphy
        </button>
        <input
          className='big'
          placeholder='Search'
          type='text'
          value={text}
          onChange={(e) => { setText(e.target.value) }}
        />
      </div>
    </div>
  );
}

export default GetGiphy;