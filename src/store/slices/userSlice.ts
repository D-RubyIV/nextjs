import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const SLICE_NAME = "userSlice"

type User = {
    username: string
}

type UserDataState = {
    user: User
}
const initialState: UserDataState = {
    user: {
        username: ""
    }
};
const userSlice = createSlice({
    name: SLICE_NAME,
    initialState: initialState,
    reducers: {
        setCurrentSearchKeyWordList: (state, action: PayloadAction<User>) => {
            state.user = action.payload;
        },
    },
});
export const {} = userSlice.actions;
export default userSlice.reducer;