import React, { useEffect, useState } from "react";
import { deleteUser, getListUser } from "../service/UserService";
import { useDispatch } from "react-redux";
import { userInfo } from "../store/action/UserAction";

export default function ListUsers() {
    const dispatch = useDispatch();

    const onGetUserList = () => {
        dispatch(userInfo(users));
    }

    const [users, setUsers] = useState([]);
    const [user, setUser] = useState("");
    const [deleteUserId, setDeleteUserId] = useState(null);

    useEffect(() => {
        getListUser().then(data => setUsers(data));
    }, [user]);

    const handleDeleteUser = async (e) => {
        e.preventDefault();
        await deleteUser(deleteUserId);
        setUsers(users.filter(user => user.id !== deleteUserId));
        setDeleteUserId(null);
    };

    return (
        <div>
            <h1>USER LIST</h1>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>USERNAME</th>
                        <th>EMAIL</th>
                        <th>WEBSITE</th>
                        <th>PHONE</th>
                        <th>ACTION</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => {
                        return (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                <td>{user.website}</td>
                                <td>{user.phone}</td>
                                <td>
                                    <a href="#deleteModal" className="delete" title="Delete" data-toggle="modal">
                                        <button type="button" onClick={() => setDeleteUserId(user.id)}>DELETE</button>
                                    </a>
                                </td>
                            </tr>
                        )
                    })
                    }
                </tbody>
            </table>
            <div id="deleteModal" className="modal fade">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <form onSubmit={handleDeleteUser}>
                            <div className="modal-header" style={{ background: '#575041', color: 'white' }}>
                                <h4 className="modal-title">Delete User</h4>
                                <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                            </div>
                            <div className="modal-body">
                                {deleteUserId &&
                                    <>
                                        <p>Are you sure you want to delete this user?</p>
                                        <p>ID: {deleteUserId}</p>
                                        <p>Name: {users.find(user => user.id === deleteUserId)?.name}</p>
                                        <p className="text-warning"><small>This action cannot be undone.</small></p>
                                    </>
                                }
                            </div>
                            <div className="modal-footer">
                                <input style={{ background: '#82817f' }} type="button" className="btn btn-default" data-dismiss="modal" defaultValue="Cancel" />
                                <input style={{ background: '#cda45e' }} type="submit" className="btn btn-danger" defaultValue="Delete" disabled={!deleteUserId} />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}