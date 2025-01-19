import React from 'react'
import { Link } from 'react-router-dom';
import { arrow } from '../assets/icons';

const InfoBox = ({text, link, btnText}) => (
    <div className='info-box'>
        <p className='font-medium sm:text-xl text-center'>{text}</p>
        <Link to={link} className='neo-brutalism-white neo-btn'>
            {btnText}
            <img src={arrow} className='w-4 h-4 object-contain' />
        </Link>
    </div>
)

const renderContent = {
    1: (
        <h1 className='sm-text-xl sm-leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
            Hi, I'm <span className='font-semibold'>Eric</span> 👋
            <br />
            A passionate software developer with a love for algorithms and data structures. 
            <br />
            Programming isn't just my profession—it's my favorite pastime.
        </h1>
    ),
    2: (
        <InfoBox 
            text='Javascript, Typescript, React, C#, Python, Java ... '
            link='/about'
            btnText='Learn more'
        />
    ),
    3: (
        <InfoBox 
            text='Look at some examples of my code skills'
            link='/projects'
            btnText='Visit my portfolio'
        />
    ),
    4: (
        <InfoBox 
            text='Looking for a dev? I am ready for battle!'
            link='/contact'
            btnText="Let's talk"
        />
    )
}

const HomeInfo = ({currentStage}) => {
  return renderContent[currentStage] || null;
}

export default HomeInfo