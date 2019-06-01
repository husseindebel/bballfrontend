import React, { Component } from 'react';
// import './BBallSeason.css';
import * as bballData from '../models/data.json';
import { BBallSeasonMatches } from './BBallSeasonMatches';
import { parseBBallData } from '../services/BBallDataRetriever';
import { Router } from '@reach/router';
import { BBallMatchPanel } from './BBallMatchPanel';

interface RouteProps {
  path: string;
  matchId?: string;
}

const BBallSeason = ({path} : RouteProps) => {
  const matches = parseBBallData(bballData);
  return(
    <BBallSeasonMatches seasonMatches={matches} />
  );
}

const BBallMatchPanelRoute = ({path, matchId}: RouteProps) => {
  return <BBallMatchPanel matchId={matchId}/>
}

const App = () => (
  <Router>
    <BBallSeason path="/" />
    <BBallMatchPanelRoute path="/match/:matchId" />
  </Router>
);


export default App;
