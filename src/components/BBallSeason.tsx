import React, { Component } from 'react';
// import './BBallSeason.css';
import * as bballData from '../models/data.json';
import { BBallMatchPanel } from './BBallMatchPanel';
import { parseBBallData } from '../services/BBallDataRetriever';


const BBallSeason = () => {

  const [state, setState] = React.useState({openModal: false}); 
  const matches = parseBBallData(bballData);
  return(
    !state.openModal ? <BBallMatchPanel seasonMatches={matches} /> : <></>
  );

}

export default BBallSeason;
