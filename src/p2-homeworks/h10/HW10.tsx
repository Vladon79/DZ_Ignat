import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import { loadingAC } from './bll/loadingReducer';
import store, { AppStoreType } from './bll/store';
import preloader from "./bll/preloader.svg"
import s from './HW10.module.css'

function HW10() {
    // useSelector, useDispatch
    const loading = useSelector<AppStoreType>(state => {
        return state.loading.isLoading
    })



    const setLoading = () => {
        store.dispatch(loadingAC(true))
        setTimeout(() => {
            store.dispatch(loadingAC(false))
        }, 3000)
    }

    return (
        <div>
            <hr />
            <h2>Homeworks 10</h2>

            {/*should work (должно работать)*/}
            {loading
                ? (
                    <div className={s.divLoading}>
                        <img src={preloader} className={s.preloader} />
                    </div>
                ) : (
                    <div className={s.divLoading}>
                        <SuperButton onClick={setLoading} className={s.buttonLoading}>set loading...</SuperButton>
                    </div>
                )
            }

            <hr />
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
            <hr />
        </div>
    )
}

export default HW10
