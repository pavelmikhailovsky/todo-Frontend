// local state
// при работе с api initialState = []
const initialState = {
    notes: [
        {id: 0, text: 'Test notes 1', createAt: '03.08.2021', updateAt: null},
        {id: 1, text: 'Test notes 2', createAt: '22.07.2021', updateAt: '23.07.2021'},
        {id: 2, text: 'Test notes 3', createAt: '20.07.2021', updateAt: '21.07.2021'},
    ]
}

const getDate = () => {
    let date = new Date()
    return `${date.getDay()}.${date.getMonth()}.${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`
}
//@ts-ignore
const deleteNote = (notes, action) => {
    debugger
    //@ts-ignore
    let newNote = notes.filter(obj => obj.id !== action.id)
    return newNote
}

// type for action
export const CREATE_NOTES = 'notes/CREATE_NOTES'
export const DELETE_NOTES = 'notes/DELETE_NOTES'
export const UPDATE_NOTES = 'notes/UPDATE_NOTES'

// @ts-ignore
export default function appReducer (state = initialState, action) {
    switch(action.type) {
        case DELETE_NOTES: {
            return {
                ...state,
                notes: deleteNote(state.notes, action) // return array!!!!!!
            }
        }
        case UPDATE_NOTES: {
            return {
                ...state,
                notes: state.notes.map(note => {
                    if (note.id !== action.payload.id) {
                        return note
                    }
                    return {
                        ...note,
                        text: action.payload.text,
                        updateAt: getDate()
                    }
                })
            }
        }
        case CREATE_NOTES: {
            return {
                ...state,
                notes: [
                    ...state.notes,
                    {id: Math.random() * 100, text: action.payload.text, createAt: getDate()}
                ]
            }
        }
        default:
            return state
    }
}





