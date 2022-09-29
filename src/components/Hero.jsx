import styles from '../style'
import { discount, robot } from '../assets'
import GetStarted from './GetStarted'
import { motion } from 'framer-motion'

const variants = {
    offscreen: {
        opacity: 0,
        scale: 0,
    },
    onscreen: {
        opacity: 1,
        scale: 1,
    },
}

const Hero = () => {
    return (
        <section
            id="home"
            className={`flex md:flex-row flex-col ${styles.paddingY} xl:py-0 md:min-h-screen xl:justify-center xl:items-center`}
        >
            <motion.div
                initial="offscreen"
                whileInView="onscreen"
                transition={{
                    duration: 0.8,
                    delay: 0.5,
                    ease: [0, 0.71, 0.2, 1.01],
                }}
                viewport={{ once: true }}
                variants={variants}
                className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
            >
                <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
                    <img
                        src={discount}
                        alt="discount"
                        className="w-[32px] h-[32px]"
                    />
                    <p className={`${styles.paragraph} ml-2`}>
                        <span className="text-white">20%</span> Discount For{' '}
                        <span className="text-white">1 Month</span> Account
                    </p>
                </div>

                <div className="flex flex-row justify-between items-center w-full">
                    <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
                        The Next <br className="sm:block hidden" />{' '}
                        <span className="text-gradient">Generation</span>{' '}
                    </h1>
                    <div className="ss:flex hidden md:mr-4 mr-0">
                        <GetStarted />
                    </div>
                </div>

                <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
                    Payment Method.
                </h1>
                <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
                    Our team of experts uses a methodology to identify the
                    credit cards most likely to fit your needs. We examine
                    annual percentage rates, annual fees.
                </p>
            </motion.div>

            <motion.div
                initial="offscreen"
                whileInView="onscreen"
                transition={{
                    duration: 0.8,
                    delay: 0.5,
                    ease: [0, 0.71, 0.2, 1.01],
                }}
                viewport={{ once: true }}
                variants={variants}
                className={`flex-1 flex-col ${styles.flexCenter} md:my-0 my-10 relative`}
            >
                <img
                    src={robot}
                    alt="billing"
                    className="self-end max-w-lg w-[100%] h-auto relative z-[5]"
                />

                {/* gradient start */}
                <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
                <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
                <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
                {/* gradient end */}
            </motion.div>

            <motion.div
                initial="offscreen"
                whileInView="onscreen"
                transition={{
                    duration: 0.8,
                    delay: 0.5,
                    ease: [0, 0.71, 0.2, 1.01],
                }}
                viewport={{ once: true }}
                variants={variants}
            >
                <div className={`ss:hidden ${styles.flexCenter}`}>
                    <GetStarted />
                </div>
            </motion.div>
        </section>
    )
}

export default Hero
