import style from './Notes.module.css';

const Notes = () => {
    return (
        <div className={style.notes}>
            <div>
                Текст
            </div>
            <div>
                Время создания
            </div>
            <div>
                Последнее редактирование
            </div>
            <div>
                <button>Remove</button>
            </div>
            <div>
                <button>Update</button>
            </div>
        </div>
    );
}

export default Notes;