import { SER_USER_NAME } from './action.types'

export const setUserName = (username) => {
    return ({
        type: SER_USER_NAME,
        username
    })
}