import dayjs from 'dayjs'
import React, { memo, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import Avatar from '@/components/ui/Avatar'
import { Blog } from '@/app/blogs/store'

function BlogListItem({ article }: { article: Blog }) {
    const [imageLoaded, setImageLoaded] = useState(false)

    return (
        <div className="xl:dark:hover:bg-gray-500 md:p-5 xl:p-6 transition-opacity rounded-xl md:-mx-5 xl:-mx-6">
            {/* Main clickable area to article */}
            <Link href={`/article/${article.id}`}>
                <div>
                    <div className={`relative w-full h-auto rounded-xl ${imageLoaded ? '' : 'bg-gray-400 bg-opacity-10 animate-pulse'}`}>
                        <Image
                            alt=""
                            width={800}
                            height={450}
                            className={`w-full h-auto rounded-xl transition-opacity duration-500 min-h-[198px] ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
                            src={`https://ph4ntoms.org/gateway/api/v1/vaulty/shared/s3/content?object_key=${article.image}`}
                            onLoadingComplete={() => setImageLoaded(true)}
                        />
                    </div>
                </div>
                <div>
                    <article>
                        <div className="group relative">
                            <h3 className="text-[16px] xs:text-lg/8 lg:text-lg font-semibold mt-2 md:mt-8">{article.title}</h3>
                            <p className="md:mb-1 line-clamp-3 text-[14px] min-h-[60px]">{article.description}</p>
                        </div>
                    </article>
                </div>
            </Link>

            {/* Footer with author (separate link) and date as siblings, not nested inside the article link */}
            <div className="flex justify-between items-center">
                <div className="relative flex items-center gap-x-3 md:gap-x-2 xl:gap-x-4">
                    <Avatar shape="circle" alt="" src="/img/avatars/novax.jpg" className="size-9 lg:size-8 xl:size-10 bg-gray-50" />
                    <div className="text-xs/6">
                        <p className="font-semibold">
                            <Link href="#">
                                <span className="absolute inset-0" />
                                novaxnxx
                            </Link>
                        </p>
                        <p>Ph4ntoms</p>
                    </div>
                </div>
                <div className="flex justify-end flex-col">
                    <p className="text-gray-500 py-5 md:py-10 text-xs tracking-tighter">
                        <span>{dayjs(article.created_at).format('DD/MM/YYYY')}</span>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default memo(BlogListItem)


