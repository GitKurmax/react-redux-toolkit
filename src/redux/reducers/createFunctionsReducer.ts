import {createReducer, createAction} from "@reduxjs/toolkit";

export interface todoState {
    todoList: string[]
}

const initialState: todoState = {
    todoList: []
}

export const addTodo = createAction('ADD_TODO', (payload) => ({payload}))
export const removeTodo = createAction('REMOVE_TODO', (payload) => ({payload}))

const createFunctionsReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(addTodo, (state, action) => {
            // "mutate" the array by calling push()
            if (action.payload && !state.todoList.includes(action.payload)) state.todoList.push(action.payload)
        })
        .addCase(removeTodo, (state, action) => {
            // Can still return an immutably-updated value if we want to
            state.todoList = state.todoList.filter(item => item !== action.payload)
        })
})

export default createFunctionsReducer

