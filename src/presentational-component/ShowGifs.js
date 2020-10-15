import React from 'react';

import Gif from './Gif';

const ShowGifs = (props) => {
  const { data } = props;
  return (
      <div className='gifs-container'>
        {data.map((obj, i) => 
          <Gif
            key={obj.id}
            url={obj.images.original.url}
          />
        )}
      </div>
  );
}

export default ShowGifs;