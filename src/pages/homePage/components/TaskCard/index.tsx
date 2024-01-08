import { Link } from 'react-router-dom'
import './index.less'
import { ITask } from '@type/page/homepage'

interface Iprops {
    task: ITask
}


const TaskCard = (props: Iprops) => {
    const { title, id, getNumber, claimed } = props.task
    return   <Link to={`/task/${id}`} className="task-card">
            <span className="task-title">{title}</span>
            <div className='get'>
                <span className="get-number">{getNumber}人已认领</span>
                {claimed ? <div className='claimed'></div> : <span className='click' >点击认领</span>}
            </div>
        </Link>

}

export default TaskCard