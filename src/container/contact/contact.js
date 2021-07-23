import React from 'react';
import './contact.scss';
import Logo from '../../images/logomain.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  return (
    <div className='contact-container'>

      <div className='start-project'>
        <h2>Start a project</h2>
        <p>Interested in working together?</p>
        <a className='dothis' href={'mailto: tanwaraarush007@gmail.com'}><h3>Let's do this</h3></a>
      </div>

      <div className='contact'>
        <div className='contact-text'>
          <img src={Logo} alt='logo' style={{width:'60px', height: '60px', marginBottom: '20px'}} />
          <p>Living & Learning Everyday.</p>
        </div>
        <div className='contact-icons'>
          <a href='https://twitter.com/thisisaarush/'><FontAwesomeIcon icon={faTwitter} style={{width: '22px', height: '22px', margin: '20px', marginTop: 'none', marginBottom: 'none'}}/></a>
          <a href='https://www.linkedin.com/in/aarush-tanwar-97331214b/'><FontAwesomeIcon icon={faLinkedin} style={{width: '22px', height: '22px', margin: '20px', marginTop: 'none', marginBottom: 'none'}}/></a>
          <a href='https://github.com/thisisaarush/'><FontAwesomeIcon icon={faGithub} style={{width: '22px', height: '22px', margin: '20px', marginTop: 'none', marginBottom: 'none'}}/></a>
          <a href={'mailto: tanwaraarush007@gmail.com'}><FontAwesomeIcon icon={faEnvelope} style={{width: '22px', height: '22px', margin: '20px', marginTop: 'none', marginBottom: 'none'}}/></a>
        </div>

        <div className='last-text'>
            <p className='copy'>&#169;</p>
            <p className='name'>Aarush Tanwar | Made with </p>
            <p className='heart'>&#10084;</p>
        </div>
      </div>

    </div>
  );
}

export default Contact;
