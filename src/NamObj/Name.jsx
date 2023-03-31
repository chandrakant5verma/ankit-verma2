import React from 'react'
import "./Name.css"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const Name = () => {
    return (
        <div >
            <div className="NameLeftCompo">
                <input type="text" className="FormInput" placeholder="FirstName" />
                <span >String</span>
                <ExpandMoreIcon className="ExpandMoreIcon" />

            </div>
            <div className="NameLeftCompo">
                <input type="text" className="FormInput" placeholder="LastName" />
                <span >String</span>
                <ExpandMoreIcon className="ExpandMoreIcon" />

            </div>

        </div>
    )
}

export default Name