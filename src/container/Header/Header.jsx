import React from 'react';
import { motion } from 'framer-motion';

import { AppWrap } from '../../wrapper';
import { images } from '../../constants';
import './Header.scss';

const scaleVariants = {
    whileInView: {
        scale: [0, 1],
        opacity: [0, 1],
        transition: {
            duration: 1,
            ease: 'easeInOut'
        }
    }
};

const Header = () => {
    return (
        <div className='app__header app__flex'>
            <motion.div
                whileInView={{ x: [-100, 0], opacity: [0, 1] }}
                transition={{ duration: 0.5 }}
                className='app__header-info'
            >
                <div className="app__header-badge">
                    <div className="badge-cmp app__flex">
                        <span>👋</span>
                        <div style={{ marginLeft: 20 }}>
                            <p className='p-text'>Hello, I am</p>
                            <h1 className='head-text'>dt-japanscript</h1>
                        </div>
                    </div>
                    <div className='tag-cmp app__flex'>
                        <p className='p-text'>CAD Engineer</p>
                        <p className='p-text'>CAE Engineer</p>
                    </div>
                </div>
            </motion.div>

            <motion.div
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.5, delayChildren: 0.5 }}
                className='app__header-img'
            >
                <img src={images.zenitsu_agatsuma_portrait} alt='profile_bg' />
                <motion.img
                    whileInView={{ scale: [0, 1] }}
                    transition={{ duration: 1, ease: 'easeInOut' }}
                    src={images.circle}
                    alt='profile_circle'
                    className='overlay_circle'
                />
            </motion.div>

            <motion.div
                variants={scaleVariants}
                whileInView={scaleVariants.whileInView}
                className='app__header-circles'
            >
                {[images.thunder_breathing_1, images.kmy_logo, images.thunder_breathing_3].map((circle, index) => (
                    <div className='circle-cmp app__flex' key={`circle-${index}`}>
                        <img src={circle} alt='profile_bg' />
                    </div>
                ))}
            </motion.div>
        </div >
    )
}

export default AppWrap(Header, 'home');