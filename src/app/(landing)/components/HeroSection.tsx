"use client";

import { Fragment, useEffect } from "react"

const HeroSection = () => {
    const themeMode = "dark"
    return (
        <Fragment>
            <div className={'hero-section relative min-h-[400px]'}>
                <div>
                    <div className={'flex items-center justify-center mt-40'}>
                        <div className="mx-auto text-center">
                            <h2 className="text-4xl font-semibold tracking-tight text-pretty sm:text-5xl font-audiowide">
                                Let Ph4ntoms Do the Heavy Thinking
                            </h2>
                            <p className="mt-2 text-lg/8 text-gray-600 font-saira">
                                Free your mind for bigger things
                            </p>
                        </div>
                    </div>
                    <div className="relative w-full">
                        <div
                            className="w-[200%] md:w-[110%] overflow-hidden"
                            style={{
                                position: 'absolute',
                                left: '50%',
                                transform: 'translateX(-50%)',
                                WebkitMaskImage: 'radial-gradient(50% 50% at 50% 50%, #fff 10%, transparent 100%)',
                                WebkitMaskSize: 'cover',
                                WebkitMaskRepeat: 'no-repeat',
                            }}
                        >
                            <div className="absolute inset-0" id="starfield" />
                            <div>
                                <video
                                    key={themeMode}
                                    muted
                                    loop
                                    playsInline
                                    preload="auto"
                                    autoPlay={true}
                                    className={'overflow-hidden'}
                                    style={{
                                        backgroundImage: `url('/img/q-c4fdcb46.png')`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                        backgroundRepeat: 'no-repeat',
                                        width: '100%',
                                        objectFit: 'cover',
                                    }}
                                >
                                    {/*<source src="/webm/black-hole.webm" type="video/mp4" />*/}
                                    <source src={"/video/black-hole-dark.mp4"} type="video/mp4" />
                                </video>
                            </div>
                            <div className="hero-black-hole-stars" />
                        </div>
                    </div>
                </div>
                <Starfield/>
            </div>
        </Fragment>
    )
}

function Starfield() {
    useEffect(() => {
        const container = document.getElementById('starfield')
        if (!container) return

        for (let i = 0; i < 100; i++) {
            const star = document.createElement('div')
            const size = Math.random() * 2 + 1
            const angle = Math.random() * 360
            const distance = Math.random() * 300 + 100

            star.className = 'absolute bg-white rounded-full opacity-70'
            star.style.width = `${size}px`
            star.style.height = `${size}px`

            // Random start position
            star.style.left = '50%'
            star.style.top = '50%'
            star.style.transform = `rotate(${angle}deg) translateX(${distance}px)`

            // Animate inward spiral
            star.animate(
                [
                    {
                        transform: `rotate(${angle}deg) translateX(${distance}px) scale(1)`,
                        opacity: 1,
                    },
                    {
                        transform: `rotate(${
                            angle + 360
                        }deg) translateX(0px) scale(0.1)`,
                        opacity: 0,
                    },
                ],
                {
                    duration: 4000 + Math.random() * 2000,
                    iterations: Infinity,
                    delay: Math.random() * 3000,
                },
            )

            container.appendChild(star)
        }
    }, [])

    return null
}
export default HeroSection;