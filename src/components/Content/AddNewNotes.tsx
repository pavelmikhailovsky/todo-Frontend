import { useState } from "react"
import { useDispatch } from "react-redux"
import { CREATE_NOTES } from "../../redux/reducer"


const AddNewNotes = () => {
    const dispath = useDispatch() // use global state
    const [text, setText] = useState('') // use local state

    //@ts-ignore
    const textNote = event => setText(event.target.value)
    //@ts-ignore
    const createNewNote = () => {
        if (text) {
            dispath({type: CREATE_NOTES, payload: {text}})
            setText('')
        }
    }

    return (
        <form>
            Add new note: <input type="text"
                                autoFocus={true}
                                value={text}
                                onChange={textNote} />
            <button type="button" onClick={createNewNote}>Create</button>
        </form>
    )
}

export default AddNewNotes