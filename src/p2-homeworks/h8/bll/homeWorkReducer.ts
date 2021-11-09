
import { UserType } from './../HW8';

type SortType = {
    type: 'sort'
    payload: 'up' | 'down'
}

type CheckType = {
    type: 'check'
    payload: number
}

type ActionType = SortType | CheckType

export const homeWorkReducer = (state: Array<UserType>, action: ActionType): Array<UserType> => { // need to fix any
    switch (action.type) {
        case 'sort':
            let newState = [...state]
            if (action.payload === 'up') {

                return newState.sort((a, b) => {
                    let nameA = a.name.toLowerCase(), nameB = b.name.toLowerCase()
                    if (nameA < nameB) //сортируем строки по возрастанию
                        return -1
                    if (nameA > nameB)
                        return 1
                    return 0 // Никакой сортировки
                })

            }
            else {

                return newState.sort((a, b) => {
                    let nameA = a.name.toLowerCase(), nameB = b.name.toLowerCase()
                    if (nameA > nameB) //сортируем строки по убыванию
                        return -1
                    if (nameA < nameB)
                        return 1
                    return 0 // Никакой сортировки
                })

            }
        case 'check':
            return state.filter(s => s.age >= action.payload)

    }
}