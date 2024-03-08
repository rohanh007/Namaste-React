import('../template/css/help.css');
// import { useEffect } from 'react/cjs/react.production.min';
import { Help_data } from '../utils/constant';
import { useEffect, useState } from "react";
import Faqque from './HelpComponent/Faqque';
const Help = () => {
    const [Faqtitle, setFaqtitle] = useState(null)
    useEffect(() => {
        const helpdata = async () => {
            try {
                const data = await fetch(Help_data);
                if (!data.ok) {
                    throw new Error(`Http server status:${data.status}`);
                }
                const json = await data.json();
                console.log(json);
                const issue = await json?.data?.issueTypes?.data;
                console.log(issue);
                setFaqtitle(issue);
            } catch (error) {
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
                                {Faqtitle.map((issue) => (<li className="fq_tab _1W0l-" key={issue.type}><span className="fq_span fmxXC">{issue.title}</span></li>))
                                }
                                {/* <li className="fq_tab"><span className="fq_span">Legal</span></li>
                                <li className="fq_tab"><span className="fq_span">FAQs</span></li> */}
                            </ul>
                        </div>
                        <div className="que_list">
                           <Faqque/>
                        </div>
                    </div>
                </div>
            </div>
            <div class="footer"></div>
        </div>


    );
};
export default Help;