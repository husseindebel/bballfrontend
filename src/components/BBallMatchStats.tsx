import React from 'react';
import { CardContent, Typography, Theme, WithStyles, createStyles, withStyles, Table, TableHead, TableRow, TableCell, TableBody } from '@material-ui/core';
import { Match, CompleteMatchStats } from '../models/BBallModels';

const styles = (theme: Theme) => createStyles({

});

interface Props extends WithStyles<typeof styles> {
  matchStats: CompleteMatchStats;
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

export const BBallMatchStats = withStyles(styles)(({ matchStats, classes }: Props) => {
  console.log(matchStats);
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
                  {n.player.number}   {n.player.name}
                </TableCell>
                <TableCell padding='checkbox' align='center'>{n.fieldGoalsMade*2 + n.threePointsMade*3}</TableCell>
                <TableCell padding='checkbox' align='center'>{n.rebounds}</TableCell>
                <TableCell padding='checkbox' align='center'>{n.assists}</TableCell>
                <TableCell padding='checkbox' align='center'>{n.steals}</TableCell>
                <TableCell padding='checkbox' align='center'>{n.blocks}</TableCell>
                <TableCell padding='checkbox' align='center'>{n.fieldGoalsMade}</TableCell>
                <TableCell padding='checkbox' align='center'>{n.fieldGoalsAttempted}</TableCell>
                <TableCell padding='checkbox' align='center'>{
                  isNaN(n.fieldGoalsMade/n.fieldGoalsAttempted) ? 0 : 
                  (n.fieldGoalsMade/n.fieldGoalsAttempted).toFixed(2)}</TableCell>
                <TableCell padding='checkbox' align='center'>{n.threePointsMade}</TableCell>
                <TableCell padding='checkbox' align='center'>{n.threePointsAttempted}</TableCell>
                <TableCell padding='checkbox' align='center'>{
                  isNaN(n.threePointsMade/n.threePointsAttempted) ? 0 : 
                  (n.threePointsMade/n.threePointsAttempted).toFixed(2)}</TableCell>
                <TableCell padding='checkbox' align='center'>{n.freeThrowsMade}</TableCell>
                <TableCell padding='checkbox' align='center'>{n.freeThrowsAttempted}</TableCell>
                <TableCell padding='checkbox' align='center'>{
                  isNaN(n.freeThrowsMade/n.freeThrowsAttempted) ? 0 : 
                  (n.freeThrowsMade/n.freeThrowsAttempted).toFixed(2)}</TableCell>
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