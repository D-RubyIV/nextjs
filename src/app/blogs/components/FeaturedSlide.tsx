import dayjs from 'dayjs'
import { Blog } from '@/app/blogs/store'
import Link from 'next/link'
import Image from 'next/image'

const FeaturedSlide = ({ article }: { article: Blog }) => {
    return (
        <div className={'grid grid-cols-12'}>
            <div className={'col-span-12 md:col-span-6 xl:col-span-5'}>
                <Link href={`/article/${article.id}`}>
                    <Image
                        alt={''}
                        width={800}
                        height={450}
                        className={'rounded-xl w-full h-auto'}
                        src={`https://ph4ntoms.org/gateway/api/v1/vaulty/shared/s3/content?object_key=${article.image}`}
                    />
                </Link>
            </div>
            <div className={'mt-2 md:mt-0 col-span-12 md:col-span-6 xl:col-span-7'}>
                <div className={'md:mx-16'}>
                    <Link href={`/article/${article.id}`}>
                        <h5 className={'text-[16px] xs:text-sm md:text-xl xl:text-4xl md:line-clamp-3'}>{article.title}</h5>
                    </Link>
                    <div>
                        <p className="md:mb-1 line-clamp-3 text-[14px]">{article.description}</p>
                    </div>
                    <p className={'text-xs md:text-sm md:mt-4'}>{dayjs(article.created_at).format('DD/MM/YYYY')}</p>
                </div>
            </div>
        </div>
    )
}
export default FeaturedSlide


