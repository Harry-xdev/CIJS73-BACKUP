import './banner.css'
import img from './images/team2-mindx-banner.jpg'

export const BannerSection = () => {

    return (
        <div className="banner-section">
            <img className="banner-img" src={img} alt='beach-background'></img>
        </div>
    )
}