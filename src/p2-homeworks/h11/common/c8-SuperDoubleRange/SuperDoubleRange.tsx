import { Slider } from '@mui/material'
import React, { ChangeEvent } from 'react'
import { DefaultInputPropsType } from '../c7-SuperRange/SuperRange'
import s from '../c7-SuperRange/SuperRange.module.css'

type SuperDoubleRangePropsType = {
    onChangeRange?: (value: number[]) => void
    value: [number, number]
    min: number
    max: number
    disabled:boolean
    // min, max, step, disable, ...
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange, value, ...restProps
        // min, max, step, disable, ...
    }
) => {

  
    const onChangeCallback = (event: Event, value: number | number[], activeThumb: number) => {
        if (typeof value === 'number') {
        }
        else {
            onChangeRange && onChangeRange(value)
        }
        console.log(value)
    }

    return (
        <>
            <div className={s.slider}>
                <Slider
                    value={value}
                    onChange={onChangeCallback}
                    valueLabelDisplay="auto"
                    color='primary'
                    size='medium'
                    min={restProps.min}
                    max={restProps.max}
                    disabled={restProps.disabled}
                />
            </div>

        </>
    )
}

export default SuperDoubleRange
