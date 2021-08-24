import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';
import IconButton from '@material-ui/core/IconButton';
import Collapse from '@material-ui/core/Collapse';
import CloseIcon from '@material-ui/icons/Close';

import { notificationtClose } from '../../redux/actions/notification';
import { useSelector, useDispatch } from 'react-redux'
import { NOTIFICATION_CLOSE } from '../../redux/actions/actiontypes/notification'


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
        
  },
  alert: {
      backgroundColor: props => props.color,
      marginBottom: 10
      //backgroundColor: `red`,
      //color:'white'
  }
}));

const Notification = () => {  
  const notification = useSelector((state) => state.notification);
  const dispatch = useDispatch();
  const classes = useStyles({color:notification.color});



  const closeNotification = () => {
    notificationtClose(dispatch({type:NOTIFICATION_CLOSE}));
  }
  
  useEffect(
    () => {
      if (notification.activated) {
          setTimeout(
          closeNotification, 6000
        );
      }      
    }
  )

  return (
    <div className={classes.root}>
    
      <Collapse in={notification.activated}>
        <Alert
          className={classes.alert}
          severity={notification.severity}
          variant="filled"
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={closeNotification}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
        >
          {notification.message}
        </Alert>
      </Collapse>
    </div>
  );
}

export default Notification;