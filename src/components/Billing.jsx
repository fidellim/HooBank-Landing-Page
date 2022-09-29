import { apple, bill, google } from '../assets'
import styles, { layout } from '../style'
import { motion } from 'framer-motion'
import { variants } from '../library/framer'

const Billing = () => (
    <section id="product" className={layout.sectionReverse}>
        <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.3 }}
            variants={variants}
            className={layout.sectionImgReverse}
        >
            <img
                src={bill}
                alt="billing"
                className="md:max-w-none max-w-lg w-[100%] h-auto relative z-[5]"
            />

            {/* gradient start */}
            <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
            <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
            {/* gradient end */}
        </motion.div>

        <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.3 }}
            variants={variants}
            className={layout.sectionInfo}
        >
            <h2 className={styles.heading2}>
                Easily control your <br className="sm:block hidden" /> billing &
                invoicing
            </h2>
            <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
                Elit enim sed massa etiam. Mauris eu adipiscing ultrices
                ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor
                integer platea placerat.
            </p>

            <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
                <img
                    src={apple}
                    alt="app_store"
                    className="w-[128.86px] h-[42.05px] object-contain mr-5 cursor-pointer"
                />
                <img
                    src={google}
                    alt="google_play"
                    className="w-[144.17px] h-[43.08px] object-contain cursor-pointer"
                />
            </div>
        </motion.div>
    </section>
)

export default Billing
