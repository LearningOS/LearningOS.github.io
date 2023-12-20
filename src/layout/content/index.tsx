import { ReactNode } from "react"
import './index.less'

const Content = (props: { children: ReactNode }) => {
    return <div className="layout-content">
        {props.children}
    </div>
}

export default Content