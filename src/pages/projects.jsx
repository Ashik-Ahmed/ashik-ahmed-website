import AnimatedText from '@/Components/AnimatedText/AnimatedText';
import { GithubIcon } from '@/Components/Icons/Icons';
import Layout from '@/Components/Layout/Layout';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import project1 from '../../public/images/projects/crypto-screener-cover-image.jpg'
import { motion } from 'framer-motion'
import TransitionEffect from '@/Components/TransitionEffect/TransitionEffect';
import Projects from '../../database/models/project.model';
import connectMongo from '../../database/connectMongo';

const FramerImage = motion(Image)

const FeaturedProject = ({ type, title, summary, img, link, githubClient, githubServer }) => {
    return (
        <article className='w-full flex items-center justify-between rounded-br-2xl rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 relative dark:bg-dark dark:border-light lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4' >
            <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl dark:bg-light xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]' />
            <Link href={link} target='_blank' className='w-1/2 lg:w-full cursor-pointer overflow-hidden rounded-lg'>
                <FramerImage src={img} alt={title} width='768' height='420' className='w-full h-auto'
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                    priority
                    sizes="(max-width: 768px) 100vw,
                           (max-width: 1200px) 50vw,
                           50vw"
                />
            </Link>
            <div className='w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6'>
                <span className='text-primary font-medium text-xl dark:text-primaryDark xs:text-base'>{type}</span>
                <Link href={link} target='_blank' className='hover:underline underline-offset-2'>
                    <h2 className='my-2 w-full text-left text-3xl font-bold dark:text-light lg:text-2xl'>{title}</h2>
                </Link>
                <p className='my-2 font-medium text-dark dark:text-light sm:text-sm'>{summary}</p>
                <div className='w-full mt-2 flex items-center justify-between'>
                    <Link href={link} target='_blank' className='rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:bg-light dark:text-dark sm:px-4 sm:text-base'>
                        Visit Project
                    </Link>
                    <div className='flex gap-2'>
                        <Link href={githubClient} target='_blank' className='w-10'>
                            <GithubIcon />
                        </Link>
                        <Link href={githubServer} target='_blank' className='w-10'>
                            <GithubIcon />
                        </Link>
                    </div>
                </div>
            </div>
        </article>
    )
}

const Project = ({ title, type, img, link, githubClient, githubServer }) => {
    console.log(title, type, img,);
    return (
        <article className='w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light xs:p-4'>
            <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light md:-right-2 md:w-[101%] sm:h-[102%] xs:radious-[1.5rem]' />
            <Link href={link} target='_blank' className='w-full cursor-pointer overflow-hidden rounded-lg'>
                <FramerImage src={img} alt={title} width='768' height='420' className='w-full h-auto'
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                />
            </Link>
            <div className='w-full flex flex-col items-start justify-between mt-4'>
                <span className='text-primary font-medium text-xl dark:text-primaryDark lg:text-lg md:text-base'>{type}</span>
                <Link href={link} target='_blank' className='hover:underline underline-offset-2'>
                    <h2 className='my-2 w-full text-left text-2xl font-bold lg:text-2xl'>{title}</h2>
                </Link>

                <div className='w-full mt-2 flex items-center justify-between'>
                    <Link href={link} target='_blank' className='text-lg font-semibold underline md:text-base'>
                        Visit
                    </Link>
                    <div className='flex gap-2'>
                        <Link href={githubClient} target='_blank' className='w-8 md:w-6'>
                            <GithubIcon />
                        </Link>
                        <Link href={githubServer} target='_blank' className='w-8 md:w-6'>
                            <GithubIcon />
                        </Link>
                    </div>
                </div>
            </div>
        </article>
    )
}

const projects = ({ projects }) => {

    const featuredProjects = projects.filter(project => project.type === 'Featured Project').map(project => project.projects)[0]
    const regularProjects = projects.filter(project => project.type === 'Project').map(project => project.projects)[0]
    console.log(featuredProjects);

    return (
        <>
            <Head>
                <title>Projects | Full Stack projects</title>
                <meta name='description' content='ashik ahmed web developer. ashik ahmed full-stack developer. mern stack projects'></meta>
            </Head>

            <TransitionEffect />

            <main className='w-full mb-16 flex flex-col items-center justify-center dark:text-light mt-16'>
                <Layout className='pt-16'>
                    <AnimatedText text='Awesome Full Stack Projects!' className='mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl' />

                    <div className='grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0'>
                        {
                            featuredProjects && featuredProjects.map((featuredProject) => {
                                return (
                                    <div key={featuredProject._id} className='col-span-12 '>
                                        <FeaturedProject
                                            title={featuredProject.title}
                                            img={featuredProject.img}
                                            summary={featuredProject.summary}
                                            link={featuredProject.link}
                                            githubClient={featuredProject.githubClient}
                                            githubServer={featuredProject.githubServer}
                                            type='Featured Project'
                                        />
                                    </div>
                                )
                            })
                        }

                        {
                            regularProjects && regularProjects.map((regularProject) =>
                                <div key={regularProject._id} className='col-span-6 sm:col-span-12'>
                                    <Project
                                        title={regularProject.title}
                                        img={regularProject.img}
                                        summary={regularProject.summary}
                                        link={regularProject.link}
                                        githubClient={regularProject.githubClient}
                                        githubServer={regularProject.githubServer}
                                        type='Regular Project'
                                    />
                                </div>
                            )
                        }

                        {/* <div className='col-span-6 sm:col-span-12'>
                            <Project
                                title="Gear Up - Simple E-Commerce Application"
                                img="https://i.ibb.co/YWrbk9d/gear-up-photo.png"
                                summary=" A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency."
                                link='/'
                                github='/'
                                type='Featured Project'
                            />
                        </div>
                        <div className='col-span-6 sm:col-span-12'>
                            <Project
                                title="ManageWare - Warehouse Management Software"
                                img="https://i.ibb.co/K97ktWg/manageware-photo.png"
                                summary=" A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency."
                                link='/'
                                github='/'
                                type='Featured Project'
                            />
                        </div> */}

                    </div>
                </Layout>
            </main >
        </>
    );
};

export default projects;



export async function getStaticProps() {
    await connectMongo()
    const projects = await Projects.find({})
    return {
        props: {
            projects: JSON.parse(JSON.stringify(projects)),
        },
    };
}