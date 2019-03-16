import React, { Component } from 'react';
import './BBallSeason.css';
import * as bballData from '../models/data.json';
import { PlayerStats, Match } from '../models/BBallModels';
import { BBallMatchPanel } from './BBallMatchPanel';


function BBallSeason() {

  const [matches, setMatches] = React.useState([parseBBallData(bballData)] as Match[]); 

  function parseBBallData(data: any): Match {
    return data.default;
  }

  return(  
      <BBallMatchPanel seasonMatches={matches} />
  );

}

export default BBallSeason;
