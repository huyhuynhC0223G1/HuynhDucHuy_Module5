const initialValue = {
    user: []
}

export const userReducer = (state = initialValue, action) => {
    switch (action.type) {
        case 'USER_INFO':
            const user = [...state.user]
            const index = user.findIndex(p => p.id === action.payload.id)
            return {
                user
            }
        default:
            return state;
    }
}

