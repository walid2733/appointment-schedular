import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
// Hey i am adding a comment this file do this this function do thi bla bla bal
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { currentUserSelector } from './redux/user/user.selector'
import { gettingHospitalStart } from './redux/data/data.actions'
import { ToastContainer } from 'react-toastify'
import Dashboard from './pages/Dashbaord/Dashboard'
import SignUp from './pages/auth/SignUp'
import Login from './pages/auth/Login'
import './App.css'
import 'react-toastify/dist/ReactToastify.css'
import { addHospital, addHospitalsInBulk } from './firebase/firebase.config'
import { hospitals, hospital } from './hospitals'
function App() {
  const user = useSelector(currentUserSelector)
  const dispatch = useDispatch()
  React.useEffect(() => {
    dispatch(gettingHospitalStart())
    // addHospitalsInBulk(hospitals)
    addHospital(hospital)
  }, [])
  return (
    <div>
      <MuiThemeProvider>
        <HashRouter>
          <Routes>
            <Route
              path="/dashboard"
              element={user ? <Dashboard /> : <Navigate to="/" replace />}
            />

            <Route
              path="/register"
              element={user ? <Navigate to="/dashboard" replace /> : <SignUp />}
            />
            <Route
              path="/"
              element={user ? <Navigate to="/dashboard" replace /> : <Login />}
            />
          </Routes>
        </HashRouter>
        <ToastContainer />
      </MuiThemeProvider>
    </div>
  )
}

export default App
