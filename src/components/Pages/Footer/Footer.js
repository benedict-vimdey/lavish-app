import React from 'react'
import { Button } from '../../Button'
import { Link } from 'react-router-dom'
import './Footer.css'

function Footer() {
    return (
        <div className='footer-container'>
            <section className='footer-subscription'>
                <p className='footer-subscription-header'>
                    Join our exclusive membership to receive the latest news and trends
                </p>

                <p className='footer-subscription-text'>
                    You can unsubscribe at anytime
                </p>

                <div className="footer-input">
                    <form>
                        <input type='email' name='email' placeholder='Enter your e-mail' className='footer-input'/>
                        <Button buttonStyle='btn-outline'>SUBSCRIBE</Button> 
                    </form>
                </div>

            </section>

            <div className='footer-links'>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2>About Us</h2>
                        <Link to='/sign-up'>How it works</Link>
                        <Link to='/'>Testimonials</Link>
                        <Link to='/'>Careers</Link>
                        <Link to='/'>Investors</Link>
                        <Link to='/'>Terms Of Service </Link>
                    </div>
                    <div className='footer-link-items'>
                        <h2>Contact Us</h2>
                        <Link to='/'>Contact</Link>
                        <Link to='/'>Support</Link>
                        <Link to='/'>Destination</Link>
                        <Link to='/'>Sponsorships</Link>
                    </div>
                </div>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2>Videos</h2>
                        <Link to='/'>Submit Video</Link>
                        <Link to='/'>Ambassadors</Link>
                        <Link to='/'>Agency</Link>
                        <Link to='/'>Influencer</Link>
                    </div>
                    <div className='footer-link-items'>
                        <h2>Social Media</h2>
                        <Link to='/'>Instagram</Link>
                        <Link to='/'>facebook</Link>
                        <Link to='/'>Twitter</Link>
                        <Link to='/'>Snapchat</Link>
                    </div>
                </div>
            </div>        

            <section className='social-media'>
                <div className='social-media-wrap'>
                    <div className='footer-logo'>
                        <Link to='/' className='social-logo'>
                            <i className='fas fa-fingerprint' /> LAVISH
                        </Link>
                    </div>
                    <small className='website-rights'>LAVISH &copy; 2021 </small>
                    <div className='social-icons'>
                        <Link to='/' className='social-icon-link facebook'
                        target='blank' aria-label='Facebook'
                        >
                            <i className='fas fa-facebook-f'/>

                        </Link>
                        <Link to='/' className='social-icon-link instagram'
                        target='blank' aria-label='Instagram'
                        >
                            <i className='fas fa-instagram'/>

                        </Link>
                        <Link to='/' className='social-icon-link twitter'
                        target='blank' aria-label='Twitter'
                        >
                            <i className='fas fa-twitter'/>

                        </Link>
                        <Link to='/' className='social-icon-link youtube'
                        target='blank' aria-label='Youtube'
                        >
                            <i className='fas fa-youtube'/>

                        </Link>
                        <Link to='/' className='social-icon-link snapchat'
                        target='blank' aria-label='Snapchat'
                        >
                            <i className='fas fa-snapchat'/>

                        </Link>
                    </div>

                </div>
            </section> 
            
        </div>
    )
}

export default Footer
