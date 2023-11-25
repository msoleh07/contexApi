export const store = {
    userInfo: null,
    password: 0
}

const reducer = (state, action) => {
    switch (action.type) {
        case "LOGIN":
            return { ...state, userInfo: action.payload }

        default:
            return state
    }
}

export default reducer