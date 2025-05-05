const FooterFollow = () => {
    return <footer className="footer-follow">
        <div className="container">
            <div className="footer-follow-content">
                <div className="footer-signup">
                    <button className="footer-signup-btn">SIGN-UP NOW!</button>
                </div>
                <div className="footer-social">
                    <h3 className="footer-social-title">FOLLOW US</h3>
                    <ul className="footer-social-list">
                        <li className="footer-social-item">
                            <a href="#" className="footer-social-link">
                                <img src="/src/assets/img/footer-facebook.png" alt="Facebook" />
                            </a>
                        </li>
                        <li className="footer-social-item">
                            <a href="#" className="footer-social-link">
                                <img src="/src/assets/img/footer-twitter.png" alt="Twitter" />
                            </a>
                        </li>
                        <li className="footer-social-item">
                            <a href="#" className="footer-social-link">
                                <img src="/src/assets/img/footer-youtube.png" alt="YouTube" />
                            </a>
                        </li>
                        <li className="footer-social-item">
                            <a href="#" className="footer-social-link">
                                <img src="/src/assets/img/footer-pinterest.png" alt="Pinterest" />
                            </a>
                        </li>
                        <li className="footer-social-item">
                            <a href="#" className="footer-social-link">
                                <img src="/src/assets/img/footer-periscope.png" alt="Periscope" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
}

export default FooterFollow;