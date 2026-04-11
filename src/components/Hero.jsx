import "../styles/hero.css"
import { motion } from "framer-motion"

function Hero(){

return(

<section>

<motion.h1
initial={{opacity:0,y:80}}
animate={{opacity:1,y:0}}
transition={{duration:1}}
>

Premium Curtains

</motion.h1>

</section>

)

}

export default Hero