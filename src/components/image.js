import React from 'react';

const Image = (props) => {
  const src = props.src;

  if (!src) {
    return (
      <div>
        <h5>enter your word</h5>
        <h6>or letter</h6>
        <h5>in the search box</h5>
      </div>
    );

  }
  return (
    <div className="word-image-poem">
      <img alt="one word poem image by google street view" src={src} />
    </div>
  );
}

export default Image;
