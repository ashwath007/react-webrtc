import { SER_USER_NAME, ACTIVE_USERS } from './action.types'

export const setUserName = (username) => {
    return ({
        type: SER_USER_NAME,
        username
    })
}

export const setActiveUsers = (activeUsers) => {
    return ({
        type: ACTIVE_USERS,
        activeUsers
    })
}