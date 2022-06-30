import UserModel from "./userModel";
import {useIMQA} from "imqa-react-sdk";

const UserTableRow = ({name,userId,email}) => {
    const IMQARef = useIMQA(); // 삽입
    return (
        <div ref={IMQARef}>
        <tr>
            <th scope="row">{userId}</th>
            <td>{name}</td>
            <td>{email}</td>
            <td>
                <UserModel userId={userId} model_text={"Manage user"}/>
            </td>
        </tr>
        </div>
     );
}

export default UserTableRow;
