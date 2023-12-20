import './index.less'

type Menu = {
    index: number,
    title: string
    path?: string,
    isActive?: boolean,
}
const Header = () => {
    const menus: Menu[] = [
        {
            index: 0,
            title: '首页',
            isActive: true
        },
        {
            index: 1,
            title: '训练营'
        },
        {
            index: 2,
            title: '项目实习'
        },
        {
            index: 3,
            title: '任务中心'
        },
        {
            index: 4,
            title: '问答论坛',
            path: 'https://qa.arceos.cn/'
        },
        {
            index: 5,
            title: '学院博客'
        },
        {
            index: 6,
            title: '明星学员'
        },
        {
            index: 7,
            title: '共建企业'
        },
    ]

    const handleMenuClick = (menu: Menu) => {
        menu.path && window.open(menu.path)
    }
    
    return <div className="layout-header">
        <div className="logo-wrap">
            <img src="https://ssl.cdn.maodouketang.com/Fpkgonzaw5GTUFa0Bfvd_ZlO5yq1" alt="learningOS" />
            <p className='title'>开源操作系统社区</p>
        </div>
        <ul className="menus">
            {menus.map((menu) => <li onClick={() => handleMenuClick(menu)} className={menu.isActive ? 'active' : ''} key={menu.index}>{menu.title}</li>)}
        </ul>
        <div className="login-wrap">登录</div>
    </div>
}

export default Header