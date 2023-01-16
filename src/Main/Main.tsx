import a from './Main.module.css'
import sc from './../Common/styles/Container.module.css'

export const Main = () => {
    return <div className={a.mainBlock}>
        <div className={sc.container}>
            <div className={a.text}>
                <span>Hi There</span>
                <h1>I am Maximka Is Hero</h1>
                <p>Frontend Developer</p>
            </div>
            <div className={a.photo}></div>
        </div>

    </div>
}