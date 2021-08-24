import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Grid, Typography } from '@material-ui/core';

import TodoItem from './TodoItem/todoitem';
import { getTodo } from '../../redux/actions/todo';

const Todo = () => {
    const todo = useSelector((state) => state.todo);
    const [id, setId] = useState(0);
    const dispatch = useDispatch();
    

    useEffect(() => {
        dispatch(getTodo());
    }, [id, dispatch])
    
    return (
        <div>
            <Typography variant={'h3'} align={'center'}>
            Todo List
            </Typography>                       
            <Grid container spacing={3}>   
                { !todo.length ? 
                    (                        
                        <p>No Todo</p>                        
                    ):(
                        todo.map((item) => (
                            <Grid item sm={12} md={6} key={item._id}>
                                <TodoItem item={item}  />
                            </Grid>
                        ))                        
                    )
                }
            </Grid>               
        </div>        
    )
}
    export default Todo;