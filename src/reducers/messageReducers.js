export const setMessageReducer = (state =[],action) => {
    if(action.type === 'SET_MESSAGE'){
        return action.payload;
    }

    return state;
}