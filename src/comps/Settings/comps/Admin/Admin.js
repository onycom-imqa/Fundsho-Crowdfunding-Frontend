import { Route } from "react-router-dom";
import AdminPanelNavigation from "./AdminNavabar";
import Fundraises from "./Fundraises/FundraisesTable";
import UserTable from "./Users/userTable";
import {useIMQA} from "imqa-react-sdk";

const AdminPanel = () => {
    const IMQARef = useIMQA(); // 삽입
    return (
        <div ref={IMQARef}>
        <>
            <AdminPanelNavigation/>

            <Route path="/settings/admin/users">
                <UserTable/>
            </Route>
            <Route path="/settings/admin/fundraisers">
                <Fundraises/>
            </Route>
        </>
        </div>
     );
}

export default AdminPanel;
