import React from 'react';
import { motion } from 'framer-motion'

const Skill = ({ name, x, y }) => {
    return (
        <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark text-light py-2 px-6 shadow-dark cursor-pointer absolute dark:text-dark dark:bg-light lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent xs:text-dark xs:dark:text-light xs:font-bold'
            whileHover={{ scale: 1.05 }}
            initial={{ x: 0, y: 0 }}
            whileInView={{ x: x, y: y, transition: { duration: .5 } }}
            viewport={{ once: true }}
        >
            {name}
        </motion.div >
    )
}

const Skills = ({ skills }) => {
    return (
        <>
            <h2 className='font-bold text-7xl mt-64 w-full text-center md:text-5xl md:mt-32'>Skills</h2>
            <div className='w-full h-screen lg:h-[80vh] sm:h-[60vh] xs:h-[50vh] relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark  lg:bg-circularLightLg lg:dark:bg-circularDarkLg md:bg-circularLightMd md:dark:bg-circularDarkMd sm:bg-circularLightSm sm :dark:bg-circularDarkSm'>
                <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark text-light p-6 shadow-dark cursor-pointer dark:text-dark dark:bg-light lg:p-6 md:p-4 xs:text-xs xs:p-2'
                    whileHover={{ scale: 1.05 }}
                >
                    Web
                </motion.div>
                {
                    skills && skills.map((skill, index) => <Skill key={index} name={skill.name} x={skill.x} y={skill.y} />)
                }
                {/* <Skill name='HTML5' x='-20vw' y='10vw' />
                <Skill name='CSS3' x='-29vw' y='0vw' />
                <Skill name='Tailwind' x='20vw' y='13vw' />
                <Skill name='NodeJS' x='0vw' y='-12vw' />
                <Skill name='NextJS' x='-22vw' y='-7vw' />
                <Skill name='ReactJS' x='-17vw' y='-15vw' />
                <Skill name='ExpressJS' x='17vw' y='-15vw' />
                <Skill name='Firebase' x='0vw' y='10vw' />
                <Skill name='JavaScript' x='0vw' y='-20vw' />
                <Skill name='MongoDB' x='22vw' y='-7vw' />
                <Skill name='Mongoose' x='29vw' y='0vw' /> */}
            </div>
        </>
    );
};

export default Skills;