import('../template/css/help.css');
import { useEffect, useState } from "react";
// import { useEffect } from 'react/cjs/react.production.min';
import { Help_data } from '../utils/constant';

import Faqque from './HelpComponent/Faqque';
const Help = () => {
    const [Faqtitle, setFaqtitle] = useState([])
    const [Selectedissue ,setSelectedissue]=useState([]);
    //console.log(Selectedissue);
    useEffect(() => {
        const helpdata = async () => {
            try {
                const data = await fetch(Help_data);
                if (!data.ok) {
                    console.log("bro I am here ");
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
                                {Faqtitle.map((issue) => (<li
                                    className="fq_tab _1W0l-"
                                    key={issue.type}
                                    onClick={() => setSelectedissue(issue.type)}>
                                    <span className="fq_span fmxXC">{issue.title}</span>
                                </li>))
                                }
                            </ul>
                        </div>
                        <div className="que_list">
                            <Faqque type={Selectedissue} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer"></div>
        </div>


    );
};

export default Help;