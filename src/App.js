import React, { useState } from 'react';
import { useAPI } from './utils/useApi';
import './AppForAll.css';

import GetGiphy from './presentational-component/GetGiphy';
import ShowGifs from './presentational-component/ShowGifs';

function App() {
  const [ response, fetchData ] = useAPI();
  const [ query, setQuery ] = useState('');

  return (
    <div className='app-container'>
      <GetGiphy
        fetchData={fetchData}
        query={query}
        setQuery={setQuery}
      />
      {response.isDone && <ShowGifs data={response.data.data}/>}
    </div>
  );
}

export default App;
