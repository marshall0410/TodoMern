import React from 'react';
import { useSelector } from 'react-redux';
import { Grid, Typography } from '@material-ui/core';

import TodoItem from './TodoItem/todoitem';

const Todo = () => {
    const todo = useSelector((state) => state.todo);
    
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
                            <Grid item sm={12} md={6}>
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