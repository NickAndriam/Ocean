import * as type from '../types'

const initialState = {
    openLBar: true,
    openRBar: true,
}

const animations = (state = initialState, action) => {
    switch (action.type) {
        case type.OPEN_LBAR:
            return { ...state, openLBar: action.openLBar };
        case type.OPEN_RBAR:
            return { ...state, openRBar: action.openRBar };
        default:
            return { ...state }
    }
}

export default animations