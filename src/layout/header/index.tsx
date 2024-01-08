import { Link } from 'react-router-dom'
import './index.less'

type Menu = {
    index: number,
    title: string
    path: string,
    isActive?: boolean,
}
const Header = () => {
    const menus: Menu[] = [
        {
            index: 0,
            title: '首页',
            isActive: true,
            path: '/',
        },
        {
            index: 1,
            title: '训练营',
            path: '/camps'// 'https://learningos.cn/camps' //内实现 -- p0
        },
        {
            index: 2,
            title: '项目实习',
            path: '/projects'//'https://learningos.cn/projects' // 内实现 -- p0
        },
        {
            index: 3,
            title: '任务中心',
            path: '/tasks' //'https://learningos.cn/tasks' //  没开源 ==》开源 -- p1
        },
        {
            index: 4,
            title: '问答论坛',
            path: '/bbs' //'https://learningos.cn/bbs'   //  开源 -- p1
        },
        {
            index: 5,
            title: '技术博客',
            path: '/blog' //'https://learningos.cn/blog'  //  开源 -- p0
        },
        {
            index: 6,
            title: '明星学员',
            path: '/students' //'https://learningos.cn/students' // 内实现 -- p0
        },
        {
            index: 7,
            title: '共建企业',
            path: '/partners'//'https://learningos.cn/partners' // 内实现 -- p1
        },
    ]

    // const handleMenuClick = (menu: Menu) => {
    //     menu.path && window.open(menu.path)
    // }
    return <div className="layout-header">
        <div className="logo-wrap">
            <img src="https://ssl.cdn.maodouketang.com/Fpkgonzaw5GTUFa0Bfvd_ZlO5yq1" alt="learningOS" />
            <p className='title'>开源操作系统社区</p>
        </div>
        <ul className="menus">
            {menus.map((menu) => <li key={menu.index}><Link to={menu.path} className={location.pathname === menu.path ? 'active' : ''} target={location.pathname === menu.path ? '' : '_blank'}>{menu.title}</Link> </li>)}
        </ul>
        <div className="login-wrap">登录</div>
    </div>
}

export default Header