import { createContext, useReducer } from "react";

export const MemoriesContext = createContext();

export const memoriesReducer = (state, action) => {
    switch (action.type) {
        case 'SET_MEMORIES':
            return {
                memories: action.payload
            }
        case 'CREATE_MEMORY':
            return {
                memories: [...state.memories, action.payload]
            }
        case 'DELETE_MEMORY':
            return {
                memories: state.memories.filter((me) => me._id !== action.payload._id)
            }
        default:
            return state
    }
}

export const MemoriesContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(memoriesReducer, {
        memories: null
    });

    return (
        <MemoriesContext.Provider value={{ ...state, dispatch }} >
            {children}
        </MemoriesContext.Provider>
    )
}
