import axios from "axios"
import { useState } from "react"
import { FaUser } from "react-icons/fa"
import {  useNavigate } from "react-router-dom"
import { useSelector,useDispatch } from "react-redux"
import { userLogin } from "../redux/actions/userAction"

const initialState = {
    name: '',
    email: '',
    password: ''
}

const Signup = () => {
    const navigate=useNavigate()
    const dispatch=useDispatch()
    const [data, setData] = useState(initialState)
    const [error,setError]=useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post(`http://localhost:8000/api/user/register`, { data })
            .then((response) => {
                dispatch(userLogin(response.data))
                navigate('/home')
                console.log(response, 'response');
                
            }).catch((error) => {
                console.log(error.response.data.message);
                setError(error.response.data.message)
            })
        console.log(data, 'signupdatta');
    }
    return (
        <>
            <section className="heading">
                <h1>
                    <FaUser />Register
                </h1>
                <p>plese create an account</p>
            </section>
            <section className="form" >

                <form onSubmit={handleSubmit}  >
                    <div className="form-group" >

                        <input onChange={(e) => {
                            setData({ ...data, [e.target.name]: e.target.value })
                        }} type="text"
                            name="name"
                            value={data.name}
                            placeholder="Enter Your Name" />
                    </div>
                    <div className="form-group" >
                        <input onChange={(e) => {
                            setData({ ...data, [e.target.name]: e.target.value })
                        }} type="email"
                            name="email"
                            value={data.email}
                            placeholder="Enter Your Email" />
                    </div>
                    <div className="form-group" >
                        <input onChange={(e) => {
                            setData({ ...data, [e.target.name]: e.target.value })
                        }} type="password"
                            name="password"
                            value={data.password}
                            placeholder="Enter Your Password" />
                    </div>
                    <div className="form-group" ></div>
                    <button className="btn btn-block" >submit</button>
                </form>
            </section>
            {
                error && 
                <h1>{error}</h1>
            }
        </>
    )
}

export default Signup