import { useEffect, useState } from 'react';
import SpinLoader from '../../../Homepage/SpinLoader';
import { APIIP } from '../../config';
import BalanceContainer from './BalanceContainer';
import TransactionTable from './Transactions';
import {useIMQA} from "imqa-react-sdk";

const Wallet = () => {
    const IMQARef = useIMQA(); // 삽입
    const [transaction,setTransaction] = useState({});
    const [balance,setBalance] = useState(0);

    useEffect(() => {
        var url = APIIP.ip+"/users/"+localStorage.getItem("userId")+"/wallet?sessionKey="+localStorage.getItem("sessionKey");
        console.log(url);
        fetch(url)
        .then((response)=> response.json())
        .then((response => {
            setTransaction(response.transaction);
            setBalance(response.balance);
            var ele = document.getElementById("spinloader");
            setTimeout(() => { ele.classList.add("invisible"); }, 500);
        }));
    },[])



    return (
        <div ref={IMQARef}>
        <>
            <SpinLoader/>
            <div className="title">Wallet</div>
            <div className="container">
                <BalanceContainer balance={balance}/>
                <TransactionTable transaction={transaction}/>
            </div>
        </>
        </div>
     );
}

export default Wallet;
