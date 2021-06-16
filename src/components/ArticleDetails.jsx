import './ArticleDetails.css';

import { SocialIcon } from 'react-social-icons';

import CommentForm from './CommentForm';

import Article from './Article';

function ArticleDetails() {
    return (
        <>
            <div className="article-details">
                <div className="title">
                    <h1>Facebook Working On Its First Smartwatch To Be Launched Next Summer</h1>
                </div>
                <div className="author-pubdate">
                    <h5>By Faridullah Khan - 13 june, 2021</h5>
                </div>
                <div className="article-image">
                    <img src="https://www.techworm.net/wp-content/uploads/2021/06/facebook-218x150.jpg" alt="article-img" />
                </div>
                <div className="description">
                    <p>Apple has announced a swathe of upgrades for its tablet, phone and computer operating systems that could change the way millions of people’s data is transmitted over the internet – a boon for privacy enthusiasts, but a potential problem for advertisers, law enforcement agencies and governments.</p>
                    <p>At Apple’s Worldwide Developers Conference yesterday, the company announced that upcoming updates to its web browser will offer an anonymous browsing feature called Private Relay. This will disguise user details from website operators by using a series of intermediary servers. Software to do this, such as the Tor network, already exists, but Apple’s move will make this kind of obfuscation far more mainstream.</p>
                    <p>The voice-recognition assistant Siri will also process audio on the device, rather than sending it to Apple servers for analysis, and changes to Apple’s email app will stop senders tracking when a message has been read and the IP address from which it was accessed.</p>
                    <p>The changes have provoked frustration from people working in marketing who track users to build up a profile and better target them. Matt Taylor, a product manager at the Financial Times, said that it will weaken the ability to provide advertising-supported services. He pointed out that around 50 per cent of email marketing is opened on an iPhone using the Mail app, so half of the data on users that was previously collected will be lost. (New Scientist, like most online publications, collects a variety of information about its readers.)</p>
                    <p>The new features are a continuation of Apple’s recent clampdown on invasive advertising habits. With iOS 14.5, the current version of its operating system, the company forced apps to tell users what they were doing to collect data on users and to seek their permission.</p>
                    <p>Alan Woodward at the University of Surrey, UK, says Apple is simply meeting demand from users growing increasingly concerned about privacy.</p>
                    <p>“There are very few things you pay for on the internet, but the trouble is the old adage: if you’re not paying for the product, you are the product,” he says. “I think it’s a way of differentiating themselves in the market by saying: ‘You’re paying us, we’ll protect you. We’ve sold you a vessel in which your life lives, we want you to feel that that is secure and private’.”</p>
                </div>
                <div className="ending">
                    <p><hr /></p>
                    <span>The End</span>
                    <p><hr /></p>
                </div>
                <CommentForm/>
            </div>
            <div className="sidebar">
                <div className="social-icons">
                    <h2>Follow Us On Social Media</h2>
                    <div className="sidebar-social-icons">
                        <SocialIcon url="https://www.facebook.com/IAmFaridullah" fgColor="white" style={{ height: 37, width: 37}} />
                        <SocialIcon url="https://www.instagram.com/iam_faridullah/" fgColor="white" style={{ height: 37, width: 37}} />
                        <SocialIcon url="https://www.twitter.com/iam_faridullah" fgColor="white" style={{ height: 37, width: 37}} />
                        <SocialIcon url="https://www.youtube.com" fgColor="white" style={{ height: 37, width: 37}} />
                    </div>
                </div>
                <div className="recent-posts-title">
                    <h3>Recent Posts</h3>
                    <div className="recent-posts">
                        <Article 
                            image="https://www.techworm.net/wp-content/uploads/2021/06/APP-STORE-218x150.jpg" 
                            title="Facebook Working On Its First Smartwatch To Be Launched Next Summer" 
                            author="By Faridullah Khan" 
                            pub_date="June 13, 2021" 
                        />
                        <Article 
                            image="https://www.techworm.net/wp-content/uploads/2021/02/S21-ULTRA-5G-324x160.png" 
                            title="Facebook Working On Its First Smartwatch To Be Launched Next Summer" 
                            author="By Faridullah Khan" 
                            pub_date="June 13, 2021" 
                        />
                         <Article 
                            image="https://www.techworm.net/wp-content/uploads/2021/04/BITCOIN-324x160.jpg" 
                            title="Facebook Working On Its First Smartwatch To Be Launched Next Summer" 
                            author="By Faridullah Khan" 
                            pub_date="June 13, 2021" 
                        />
                        <Article 
                            image="https://www.techworm.net/wp-content/uploads/2021/06/Sony-Airpeak-S1-324x160.jpg" 
                            title="Facebook Working On Its First Smartwatch To Be Launched Next Summer" 
                            author="By Faridullah Khan" 
                            pub_date="June 13, 2021" 
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default ArticleDetails;
