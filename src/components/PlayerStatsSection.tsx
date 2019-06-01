import React from 'react';
import { Player, PlayerStats } from '../models/BBallModels';
import { ModalState } from './BBallMatchCard';
import { getTotalAveragePlayerStats } from '../services/BBallDataRetriever';
import { Jumbotron, Button, Container, Col } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import './BBall.css';

interface Props {
  playerId?: string;
}

interface Volume {
  made: string;
  attempted: string;
}

interface SummaryStats {
  stat: string;
  label: string;
  volume?: Volume;
}

interface FormattedPlayerStats {
  number: string;
  name: string;
  stats: SummaryStats[];
}

const formatStats = (playerId: string): FormattedPlayerStats => {
  const playerStats = getTotalAveragePlayerStats(playerId);
  return {
      number: playerStats.player.number.toString(),
      name: playerStats.player.name,
      stats: [
        {
          stat: playerStats.pointsPerGame.toFixed(3),
          label: "PPG",
        },
        {
          stat: playerStats.assistsPerGame.toFixed(3),
          label: "APG",
        },
        {
          stat: playerStats.reboundsPerGame.toFixed(3),
          label: "RPG",
        },
        {
          stat: playerStats.fieldGoalPercentage.toFixed(3),
          volume:{
            made: playerStats.fieldGoalsMade.toString(),
            attempted: playerStats.fieldGoalsAttempted.toString()
          },
          label: "FG%",
        },
        {
          stat: playerStats.threePointPercentage.toFixed(3),
          label: "3PT%",
          volume: {
            made: playerStats.threePointsMade.toString(),
            attempted: playerStats.threePointsAttempted.toString()
          }
        },
        {
          stat: playerStats.freeThrowPercentage.toFixed(3),
          label: "FT%",
          volume: {
            made: playerStats.freeThrowsMade.toString(),
            attempted: playerStats.freeThrowsAttempted.toString()
          }
        },
        {
          stat: playerStats.stealsPerGame.toFixed(3),
          label: "SPG",
        },
        {
          stat: playerStats.blocksPerGame.toFixed(3),
          label: "BPG",
        },
        {
          stat: playerStats.turnoversPerGame.toFixed(3),
          label: "TOV",
        },
      ] 
    }
  }

export const PlayerStatsSection = (({ playerId }: Props) => {
    if (!playerId){
      return null;
    }
    const playerStats = formatStats(playerId);
    const firstRow = playerStats.stats.filter(stats => stats.label === "APG" || stats.label === "PPG" || stats.label === "RPG");
    const secondRow = playerStats.stats.filter(stats => stats.label === "FG%" || stats.label === "3PT%" || stats.label === "FT%");
    const thirdRow = playerStats.stats.filter(stats => stats.label === "SPG" || stats.label === "BPG" || stats.label === "TOV");
    const rows = [firstRow, secondRow, thirdRow];
    return (  
      <div>

    <Jumbotron>
      <h1>#{playerStats.number}. {playerStats.name}</h1>
    </Jumbotron>
    <Container>
      {rows && rows.map(rows => (
        <div className="player-score">
        <Row>
          {rows && rows.map(stat => (
            <Col>
              <h2>{stat.stat}</h2>
              {stat.volume && <h5>({stat.volume.made}/{stat.volume.attempted})</h5>}
              {stat.label}
            </Col>
          ))}
        </Row>
        </div>
      ))}
    </Container>
      </div>     
    );
});
