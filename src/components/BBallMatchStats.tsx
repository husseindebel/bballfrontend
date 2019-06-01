import React from 'react';
import { Match, CompleteMatchStats, Player } from '../models/BBallModels';
import { getTotalAveragePlayerStats } from '../services/BBallDataRetriever';
import { ModalState } from './BBallMatchCard';
import { Table, Button } from 'react-bootstrap';

interface Props {
  matchStats: CompleteMatchStats;
  // handleModalAction: (modalState: ModalState, player: Player) => void;
}

/*
  PTS
  REB
  AST
  STL
  BLK
  FGM
  FGA
  FG%
  3PM
  3PA
  3P%
  FTM
  FTMA
  FT%
  TOV
*/

export const BBallMatchStats =(({ matchStats }: Props) => {
  
  return (
    <div className="match-table">
      <Table responsive striped bordered hover>
        <thead>
          <tr>
            <th>Player Name</th>
            <th>PTS</th>
            <th>REB</th>
            <th>AST</th>
            <th>STL</th>
            <th>BLK</th>
            <th>FGM</th>
            <th>FGA</th>
            <th>FG%</th>
            <th>3PM</th>
            <th>3PA</th>
            <th>3P%</th>
            <th>FTM</th>
            <th>FTA</th>
            <th>FT%</th>
            <th>TOV</th>
            <th>PF</th>
          </tr>
        </thead>
        <tbody>
          {matchStats.homeTeamStats.map(n => {
            return (
              <tr onClick={() => console.log(n.player.name)} key={n.player.number}>
                <td>
                {n.player.name}
                </td>
                <td>{n.threePointsMade*3 + (n.fieldGoalsMade - n.threePointsMade)*2 +  n.freeThrowsMade}</td>
                <td>{n.rebounds}</td>
                <td>{n.assists}</td>
                <td>{n.steals}</td>
                <td>{n.blocks}</td>
                <td>{n.fieldGoalsMade}</td>
                <td>{n.fieldGoalsAttempted}</td>
                <td>{
                  isNaN(n.fieldGoalsMade/n.fieldGoalsAttempted) ? 0 : 
                  ((n.fieldGoalsMade/n.fieldGoalsAttempted)*100).toFixed(2)}</td>
                <td>{n.threePointsMade}</td>
                <td>{n.threePointsAttempted}</td>
                <td>{
                  isNaN(n.threePointsMade/n.threePointsAttempted) ? 0 : 
                  ((n.threePointsMade/n.threePointsAttempted)*100).toFixed(2)}</td>
                <td>{n.freeThrowsMade}</td>
                <td>{n.freeThrowsAttempted}</td>
                <td>{
                  isNaN(n.freeThrowsMade/n.freeThrowsAttempted) ? 0 : 
                  ((n.freeThrowsMade/n.freeThrowsAttempted)*100).toFixed(2)}</td>
                <td>{n.turnovers}</td>
                <td>{n.foulsGiven}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      </div>
    )
});