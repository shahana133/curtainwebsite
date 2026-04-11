function Contact(){

return(

<section>

<h1>Contact Us</h1>

<form className="contact-form">

<input type="text" placeholder="Your Name" required/>

<input type="email" placeholder="Your Email" required/>

<input type="text" placeholder="Phone Number"/>

<textarea placeholder="Your Message"></textarea>

<button type="submit">Send Enquiry</button>

</form>

</section>

)

}

export default Contact