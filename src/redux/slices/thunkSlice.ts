import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit'

export interface thunkState {
    list: any[] | null
}

const initialState: thunkState = {
    list: null,
}

// First, create the thunk
export const fetchUserById = createAsyncThunk(
    'users/fetchByIdStatus',
    async (userId, thunkAPI) => {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos')
        const res = await response.json()
        return res
    }
)

export const thunkSlice = createSlice({
    name: 'list',
    initialState,
    reducers: {
        hideList: (state) => { state.list = null }
    },
    extraReducers: (builder) => {
        // Add reducers for additional action types here, and handle loading state as needed
        builder.addCase(fetchUserById.fulfilled, (state, action) => {
            const list = action.payload.filter((item, index) => index < 5)
            state.list = list
        })
    },
})

// Action creators are generated for each case reducer function
export const {hideList} = thunkSlice.actions

export default thunkSlice.reducer