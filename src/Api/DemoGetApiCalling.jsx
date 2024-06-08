import axios from 'axios'
import React , {useEffect, useState} from 'react'
import CustomLoader from '../components/CustomLoader'

const DemoGetApiCalling = () => {

    const [message,setMessage]=useState("")
    const [users, setusers] = useState([])
    const [isLoading, setisLoading] = useState(false)

    const getuserData=async ()=>{

      setisLoading(true)
    
                let users=await axios.get("https://node5.onrender.com/user/user")
                setMessage(users.data.message)
                setusers(users.data.data)

                setisLoading(false)
    };


    const deleteUser=async (id)=>{
      const res=await axios.delete(`https://node5.onrender.com/user/user/${id}`);
      if(res.status===204){
          getuserData();
      }
    }

    useEffect(()=>{
      getuserData();
    },[])
  return (
    <div>
      <table className="table table-dark">
        <thead>
            <tr>
                <td>ID</td>
                <td>NAME</td>
                <td>AGE</td>
                <td>EMAIL</td>
                <td>STATUS</td>
                <td>ACTION</td>
            </tr>
        </thead>
        <tbody>
            {users?.map(user=>{
                return(
                    <tr>
                        <td>{user._id}</td>
                        <td>{user.name}</td>
                        <td>{user.age}</td>
                        <td>{user.email}</td>
                        <td>{user.isActive ? "Active" : "Not Active"}</td>
                        <td><button onClick={()=>{
                          deleteUser(user._id)
                        }} className='btn btn-danger'>Delete</button></td>
                    </tr>
                );
            })}
        </tbody>
      </table>

      {/* <button onClick={()=>{
        getuserData();
      }}>
                Get User Data
      </button> */}
      {isLoading && <CustomLoader />}
    </div>
  )
}

export default DemoGetApiCalling
