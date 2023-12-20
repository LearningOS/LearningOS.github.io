import { Outlet } from "react-router-dom"
import Header from "./header"
import Content from "./content"
import Footer from "./footer"


const Layout = () => {
    return <div className="layout">
        <Header />
        <Content>
            <Outlet />
        </Content>
        <Footer />
    </div>
}

export default Layout