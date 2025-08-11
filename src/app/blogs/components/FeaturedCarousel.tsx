import { Fragment } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Mousewheel, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css/scrollbar'
import { useAppSelector } from '@/app/blogs/store'
import FeaturedSlide from '@/app/blogs/components/FeaturedSlide'
import TextBlockSkeleton from '@/components/shared/loaders/TextBlockSkeleton'

const FeaturedCarousel = () => {
    const { featuredBlogs, featuredLoading } = useAppSelector((state) => state.blogSlice.data)
    return (
        <Fragment>
            <Swiper
                direction={'horizontal'}
                slidesPerView={1}
                effect="fade"
                spaceBetween={10}
                speed={2000}
                mousewheel={false}
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000 }}
                modules={[Mousewheel, Pagination, Autoplay]}
                className="mySwiper"
            >
                {featuredLoading ? (
                    <Fragment>
                        <SwiperSlide>
                            <TextBlockSkeleton rowCount={8} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <TextBlockSkeleton rowCount={8} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <TextBlockSkeleton rowCount={8} />
                        </SwiperSlide>
                    </Fragment>
                ) : (
                    <Fragment>
                        {featuredBlogs.map((item) => (
                            <SwiperSlide key={item.id}>
                                <FeaturedSlide article={item} />
                            </SwiperSlide>
                        ))}
                    </Fragment>
                )}
            </Swiper>
        </Fragment>
    )
}
export default FeaturedCarousel


