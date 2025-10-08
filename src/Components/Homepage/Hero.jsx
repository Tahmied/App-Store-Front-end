
const Hero = () => {
    return (
        <>
        <section className='hero'>
            <div className="hero-container">
                <p className="hero-title">
                    We Build <br /> <span className="hero-highlight">Productive</span> Apps
                </p>
                <p className="hero-description">
                    At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.Our goal is to turn your ideas into digital experiences that truly make an impact.
                </p>
                <div className="download-btns">
                    <button className="download-btn">
                        <img src="/assets/play-store.svg" alt="" className="play-store-icon" /> Google Play
                    </button>
                    <button className="download-btn">
                        <img src="/assets/app-store.svg" alt="" className="play-store-icon" /> App Store
                    </button>
                </div>
                <img src="/assets/hero-image.png" alt="" className="hero-image" />
            </div>
            

        </section>
        </>
    );
};

export default Hero;