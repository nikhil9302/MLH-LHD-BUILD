import PropTypes from 'prop-types'
import { useLocation } from 'react-router-dom'
import Button from './Button'

const Header = ({title, onAdd, showAdd, hcolor }) => {  
    const location = useLocation()  
    return (
        <header className = "header">
           <h1 style={{color: hcolor}}>{title}</h1>
           {location.pathname === '/'&& ( <Button 
           color ={showAdd?'red':'green'} 
           text={showAdd ? 'Close' : 'Add'} 
           click={onAdd}/> )}          
        </header>
    )
}

Header.defaultProps = {
    title: 'ResoluteApp',
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}
// CSS in JS (dynamic styling)
//const headingStyle = {
//    color: 'red', backgroundColor: 'black'
//}

export default Header

