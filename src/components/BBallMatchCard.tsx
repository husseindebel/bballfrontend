import React from 'react';
import { Match, CompleteMatchStats } from '../models/BBallModels';

interface Props {
  matchData: Match
}

export function BBallMatchCard({ matchData }: Props) {
  const matchStats = matchData.matchStats as CompleteMatchStats;

  return (
    <div className="card-overlay">
      {matchData.homeTeam.name}
      {matchStats.homeTeamScore}
      -
      {matchStats.awayTeamScore}
      {matchData.awayTeam.name}
    </div>
  )
}