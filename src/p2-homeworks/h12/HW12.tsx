import React from "react";
import s from "./HW12.module.scss";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../h10/bll/store";
import {changeThemeC, colorThemeType} from "./bll/themeReducer";
import SuperSelect from "../h7/common/c5-SuperSelect/SuperSelect";
import SuperRadio from "../h7/common/c6-SuperRadio/SuperRadio";

const themes = ['dark', 'red', 'some'];

function HW12() {
    const theme = useSelector<AppStoreType, colorThemeType>(state => state.theme.themeColor)
    const dispatch = useDispatch()
    const onChangeOption = (e: colorThemeType) => {
        dispatch(changeThemeC(e))
    }
    console.log(theme)
    return (
        <div className={s[theme]}>
            <hr/>
            <span className={s[theme + '-text']}>
                homeworks 12
            </span>
            {/*//<SuperRadio name={'theme'}/>*/}
            <SuperRadio
                name={'radio'}
                options={themes}
                value={theme}
                onChangeOption={onChangeOption}
            />
            <SuperSelect options={themes}
                         value={theme}
                         onChangeOption={(e) => onChangeOption(e)}/>
            {/*should work (должно работать)*/}
            {/*SuperSelect or SuperRadio*/}

            <hr/>
        </div>
    );
}

export default HW12;
