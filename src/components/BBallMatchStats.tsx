import React from 'react';
import { CardContent, Typography, Theme, WithStyles, createStyles, withStyles, Table, TableHead, TableRow, TableCell, TableBody, Button } from '@material-ui/core';
import { Match, CompleteMatchStats, Player } from '../models/BBallModels';
import { getTotalAveragePlayerStats } from '../services/BBallDataRetriever';
import { ModalState } from './BBallMatchCard';

const styles = (theme: Theme) => createStyles({

});

interface Props extends WithStyles<typeof styles> {
  matchStats: CompleteMatchStats;
  handleModalAction: (modalState: ModalState, player: Player) => void;
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

export const BBallMatchStats = withStyles(styles)(({ matchStats, handleModalAction, classes }: Props) => {
  
  return (
    <CardContent>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Player Name</TableCell>
            <TableCell padding='checkbox' align='center'>PTS</TableCell>
            <TableCell padding='checkbox' align='center'>REB</TableCell>
            <TableCell padding='checkbox' align='center'>AST</TableCell>
            <TableCell padding='checkbox' align='center'>STL</TableCell>
            <TableCell padding='checkbox' align='center'>BLK</TableCell>
            <TableCell padding='checkbox' align='center'>FGM</TableCell>
            <TableCell padding='checkbox' align='center'>FGA</TableCell>
            <TableCell padding='checkbox' align='center'>FG%</TableCell>
            <TableCell padding='checkbox' align='center'>3PM</TableCell>
            <TableCell padding='checkbox' align='center'>3PA</TableCell>
            <TableCell padding='checkbox' align='center'>3P%</TableCell>
            <TableCell padding='checkbox' align='center'>FTM</TableCell>
            <TableCell padding='checkbox' align='center'>FTA</TableCell>
            <TableCell padding='checkbox' align='center'>FT%</TableCell>
            <TableCell padding='checkbox' align='center'>TOV</TableCell>
            <TableCell padding='checkbox' align='center'>PF</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {matchStats.homeTeamStats.map(n => {
            return (
              <TableRow key={n.player.number}>
                <TableCell padding='checkbox' component="th" scope="row">
                <Button size="small" onClick={() => handleModalAction(ModalState.Open, n.player)}> {n.player.number}  {n.player.name}</Button>
                </TableCell>
                <TableCell padding='checkbox' align='center'>{n.threePointsMade*3 + (n.fieldGoalsMade - n.threePointsMade)*2 +  n.freeThrowsMade}</TableCell>
                <TableCell padding='checkbox' align='center'>{n.rebounds}</TableCell>
                <TableCell padding='checkbox' align='center'>{n.assists}</TableCell>
                <TableCell padding='checkbox' align='center'>{n.steals}</TableCell>
                <TableCell padding='checkbox' align='center'>{n.blocks}</TableCell>
                <TableCell padding='checkbox' align='center'>{n.fieldGoalsMade}</TableCell>
                <TableCell padding='checkbox' align='center'>{n.fieldGoalsAttempted}</TableCell>
                <TableCell padding='checkbox' align='center'>{
                  isNaN(n.fieldGoalsMade/n.fieldGoalsAttempted) ? 0 : 
                  ((n.fieldGoalsMade/n.fieldGoalsAttempted)*100).toFixed(2)}</TableCell>
                <TableCell padding='checkbox' align='center'>{n.threePointsMade}</TableCell>
                <TableCell padding='checkbox' align='center'>{n.threePointsAttempted}</TableCell>
                <TableCell padding='checkbox' align='center'>{
                  isNaN(n.threePointsMade/n.threePointsAttempted) ? 0 : 
                  ((n.threePointsMade/n.threePointsAttempted)*100).toFixed(2)}</TableCell>
                <TableCell padding='checkbox' align='center'>{n.freeThrowsMade}</TableCell>
                <TableCell padding='checkbox' align='center'>{n.freeThrowsAttempted}</TableCell>
                <TableCell padding='checkbox' align='center'>{
                  isNaN(n.freeThrowsMade/n.freeThrowsAttempted) ? 0 : 
                  ((n.freeThrowsMade/n.freeThrowsAttempted)*100).toFixed(2)}</TableCell>
                <TableCell padding='checkbox' align='center'>{n.turnovers}</TableCell>
                <TableCell padding='checkbox' align='center'>{n.foulsGiven}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </CardContent>
  )
});