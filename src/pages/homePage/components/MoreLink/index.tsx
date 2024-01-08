import { ArrowRightOutlined } from '@ant-design/icons';
import './index.less'
import { Link } from 'react-router-dom';

interface Iprops {
    title?: string
    link: string
    children?: React.ReactNode
    icon?: React.ReactNode
}

const MoreLink = ({ title = '更多', children, icon, link }: Iprops) => {
    return <div className="more-link">
        <Link className='title' to={link}>
            {icon ?? <ArrowRightOutlined style={{ color: 'var(--primary-blue-dark)' }} />}
            <span style={{ marginRight: 10 }}> {title}</span>
        </Link>
        {children}
    </div>
}


export default MoreLink