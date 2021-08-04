import Notes from './Notes/Notes';
import style from './Content.module.css'
import { useSelector } from 'react-redux';
import AddNewNotes from './AddNewNotes';
//@ts-ignore
const notesSelector = state => state.notes
//@ts-ignore
const Content = (props) => {

    const notes = useSelector(notesSelector)
    //@ts-ignore
    const rendererNotesItem = notes.map(note => {
        return <Notes text={note.text} createAt={note.createAt} updateAt={note.updateAt} />
    })
    
    // const renderAddNotesComponent = () => {
    //     return <AddNewNotes />
    // }

    // const addNotes = () => {
    //     renderAddNotesComponent()
    // }

    return (
        <div className={style.main}>
            <div className={style.add_notes}>
                <AddNewNotes />
            </div>
            <div className={style.notes}>
                {rendererNotesItem}
            </div>
        </div>
    );
}

export default Content;