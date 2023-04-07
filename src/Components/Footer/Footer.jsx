import React from 'react';
import Layout from '../Layout/Layout';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className='w-full border-t-2 border-solid border-dark font-medium text-lg dark:text-light dark:border-light'>
            <Layout className='py-8 flex items-center justify-between'>
                <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
                <div className='flex items-center'>
                    Developed by <span className='text-primary dark:text-primaryDark text-2xl px-1'>&#9825;</span><Link href='/' className='underline underline-offset-2'>Ashik Ahmed</Link>
                </div>
                <Link href='mailto:ashikahmed121@gmail.com' className='underline underline-offset-2'>Say Hello</Link>
            </Layout>
        </footer>
    );
};

export default Footer;