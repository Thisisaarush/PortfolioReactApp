import React from 'react';
import './home.scss';
import Logo from '../../images/logomain.png';
import js from '../../images/js.png';
import css from '../../images/css.png';
import react from '../../images/react.png';
import node from '../../images/node.png';
import ComputerSvg from '../../images/computer.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTerminal } from '@fortawesome/free-solid-svg-icons';



class Home extends React.Component { 
  constructor () {
    super();
    this.state = {
      icon: 'terminal'
    }
  } 

  iconChange = (e) => {
    if (this.state.icon === 'terminal') {
      this.setState({icon: 'meh'});
      e.target.style.color = 'teal';
    } else {
      this.setState({icon: 'terminal'});
      e.target.style.color = 'black';
    }
  }

  render () {
    return (
      <div className='home-container'>
  
        <div className='nav-container'>
          <img src={Logo} alt='logo' />
          <FontAwesomeIcon className='theme' icon={faTerminal} style={{width: '24px', height: '24px', position: 'absolute', right: '5%'}} onClick={this.iconChange} />
        </div>
  
        <div>
          <div className='iconjs'><img className='tech-icons' src={js} alt='logo' /></div>
          <div className='iconreact'><img className='tech-icons' src={react} alt='logo' /></div>
          <div className='iconcss'><img className='tech-icons' src={css} alt='logo' /></div>
          <div className='iconnode'><img className='tech-icons' src={node} alt='logo' /></div>
        </div>
  
        <div>
          <img className='computer' src={ComputerSvg} alt='computer' />
        </div>
  
        <div className='intro-container'>
          <p id='intro'>&lt;Intro&gt;</p>
          <span id='first-line'>
            {'Hi, This is'}
            <p>AARUSH TANWAR</p>
          </span>
          <span id='second-line'>
            {'I design and code beautiful things.'}
          </span>
          <p id='intro'>&lt;/Intro&gt;</p>
        </div>
  
  
      </div>
    );
  }
}

export default Home;