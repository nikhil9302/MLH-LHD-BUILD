import { Link } from 'react-router-dom'

const Footer = ({pcolor}) => {
    return (
        <footer>            
            <Link to='/about' style={{color: pcolor}}>About</Link>
        </footer>
    )
}

export default Footer
