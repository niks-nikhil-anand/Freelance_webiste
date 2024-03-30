import React from 'react';
import { benefits } from '../constants/index.js';
import Heading from './Heading.jsx';
import Section from './Sections.jsx';
import Arrow from '../assets/svg/Arrow.jsx';
import { GradientLight } from './design/Benefits.jsx';
import ClipPath from '../assets/svg/ClipPath.jsx';

const ProjectHome = () => {
  return (
    <Section id="features">
      <div className="container relative z-2">
        <Heading
          className="md:max-w-md lg:max-w-2xl"
          title="Chat Smarter, Not Harder with Brainwave"
        />

        <div className="flex flex-wrap gap-12 mb-6 ">
          {benefits.map((item) => (
            <div
              className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]"
              style={{
                backgroundImage: `url(${item.backgroundUrl})`,
              }}
              key={item.id}
            >
             
              <div className="relative z-2 flex flex-col min-h-[28rem]  pb-[2.4rem] pointer-events-none ">
             
              <div className=' pr-[2.4rem]'>
              <img className='  mt-4 pl-5  rounded-tl-[50px]  rounded-tr-[50px] ' src={item.imgURL} alt={item.title} />
              <h5 className="h5 mb-4 mt-10  pl-[2.4rem]">{item.title}</h5>
                <p className="body-2 mb-6 text-n-3 pl-[2.4rem]">{item.text}</p>
                <div className="flex items-center mt-auto pl-[2.4rem]  ">
                  <img
                    src={item.iconUrl}
                    width={48}
                    height={48}
                    alt={item.title}
                  />
                  <p className="ml-auto font-code text-xs font-bold text-n-1 uppercase tracking-wider">
                    Explore more
                  </p>
                  <Arrow />
              </div>
               
                </div>
              </div>

              {item.light && <GradientLight/>}

              <div
                className="absolute inset-0.5 bg-n-8"
                style={{ clipPath: 'url(#benefits)' }}
              >
                <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10">
                  {item.imageUrl && (
                    <img
                      src={item.imageUrl}
                      width={380}
                      height={362}
                      alt={item.title}
                      className="w-full h-full object-cover rounded-3xl"
                    />
                  )}
                </div>
              </div>

              <ClipPath />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default ProjectHome;
