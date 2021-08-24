import React, { useState } from 'react';
import { TextField, Button, Typography } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import useStyles from './styles';
import BackupIcon from '@material-ui/icons/Backup';

import { createTodo } from '../../redux/actions/todo';

const Form = () => {
    const styles = useStyles();
    const defaultState = {title:'',task:''};
    const dispatch = useDispatch();
    const [postData, setPostData] = useState(defaultState);
    
    const handleTextInput = (e) => setPostData({...postData, [e.target.id] : e.target.value});
    
    const clear = () => setPostData(defaultState);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createTodo(postData));
        clear();
    }

    return(
        <div>
            <Typography variant={'h3'} align={'center'}>Form</Typography>
            <form>
                <TextField 
                    id="title" 
                    label="Title"
                    className={styles.text} 
                    value={postData.title} 
                    onChange={(e) => handleTextInput(e)} 
                    variant="standard" />
                <TextField 
                    id="task" 
                    label="Task"
                    className={styles.text} 
                    multiline
                    rows={4}
                    value={postData.task} 
                    onChange={(e) => handleTextInput(e)} 
                    variant="standard" />
                <Button 
                    className={styles.button}
                    size="large" 
                    variant="contained"                    
                    color="primary" 
                    value={postData.task}
                    startIcon={<BackupIcon />} 
                    onClick={(e) => handleSubmit(e)}>Submit</Button>
            </form> 
        </div>
    )
}

export default Form;