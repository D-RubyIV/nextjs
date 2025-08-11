import { createSlice } from "@reduxjs/toolkit";

export const SLICE_NAME = "blogSlice"
type Blog = {
    id: string;
    title: string;
    code: string;
    description: string;
    featured: boolean;
    enabled: boolean;
    image: string;
    view: number;
    category_id: string;
    created_at: string; // ISO datetime string
    updated_at: string; // ISO datetime stringe
}

export type BlogState = {
    blogs: Blog[]
}

const initialState: BlogState = {
    blogs: []
}

const blogSlice = createSlice({
    name: SLICE_NAME,
    initialState: initialState,
    reducers: {

    }
})
export const {} = blogSlice.actions;
export default blogSlice.reducer;