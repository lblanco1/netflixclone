import React from 'react';
import './FeaturedMovie.css';

export default ({item}) => {
    return (
      <section className="featured" style={{
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundImage: `url()`
      }}>
          <div>{item.original_name}</div>
      </section>
    );
}