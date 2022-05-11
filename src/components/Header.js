import { Link, Outlet } from "react-router-dom"



function Header() {


    return (
        <>
            <nav className='navbar navbar-expand-sm bg-dark navbar-dark'>
                <div className="container-fluid ">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link active" to="/signin">Registration</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/login">Log In</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/workshop">Workshop</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="#">Link</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        <Outlet />
        </>
    )


}

export default Header