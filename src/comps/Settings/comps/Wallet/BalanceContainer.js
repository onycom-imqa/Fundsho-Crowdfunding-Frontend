import AddMoneyMondel from "./AddMoneyModel";
import {useIMQA} from "imqa-react-sdk";

const BalanceContainer = ({balance,admin}) => {
    const IMQARef = useIMQA(); // 삽입
    return (
        <div ref={IMQARef}>
    <div className="balance-container mb-5 flex-wrap d-flex align-center justify-content-between">
        <span className="balance-amount">
            <span className="fs-5"> Current Balance </span>
            <span> ₹ {balance}</span>
        </span>
        {
            admin!=="true" &&
            <span>
            {/* <button onClick={ (e) =>{ alert('Payment gateway is under maintenance') }}> + Add Money to Wallet</button> */}
            <AddMoneyMondel/>
            <div></div>
            <button style={{margin:"10px 0px"}} onClick={ (e) =>{  alert('Payment gateway is under maintenance') }}> Withdraw</button>
        </span>
        }
    </div>
        </div>
     );
}

export default BalanceContainer;
