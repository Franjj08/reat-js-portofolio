export default function ContactMe (){
    return <section id="Contact"className="contact--section">
        <div className="sub--title">
            <p className="sub--title">Get In Touch</p>
            <h2>Contact Me</h2>
            <p className="text-lg">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, sit.</p>
        </div>
        <form className="contact--form--container">
            <div className="coontainer">
                <label htmlFor="first-name" className="contact--label">
                    <span className="text-md">First Name</span>
                    <input 
                        type="text" 
                        className="contact--input text-md" name="first-name"
                        id="first-name"
                        required/>
                </label>
                <label htmlFor="last-name" className="contact--label">
                    <span className="text-md">Last Name</span>
                    <input 
                        type="text" 
                        className="contact--input text-md" name="last-name"
                        id="last-name"
                        required/>
                </label>
                <label htmlFor="email" className="contact--label">
                    <span className="text-md">Email</span>
                    <input 
                        type="text" 
                        className="contact--input text-md" name="email"
                        id="email"
                        required/>
                </label>
                <label htmlFor="phone-number" className="contact--label">
                    <span className="text-md">phone-number</span>
                    <input 
                        type="text" 
                        className="contact--input text-md" name="phone-number"
                        id="phone-number"
                        required/>
                </label>
            </div>
            <label htmlFor="choose-topical" className="contact--label">
                    <span className="text-md">Choose a topic</span>
                    <select id="choose-topic" 
                    className="contact--input text-md">
                        <option>Select One...</option>
                        <option>Select 1</option>
                        <option>Select 2</option>
                        <option>Select 3</option>
                    </select>
                </label>
                <label htmlFor="message" className="contact--label">
                    <span className="text-md">Message</span>
                    <textarea 
                        className="contact--input text-md" 
                        id="message"
                        rows="8"
                        placeholder="Type your message.."
                        />
                </label>
                <label htmlFor="checkboc" className="checkbox--label">
                    <input type="checkbox" required name="checkbox"
                    id="checkbox"/>
                    <span className="text-sm">I acept the terms</span>
                </label>
                <div><button className="btn btn-primary contact--form--btn">Submit</button></div>
        </form>
    </section>;
    
}