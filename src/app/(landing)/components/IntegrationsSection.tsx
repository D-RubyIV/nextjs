type IntegrationTarget = {
    name: string
    logos: string[]
    description: string
}

const listInteractions: IntegrationTarget[] = [
    {
        name: 'AI',
        logos: ['/img/platform/openai.png','/img/platform/gemini.png'],
        description: 'Automate your thinking and workflows with no-code AI integrations.',
    },
    {
        name: 'API',
        logos: ['/img/platform/swagger.png'],
        description: 'Sync your notes, highlights, and data seamlessly with Reflect’s open API.',
    },
    {
        name: 'Outlook',
        logos: ['/img/platform/outlook.png'],
        description: 'Connect your emails, contacts, and calendars for a unified workspace.',
    },
    {
        name: 'Chrome and Edge',
        logos: ['/img/platform/chrome.png', '/img/platform/edge.png'],
        description: 'Save web content in one click and sync directly to your Kindle.',
    },
]


export default function IntegrationsSection() {
    return (
        <div className={'py-12 sm:py-24 md:py-32'}>
            <div
                className="integration-section relative h-[400px] overflow-hidden"
                style={{
                    backgroundImage: `url('/img/q-c4fdcb46.png')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}
            >
                {/* Vòng tròn tâm động */}
                <div className="absolute inset-0 z-10 pointer-events-none">
                    <div className="w-full h-full relative">
                        <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] rounded-full  border  blur-3xl -translate-x-1/2 -translate-y-1/2" />
                    </div>
                </div>

                {/* Scanline ánh sáng chạy dọc */}
                <div className="absolute inset-0 z-0 pointer-events-none">
                    <div className="absolute w-full h-[200%] bg-gradient-to-b from-transparent blur-sm animate-[scan_6s_linear_infinite]" />
                </div>

                {/* Nội dung chính */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full">
                    <div className="relative grid grid-cols-2 gap-10 justify-between text-center w-full">
                        {listInteractions.map((item, index) => (
                            <div key={index} className={'mx-10'}>
                                <div className="flex justify-center gap-2 items-center py-2  ">
                                    {item.logos.map((logo, i) => (
                                        <img alt=''
                                            key={i}
                                            className="bg-transparent w-10 aspect-square"
                                            src={`${logo}`}
                                        />
                                    ))}
                                </div>
                                <div className="py-3">
                                    <h5 className="text-indigo-300 text-xs font-audiowide">{item.name}</h5>
                                </div>
                                <div className="hidden md:block">
                                    <h5 className="text-gray-400 font-saira">{item.description}</h5>
                                </div>
                            </div>
                        ))}
                        <div className={'absolute left-1/2 top-1/2 -translate-x-1/2'}>
                            <img alt='' src={'/img/q-f23fe959.png'} className={'bg-transparent w-10 aspect-square'}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

