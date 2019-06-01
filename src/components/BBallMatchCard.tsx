import React from 'react';
import { Match, CompleteMatchStats, MatchState, Player } from '../models/BBallModels';
import classnames from 'classnames';
import { BBallMatchStats } from './BBallMatchStats';
import { getTotalAveragePlayerStats } from '../services/BBallDataRetriever';
import { PlayerStatsSection } from './PlayerStatsSection';
import { Card, Container, Button } from 'react-bootstrap';
import './BBall.css';
import { Col } from 'react-bootstrap';
import { navigate } from '@reach/router';

interface Props {
  matchData: Match;
}

interface State {
  expanded: boolean;
  modalOpen: ModalState;
  currentPlayer: Player | undefined;
}

export enum ModalState {
  Open, Close
}

export const BBallMatchCard = (({ matchData }: Props) => {

  const matchStats = matchData.matchStats;

  return (
    <Card onClick={() => navigate(`/match/${matchData.matchId}`)} className="match-card">
      <Card.Body className="text-center">
      <Card.Text>Match: {matchData.matchNumber} {matchData.date}</Card.Text>
        <Card.Text>
          <span>{matchData.homeTeam.name}</span> {matchStats.matchStatus === MatchState.Complete &&
            <span>{matchStats.homeTeamScore} - {matchStats.awayTeamScore}</span>
          } {matchStats.matchStatus === MatchState.Incomplete &&
            <span>VS</span>
          } <span>{matchData.awayTeam.name}</span>
        </Card.Text>
      </Card.Body>
    </Card>
  )
});