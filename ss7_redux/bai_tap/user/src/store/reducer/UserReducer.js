const initialValue = {
    name: '',
    username: '',
    email: '',
    address: '',
    phone: '',
    website: '',
    company: ''
}

export const userReducer = (state = initialValue, action) => {
    switch (action.type) {
        case 'USER_INFO':
            return {
                ...action.payload
            }
        default:
            return state;
    }
}