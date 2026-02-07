/**
 * Node modules
 */
import { motion } from 'motion/react';

/**
 * Custom modules
 */
import { fadeUp, staggerContainer } from '@/lib/animations';

/**
 * Components
 */
import { SectionHeader } from '@/components/SectionHeader';

export const About = () => {
  return (
    <motion.section
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.3 }}
      variants={staggerContainer(0)}
      className='mt-30 scroll-mt-10'
      id='about'
    >
      <SectionHeader
        subtitle='About'
        title='Transforming idea into digital reality.'
      />

      <motion.p
        variants={fadeUp}
        className='mt-4 text-neutral-300'
      >
        I’m a Junior Full-Stack Web Developer and Machine Learning Engineer currently pursuing my degree in Computer Science at Universitas Dian Nuswantoro. I am passionate about transforming complex technical problems into clear, intuitive digital experiences. To me, great design is a synergy between how a product looks and how it functions.
      </motion.p>

      <motion.p
        variants={fadeUp}
        className='mt-2 text-neutral-300'
      >
        My approach blends creative UI design with strategic implementation, ensuring every interface is both visually striking and effortless to use. Over the past few years, I’ve refined my craft across web development and AI integration, bringing ideas to life using modern tools like React.js, Tailwind CSS, and Vite and exploring machine learning and data analysis with Python. I thrive in collaborative environments where innovation and user-centric design drive success.
      </motion.p>

      <motion.div
        variants={fadeUp}
        transition={{ delay: 0.2 }}
      >
      </motion.div>
    </motion.section>
  );
};
