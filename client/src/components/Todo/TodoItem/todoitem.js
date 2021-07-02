import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Modal, 
    Backdrop, 
    Fade, 
    TextField, 
    Checkbox, 
    Button, 
    FormControlLabel, 
    Card,
    CardActions,
    CardContent,
    Typography } from '@material-ui/core';
import Moment from 'react-moment';

import DeleteIcon from '@material-ui/icons/Delete';
import Edit from '@material-ui/icons/Save';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';

import useStyles from './styles';
import { deleteTodo, updateTodo } from '../../../redux/actions/todo';

const TodoItem = ({item}) => {
    const [state, setState] = useState({...item, open:false});
    const dispatch = useDispatch();
    const classes = useStyles();

    const handleOpen = () => {
        setState({...item, open:true});
    }

    const handleClose = () => {
        setState({...item, open:false});
    }

    const handleInput = (e) => {
        if(e.target.id === "completed"){
            setState({...state, [e.target.id] : !state.completed});
            return;
        }
        setState({...state, [e.target.id] : e.target.value});        
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(updateTodo(state));
        handleClose();
    }
    
    return(
        <div>            
            <Card className={classes.itemCard.root}>
                <CardContent>
                    <Typography variant="body2" component="p">
                        <p>
                            Status: {item.completed? <CheckIcon className={classes.check}/>: <CloseIcon className={classes.cross}/>}
                        </p>                        
                    </Typography>        
                    <Typography variant="h5" component="h2">
                    {item.title}
                    </Typography>
                    <Typography variant="body2" component="p">                        
                        <p>{item.task}</p>
                        <p>Created <Moment fromNow>{item.createdAt}</Moment></p>
                    </Typography>
                </CardContent>
                <CardActions>
                <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    className={classes.button}
                    startIcon={<Edit />}
                    onClick={() => handleOpen()}
                >
                    Edit
                </Button>
                    <Button
                        variant="contained"
                        color="secondary"
                        size="large"
                        className={classes.button}
                        startIcon={<DeleteIcon />}
                        onClick={() => dispatch(deleteTodo(item._id))} 
                    >
                        Delete
                    </Button>
                </CardActions>
            </Card>

            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={state.open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                timeout: 500,
                }}
            >
                <Fade in={state.open}>
                    <div className={classes.paper}>
                        <h2 id="transition-modal-title">Update</h2>
                        <TextField 
                            id="title" 
                            label="Title" 
                            value={state.title} 
                            onChange={(e) => handleInput(e)}/>
                        <br />
                        <TextField 
                            id="task" 
                            label="Task"
                            multiline
                            rows={4} 
                            value={state.task} 
                            onChange={(e) => handleInput(e)} />
                        <br />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    id="completed"
                                    checked={state.completed}
                                    onChange={(e) => handleInput(e)}
                                    name="Completed"
                                    color="primary" />
                            }
                            label="Completed"
                        />
                        <br />
                        <Button size="large" variant="contained" color="primary" onClick={(e) => handleSubmit(e)} startIcon={<Edit />}>Update</Button>
                        <br />
                    </div>
                </Fade>
            </Modal>        
        </div>        
    );
}

export default TodoItem;