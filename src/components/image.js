import React from 'react';

const Image = (props) => {
  const src = props.src;

  return (
    <div className="word-image-poem">
      <img alt="one word image poem" src={src} />
    </div>
  );
}

export default Image;
