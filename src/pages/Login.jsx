import axios from "axios"
import { useState } from "react"
import { FaSignInAlt } from "react-icons/fa"
import { useDispatch } from "react-redux"
import { userLogin } from "../redux/actions/userAction"
import { useNavigate } from "react-router-dom"
const initialState = {
    email: '',
    password: ''
}

const Login = () => {
    const [data, setData] = useState(initialState)
    const [error, setError] = useState('')
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post(`http://localhost:8000/api/user/login`, { data })
            .then((response) => {
                dispatch((userLogin(response.data)))
                navigate('/home')
                console.log(response);
            }).catch((error) => {
                console.log(error.response.data.message);
                setError(error.response.data.message)
            })

    }
    console.log(data, 'dataa');
    return (
        <>
            <section className="heading">
                <h1>
                    <FaSignInAlt />Login
                </h1>
                {/* <p>Login Page</p> */}
            </section>
            <section className="form" >

                <form onSubmit={handleSubmit} >
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
                    <div className="form-group" >
                        <button className="btn btn-block"  >submit</button>
                    </div>
                </form>
            </section>
            {
                error &&
                <h1>{error}</h1>
            }
        </>
    )
}

export default Login