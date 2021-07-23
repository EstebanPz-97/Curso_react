import './carousel.css'

export default function Carousel ({children}){
    return (
        <section className="carousel">
            <div className="carousel__container">
                {children}
            </div>
        </section> 
    )
}