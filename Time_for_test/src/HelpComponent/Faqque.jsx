import { useEffect, useState } from "react";
// import { ISSUES } from "../../utils/constant";

const Faqque = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const [Issuelist ,setIssuelist]=useState([]);
    const [issueid, setIssueid]=useState([])
    const toggleContent = () => {
        setIsOpen(!isOpen);
    }

    const getsid =(id)=>{
        setIssueid(id);
        toggleContent();
    }

   
    useEffect(()=>{
        const issuedata= async()=>{
            try{
               
                 const list=  await fetch(`https://www.swiggy.com/dapi/support/issues/${props.issueKey}`)
      
                if(!list.ok)
                {
                    throw new Error(`error stats${list.status}`)
                }
                const jsonlist= await list.json();
                const issues=jsonlist?.data?.issues?.data ;
                console.log(issues)
                setIssuelist(issues);
               
            }catch(error){
                console.log(error);
            }
           
        }
        issuedata();

    },[props.issueKey])


    return (
        <div>
            <div className="heading_faq">{props.title}</div>
            {Issuelist.map((issue,index)=>(
            <div>
                {console.log(issue)}
                <div className="subque">
                    <button className="faq-button" id="{issue.id}" onClick={()=>getsid(issue.id)} >
                        <span className="faq-label">{issue.title}</span>
                        {/* <span className="dropdown-icon">{isOpen ? '▲' : '▼'}</span> */}
                    </button>
                        {isOpen && issue.description && issueid===issue.id && (
                            <div className="faq-content">
                                <div className="issue_description">{issue.description}</div>
                            </div>
                        )}
                        {isOpen && issue.options[0] && issueid===issue.id && (
                            <div className="faq-content">
                            <div>
                                <a rel="noopener noreferrer" target="_blank" href={issue.hyperLink} className="hyperlinktext">{issue.hyperLinkText}</a>
                                <div className="partner_div">
                                    <button className="partner_btn">
                                        <a className="link_mail" href={`mailto:${issue.options[0].emailId}?subject=${issue.title}`}>SEND AN EMAIL</a>
                                        <div className="waittime">{issue.options[0].waitTime}</div>
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