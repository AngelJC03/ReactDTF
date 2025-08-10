import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import facebookLogo from '../../assets/images/footer-photos/icons8-facebook-48.png';
import DTFLogo from '../../assets/images/logo-photos/original-dtf-logo.png';

function Footer() {

    const [email, setEmail] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const formRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();

        setErrorMessage('');
        setSuccessMessage('');

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setErrorMessage('Please enter a valid email address.');
            return;
        }

        const formData = new FormData(formRef.current);

        fetch(formRef.current.action, {
            method: 'POST',
            mode: 'no-cors',
            body: formData
        })
            .then(() => {
                setSuccessMessage('Thank you for subscribing!');
                setEmail('');
                formRef.current.reset();
            })
            .catch(() => {
                setErrorMessage('There was an error. Please try again later.');
            });
    };

    return (
        <footer>
            {/* Newsletter Section */}
            <div className="newsletter-container">
                <h4>NEWSLETTER</h4>
                <p>
                    Subscribe to our newsletter to keep up with our latest news,
                    funding opportunities, and community initiatives!
                </p>

                <div id="mc_embed_shell">
                    <div id="mc_embed_signup">
                        <form
                            ref={formRef}
                            onSubmit={handleSubmit}
                            action="https://davis-tennonfoundation.us20.list-manage.com/subscribe/post?u=ee1896e60a2c02f5c56dffd15&amp;id=e40c54c790&amp;f_id=002cc7f1f0"
                            method="post"
                            className="validate"
                            noValidate
                        >
                            <div className="email-enter">
                                <input
                                    type="email"
                                    name="EMAIL"
                                    className="required email newsletter-input"
                                    required
                                    placeholder="E-mail"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>

                            <div className="clear foot">
                                {errorMessage && (
                                    <div className="response error" style={{ color: 'red' }}>
                                        {errorMessage}
                                    </div>
                                )}
                                {successMessage && (
                                    <div className="response success" style={{ color: 'green' }}>
                                        {successMessage}
                                    </div>
                                )}
                            </div>

                            <div
                                aria-hidden="true"
                                style={{ position: 'absolute', left: '-5000px' }}
                            >
                                <input
                                    type="text"
                                    name="b_ee1896e60a2c02f5c56dffd15_e40c54c790"
                                    tabIndex="-1"
                                    defaultValue=""
                                />
                            </div>

                            <div className="optionalParent">
                                <div className="clear foot">
                                    <input
                                        type="submit"
                                        name="subscribe"
                                        className="subscribe-btn"
                                        value="Subscribe"
                                    />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

                <h2>
                    This newsletter is only intended to send you news regarding the Davis-Tennon Foundation.
                    You will have the option to opt-out at any time.
                </h2>
            </div>

            {/* Main Footer */}
            <div className="footer-container">
                {/* Contact Info */}
                <div className="footer-section contact-info">
                    <h4>Contact Us</h4>
                    <p>
                        Email:{' '}
                        <a href="mailto:agarcia@davis-tennonfoundation.org">
                            agarcia@davis-tennonfoundation.org
                        </a>
                    </p>
                    <a
                        href="https://www.facebook.com/DavisTennonFoundation"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src={facebookLogo}
                            alt="Facebook Logo"
                            className="social-icon"
                        />
                    </a>
                </div>

                {/* Logo and Navigation */}
                <div className="footer-section logo-nav">
                    <Link to="/">
                        <img
                            src={DTFLogo}
                            alt="Davis Tennon Foundation Logo"
                            className="footer-logo"
                        />
                    </Link>
                    <ul className="nav-links">
                        <li><Link to="/in-the-news">In The News</Link></li>
                        <li><Link to="/foundation-staff">Foundation Staff</Link></li>
                        <li><Link to="/what-we-fund">What We Fund</Link></li>
                    </ul>
                    <ul className="nav-links">
                        <li><Link to="/board-members">Board Members</Link></li>
                        <li><Link to="/partners">Partners/Resources</Link></li>
                        <li><Link to="/violas-story">About Viola and Julius</Link></li>
                    </ul>
                </div>

                {/* Donate Button */}
                <div className="footer-section donate">
                    <ul className="donate-links">
                        <li>
                            <a
                                href="https://givebutter.com/0nhBTh"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn"
                            >
                                Donate Now
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="footer-separator"></div>
            <div className="footer-text">
                <p>&copy; {new Date().getFullYear()} Davis-Tennon Foundation. All rights reserved.</p>
                <p>
                    The Davis-Tennon Foundation, founded by Viola Davis and Julius Tennon, is committed to driving meaningful change by funding initiatives that address critical needs in Rhode Island. Focused on empowering women, preventing domestic violence, supporting students, and tackling housing challenges, the Foundation works to remove barriers and create lasting opportunities for underserved communities.
                </p>
            </div>

        </footer>
    );
}

export default Footer;
