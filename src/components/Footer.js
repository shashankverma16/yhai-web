import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                {/* Quick Links */}
                <div className="footer-section quick-links">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Trekking Packages</a></li>
                        <li><a href="#">Contact Us</a></li>
                    </ul>
                </div>

                {/* Social Media Links */}
                <div className="footer-section social-links">
                    <h3>Follow Us</h3>
                    <ul>
                        <li><a href="#"><img src="facebook-icon.png" alt="Facebook" /></a></li>
                        <li><a href="#"><img src="twitter-icon.png" alt="Twitter" /></a></li>
                        <li><a href="#"><img src="instagram-icon.png" alt="Instagram" /></a></li>
                        <li><a href="#"><img src="linkedin-icon.png" alt="LinkedIn" /></a></li>
                    </ul>
                </div>

                {/* Newsletter Subscription */}
                <div className="footer-section subscribe">
                    <h3>Subscribe to our Newsletter</h3>
                    <p>Stay updated with our latest treks and adventures!</p>
                    <form>
                        <input type="email" placeholder="Enter your email" required />
                        <button type="submit">Subscribe</button>
                    </form>
                </div>
            </div>

            {/* Copyright Section */}
            <div className="footer-bottom">
                <p>&copy; 2025 Your Company. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
