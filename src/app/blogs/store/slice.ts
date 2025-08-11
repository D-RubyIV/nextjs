import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit'
import {TableQueries} from '@/@types/common'
import {apiAllSystemEntity, apiOverviewSystemEntity} from "@/services/SystemService";

export type Blog = {
    id: string
    title: string
    code: string
    content: string
    description: string
    featured: string
    enabled: boolean
    image: string
    view: number
    created_at: string
}
export type Category = {
    id: string
    name: string
    code: string
}
type GetSystemBlogListResponse = {
    content: Blog[]
    totalElements: number
    pageable: {
        pageNumber: number
        pageSize: number
        totalElements: number
    }
}

export type BlogInitState = {
    listLoading: boolean
    featuredLoading: boolean
    categoryLoading: boolean
    featuredBlogs: Blog[]
    blogs: Blog[]
    categories: Category[]
    tableData: TableQueries
    selectedFilterCategoryId: string
}

const initState: BlogInitState = {
    listLoading: true,
    featuredLoading: true,
    categoryLoading: true,
    blogs: [],
    featuredBlogs: [],
    categories: [],
    selectedFilterCategoryId: '',
    tableData: {
        total: 10,
        pageIndex: 1,
        pageSize: 10,
        query: '',
        sort: {
            order: 'asc',
            key: '',
        },
    },
}
export const SLICE_NAME = 'blogSlice'

export const getFeaturedBlogs = createAsyncThunk(
    SLICE_NAME + '/getFeaturedBlogs',
    async () => {
        const response = await apiAllSystemEntity<Blog[]>(
            '/api/v1/library/articles/featured',
        )
        return response.data
    },
)

export const getAllRelatedCategory = createAsyncThunk(
    SLICE_NAME + '/getAllRelatedCategory',
    async () => {
        const response = await apiAllSystemEntity<Category[]>(
            '/api/v1/library/categories',
        )
        return response.data
    },
)

export const getListBlog = createAsyncThunk(
    SLICE_NAME + '/getListBlog',
    async ({
               data,
               selectedFilterCategoryId,
           }: {
        data: TableQueries
        selectedFilterCategoryId: string
    }) => {
        const response = await apiOverviewSystemEntity<
            GetSystemBlogListResponse,
            TableQueries
        >(
            `/api/v1/library/articles/search?category_id=${selectedFilterCategoryId}`,
            data,
        )
        return response.data
    },
)

const slice = createSlice({
    name: SLICE_NAME,
    initialState: initState,
    reducers: {
        setTableData: (state, action: PayloadAction<TableQueries>) => {
            state.tableData = action.payload
        },
        clearListBlog: (state) => {
            state.blogs = []
            state.tableData.pageIndex = 1
            state.tableData.total = 0
        },
        setSelectedFilterCategoryId: (state, action: PayloadAction<string>) => {
            state.selectedFilterCategoryId = action.payload
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getListBlog.fulfilled, (state, action) => {
                state.tableData.total = action.payload.totalElements
                state.tableData.pageIndex = action.payload.pageable.pageNumber
                state.tableData.pageSize = action.payload.pageable.pageSize
                const mergedBlogs = [...state.blogs, ...action.payload.content]
                state.blogs = Array.from(new Map(mergedBlogs.map(blog => [blog.id, blog])).values())
                state.listLoading = false
            })
            .addCase(getListBlog.pending, (state) => {
                state.listLoading = true
            })
            .addCase(getFeaturedBlogs.fulfilled, (state, action) => {
                state.featuredBlogs = action.payload
                state.featuredLoading = false
            })
            .addCase(getFeaturedBlogs.pending, (state) => {
                state.featuredLoading = true
            })
            .addCase(getAllRelatedCategory.fulfilled, (state, action) => {
                state.categories = action.payload
                state.categoryLoading = false
            })
            .addCase(getAllRelatedCategory.pending, (state) => {
                state.categoryLoading = true
            })
    },
})
export const {setTableData, clearListBlog, setSelectedFilterCategoryId} =
    slice.actions
export default slice.reducer
