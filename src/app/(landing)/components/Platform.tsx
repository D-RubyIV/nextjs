import { Fragment } from 'react'

// Import Swiper styles
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import { Autoplay, Mousewheel, Pagination } from 'swiper/modules'

type PlatformModel = {
    name: string
    icon: string
}
const Platform = () => {
    const items: PlatformModel[] = [
        {
            name: 'Meta',
            icon: 'meta.svg',
        },
        {
            name: 'Telegram',
            icon: 'telegram.svg',
        },
        {
            name: 'Discord',
            icon: 'discord.svg',
        },
        {
            name: 'Zalo',
            icon: 'zalo.svg',
        },
        {
            name: 'Open AI',
            icon: 'openai.svg',
        },
        {
            name: 'Gemini',
            icon: 'gemini.svg',
        },
        {
            name: 'X',
            icon: 'x.svg',
        },
    ]

    return (
        <Fragment>
            <div className="mx-auto text-center py-12">
                <h2 className="text-4xl font-semibold tracking-tight text-pretty sm:text-5xl font-audiowide">
                    Powerful Integrations With Popular Platforms
                </h2>
                <p className="mt-2 text-lg/8 text-gray-600 font-saira">
                    Seamlessly connect with Zalo, OpenAI, Telegram, and more.
                </p>
            </div>
            <div className={'w-full'}>
                <Swiper
                    direction={'horizontal'}
                    effect="fade"
                    spaceBetween={10}
                    slidesPerView={5}
                    speed={1500}
                    // mousewheel={true}
                    pagination={{
                        clickable: true,
                    }}
                    autoplay={{ delay: 1000 }}
                    modules={[Mousewheel, Pagination, Autoplay]}
                    className="mySwiper h-auto"
                    breakpoints={{
                        0: {
                            slidesPerView: 2,
                        },
                        768: {
                            slidesPerView: 3,
                        },
                        1024: {
                            slidesPerView: 4,
                        },
                        1444: {
                            slidesPerView: 5,
                        }
                    }}
                >
                    {items.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className="flex items-center gap-5 justify-center p-10 rounded-2xl  transition-transform  duration-300">
                                <div>
                                    <img
                                        className="bg-white p-1 rounded-full shadow-inner w-10"
                                        src={`/img/svg/${item.icon}`}
                                    />
                                </div>
                                <div>
                                    <h5 className="font-semibold whitespace-nowrap  font-audiowide">
                                        {item.name}
                                    </h5>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </Fragment>
    )
}
export default Platform