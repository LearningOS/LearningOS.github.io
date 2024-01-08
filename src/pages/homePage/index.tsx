// import './index.less'
// import { useEffect, useState } from 'react';
// import { getHomePageData } from '../../api/homepage';
// import { HomeData } from '../../types/page/homepage';
// import Banner from '../../components/Banner';
// import MoreLink from './components/MoreLink';
// import JobCard from './components/JobCard';
// import TaskCard from './components/TaskCard';


//  const HomePage = () => {
//     const [data, setData] = useState<HomeData>()

//     useEffect(() => {
//         getHomePageData().then((res) => {
//             setData(res.data)
//             console.log(data);
//         })
//     }, [])

//     return <div className="homepage-container">
//         <div className='container-left'>
//             <Banner list={data?.banners} />
//             <div className="card-list-wrap">
//                 <MoreLink title={'企业招聘'} link={'/jobs'}>
//                     <ul className='card-list'>{data?.jobs.map((job, index) => <JobCard key={index} job={job} />)}</ul>
//                 </MoreLink>

//                 <MoreLink title={'社区任务'} link={'/tasks'}>
//                     <ul className='card-lisst'>{data?.tasks.map((task, index) => <TaskCard key={index} task={task} />)}</ul>
//                 </MoreLink>
//             </div>
//             <div className="news-bar"></div>
//             <div className="news"></div>
//         </div>
//         <div className='container-right'>
//             <div className="community-data"></div>
//             <div className="bbs-list"></div>
//             <div className="ad-banner"></div>
//         </div>
//         {/* <img src="https://ssl.cdn.maodouketang.com/FngKpPrk_O9kbdthWoOiWOSt3VZ-" alt="learningOS" /> */}
//     </div>
// }
import '../../styles/img-full.less'
const Home=()=>{
        return <img src={'https://ssl.cdn.maodouketang.com/FngKpPrk_O9kbdthWoOiWOSt3VZ-'} />
    }

export default Home