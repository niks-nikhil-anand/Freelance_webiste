import React from 'react';
import Heading from '../components/Heading';
import BlogCard from '../components/BlogCards';
import Section from '../components/Sections';

const Blogs = () => {
  return (
    <Section>
      <div className='container relative z-2 flex flex-col'>
        <Heading
          title="News"
          text="Below is the latest real estate news we get regularly updated from reliable sources."
        />
        <div className='flex gap-9'>
          <div>
            <BlogCard
              imgURL='https://flex-home.botble.com/storage/properties/1-2-410x270.jpg'
              title='BCG sets great store by real estate negotiations'
              article='BCG leaders shared with investors at a meeting this month that real estate and renewable energy will be the two main activities of the group. In the field of manufacturing, BCG only retains businesses that...'
            />
          </div>
          <div>
            <BlogCard
              imgURL='https://flex-home.botble.com/storage/properties/2-2-410x270.jpg'
              title='BCG sets great store by real estate negotiations'
              article='BCG leaders shared with investors at a meeting this month that real estate and renewable energy will be the two main activities of the group. In the field of manufacturing, BCG only retains businesses that...'
            />
          </div>
          <div>
            <BlogCard
              imgURL='https://flex-home.botble.com/storage/properties/download-410x270.jpg'
              title='BCG sets great store by real estate negotiations'
              article='BCG leaders shared with investors at a meeting this month that real estate and renewable energy will be the two main activities of the group. In the field of manufacturing, BCG only retains businesses that...'
            />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Blogs;
