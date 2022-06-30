import { useEffect } from "react";
import UserTableRow from "./userTableRow";
import {APIIP} from "../../../config.js";
import {useState} from "react";
import {useIMQA} from "imqa-react-sdk";


const UserTable = () => {
    const IMQARef = useIMQA(); // 삽입

    const [users,setUsers] = useState([]);

    useEffect(()=> {
        fetch(APIIP.ip+"/admin/users?sessionKey="+localStorage.getItem("sessionKey"),{
            method: "GET",
            headers: {"Content-type": "application/json; charset=UTF-8"}
        }).then(response => response.json())
        .then(response => { setUsers(response); } );
    },[])



    return (
        <div ref={IMQARef}>
        <>
            <table className="table">
        <thead>
            <tr>
            <th scope="col">User ID</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col"></th>
            </tr>
        </thead>
        <tbody>
            {
                users
                &&
                users.map((obj,idx) => {

                   return <UserTableRow name={obj.fname+ obj.lname} key={idx} userId={obj.userId} email={obj.email}/>
                })
            }

        </tbody>
        </table>
        </>
        </div>
     );
}

export default UserTable;
