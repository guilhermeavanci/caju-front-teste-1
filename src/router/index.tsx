import { HashRouter, Redirect, Route, Switch } from 'react-router-dom'
import routes from './routes'
import DashboardAdmissionPage from '~/components/pages/DashboardAdmissionPage'
import NewRegistrationPage from '~/components/pages/NewRegistrationPage'

const Router = () => {
  return (
    <div style={{ marginTop: 64 }}>
      <HashRouter>
        <Switch>
          <Route exact path={routes.dashboard} component={DashboardAdmissionPage} />
          <Route exact path={routes.newRegistration} component={NewRegistrationPage} />
          <Route exact path={routes.history} component={() => <div>History</div>} />
          <Route exact path='*'>
            <Redirect to={routes.dashboard} />
          </Route>
        </Switch>
      </HashRouter>
    </div>
  )
}

export default Router
