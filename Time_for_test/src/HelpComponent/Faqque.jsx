import { useEffect, useState } from "react";
// import { ISSUES } from "../../utils/constant";

const Faqque = ({type}) => {
    const [isOpen, setIsOpen] = useState(false);

    //console.log(type);
    const [Issuelist ,setIssuelist]=useState([]);
    
    const toggleContent = () => {
        setIsOpen(!isOpen);
    }
    useEffect(()=>{
        const issuedata= async()=>{
            try{
                console.log("Hello ")
                const list=  await fetch(`https://www.swiggy.com/dapi/support/issues/partner-onboarding?`)
                if(!list.ok)
                {
                    throw new error(`error stats${list.status}`)
                }
                const jsonlist= await list.json();
                const issues=jsonlist?.data?.issues?.data ;
                //console.log(issues)
                setIssuelist(issues);
                console.log(Issuelist[0])
            }catch(error){
                console.log(error);
            }
           
        }
        issuedata();

    },[])


    return (
        <div>
            <div className="heading_faq">Partner Onboarding</div>
            <div>
                {/* <div className="subque">
                    <button className="faq-button"><span className="faq-label">I want to partner my restaurant with Swiggy</span><span className="dropdown-icon"></span></button>
                </div> */}
                <div className="subque">
                    <button className="faq-button" onClick={toggleContent}>
                        <span className="faq-label">I want to partner my restaurant with Swiggy</span>
                        {/* <span className="dropdown-icon">{isOpen ? '▲' : '▼'}</span> */}
                    </button>
                    {isOpen && (
                        <div className="faq-content">
                            <p>Here are the steps to partner your restaurant with Swiggy:</p>
                            <ul>
                                <li>Step 1: Visit the Swiggy website.</li>
                                <li>Step 2: Navigate to the partnership section.</li>
                                <li>Step 3: Fill out the partnership form.</li>
                                <li>Step 4: Submit the required documents.</li>
                                <li>Step 5: Wait for approval from Swiggy.</li>
                            </ul>
                        </div>
                    )}
                </div>
                {/* <details>
                    <summary>Epcot Center</summary>
                    <p>Epcot is a theme park at Walt Disney World Resort featuring exciting attractions, international pavilions, award-winning fireworks and seasonal special events.</p>
                </details>   */}
            </div>
        </div>
    )
}

export default Faqque;