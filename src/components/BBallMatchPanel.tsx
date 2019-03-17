import React from 'react';
import { Match } from '../models/BBallModels';
import { BBallMatchCard } from './BBallMatchCard';
import './BBall.css';

interface Props {
  seasonMatches: Match[]
}

export function BBallMatchPanel({ seasonMatches }: Props) {
  return (
    <div className="match-panel">
      {
        seasonMatches.map((match) => {
          return (
            <BBallMatchCard key={match.matchId} matchData={match} />
          )
        })
      }
    </div>
  )
}