import React from 'react'
import Button from '@material-ui/core/Button';



export default function Header(props) {

    return (
        <div>
            {console.log(props)}
              <Button  style={props.theme.palette.mycolor} >header component</Button>
              <br/>
            HEADER
        </div>
    )
}
