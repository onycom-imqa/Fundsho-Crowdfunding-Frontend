import { Link } from "react-router-dom";
import UserModel from "../Users/userModel";
import { Button } from "@mui/material";
import {useIMQA} from "imqa-react-sdk";

const FundraisesTableRow = ({reqId,title,raisedBy}) => {
    const IMQARef = useIMQA(); // 삽입


    return (
        <div ref={IMQARef}>
    <tr>
        <th scope="row">{reqId}</th>
        <td>{title}</td>
        <td>
            <Link to={`/fundraiser/${reqId}`}>
                <Button>{"Open"}</Button>
            </Link>
        </td>
        <td>
            <UserModel userId={raisedBy} model_text={"View Fundraiser"}/>
        </td>
    </tr>
        </div>
     );
}

export default FundraisesTableRow;
