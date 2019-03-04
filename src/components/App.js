import React from 'react';
import TodoList from './TodoList';
//import CreateList from "./CreateList";
//import ShowList from "./ShowList";

const App = () => {
    return(
        <div className='ui container grid'> 
            <div className='ui row'>
                <div className='column eight wide'>
                    <TodoList />
                </div>
            </div>
        </div>
    );
};

export  default App;
