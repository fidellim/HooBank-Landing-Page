export const variants = {
    offscreen: {
        y: 100,
        opacity: 0,
    },
    onscreen: {
        y: 0,
        opacity: 1,
        transition: {
            type: 'spring',
            mass: 0.5,
            damping: 30,
            duration: 0.8,
        },
    },
}
