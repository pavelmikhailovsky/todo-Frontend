import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { DELETE_NOTES, UPDATE_NOTES } from '../../../redux/reducer';
import style from './Notes.module.css';
// @ts-ignore
const Notes = (props) => {
    debugger
    const dispath = useDispatch()
    const [text, setText] = useState(props.text)

    const removeNote = () => {
        dispath({type: DELETE_NOTES, id: 2})
    }

    const updateNote = () => {
        dispath({
            type: UPDATE_NOTES,
            payload: {
                id: 1,
                text: text
            }
        })
    }
    //@ts-ignore
    const changeText = (e) => setText(e.target.value)

    return (
        <div className={style.notes}>
            <form>
                <input type="text" value={text} onChange={changeText} />
            </form>
            <div>
                {props.createAt}
            </div>
            {props.updateAt ? <div>{props.updateAt}</div> : <div>Редактирований не было</div>}
            <div>
                <button type="button" onClick={removeNote}>Remove</button>
            </div>
            <div>
                <button type="button" onClick={updateNote}>Update</button>
            </div>
        </div>
    );
}

export default Notes;