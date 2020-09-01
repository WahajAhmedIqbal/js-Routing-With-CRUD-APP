import React, { useState } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router'

function AddUserPage() {

    let history = useHistory()

    const [user, setuser] = useState({
      name : "",
      username : "",
      email : "",
      phone : ""
    })

    const { name , username , email , phone } = user

    const changehandler = (e) => {
      const { name , value } = e.target
 
      setuser({ ...user , [name] : value})
      // console.log("e" , [name] , value)
    }
    
    const onsubmit = async (e) => {
      e.preventDefault()
      await axios.post("http://localhost:3003/users" , user)
      history.push("/")
    } 

    return (
        <div>
            <h1>Add User</h1>
            <form onSubmit={(e) => onsubmit(e) }>
            <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Name"
              name="name"
              value = {name}
              onChange={changehandler}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Username"
              name="username"
              value={username}
              onChange={changehandler}
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              className="form-control form-control-lg"
              placeholder="Enter Your E-mail Address"
              name="email"
              value={email}
              onChange={changehandler}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Phone Number"
              name="phone"
              value={phone}
              onChange={changehandler}
            />
          </div>
          <button className="btn btn-primary btn-block">Add User</button>
        </form>
            
        </div>
    )
}

export default AddUserPage

