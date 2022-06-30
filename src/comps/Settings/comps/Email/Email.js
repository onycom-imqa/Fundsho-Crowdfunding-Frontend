import {useIMQA} from "imqa-react-sdk";

const Email = () => {
    const IMQARef = useIMQA(); // 삽입
    return (
        <div ref={IMQARef}>
        <>
           <div className="title">Email and SMS</div>

           <div className="subsriptions">

               <div className="sub-element">
                    <div className="sub-element1">
                        <input type="checkbox"/>
                        <span>Feedback for Fundsho</span>
                    </div>
                    <div className="sub-element2">Give feedback on Fundsho.</div>
               </div>

               <div className="sub-element">
                    <div className="sub-element1">
                        <input type="checkbox"/>
                        <span>Reminder emails</span>
                    </div>
                    <div className="sub-element2">Get notifications you may have missed.</div>
               </div>

               <div className="sub-element">
                    <div className="sub-element1">
                        <input type="checkbox"/>
                        <span>Product emails</span>
                    </div>
                    <div className="sub-element2">Get tips about Fundsho.</div>
               </div>

               <div className="sub-element">
                    <div className="sub-element1">
                        <input type="checkbox"/>
                        <span>News emails</span>
                    </div>
                    <div className="sub-element2">Learn about new Fundsho features..</div>
               </div>
           </div>
        </>
        </div>
     );
}

export default Email;
