import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'
import { Fragment } from 'react'

type LinkItem = {
    name: string
    icon: string
    href: string
}

const Footer = () => {
    const items: LinkItem[] = [
        {
            name: 'facebook',
            icon: 'facebook.png',
            href: 'https://www.facebook.com/ph.hah04',
        },
        {
            name: 'telegram',
            icon: 'telegram.png',
            href: 'https://t.me/novaxnxx',
        },
    ]
    return (
        <Fragment>
            <div className={'!mt-0 grid grid-cols-1 md:grid-cols-3 py-20 border-b-[1px] border-t-[1px] border-gray-500'}>
                <div className="footer-newsletter-text md:col-span-2">
                    <div className="footer-newsletter-title">
                        <h4>Get free note-taking workflows</h4>
                    </div>
                    <p className="footer-newsletter-description">
                        In our weekly newsletter.
                    </p>
                </div>
                <div className={'md:col-span-1 flex gap-2'}>
                    <Input placeholder={'Enter your email'} type={'email'} prefix={"sss"} />
                    <Button
                        className="!px-4 !py-2 !bg-indigo-500 box-border border-2 !border-indigo-400 flex items-center !bg-opacity-30 !border-opacity-30"
                    >
                        Subscribe
                    </Button>
                </div>
            </div>

            <div className={'flex justify-between items-center'}>
                <div>
                    <p>© 2025 Ph4ntoms, Inc. All rights reserved.</p>
                </div>
                <div className={'flex gap-4'}>
                    {items.map((item, i) => (
                        <div key={i} className={'flex items-center'} onClick={() => {
                            window.location.href = item.href
                        }}>
                            <img
                                src={`/img/platform/${item.icon}`}
                                className={'bg-transparent cursor-pointer w-[25px] aspect-square'}
                            />
                        </div>
                    ))}
                    {/* <LanguageSelector placement={'top-end'} /> */}
                </div>
            </div>
        </Fragment>
    )
}
export default Footer