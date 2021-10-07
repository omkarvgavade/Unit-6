import React from 'react'
import { Switch, Route } from "react-router-dom";
import Homepage from "../Components/Homepage/Homepage"
import StudentEditForm from '../Components/Form/StudentEditForm';

function Routes() {
    return (
        <div>
            <Switch>
                <Route exact path="/students" >
                    <Homepage />

                </Route>

                <Route exact path="/students/:id" >
                    <StudentEditForm />
                </Route>

            </Switch>
        </div>
    )
}

export default Routes
