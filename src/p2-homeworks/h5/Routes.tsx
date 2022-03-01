import React from 'react'
import { Redirect, Route, Switch } from 'react-router'
import HW7 from '../h7/HW7'
import HW8 from '../h8/HW8'
import Error404 from './pages/Error404'
import PreJunior from './pages/PreJunior'
import HW12 from "../h12/HW12";

export const PATH = {
    PRE_JUNIOR: '/pre-junior',
    // add paths
}

function Routes() {
    return (
        <div>
            {/*Switch выбирает первый подходящий роут*/}
            <Switch>

            {/*в начале мы попадаем на страницу '/' и переходим сразу на страницу PRE_JUNIOR*/}
            {/*exact нужен чтоб указать полное совподение (что после '/' ничего не будет)*/}
            <Route path={'/'} exact render={() => <Redirect to={PATH.PRE_JUNIOR}/>}/>

            <Route path={PATH.PRE_JUNIOR} render={() => <PreJunior/>}/>
                

            {/*у этого роута нет пути, он отрисуется если пользователь захочет попасть на несуществующую страницу*/}
            <Route path={'/HW7-11'} render={() => <HW7/>}/>
            <Route path={'/HW12'} render={() => <HW12/>}/>

            </Switch>
        </div>
    )
}

export default Routes
