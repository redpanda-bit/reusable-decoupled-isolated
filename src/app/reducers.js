const initialState = {
    userId: '',
    password: ''
}

const userIdState = ''

const passwordState = ''

export const userIdReducer = (state = userIdState, action) => {
    switch(action.type) {
        case 'CHANGE_USER_ID': {
            return action.payload
        }
        default:
            return state
    }
}

export const passwordReducer = (state = passwordState, action) => {
    switch(action.type) {
        case 'CHANGE_PASSWORD': {
            return action.payload
        }
        default:
            return state
    }
}