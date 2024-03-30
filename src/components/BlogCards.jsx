import React from 'react';
import Section from './Sections';

const BlogCard = ({ imgURL, title, article }) => {
  return (
    
      
        <div className='w-[400px] overflow-hidden border border-n-1/10 rounded-3xl'>
          <div>
            <img src={imgURL} alt='Blog Image' />
          </div>
          <div className='mt-6 mb-3'>
            <h1 className='h5 pl-5 pr-5'>{title}</h1>
          </div>
          <div className='mt-5 pl-5 pr-5 mb-10'>
            <p>{article}</p>
          </div>
        </div>
      
   
  );
};

export default BlogCard;
