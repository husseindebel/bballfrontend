import React, { Component } from 'react';
// import './BBallSeason.css';
import * as bballData from '../models/data.json';
import { PlayerStats, Match, MatchState } from '../models/BBallModels';
import { BBallMatchPanel } from './BBallMatchPanel';


function BBallSeason() {

  const [matches, setMatches] = React.useState(parseBBallData(bballData)); 

  function parseBBallData(data: any): Match[] {
    const matches: Match[] = data.default;
    matches.map(match => {
      match.status === "complete" ? match.matchStats.matchStatus = MatchState.Complete : match.matchStats.matchStatus = MatchState.Incomplete;    
    })
    return data.default;
  }

  return(  
      <BBallMatchPanel seasonMatches={matches} />
  );

}

export default BBallSeason;
