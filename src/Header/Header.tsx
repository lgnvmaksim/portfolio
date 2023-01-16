import a from './Header.module.css'
import {Nav} from "../Nav/Nav";


export const Header = () => {
    return <div className={a.header}>
        <Nav/>
    </div>
}