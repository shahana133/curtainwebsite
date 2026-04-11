import "../styles/products.css"
import { Swiper,SwiperSlide } from "swiper/react"
import "swiper/css"

import c1 from "../assets/curtain1.jpg"
import c2 from "../assets/curtain2.jpg"
import c3 from "../assets/curtain3.jpg"

function Products(){

return(

<section>

<h2>Our Curtains</h2>

<Swiper
spaceBetween={30}
slidesPerView={3}
loop={true}
>

<SwiperSlide>
<img src={c1}/>
<h3>Roman Curtains</h3>
</SwiperSlide>

<SwiperSlide>
<img src={c2}/>
<h3>Zebra Blinds</h3>
</SwiperSlide>

<SwiperSlide>
<img src={c3}/>
<h3>Blackout Curtains</h3>
</SwiperSlide>

</Swiper>

</section>

)

}

export default Products