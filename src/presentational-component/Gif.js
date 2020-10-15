import React from 'react';

import '../AppForAll.css';

const Gif = (props) => {
  const { url } = props;
  return (
      <div>
        <img
          className='gif'
          src={url} alt='gif video'
        />
      </div>
  );
}

export default Gif;