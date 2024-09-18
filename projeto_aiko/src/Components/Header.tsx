import logo from '../../public/teste-frontend-v4/img/aiko.png'
import "../styles.css"

const Header = () => {
    return (
        <div className='header'>
            <img className='logo' src={logo} alt="Logo Aiko" />
        </div>
    )
}

export default Header