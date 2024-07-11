import React from 'react';
import '../style/footer.css';


const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-section">
                    <h4>Contact Us</h4>
                    <p>Email: jagdtri2003@gmail.com </p>
                    <p>Phone: +91 1234567890</p>
                    <p>Address: Prayagraj, Uttar Pradesh</p>
                </div>
                <div className="footer-section">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="/about">About Us</a></li>
                        <li><a href="/shop">Shop</a></li>
                        <li><a href="/faq">FAQ</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h4>Follow Us</h4>
                    <div className="social-icons">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-facebook"></i></a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-twitter"></i></a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-instagram"></i></a>
                        <a href="https://www.linkedin.com/in/jagdamba-tripathi/" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-linkedin"></i></a>
                    </div>
                </div>
                <div className="footer-section">
                    <h4>Newsletter</h4>
                    <form>
                        <input type="email" placeholder="Your Email" required />
                        <button type="submit">Subscribe</button>
                    </form>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} 
                   <span className='footer-name'> Jagdamba Tripathi</span>. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
