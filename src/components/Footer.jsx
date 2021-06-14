import "./Footer.css";
import { SocialIcon } from 'react-social-icons';

function Footer() {
    return (
        <div className="footer">
            <div className="social-container">
                <div className="social-links">
                    <SocialIcon url="https://www.facebook.com/IAmFaridullah" fgColor="white" style={{ height: 37, width: 37}} />
                    <SocialIcon url="https://www.instagram.com/iam_faridullah/" fgColor="white" style={{ height: 37, width: 37}} />
                    <SocialIcon url="https://www.twitter.com/iam_faridullah" fgColor="white" style={{ height: 37, width: 37}} />
                    <SocialIcon url="https://www.youtube.com" fgColor="white" style={{ height: 37, width: 37}} />
                </div>
            </div>
            <p className="copyright">All Rights Reserved By @TECHVALLEY</p>
        </div>
    )
}

export default Footer;
