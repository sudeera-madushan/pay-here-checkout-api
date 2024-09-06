import React from 'react';
import Link from "next/link";

const Header = () => {
    return (
        <nav className={"flex justify-center pb-10"}>
            <ul className={"flex gap-16"}>
                <li>
                    <Link href={'/posts'} className={"px-2 py-1 hover:bg-gray-200 transition duration-300 rounded"}>Posts</Link>
                </li>
                <li>
                    <Link href={'/albums'} className={"px-2 py-1 hover:bg-gray-200 transition duration-300 rounded"}>Albums</Link>
                </li>
                <li>
                    <Link href={'/todos'} className={"px-2 py-1 hover:bg-gray-200 transition duration-300 rounded"}>Todos</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Header;