import { combineReducers } from 'redux';

const todoReducer = (todolist = [], action) => {
    switch (action.type) {

        case 'ADD_TODO':
            return [...todolist, action.payload]
        case 'DELETE_TODO':
            //console.log(todolist, 'DELETE_TODO')
            todolist.splice(action.payload, 1)
            return [...todolist]
        case 'EDIT_TODO':  
        // console.log(action.payload);
            todolist.splice(action.payload.id, 1,action.payload.newVal)
            return [...todolist]
        /* const updatedList = { ...TodoList };
        updatedList[action.payload.id] = action.payload;
        return updatedList; */
        // return state.map(todoList => {
        //     if(todoList.id === action.payload.id) {
        //         return action.payload;
        //     } else {
        //         return todoList;
        //     }
        // })
        default:
            return todolist
    }

}


export default combineReducers({
    task: todoReducer
})