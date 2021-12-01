
type LoadingReducerType = {
    isLoading: boolean
}

type ActionType = {
    type: 'ONCLICK-BUTTON'
    isLoading: boolean
}

const initState = {
    isLoading: false
}

export const loadingReducer = (state: LoadingReducerType = initState, action: ActionType): LoadingReducerType => { // fix any
    switch (action.type) {
        case 'ONCLICK-BUTTON': {
            const copyState = {
                ...state,
                isLoading: action.isLoading
            }
            return copyState
        }
        default: return state
    }
}

export const loadingAC = (isLoading: boolean): ActionType => {
    return {
        type: 'ONCLICK-BUTTON',
        isLoading
    }
} // fix any