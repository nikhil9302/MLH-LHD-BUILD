import BG from './BG'
import { useState} from 'react'

const Theme = () => {
    const [backgroundTheme, setBgTheme] = useState(false)
    return (
        <>
            <button className='btn' onClick={()=> setBgTheme(!backgroundTheme)} >Dark theme</button>
            <BG bgtheme={backgroundTheme}/>
        </>
    )
}

export default Theme
