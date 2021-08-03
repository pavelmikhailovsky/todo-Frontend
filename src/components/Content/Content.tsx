import Notes from './Notes/Notes';
import style from './Content.module.css'

// @ts-ignore
const Content = (props) => {
    return (
        <div className={style.main}>
            <div className={style.button_add_notes}>
                <button>Add notes</button>
            </div>
            <div className={style.notes}>
                <Notes />
            </div>
        </div>
    );
}

export default Content;