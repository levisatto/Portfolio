import React from 'react';
import Typical from 'react-typical';
import './Profile.css';

export default function Profile() {
  return (
    <div className='profile-container'>
        <div className='profile-parent'>
            <div className='profile-details'>
                <div className='colz'>
                    <div className='colz-icon'>

                        <a href='https://www.facebook.com/levi.sattosiedschlag'>
                            <i className='fa fa-facebook-square'>
                            </i>
                        </a>
                        <a href='https://github.com/levisatto/'>
                            <i className='fa fa-github'>
                            </i>
                        </a>
                        <a href='https://www.instagram.com/'>
                            <i className='fa fa-instagram'>
                            </i>
                        </a>
                        <a href='https://www.youtube.com/'>
                            <i className='fa fa-youtube-square'>
                            </i>
                        </a>
                        <a href='https://www.linkedin.com/in/levisattosiedschlag/'>
                            <i className='fa fa-linkedin'>
                            </i>
                        </a>

                    </div>
                </div>
                <div className='profile-details-name'>
                    <span className='primary-text'>
                        {" "}Hello, I am <span className='highlighted-text'>Levi</span>
                    </span>
                </div>
                <div className='profile-details-role'>
                    <span className='primary-text'>
                        {" "} 
                        <h1>
                            {" "} 
                            <Typical
                                loop={Infinity}
                                steps={[
                                    "Web Dev",
                                    1500,
                                    "ReactJS",
                                    1500,
                                    "React Native",
                                    1500,
                                    "Django",
                                    1500,
                                ]}
                            />
                        </h1>
                        <span className='profile-role-tagline'>Programador entusiasmado com sede de conhecimento.</span>
                    </span>
                </div>
                <div className='profile-options'>
                    <button className='btn primary-btn'>Hire me</button>
                    <a href='cv.pdf' download='Levi cv.pdf'>
                        <button className='btn highlighted-btn'>Get Resume</button>
                    </a>
                </div>
            </div> 
            <div className='profile-picture'>
                <div className='profile-picture-background'>

                </div>
            </div>
        </div>
    </div>
  )
}
