import React , { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


function Home() {

    const [Users, setUsers] = useState([])

    useEffect(() => {
        loadUser()
    }, [])

    const loadUser = async () => {
        const result = await axios.get("http://localhost:3003/users")
        setUsers(result.data.reverse())
    }

    const deletefun = async (id) => {
        await axios.delete(`http://localhost:3003/users/${id}`)
        loadUser()
    }

    return (
        <div>
            <h1>home page</h1>
            <table class="table">
            <thead class="thead-dark">
                <tr>
                <th scope="col">S No</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody >
                {Users.map((user , index) => (
                    <tr>
                        <td>{ index + 1 }</td>
                        <td>{user.name}</td>
                        <td>{ user.email}</td>
                        <td>
                            <Link className="btn btn-outline-primary mr-2" to={`edit/${user.id}`}>Edit</Link>
                            <Link className="btn btn-outline-danger mr-2" onClick={ () => deletefun(user.id)}>Delete</Link>￼￼￼￼
                        </td>
                    </tr>
                ))}
            </tbody>
            </table>

            
        </div>
    )
}

export default Home
