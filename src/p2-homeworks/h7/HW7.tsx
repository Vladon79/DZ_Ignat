import React, { useState } from 'react'
import HW10 from '../h10/HW10'
import HW11 from '../h11/HW11'
import HW12 from '../h12/HW12'
import HW8 from '../h8/HW8'
import HW9 from '../h9/HW9'
import SuperSelect from './common/c5-SuperSelect/SuperSelect'
import SuperRadio from './common/c6-SuperRadio/SuperRadio'
import s from './HW7.module.css'

const arr = ['x', 'y', 'z']

function HW7() {
    const [value, onChangeOption] = useState(arr[0])

    return (
        <div className={s.HW7}>
            <hr />
            <h2>Homeworks 7</h2>

            {/*should work (должно работать)*/}
            <div>
                <SuperSelect
                    options={arr}
                    value={value}
                    onChangeOption={onChangeOption}
                />
            </div>
            <div>
                <SuperRadio
                    name={'radio'}
                    options={arr}
                    value={value}
                    onChangeOption={onChangeOption}
                />
            </div>
            <HW8 />
            <HW9 />
            <HW10 />
            <HW11 />
            <HW12/>

            <hr />

            <hr />
        </div>
    )
}

export default HW7
