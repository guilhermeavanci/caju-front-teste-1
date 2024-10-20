import { HashRouter, Redirect, Route, Switch } from 'react-router-dom'
import Routes from './routes'
import DashboardAdmissionPage from '~/components/pages/DashboardAdmissionPage'
import NewRegistrationPage from '~/components/pages/NewRegistrationPage'

const Router = () => {
  return (
    <div style={{ marginTop: 64 }}>
      <HashRouter>
        <Switch>
          <Route exact path={Routes.DASHBOARD} component={DashboardAdmissionPage} />
          <Route exact path={Routes.NEW_REGISTRATION} component={NewRegistrationPage} />
          <Route exact path={Routes.HISTORY} component={() => <div>History</div>} />
          <Route exact path='*'>
            <Redirect to={Routes.DASHBOARD} />
          </Route>
        </Switch>
      </HashRouter>
    </div>
  )
}

export default Router
