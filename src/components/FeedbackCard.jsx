import { quotes } from '../assets'
import { motion } from 'framer-motion'
import { variants } from '../library/framer'

const FeedbackCard = ({ content, name, title, img }) => (
    <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.3 }}
        variants={variants}
        className="flex justify-between flex-col px-10 py-12 rounded-[20px]  max-w-[370px] my-5 feedback-card relative"
    >
        <img
            src={quotes}
            alt="double_quotes"
            className="w-[42.6px] h-[27.6px] object-contain z-10"
        />
        <p className="font-poppins font-normal text-[18px] leading-[32.4px] text-white my-10 z-10">
            {content}
        </p>

        <div className="flex flex-row z-10">
            <img
                src={img}
                alt={name}
                className="w-[48px] h-[48px] rounded-full"
            />
            <div className="flex flex-col ml-4">
                <h4 className="font-poppins font-semibold text-[20px] leading-[32px] text-white">
                    {name}
                </h4>
                <p className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite">
                    {title}
                </p>
            </div>
        </div>
    </motion.div>
)

export default FeedbackCard
