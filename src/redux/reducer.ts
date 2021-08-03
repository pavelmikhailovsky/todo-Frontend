// local state
const initialState = {
    notes: [
        {id: 0, text: 'Test notes 1', createAt: '03.08.2021', updateAt: null},
        {id: 1, text: 'Test notes 2', createAt: '22.07.2021', updateAt: '23.07.2021'},
        {id: 2, text: 'Test notes 3', createAt: '20.07.2021', updateAt: '21.07.2021'},
    ]
}

// type for action
export const ADD_NOTES = 'notes/ADD_NOTES'
export const UPDATE_NOTES = 'notes/UPDATE_NOTES'

// @ts-ignore
export default function appReducer (state = initialState, action) {
    switch(action.type) {
        case ADD_NOTES: {
            return {
                ...state,
                notes: [
                    ...state.notes,
                    {id: 3, text: action.payload, createAt: '03.08.2021', updateAt: null}
                ]
            }
        }
        case UPDATE_NOTES: {
            return {
                ...state,
                notes: state.notes.map(note => {
                    if (note.id !== action.payload) {
                        return note
                    }
                    return {
                        ...note,
                        text: action.payload,
                        updateAt: '03.08.2021'
                    }
                })
            }
        }
        default:
            return state
    }
}





