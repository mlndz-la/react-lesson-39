import React, { useEffect, useState } from 'react';
import { apiStatus, useAPI } from './utils/useApi';
import './AppForAll.css';

import GetGiphy from './presentational-component/GetGiphy';
import ShowGifs from './presentational-component/ShowGifs';

function App() {
  const [ query, setQuery ] = useState('');
  const [ data, fetchData ] = useAPI();

  const [ gifs, setGifs ] = useState([]);

  useEffect(() => {
    console.log('useEffect')
  }, [])

  return (
    <div className='app-container'>
      <GetGiphy
        setQuery={setQuery}
        fetchData={fetchData}
      />
      <ShowGifs
        gifs={gifs}
      />
    </div>
  );
}

export default App;
