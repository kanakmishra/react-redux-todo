//action creator
export const addTask = task => {
    //return an action
    return{
        type: 'ADD_TODO',
        payload: task
    };
};

export const deleteTask = id => {
    return {
        type: "DELETE_TODO",
        payload: id
    };
};
  
export const editTask = (id, updatedList )=> {
    console.log(id,updatedList)
    return {
        type: "EDIT_TODO",
        payload: {
            id:id,
            newVal:updatedList
        }
    };
};
