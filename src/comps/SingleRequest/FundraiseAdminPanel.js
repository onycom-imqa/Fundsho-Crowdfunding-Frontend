import { Card, CardContent } from "@mui/material";
import UpdateFundraiseModel from "./UpdateFundraiseModel";
import {useIMQA} from "imqa-react-sdk";

const FundraiseAdminPanel = ({reqStatus,requestId,reloadRequest}) => {
    const IMQARef = useIMQA(); // 삽입
    return (
        <div ref={IMQARef}>
        <Card sx={{mb:1}}>
            <CardContent>
                <CardContent>
                    <h5>Admin Panel</h5>
                    <strong>Request Status: </strong>
                    { reqStatus===0 && "Freezed/Blocked" }
                    { reqStatus===1 && "Active" }
                    { reqStatus===2 && "Successfully Closed" }
                    { reqStatus===3 && "User Withdraw in between." }
                    { reqStatus===4 && "Fundraising expired" }
                    {console.log(reqStatus)}
                    <UpdateFundraiseModel reloadRequest={reloadRequest} requestId={requestId}/>
                </CardContent>
            </CardContent>
        </Card>
        </div>
     );
}

export default FundraiseAdminPanel;
