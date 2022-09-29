import { clients } from '../constants'
import styles from '../style'
import { motion } from 'framer-motion'
import { variants } from '../library/framer'

const Clients = () => (
    <section className={`${styles.flexCenter} my-4`}>
        <div className={`${styles.flexCenter} flex-wrap gap-8 w-full`}>
            {clients.map((client) => (
                <motion.div
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={variants}
                    key={client.id}
                    className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px]`}
                >
                    <img
                        src={client.logo}
                        alt="client_logo"
                        className="sm:w-[192px] w-[100px] object-contain client"
                    />
                </motion.div>
            ))}
        </div>
    </section>
)

export default Clients
