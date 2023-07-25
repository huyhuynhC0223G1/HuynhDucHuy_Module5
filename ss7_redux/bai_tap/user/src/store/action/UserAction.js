
export const userInfo = (userInfo) =>{
    return{
        type: 'USER_INFO',
        payload: userInfo
    }
}

export const getUserInfo = (state) =>{
    return state.userReducer
}