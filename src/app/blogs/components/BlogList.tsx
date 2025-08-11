import React, { Fragment, useCallback, useEffect, useRef, useState } from 'react'

import cloneDeep from 'lodash/cloneDeep'
import debounce from 'lodash/debounce'
import { HiSearch } from 'react-icons/hi'

import { Input } from '@/components/ui/Input'
import CloseButton from '@/components/ui/CloseButton'
import Button from '@/components/ui/Button'
import MediaSkeleton from '@/components/shared/loaders/MediaSkeleton'
import TextBlockSkeleton from '@/components/shared/loaders/TextBlockSkeleton'

import {
    Category,
    clearListBlog,
    getListBlog,
    setSelectedFilterCategoryId,
    useAppDispatch,
    useAppSelector,
} from '@/app/blogs/store'
import BlogListItem from './BlogListItem'

const BlogList = () => {
    const [openSearchMenu, setOpenSearchMenu] = useState<boolean>(false)
    const { blogs, categories, selectedFilterCategoryId, tableData, listLoading } =
        useAppSelector((state) => state.blogSlice.data)
    const dispatch = useAppDispatch()
    const loader = useRef<HTMLDivElement | null>(null)
    const isFetchingRef = useRef(false)

    useEffect(() => {
        if (!loader.current) return

        const observer = new IntersectionObserver(
            ([entry]) => {
                const hasMore =
                    !!tableData?.total &&
                    !!tableData?.pageSize &&
                    typeof tableData?.pageIndex === 'number' &&
                    tableData.total > tableData.pageSize * (tableData.pageIndex as number)

                if (entry.isIntersecting && hasMore && !listLoading && !isFetchingRef.current) {
                    isFetchingRef.current = true
                    const newTableData = cloneDeep(tableData)
                    newTableData.pageIndex = (newTableData.pageIndex as number) + 1
                    dispatch(
                        getListBlog({
                            data: newTableData,
                            selectedFilterCategoryId: selectedFilterCategoryId,
                        }),
                    )
                }
            },
            { threshold: 1.0 },
        )

        observer.observe(loader.current)
        return () => observer.disconnect()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dispatch, selectedFilterCategoryId, tableData.total, tableData.pageSize, tableData.pageIndex, listLoading])

    useEffect(() => {
        if (!listLoading) {
            isFetchingRef.current = false
        }
    }, [listLoading])

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const debouncedSearch = useCallback(
        debounce((value: string) => {
            const newTableData = cloneDeep(tableData)
            newTableData.query = value
            dispatch(clearListBlog())
            dispatch(
                getListBlog({
                    data: newTableData,
                    selectedFilterCategoryId: selectedFilterCategoryId,
                }),
            )
        }, 500),
        [tableData, selectedFilterCategoryId],
    )

    const handleChangeSearchValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        debouncedSearch(e.target.value)
    }

    const onChangeCategory = (category: Category) => {
        dispatch(clearListBlog())
        if (selectedFilterCategoryId === category.id) {
            dispatch(setSelectedFilterCategoryId(''))
            dispatch(
                getListBlog({
                    data: tableData,
                    selectedFilterCategoryId: '',
                }),
            )
        } else {
            dispatch(setSelectedFilterCategoryId(category.id))
            dispatch(
                getListBlog({
                    data: tableData,
                    selectedFilterCategoryId: category.id,
                }),
            )
        }
    }

    return (
        <Fragment>
            <div className={'py-5 pt-4'}>
                <div className={'flex justify-between items-center gap-5'}>
                    <div className={'flex gap-2 justify-between overflow-auto'}>
                        {categories.map((item) => (
                            <div key={item.id}>
                                <button
                                    className={`text-sm/8 px-2 py-1 dark:text-white text-black bg-opacity-50 rounded-md font-semibold text-[14px] xl:text-[16px] md:px-2 xl:px-2 text-nowrap ${
                                        selectedFilterCategoryId === item.id ? 'bg-gray-300' : ''
                                    }`}
                                    onClick={() => onChangeCategory(item)}
                                >
                                    {item.name}
                                </button>
                            </div>
                        ))}
                    </div>
                    <div>
                        {!openSearchMenu ? (
                            <Button variant={'plain'} icon={<HiSearch size={30} />} onClick={() => setOpenSearchMenu(true)} />
                        ) : (
                            <Input
                                className={`${openSearchMenu ? 'w-64' : 'w-0'} transition-all duration-1000`}
                                placeholder={'Search by title, code'}
                                suffix={<CloseButton onClick={() => setOpenSearchMenu(false)} />}
                                onChange={handleChangeSearchValue}
                            />
                        )}
                    </div>
                </div>
            </div>
            {listLoading && blogs.length === 0 ? (
                <Fragment>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-6 lg:gap-x-6 md:gap-x-10 xl:gap-12">
                        {Array.from({ length: 9 }).map((_, idx) => (
                            <div key={idx} className={'p-6'}>
                                <MediaSkeleton />
                                <TextBlockSkeleton rowCount={8} />
                            </div>
                        ))}
                    </div>
                </Fragment>
            ) : (
                <Fragment>
                    {blogs.length > 0 ? (
                        <div>
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-6 lg:gap-x-6 md:gap-x-10 xl:gap-12">
                                {blogs.map((post) => (
                                    <BlogListItem key={post.id} article={post} />
                                ))}
                            </div>
                            {tableData.total &&
                                tableData?.pageIndex &&
                                tableData?.pageSize &&
                                tableData.total >= tableData.pageIndex * tableData.pageSize && (
                                    <div ref={loader} className="py-6 text-center text-sm text-gray-500">Loading more…</div>
                                )}
                        </div>
                    ) : (
                        <p>Không có kết quả</p>
                    )}
                </Fragment>
            )}
        </Fragment>
    )
}

export default BlogList


