import React,{useState} from 'react';
import Button from '@material-ui/core/Button';
import { Snackbar } from '@material-ui/core';



export default function Snack(props) {
    const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
    return (
        <div>
             <Button  style={props.theme.palette.mycolor2} onClick={handleClick}>
        Open success snackbar
      </Button>
            <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
       <div style={props.theme.palette.mycolor}>
       This is a success message!
           </div>
      </Snackbar>
        </div>
    )
}


