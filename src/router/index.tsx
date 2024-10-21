import { HashRouter, Redirect, Route, Switch } from 'react-router-dom'
import Routes from './routes'
import DashboardRegistrationPage from '~/components/pages/DashboardRegistrationPage'
import NewRegistrationPage from '~/components/pages/NewRegistrationPage'
import { RoutesProps } from './types'

const Router = ({ repository }: RoutesProps) => {
  return (
    <div style={{ marginTop: 64 }}>
      <HashRouter>
        <Switch>
          <Route
            exact
            path={Routes.DASHBOARD}
            component={() => <DashboardRegistrationPage repository={repository} />}
          />
          <Route
            exact
            path={Routes.NEW_REGISTRATION}
            component={() => <NewRegistrationPage repository={repository} />}
          />
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
