import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type User = {
    name: string;
};

type TAuthState = {
    user: User | null;
};

const initialState: TAuthState = {
    user: null
};

const authSlice = createSlice({
    name: "dAuth",
    initialState,
    reducers: {
        signinUser: (state, { payload }: PayloadAction<User>) => {
            state.user = payload;
        },
        logout: (state) => {
            state.user = null;
        }
    }
});

const { actions, reducer: AuthReducer } = authSlice;

export const { signinUser } = actions;
export default AuthReducer;
