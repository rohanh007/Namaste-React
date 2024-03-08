import ('../template/css/help.css');
// import { useEffect } from 'react/cjs/react.production.min';
import {Help_data} from '../utils/constant';
import { useEffect, useState } from "react"; 
const Help = () => {
    const [Faqtitle, setFaqtitle ] = useState(null)
    useEffect(() => {
        const helpdata = async () => {
            try {
                const data = await fetch(Help_data);
                if (!data.ok) {
                    throw new Error(`Http server status:${data.status}`);
                }
                const json = await data.json();
                console.log(json);
                const issue=json?.data?.issueTypes?.data;
                console.log(issue);
                setFaqtitle(issue);
            } catch(error) {
                console.error("Http error :", error.message);
            }
        }
        helpdata();
    }, [])
    console.log(Faqtitle);
    return (
        <div className="main-container">
            <div className="header-section">
                <div className="sub-header">
                    <h1 className="main-title">Help & Support</h1>
                    <div className="tagline">Let's take a step ahead and help you better.</div>
                </div>
            </div>
            <div className="faq-list">
                <div className="_2QhOV _3glSS">
                    <div className="faq">
                        <div className="faq_head">
                            <ul>
                               { Faqtitle.map((issue)=>( <li className="fq_tab _1W0l-"  key={issue.type}><span className="fq_span fmxXC">{issue.title}</span></li>))
                                                               }                               
                                {/* <li className="fq_tab"><span className="fq_span">Legal</span></li>
                                <li className="fq_tab"><span className="fq_span">FAQs</span></li> */}
                            </ul>
                        </div>
                        <div className="que_list">
                            <div>
                                <div className="heading_faq">Partner Onboarding</div>
                                <div>
                                   <div className="subque">
                                        <button className="faq-button"><span className="faq-label">I want to partner my restaurant with Swiggy</span><span className="dropdown-icon"></span></button>
                                    </div>
                                    <div className="subque">
                                        <button className="faq-button"><span className="faq-label">What are the mandatory documents needed to list my restaurant on Swiggy?</span><span className="dropdown-icon"></span></button>
                                    </div>
                                    <div className="subque">
                                        <button className="faq-button"><span className="faq-label">After I submit all documents, how long will it take for my restaurant to go live on Swiggy?</span><span className="dropdown-icon"></span></button>
                                    </div>
                                    <div className="subque">
                                        <button className="faq-button"><span className="faq-label">What is this one time Onboarding fees? Do I have to pay for it while registering?</span><span className="dropdown-icon"></span></button>
                                    </div>
                                    <div className="subque">
                                        <button className="faq-button"><span className="faq-label">Who should I contact if I need help & support in getting onboarded?</span><span className="dropdown-icon"></span></button>
                                    </div>
                                    <div className="subque">
                                        <button className="faq-button"><span className="faq-label">How much commission will I be charged by Swiggy?</span><span className="dropdown-icon"></span></button>
                                    </div>
                                    <div className="subque">
                                        <button className="faq-button"><span className="faq-label">I don’t have an FSSAI licence for my restaurant. Can it still be onboarded?</span><span className="dropdown-icon"></span></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="footer"></div>
        </div>


    );
};
export default Help;