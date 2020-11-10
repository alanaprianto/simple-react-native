// this reducers will saved on localstorage, see config redux persist on store whitelist
import {
    APP_LOGIN_BEGIN,
    APP_LOGIN_SUCCESS,
    APP_LOGIN_FAIL,
    APP_REGISTER_BEGIN,
    APP_REGISTER_SUCCESS,
    APP_REGISTER_FAIL,
    APP_LOGOUT
} from '../action/app';

const initialState = {
    is_login: false,
    login: {
        loading: false,
        data: {},
        error: null
    },
    register: {
        loading: false,
        data: {},
        error: null
    }
}

export default (state = initialState, action) => {
    switch (action.type) {
        case APP_LOGIN_BEGIN:
            return {
                ...state,
                login: {
                    ...state.login,
                    loading: true
                }
            }
        case APP_LOGIN_SUCCESS:
            return {
                ...state,
                login: {
                    ...state.login,
                    loading: false,
                    data: action.payload.data,
                    error: null
                },
                is_login: true
            }
        case APP_LOGIN_FAIL:
            return {
                ...state,
                login: {
                    ...state.login,
                    loading: false,
                    data: {},
                    error: action.payload.error
                }
            }
        case APP_REGISTER_BEGIN:
            return {
                ...state,
                register: {
                    ...state.register,
                    loading: true
                }
            }
        case APP_REGISTER_SUCCESS:
            return {
                ...state,
                register: {
                    ...state.register,
                    loading: false,
                    data: action.payload.data,
                    error: null
                },
            }
        case APP_REGISTER_FAIL:
            return {
                ...state,
                register: {
                    ...state.register,
                    loading: false,
                    data: {},
                    error: action.payload.error
                }
            }
        case APP_LOGOUT:
            return {
                ...initialState
            }
        default:
            return state
    }
}