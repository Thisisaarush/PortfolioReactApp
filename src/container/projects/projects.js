import React from 'react';
import './projects.scss';
import windowSvg from '../../images/window.svg';
import celebface from '../../images/celebface.png';
import robot from '../../images/robot.png';
import math from '../../images/math.png';
import nasa from '../../images/nasa.png';
import music from '../../images/music.png';
import quote from '../../images/quote.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const Projects = () => {
  return (
    <div className='projects-page-container'>
      <div className='project-title-container'>
        <h1>Projects</h1>
        <p>Here are few projects I've worked on recently. Want to know more? <a className='emailme' href={"mailto: tanwaraarush007@gmail.com"}>Email Me</a></p>
      </div>

      <div className='projects-container-block'>
        <div className='projects-container'>
          <div className='project'>
            <a href='https://github.com/Thisisaarush/CelebFaceRecognitionAiReactApp' target='_blank' rel="noreferrer"><img src={celebface} alt='app' /></a>
              <span>
                <h2>Celeb Face Recognition AI</h2>
              </span>
          </div>

          <div className='project'>
            <a href='https://github.com/Thisisaarush/SearchRobotsReactApp' target='_blank' rel="noreferrer"><img src={robot} alt='app' /></a>
            <span>
              <h2>Chitti Robots React App</h2>
            </span>
          </div>

          <div className='project'>
            <a href='https://github.com/Thisisaarush/MathSprintGame' target='_blank' rel="noreferrer"><img src={math} alt='app' /></a>
            <span>
              <h2>Math Sprint Game</h2>
            </span>
          </div>

          <div className='project'>
            <a href='https://github.com/Thisisaarush/NASA_ApiPictures' target='_blank' rel="noreferrer"><img src={nasa} alt='app' /></a>
            <span>
              <h2>Nasa Api Pictures</h2>
            </span>
          </div> 

          <div className='project'>
            <a href='https://github.com/Thisisaarush/ModernMusicPlayer' target='_blank' rel="noreferrer"><img src={music} alt='app' /></a>
            <span>
              <h2>Modern Music Player</h2>
            </span>
          </div>

          <div className='project'>
            <a href='https://github.com/Thisisaarush/DailyQuoteGenerator' target='_blank' rel="noreferrer"><img src={quote} alt='app' /></a>
            <span>
              <h2>Daily Quote Generator</h2>
            </span>
          </div>        
        </div>
      </div>

      <img className='window' src={windowSvg} alt='windowsvg'></img>

      <div className='button'>
        <a href='https://github.com/Thisisaarush/' target='_blank' rel="noreferrer">
          <h2>More at GitHub<FontAwesomeIcon icon={faChevronRight} style={{marginLeft: '15px'}}/></h2>
        </a>
      </div>
    </div>
  );
}

export default Projects;