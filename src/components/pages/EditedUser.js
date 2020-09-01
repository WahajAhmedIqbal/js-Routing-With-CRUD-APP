import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useHistory  , useParams} from 'react-router'

function EditedUser() {
    
    let history = useHistory()
    const {id} = useParams()
    // alert(id)
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
    
    
    useEffect(() => {
        loadUser()
    }, [])

    const onsubmit = async (e) => {
      e.preventDefault()
      await axios.put(`http://localhost:3003/users/${id}` , user)
      history.push("/")
    } 

    const loadUser = async () => {
        const result = await axios.get(`http://localhost:3003/users/${id}`)
        console.log(result)
        setuser(result.data)
    }

    return (
        <div> 
            <h1>Edit User</h1>
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
          <button className="btn btn-warning btn-block">Edited User</button>
        </form>
            
        </div>
    )
}

export default EditedUser

