export default function HeroSection(){
    return(
        <section id="heroSection" className="hero--section">
            <div className="hero--section--content--box">
                <div className="hero--section--content">
                    <p className="section--title">Hey,I'm Fran</p>
                    <h1 className="hero--section--title">
                        <span className="hero--section-title--color">Full Stack</span>{" "}
                        <br/>
                        Developer
                    </h1>
                    <p className="hero--section-description">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore minima dolor expedita eos ratione.
                        <br/>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat sunt minima qui aliquam laudantium.
                    </p>
                </div>
                <button className="btn btn-primary">Get In Touch</button>
            </div>
            <div className="hero--section--img">
                <img src="./img/hero_img.png" alt="Hero Section"/>
            </div>
        </section>

    )
}