import { useEffect, useState } from "react";
// import { ISSUES } from "../../utils/constant";

const Faqque = ({type}) => {
    const [isOpen, setIsOpen] = useState(false);

    console.log(type);
    const [Issuelist ,setIssuelist]=useState([]);
    
    const toggleContent = () => {
        setIsOpen(!isOpen);
    }
    useEffect(()=>{
        const issuedata= async()=>{
            try{
                console.log(type)
                const list=  await fetch(`https://www.swiggy.com/dapi/support/issues/partner-onboarding`)
                if(!list.ok)
                {
                    throw new Error(`error stats${list.status}`)
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
            {Issuelist.map((issue,index)=>(
            <div>
                <div className="heading_faq">Partner Onboarding</div>
                <div className="subque">
                    <button className="faq-button" onClick={toggleContent}>
                        <span className="faq-label">I want to partner my restaurant with Swiggy</span>
                        {/* <span className="dropdown-icon">{isOpen ? '▲' : '▼'}</span> */}
                    </button>
                    {isOpen && (
                        <div className="faq-content">
                            <div>
                                <a rel="noopener noreferrer" target="_blank" href="https://www.swiggy.com/partner-with-us/" className="_7bf5B">Partner with us</a>
                                <div className="GM_Lh">
                                    <button className="_2aDLa">
                                        <a className="_1vMNs" href="mailto:partnersupport@swiggy.in?subject=I want to partner my restaurant with Swiggy">SEND AN EMAIL</a>
                                        <div className="_1tK48">We will revert within 24-48 hrs</div>
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            ))}
        </div>

    )
}

export default Faqque;