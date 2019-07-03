import React, { Component } from 'react';
// import './BBallSeason.css';
import * as bballData from '../models/data.json';
import { BBallSeasonMatches } from './BBallSeasonMatches';
import { parseBBallData } from '../services/BBallDataRetriever';
import { Router } from '@reach/router';
import { BBallMatchPanel } from './BBallMatchPanel';
import { PlayerStatsSection } from './PlayerStatsSection';
import { MatchVideo } from './MatchVideo';

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

const  MatchVideoRoute = ({path, matchId}: RouteProps) => {
  return <MatchVideo matchId={matchId} />
}

const App = () => (
  <Router basepath="/bballfrontend">
    <BBallSeason path="/" />
    <BBallMatchPanelRoute path="/match/:matchId" />
    <PlayerStatsRoute path="/player/:playerId" />
    {/* <MatchVideoRoute path="/video/:matchId" /> */}
  </Router>
);


export default App;
