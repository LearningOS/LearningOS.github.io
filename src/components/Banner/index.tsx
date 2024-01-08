import { Carousel } from "antd"
import { IBanner } from "../../types/page/homepage"

import './index.less'
import { Link } from "react-router-dom"

interface Iprops {
    list?: IBanner[]
    speed?: number
    autoplay?: boolean
    dots?: boolean | { className?: string }
}

const Banner = (props: Iprops) => {
    const { autoplay = true, speed = 2000, list = [], dots = true } = props

    const getItem = (banner: IBanner) => {
        const { type = 'img', image, link } = banner

        return <div className="banner-item">
            {type === 'img' && <Link to={link}><img className="full-img" src={image} /></Link>}
            {/* {type === 'text' && <>123</>} */}
        </div>
    }


    return <div className="banner">
        <Carousel autoplay={autoplay} autoplaySpeed={4000}  speed={speed} dots={dots}>
            {list.map((item) => getItem(item))}
        </Carousel>
    </div>
}

export default Banner