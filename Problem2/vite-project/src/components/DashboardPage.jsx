// src/components/DashboardPage.jsx
import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Profile from './Profile';
import Settings from './Settings';

const DashboardPage = ({ match }) => {
  return (
    <div>
      <h2>Dashboard</h2>
      <ul>
        <li>
          <Link to={`${match.url}/profile`}>Profile</Link>
        </li>
        <li>
          <Link to={`${match.url}/settings`}>Settings</Link>
        </li>
      </ul>
      <Routes>
        <Route exact path={match.path}>
          <h3>Please select a section.</h3>
        </Route>
        <Route path={`${match.path}/profile`}>
          <Profile />
        </Route>
        <Route path={`${match.path}/settings`}>
          <Settings />
        </Route>
      </Routes>
    </div>
  );
}

export default DashboardPage;
