import { Link } from 'react-router-dom'
import logo from '../assets/demo-logo.png'
import '../css/header.css'

function Navbar() {
    return (
        <header>
            <div className='header-container'>
                <div className='header-container-left'>
                    <a href='http://localhost:5173' className='logo-container'>
                        <div className=''>
                            <img src={logo} alt="" />
                        </div>
                        <div>
                            <p>Ali's Full Stack Blog</p>
                        </div>
                    </a>
                </div>

                <div className='header-container-right'>
                    <nav className='nav-container'>
                        <ul className='nav-ul'>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/blogs">Blogs</Link>
                            </li>
                            <li>
                                <Link to="/admin">Admin</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}
export default Navbar