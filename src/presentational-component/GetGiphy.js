import React from 'react';
import '../AppForAll.css';

const GetGiphy = (props) => {
  const { fetchData, query, setQuery } = props;

  const onClickHandle = () => {
    fetchData(`https://api.giphy.com/v1/gifs/search?api_key=phjtiTpDbOexS7SoP426Sbh47lOIgEJc&q=${query}&limit=50&offset=0&rating=pg-13&lang=en`);
    setQuery('');
  }

  return (
    <div>
      <h1 className='center-text'>Giphy</h1>
      <div className='search-container'>
        <button
          className='big'
          onClick={onClickHandle}
        >
          Search Giphy
        </button>
        <input
          className='big'
          placeholder='Search'
          type='text'
          value={query}
          onChange={(e) => {
            if (e.keyCode === 13) {
              onClickHandle()
            } else {
              setQuery(e.target.value);
            }
          }}
        />
      </div>
    </div>
  );
}

export default GetGiphy;