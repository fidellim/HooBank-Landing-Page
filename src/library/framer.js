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

// const variants = {
//     offscreen: {
//         opacity: 0,
//         scale: 0,
//     },
//     onscreen: {
//         opacity: 1,
//         scale: 1,
//         transition: {
//             duration: 0.8,
//             delay: 0.5,
//             ease: [0, 0.71, 0.2, 1.01],
//         },
//     },
// }
