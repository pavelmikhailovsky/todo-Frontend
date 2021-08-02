import Notes from './Notes/Notes';
import style from './Content.module.css'

// @ts-ignore
const Content = (props) => {
    return (
        <div className={style.main}>
            <div className={style.notes}>
                <Notes />
            </div>
            Content
        </div>
    );
}

export default Content;