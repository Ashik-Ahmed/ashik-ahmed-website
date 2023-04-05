import AnimatedText from '@/Components/AnimatedText/AnimatedText';
import Layout from '@/Components/Layout/Layout';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const FeaturedArticle = ({ img, title, time, summary, link }) => {
    return (
        <li>
            <Link href={link} target='_blank' className='w-full cursor-pointer overflow-hidden rounded-lg'>
                <Image src={img} alt={title} className='w-full h-auto' />
            </Link>
        </li>
    )
}

const articles = () => {
    return (
        <>
            <Head>
                <title>Ashik Ahmed | Articles Page</title>
                <meta name='description' content='ashik ahmed web developer. ashik ahmed full-stack developer. ashik daffodil'></meta>
            </Head>

            <main className='w-full mb-16 flex flex-col items-center justify-center overflow-hidden '>
                <Layout className='pt-16'>
                    <AnimatedText text="Words Can Change The World! " className='mb-16' />
                    <ul className='grid grid-cols-2 gap-16'>
                        <li>Featured Article-1</li>
                        <li>Featured Article-2</li>
                    </ul>
                </Layout>
            </main>
        </>
    );
};

export default articles;