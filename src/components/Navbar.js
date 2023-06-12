import logo from '../Imp/logo.png'
import userIcon from '../Imp/user-sign-icon-person-symbol-human-avatar-isolated-on-white-backogrund-vector.jpg'
export default function Navbar(props) {
    return (<div>
        <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href="#">
                <img src={logo} width="300" height="100" />
            </a>
            <div>
            <img src={userIcon} width={100} border-radius='50%'alt='userIcon' />
            <p>Hey, User</p>
            </div>
        </nav>
    </div>)
}

