"use client";

import {injectReducer, useAppDispatch} from "@/store";
import reducer, {getAllRelatedCategory, getFeaturedBlogs, getListBlog, useAppSelector} from "@/app/blogs/store";
import {Fragment, useEffect} from "react";
import FeaturedCarousel from "@/app/blogs/components/FeaturedCarousel";
import BlogList from "@/app/blogs/components/BlogList";

injectReducer('blogSlice', reducer)

const BlogPage = () => {
    const { blogs } = useAppSelector((state) => state.blogSlice.data)

    const { tableData, selectedFilterCategoryId} = useAppSelector(
        (state) => state.blogSlice.data,
    )
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(getFeaturedBlogs())
        dispatch(getAllRelatedCategory())
        dispatch(
            getListBlog({
                data: tableData,
                selectedFilterCategoryId: selectedFilterCategoryId,
            }),
        )
    }, [])

    useEffect(() => {
        console.log(blogs)
    }, [blogs])
    
    return (
        <Fragment>
            <div className={'mt-40'}>
                <FeaturedCarousel />
                <BlogList />
            </div>
        </Fragment>
    )
}
export default BlogPage;