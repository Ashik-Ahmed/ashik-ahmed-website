import React from 'react';
import { motion } from 'framer-motion'

const Skill = ({ name, x, y }) => {
    return (
        <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute '
            whileHover={{ scale: 1.05 }}
            initial={{ x: 0, y: 0 }}
            animate={{ x: x, y: y }}
            transition={{ duration: 1.5 }}
        >
            {name}
        </motion.div>
    )
}

const Skills = () => {
    return (
        <>
            <h2 className='font-bold text-7xl mt-64 w-full text-center '>Skills</h2>
            <div className='w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight'>
                <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 shadow-dark cursor-pointer'
                    whileHover={{ scale: 1.05 }}
                >
                    Web
                </motion.div>
                <Skill name='HTML5' x='-20vw' y='10vw' />
                <Skill name='CSS3' x='-29vw' y='0vw' />
                <Skill name='Tailwind' x='20w' y='13vw' />
                <Skill name='JavaScript' x='20w' y='-12vw' />
                <Skill name='NextJS' x='-22vw' y='-7vw' />
                <Skill name='ReactJS' x='-17vw' y='-15vw' />
                <Skill name='ExpressJS' x='17vw' y='-15vw' />
                <Skill name='Firebase' x='20vw' y='10vw' />
                <Skill name='NodeJS' x='0vw' y='-20vw' />
                <Skill name='MongoDB' x='22vw' y='-7vw' />
                <Skill name='Mongoose' x='29vw' y='0vw' />
            </div>
        </>
    );
};

export default Skills;