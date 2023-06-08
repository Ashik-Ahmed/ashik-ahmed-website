import React from 'react';
import { FiPhoneCall } from 'react-icons/fi';
import { MdEmail } from 'react-icons/md';
import { FaMapMarkerAlt, FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';
import Link from 'next/link';

const Contact = () => {
    return (
        <div className='my-64 mx-auto'>
            <h2 className='font-bold text-7xl mb-32 w-full text-center md:text-5cl xs:text-3xl md:mb-16'>Contact Me</h2>
            <div className='w-[75%] lg:w-[90%] md:w-full mx-auto relative flex xs:block justify-center xs:divide-x-0 divide-x-4 gap-8'>
                <div className='ml-4 xs:ml-2 sm:pl-4 pl-16'>
                    <p className='text-xl font-bold mb-2'>Ping Me:</p>
                    <div className='flex items-center gap-2 font-medium w-full md:text-sm'>
                        <FiPhoneCall />
                        <span>(+880) 1521-464568</span>
                    </div>
                    <div className='flex items-center gap-2 font-medium w-full md:text-sm'>
                        <MdEmail />
                        <Link href='mailto:ashikahmed121@gmail.com'>ashikahmed121@gmail.com</Link>
                    </div>
                    <div className='flex items-center gap-2 font-medium w-full md:text-sm'>
                        <FaMapMarkerAlt />
                        <span>Dhaka, Bangladesh</span>
                    </div >
                </div>
                {/* <div className="w-full md:w-2">
                    <Divider layout="vertical" className="hidden md:flex">
                        <b>OR</b>
                    </Divider>
                    <Divider layout="horizontal" className="flex md:hidden" align="center">
                        <b>OR</b>
                    </Divider>
                </div> */}
                <div className='ml-4 xs:ml-2 sm:pl-4 pl-16 sm:mt-4'>
                    <p className='text-xl font-bold mb-2'>Social Connect:</p>
                    <div className='flex items-center gap-2 font-medium w-full md:text-sm'>
                        <FaGithub />
                        <Link href='https://github.com/Ashik-Ahmed'>github.com/Ashik-Ahmed</Link>
                    </div >
                    <div className='flex items-center gap-2 font-medium w-full md:text-sm'>
                        <FaLinkedin />
                        <Link href='https://www.linkedin.com/in/ashik-ahmed-web-dev'>linkedin.com/in/ashik-ahmed-web-dev</Link>
                    </div >
                    <div className='flex items-center gap-2 font-medium w-full md:text-sm'>
                        <FaFacebook />
                        <Link href='https://www.facebook.com/ashik.ahm121'>facebook.com/ashik.ahm121</Link>
                    </div >
                </div>
            </div >
        </div >
    );
};

export default Contact;