import {Link} from 'react-router-dom';
import img1 from '../assets/images/showcase-img-1.png';
import img2 from '../assets/images/showcase-img-2.png';


const Showcase: React.FC = () => {
    return (
        <section className="showcase container">
            <img src={img1} className="showcase-image-left" alt="showcase-img-1" />
            <div className="showcase-body">
                <h1>Sale Up</h1>
                <h1>To 50% Off</h1>
                <p>Online shopping free home delivery over $100</p>
                <Link to="/products" className="btn-theme">SHOP NOW</Link>
            </div>
            <img src={img2} className="showcase-image-right" alt="showcase-img-2" />
        </section>
    )
}

export default Showcase