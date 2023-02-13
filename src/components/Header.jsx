import { FaSignInAlt, FaUser } from "react-icons/fa"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"

const Header = () => {
    const user = useSelector((state) => state.user.user)
    // console.log(user,'usrfrored');
    const product = useSelector((state) => state.data.product)
    console.log(product, 'frm redux');
    return (
        <>
            <header className='header' >
                <div className='logo' >
                    <Link to='/' > Dashboard
                    </Link>
                </div>
                <ul>
                    <li>
                        <Link to='/login' >
                            <FaSignInAlt />
                        </Link>
                        {user &&
                            <h5>{user.name}</h5>
                        }
                    </li>
                    <li>
                        <Link to='/register' >
                            <FaUser />
                        </Link>
                    </li>
                </ul>

            </header>
            <div style={{display:'flex',justifyContent:'center',alignItems:'center'}} >

                {
                    product && product.length > 0 && product.map((product) => {
                        return (
                            <ul>
                                <li> PRODUCT NAME:  {product.productName}</li>
                                <li>  DESCRIPTION:  {product.description}</li>
                                <li> PRICE :{product.price}</li>
                            </ul>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Header