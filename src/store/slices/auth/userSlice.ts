import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {SLICE_BASE_NAME} from "@/store/slices/auth/constants";

type User = {
    username: string
}

export type UserState = {
    user: User
}
const initialState: UserState = {
    user: {
        username: ""
    }
};
const userSlice = createSlice({
    name: `${SLICE_BASE_NAME}/user`,
    initialState: initialState,
    reducers: {
        setCurrentSearchKeyWordList: (state, action: PayloadAction<User>) => {
            state.user = action.payload;
        },
    },
});
export const {} = userSlice.actions;
export default userSlice.reducer;