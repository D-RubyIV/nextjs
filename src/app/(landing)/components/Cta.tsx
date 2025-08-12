"use client";

import { Fragment } from 'react'

const Cta = () => {
    const themeMode = "dark"
    return (
        <Fragment>
            <div className="section-header relative">
                <div className={'text-center'}>
                    <div className="section-header-badge">
                        <div className="section-header-badge-text font-audiowide">
                            Get started
                        </div>
                    </div>
                    <div>
                        <h2 className="section-header-title section-header-title-h2">
                            <div className={"section-header-title-desktop font-audiowide"}>
                                <span>Think better with Reflect</span>
                            </div>
                        </h2>
                        <p className="section-header-description font-saira">
                            Never miss a note, idea or connection.
                        </p>
                    </div>
                </div>
                <div>
                    <div className="w-full h-[300px]">
                        <div
                            className="w-full h-[300px]  overflow-hidden"
                            style={{
                                position: 'absolute',
                                left: '50%',
                                transform: 'translateX(-50%)',
                                WebkitMaskImage:
                                    'radial-gradient(100% 50% at 50% 90%, #fff 0.1%, transparent 100%)',
                                WebkitMaskSize: 'cover',
                                WebkitMaskRepeat: 'no-repeat',
                            }}
                        >
                            <div className="absolute inset-0 overflow-hidden" id="starfield" />
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
                                        scale: '100%',
                                        height: '600px'
                                    }}
                                >
                                    {/*<source src="/webm/black-hole.webm" type="video/mp4" />*/}
                                    <source src={"/video/black-hole-dark.mp4"}  type="video/mp4" />
                                </video>
                            </div>
                            <div className="hero-black-hole-stars" />
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
export default Cta