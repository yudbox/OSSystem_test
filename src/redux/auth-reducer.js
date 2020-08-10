const SET_AUTH_USER_DATA = 'AUTH/SET-AUTH-USER-DATA'


let initialState = {
    isLogged: false,
    loginName: ''
}


const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_AUTH_USER_DATA:
            return {
                ...state,
                ...action.data
            }

        default:
            return state;
    }
}

export const setAuthUserData = (loginName, isLogged) => ({type:SET_AUTH_USER_DATA, data:{loginName, isLogged}})


export default authReducer;