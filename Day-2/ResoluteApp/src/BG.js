import App from './App'

const BG = ({bgtheme}) => {
    const bgColor = bgtheme ? "black" : "white";
    const txtColor = bgtheme ? "white" : "black"
    return (         
        <div className='container' style={{backgroundColor: bgColor}}>
            <App txtColor={txtColor} bgColor = {bgColor}/>
        </div>
    )
}

export default BG
