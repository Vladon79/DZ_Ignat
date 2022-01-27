import { Button } from '@mui/material'
import React, { ChangeEvent, useState } from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'
import s from './common/c7-SuperRange/SuperRange.module.css'
import SuperInputText from '../h4/common/c1-SuperInputText/SuperInputText'

function HW11() {
    const [value1, setValue1] = useState<number>(1)
    const [value2, setValue2] = useState<number>(80)
    const setValuesOnSlider = (value: number[]) => {
        setValue1(value[0])
        setValue2(value[1])
    }
    const [disabled, setDisabled] = useState<boolean>(false)
    const [min, setMin] = useState<number>(0)
    const [max, setMax] = useState<number>(100)

    const [minValues, setMinValues] = useState<number>(0)
    const [maxValues, setMaxValues] = useState<number>(100)

    const setValues = () => {
        setMinValues(min)
        setValue1(min)
        setMaxValues(max)
        setValue2(max)
        min >= max ? setDisabled(true) : setDisabled(false)
    }
    const onChangeMinValues = (e: ChangeEvent<HTMLInputElement>) => {
        e.currentTarget.value && setMin(+e.currentTarget.value)
    }
    const onChangeMaxValues = (e: ChangeEvent<HTMLInputElement>) => {
        e.currentTarget.value && setMax(+e.currentTarget.value)
    }

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            color: 'white'
        }}>
            <h2>Homeworks 11</h2>
            <div>
                Min:<SuperInputText onChange={onChangeMinValues} type='number' />
                Max:<SuperInputText onChange={onChangeMaxValues} type='number' />
                <SuperButton onClick={setValues}>Set</SuperButton>
            </div>
            <div >
                <div className={s.SuperRangeContainer}>
                    <span>{value1}</span>
                    <SuperRange
                        value={value1}
                        onChangeRange={setValue1}
                        min={minValues}
                        max={maxValues}
                        disabled={disabled}
                    />
                </div>

                <div className={s.SuperRangeContainer}>
                    <span>{value1}</span>
                    <SuperDoubleRange
                        onChangeRange={setValuesOnSlider}
                        value={[value1, value2]}
                        min={minValues}
                        max={maxValues}
                        disabled={disabled}
                    />
                    <span>{value2}</span>
                </div>
            </div>

            
        </div>
    )
}

export default HW11
