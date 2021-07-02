import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      text:{
        display:'flex'
      }
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
    button: {
      margin: theme.spacing(1),
    },
    itemCard: {
      root: {
        minWidth: 275,
      },
      bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
      },
      title: {
        fontSize: 14,
      },
      pos: {
        marginBottom: 12,
      }
    }, 
    cross: {
      color:'red'
    },   
    check:{
      color:'green',        
    }
    
    // completed:{

    //     position:'absolute',
    //     top: 15,
    //     right: 15,
      
    // }

  }));
