import AnimatedText from '@/Components/AnimatedText/AnimatedText';
import Layout from '@/Components/Layout/Layout';
import Head from 'next/head';
import Image from 'next/image';
import React, { useEffect, useRef } from 'react';
import profilePic from '../../public/images/profile/developer-pic-2.jpg'
import { useInView, useMotionValue, useSpring } from 'framer-motion';
import Skills from '@/Components/Skills/Skills';
import Experience from '@/Components/Experience/Experience';
import Education from '@/Components/Education/Education';
import TransitionEffect from '@/Components/TransitionEffect/TransitionEffect';
import About from '../../database/models/about.model';
import connectMongo from '../../database/connectMongo';
import Certificate from '../../database/models/education.model';
import Contact from '@/Components/Contact/Contact';

const AnimatedMumbers = ({ value }) => {

    const ref = useRef(null)

    const motionValue = useMotionValue(0)
    const springValue = useSpring(motionValue, { duration: 3000 })
    const isInView = useInView(ref, { once: true })

    useEffect(() => {
        if (isInView) {
            motionValue.set(value)
        }
    }, [isInView, value, motionValue])

    useEffect(() => {
        springValue.on("change", (latest) => {
            if (ref.current && latest.toFixed(0) <= value) {
                ref.current.textContent = latest.toFixed(0)
            }
        })
    }, [springValue, value])

    return <span ref={ref}></span>
}

const about = ({ about, certificates }) => {

    console.log(about);
    const { title, satisfiedClients, projectsCompleted, yearsOfExperience, biography, skills, experiences } = about[0]

    return (
        <>
            <Head>
                <title>About | Ashik Ahmed</title>
                <meta name='description' content='ashik ahmed web developer. ashik ahmed full-stack developer. ashik daffodil'></meta>
            </Head>

            <TransitionEffect />
            <main className='flex flex-col items-center justify-center w-full dark:text-light mt-16 sm:mt-0'>
                <Layout className='pt-16'>
                    <AnimatedText text={title} className='mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl' />
                    <div className='grid w-full grid-cols-8 gap-16 sm:gap-8'>
                        <div className='col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:col-span-8 md:order-2'>
                            <h2 className='mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light'>Biography</h2>
                            {/* <p className='font-medium'>Hi, I'm CodeBucks, a web developer and UI/UX designer with a passion for creating beautiful, functional,
                                and user-centered digital experiences. With 4 years of experience in the field. I am always looking for
                                new and innovative ways to bring my clients' visions to life.</p> */}

                            {
                                biography && biography.map(bio => {
                                    return (
                                        <>
                                            <p className='font-medium my-2'>{bio}</p>
                                        </>
                                    )
                                })
                            }
                            {/* <p className='font-medium my-4'>I believe that design is about more than just making things look pretty – it's about solving problems and
                                creating intuitive, enjoyable experiences for users. </p> */}
                            {/* <p className='font-medium'>Whether I'm working on a website, mobile app, or
                                other digital product, I bring my commitment to design excellence and user-centered thinking to
                                every project I work on. I look forward to the opportunity to bring my skills and passion to your next project.</p> */}
                        </div>

                        <div className='col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:bg-dark dark:border-light xl:col-span-4 md:col-span-8  md:order-1'>
                            <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light' />
                            <Image src='https://i.ibb.co/3pzwW86/about-ashik-ahmed.png' width='720' height='520' alt='ashik ahmed' className='w-full h-auto rounded-2xl'
                                priority
                                sizes="(max-width: 768px) 100vw,
                           (max-width: 1200px) 50vw,
                           33vw"
                            />
                        </div>
                        <div className='col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3'>
                            <div className='flex flex-col items-end justify-center xl:items-center'>
                                <span className='inine-block text-7xl font-bold md:text-5xl sm:-text-4xl xs:text-3xl'>
                                    <AnimatedMumbers value={satisfiedClients} />+
                                </span>
                                <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light xl:text-center md:text-lg sm:text-base xs:text-sm'>satisfied clients</h2>
                            </div>

                            <div className='flex flex-col items-end justify-center xl:items-center'>
                                <span className='inine-block text-7xl font-bold md:text-5xl sm:-text-4xl xs:text-3xl'>
                                    <AnimatedMumbers value={projectsCompleted} />+
                                </span>
                                <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light xl:text-center md:text-lg sm:text-base xs:text-sm'>projects completed</h2>
                            </div>

                            <div className='flex flex-col items-end justify-center xl:items-center'>
                                <span className='inine-block text-7xl font-bold md:text-5xl sm:-text-4xl xs:text-3xl'>
                                    <AnimatedMumbers value={yearsOfExperience} />+
                                </span>
                                <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light xl:text-center md:text-lg sm:text-base xs:text-sm'>years of experience</h2>
                            </div>
                        </div>
                    </div>

                    <Skills skills={skills} />
                    <Experience experiences={experiences} />
                    <Education certificates={certificates} />
                    <Contact />
                </Layout>
            </main>
        </>
    );
};

export default about;


export async function getStaticProps() {
    await connectMongo()
    const about = await About.find({})
    const certificates = await Certificate.find({})
    return {
        props: {
            about: JSON.parse(JSON.stringify(about)),
            certificates: JSON.parse(JSON.stringify(certificates)),
        },
        revalidate: 10
    };
}