import React from 'react';
import { CompleteMatchStats } from '../models/BBallModels';
import './BBall.css';
import { getTotalTeamStats, getTopPlayerMatchStats } from '../services/BBallDataRetriever';

interface Props {
  matchStats: CompleteMatchStats;
}

export function BBallTeamStats({ matchStats }: Props) {
  const teamStats = getTotalTeamStats(matchStats);
  const topKeyPlayerStat = getTopPlayerMatchStats(matchStats);

  return (
    <div className="team-stats">
      {topKeyPlayerStat.map(player => {
        return (
          <div key={player.label}>
          <h6>Top {player.label}:</h6> {player.playerName} {player.total}
          </div>
        )
      })}
      <h3>Team Stats:</h3>
      FGA: {teamStats.totalFieldGoalsAttempted} <br/>
      FGM: {teamStats.totalFieldGoalsMade} <br/>
      FG%: {(teamStats.totalFieldGoalsMade/teamStats.totalFieldGoalsAttempted*100).toFixed(2)} <br/>
      3PA: {teamStats.totalThreePointsAttempted} <br/>
      3PM: {teamStats.totalThreePointsMade} <br/>
      3P%: {(teamStats.totalThreePointsMade/teamStats.totalThreePointsAttempted*100).toFixed(2)} <br/>
      FTA: {teamStats.totalFreeThrowsAttempted} <br/>
      FTM: {teamStats.totalFreeThrowsMade} <br/>
    </div>
  );
}