import Layout from '@/Components/Layout/Layout'
import Head from 'next/head'
import Image from 'next/image'
import profilePic from '../../public/images/profile/developer-pic-1.png'
import AnimatedText from '@/Components/AnimatedText/AnimatedText'
import Link from 'next/link'
import { LinkArrow } from '@/Components/Icons/Icons'
import HireMe from '@/Components/HireMe/HireMe'
import lightBulb from '../../public/images/svgs/miscellaneous_icons_1.svg'
import TransitionEffect from '@/Components/TransitionEffect/TransitionEffect'
import Homepage from '../../database/models/home.model'
import connectMongo from '../../database/connectMongo'

export default function Home({ homepage }) {

  console.log(homepage);

  return (
    <>
      <Head>
        <title>Ashik Ahmed | Full stack Web Developer</title>
        <meta name="description" content="Generated by create next app" />
      </Head>

      <TransitionEffect />

      <main className='flex items-center text-dark w-full min-h-screen dark:text-light'>
        <Layout className='pt-0 md:pt-16 sm:pt-8'>
          <div className="flex items-center justify-between w-full lg:flex-col">
            <div className='w-1/2 md:w-full'>
              <Image src={profilePic} alt='ashik-ahmed-photo' className='w-full h-auto lg:hidden md:inline-block md:w-full'
                priority
                sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              50vw"
              />
            </div>
            <div className='w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center'>
              <AnimatedText text='Turning Vision Into Reality With Code And Design.' className='!text-5xl !text-left xl:!text-5xl lg:!text-center lg:!text-7xl md:!text-6xl sm:!text-4xl' />
              <p className='my-4 text-base font-medium md:text-sm sm:text-xs'>
                As a skilled full-stack developer, I am dedicated to turning ideas into innovative web applications.
                Explore my latest projects and articles, showcasing my expertise in React.js and web development.
              </p>
              <div className='flex items-center self-start mt-2 lg:self-center'>
                <Link href='https://drive.google.com/file/d/1GdkNWggyO0Hc8Ik1y1cQ3rgj5Ki2Q1hY/view?usp=sharing' target='_blank'
                  className='flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semobild hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light md:p-2 md:px-4 md:text-base'
                  download={true}
                >Resume <LinkArrow className='w-6 ml-1' /> </Link>
                <Link href='mailto:ashikahmed121@gmail.com' target='_blank'
                  className='ml-4 text-lg font-medium capitalize text-dark underline dark:text-light md:text-base'
                >Contact</Link>
              </div>
            </div>
          </div>
        </Layout>

        <HireMe />

        <div className='absolute right-8 bottom-8 inline-block w-24 md:hidden'>
          <Image src={lightBulb} alt='ashik' className='w-full h-auto ' />
        </div>
      </main>
    </>
  )
}

export async function getStaticProps() {
  await connectMongo()
  const homepage = await Homepage.find({})
  return {
    props: {
      homepage: JSON.parse(JSON.stringify(homepage)),
    },
  };
}