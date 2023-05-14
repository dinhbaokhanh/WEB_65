const initStateReducer = {
    isLoading: true,
    data: {
        todolist : []
    }
}
const todoListReducer = (state = initStateReducer, action) => {
    switch (action.type){
        case 'ADD':
            return {
                ...state,
                data: {
                    todolist: [...state.data.todolist, action.payload]
                }
            }
        default:
            return state
    }
};
export default todoListReducer