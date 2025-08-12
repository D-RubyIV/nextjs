"use client";

import Link from "next/link";
import { Fragment } from "react";
import Container from "./Container";
import Image from "next/image";
import Button from "@/components/ui/Button";

type ItemHref = {
    label: string;
    href: string;
};

const listHrefItem: ItemHref[] = [
    { label: "Blogs", href: "/blogs" },
    { label: "Contact", href: "/contact" },
    { label: "Changelogs", href: "/changelogs" },
];

const Navbar = () => {
    return (
        <Fragment>
            <div className="fixed top-0 left-0 w-full">
                <Container>
                    <div className="flex justify-between">
                        <Link href={"/"}>
                            <Image alt="" src={"/logo/logo-dark.png"} width={50} height={50} />
                        </Link>
                        <div className="absolute left-1/2 transform -translate-x-1/2">
                            <div className="px-4 py-2 gap-8 hidden md:flex md:border-2 rounded-2xl box-border border-gray-500 items-center">
                                {listHrefItem.map((item, index) => (
                                    <div key={index}>
                                        <Link href={item.href}>{item.label}</Link>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="flex gap-4 items-center">
                            <Button size="sm" className="!px-4 !py-2 w-full" variant="plain">Login</Button>
                            <Button size="sm" className="!bg-[#201F57] px-4 py-2 rounded-md box-border border-indigo-500 border">Sign up</Button>
                        </div>
                    </div>
                </Container>
            </div>
        </Fragment>
    );
};

export default Navbar;
