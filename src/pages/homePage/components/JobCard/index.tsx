import { Link } from 'react-router-dom'
import type { IJob } from '../../../../types/page/homepage'
import './index.less'

interface Iprops {
    job: IJob
}


const JobCard = (props: Iprops) => {
    const { title, partner, id, requirement, salary } = props.job
    return <Link to={`/job/${id}`} className="job-card">
        <span className="job-title">{title}</span>
        <div className="partner-salary">
            <span className="partner">{partner.name}</span>
            <span className="salary">{salary}</span>
        </div>
        <span className="requirement">{requirement}</span>
    </Link>
}

export default JobCard