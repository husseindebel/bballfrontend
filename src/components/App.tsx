import React, { Component } from 'react';
// import './BBallSeason.css';
import * as bballData from '../models/data.json';
import { BBallSeasonMatches } from './BBallSeasonMatches';
import { parseBBallData } from '../services/BBallDataRetriever';
import { Router } from '@reach/router';
import { BBallMatchPanel } from './BBallMatchPanel';
import { PlayerStatsSection } from './PlayerStatsSection';

interface RouteProps {
  path: string;
  matchId?: string;
  playerId?: string;
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

const PlayerStatsRoute = ({path, playerId}: RouteProps) => {
  return <PlayerStatsSection playerId={playerId} />
}

const App = () => (
  <Router>
    <BBallSeason path="/" />
    <BBallMatchPanelRoute path="/match/:matchId" />
    <PlayerStatsRoute path="/player/:playerId" />
  </Router>
);


export default App;
