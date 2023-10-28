import { Link } from 'react-router-dom'
import facebook from '../assets/facebook.png'
import '../css/header.css'

function Navbar() {
    return (
        <header>
            <div className='header-container'>
                <div className='header-container-left'>
                    <div className='header-logo'>
                        <div className='logo-container'>
                            <img src={facebook} alt="" />
                        </div>
                        <div>
                            <p>Ali's Full Stack Blog</p>
                        </div>
                    </div>
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