import React from 'react';
import { Match } from '../models/BBallModels';
import { BBallMatchCard } from './BBallMatchCard';

interface Props {
  seasonMatches: Match[]
}

export function BBallMatchPanel({ seasonMatches }: Props) {
  return (
    <div>
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