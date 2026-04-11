import { motion } from "framer-motion"

function About(){

return(

<section>

<motion.div
initial={{opacity:0,y:80}}
whileInView={{opacity:1,y:0}}
transition={{duration:1}}
>

<h2>About Our Curtains</h2>

<p>
We provide luxury curtains, blinds and interior solutions
for modern homes and offices.
</p>

</motion.div>

</section>

)

}

export default About