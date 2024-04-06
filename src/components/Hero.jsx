const Hero =() => {
    return (
<main className="hero container">
    <div className = "hero-content">
        <h1>YOU DESERVE THE BEST</h1>
        <p>
            YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR 
            SHOES. 
        </p>
        <div className ="hero-btn">
            <button>Shop Now</button>
            <button className = "secondary-btn">Category</button>
        </div>
        <div className = "shopping">
            <p>Also Available On</p>
            <div className = "brand-icond">
                <img src = "images/amazon.png" alt="amazonlogo" />
                <img src = "images/flipkart.png" alt="flipkartlogo" />
            </div>
        </div>
    </div> 
    <div className = "hero-image">
    <img src = "images/hero-image.png" alt="heroimagelogo" />
    </div> 
</main>
)
}; 

export default Hero ; 