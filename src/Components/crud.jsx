import { useState, useEffect } from 'react';
import axios from 'axios';

const Crud = () => {
    const [userData, setUserData] = useState(
        {
        name: '',
        email: '',
        password: '',
       }
    );

    const [tableData, setTableData] = useState([]);
    const [editingId, setEditingId] = useState(null);

    const postData = (e) => {
        e.preventDefault();

        if (editingId !== null) {
            // If editingId is not null, update existing data
            axios.put(`http://localhost:3000/userData/${editingId}`, userData).then((res) => {
                console.log(res);
                setEditingId(null); // Reset editing state
            });
            getData()
        } else {
            // If editingId is null, create new data
            axios.post('http://localhost:3000/userData', userData).then((res) => {
                console.log(res);
            });
            getData()
        }

        // Clear input fields
        setUserData({
            name: '',
            email: '',
            password: '',
        });
    };

    const getData = () => {
        axios.get('http://localhost:3000/userData').then((res) => {
            setTableData(res.data);
        });
    };

    const editData = (id, name, email, password) => {
        setEditingId(id);
        setUserData({
            name,
            email,
            password,
        });
    };

    const deleteData = (id) => {
        axios.delete(`http://localhost:3000/userData/${id}`).then((res) => {
            console.log(res);
            getData(); // Fetch updated data after deletion
        });
    };

    useEffect(() => {
        getData();
    },[]);


    console.log(userData);


    return (
        <div className="form-div">
            <div>
                <h1>Add user</h1>
            </div>
            <form action="" className="form" onSubmit={postData}>
                <div className="form-input-field">
                    <label>Name</label>
                    <input
                        type="text"
                        className="input-field"
                        value={userData.name}
                        onChange={(e) => setUserData({ ...userData, name: e.target.value })}
                    />
                    <label>Email</label>
                    <input
                        type="email"
                        className="input-field"
                        value={userData.email}
                        onChange={(e) => setUserData({ ...userData, email: e.target.value })}
                    />
                    <label>Password</label>
                    <input
                        type="password"
                        className="input-field"
                        value={userData.password}
                        onChange={(e) => setUserData({ ...userData, password: e.target.value })}
                    />
                </div>
                <button className="btn" type="submit">
                    {editingId !== null ? 'Save Edit' : 'Submit'}
                </button>
            </form>

            <div className="data-in-table-form">
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Password</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableData.map((res) => (
                            <tr key={res.id}>
                                <td>{res.id}</td>
                                <td>{res.name}</td>
                                <td>{res.email}</td>
                                <td>{res.password}</td>
                                <td>
                                <button onClick={() => editData(res.id, res.name, res.email, res.password)}>Edit</button>
                                 <button onClick={() => deleteData(res.id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Crud;

