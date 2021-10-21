import React, { useState } from 'react'
import Affairs from './Affairs'
import s from './Affairs.module.css'

// types
export type AffairPriorityType = Array<AffairType >// need to fix any
export type AffairType = {
    _id: number
    name: string
    priority: string
} // need to fix any
export type FilterType = 'all' | 'high' | 'low' | 'middle'

// constants
const defaultAffairs: AffairPriorityType = [ // need to fix any
    { _id: 1, name: 'React', priority: 'high' },
    { _id: 2, name: 'anime', priority: 'low' },
    { _id: 3, name: 'games', priority: 'low' },
    { _id: 4, name: 'work', priority: 'high' },
    { _id: 5, name: 'html & css', priority: 'middle' },
]

// pure helper functions
export const filterAffairs = (affairs: AffairPriorityType, filter: FilterType): any => { // need to fix any
    if (filter === 'all') return affairs
    if (filter === 'high') return affairs.filter (a => a.priority === 'high')
    if (filter === 'middle') return affairs.filter (a => a.priority === 'middle')
    if (filter === 'low') return affairs.filter (a => a.priority === 'low')
}
export const deleteAffair = (affairs: AffairPriorityType, _id: number): AffairPriorityType => { // need to fix any
    let newAffairs = affairs.filter(a=> a._id !== _id)
    return newAffairs
}

function HW2() {
    const [affairs, setAffairs] = useState<AffairPriorityType>(defaultAffairs) // need to fix any
    const [filter, setFilter] = useState<FilterType>('all')

    const filteredAffairs = filterAffairs(affairs, filter)
    const deleteAffairCallback = (_id: number) => setAffairs(deleteAffair(affairs, _id)) // need to fix any

    return (
        <div className={s.someClass}>
            <hr />
            <h2>Homeworks 2</h2>

            {/*should work (должно работать)*/}
            <Affairs
                data={filteredAffairs}
                setFilter={setFilter}
                deleteAffairCallback={deleteAffairCallback}
                filter={filter}
            />

            <hr />
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeAffairs/>*/}
            <hr />
        </div>
    )
}

export default HW2
