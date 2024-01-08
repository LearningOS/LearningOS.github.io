import { Button } from "antd"
import { Link } from "react-router-dom"

const User = () => {
    return <div style={{ display: 'flex', flexDirection: 'column' }}>
        <Button>123</Button>
        <Button>123</Button>
        <Button>123</Button>
        <Button>123</Button>
        <Button>123</Button>
        <Button>123</Button>
        <Button>123</Button>
        <Button>123</Button>
        <Button>123</Button>
        <Button>123</Button>
        <Button>123</Button>
        <Link to={'/'}> <Button onClick={() => { }}>123</Button></Link>
    </div>
}

export default User