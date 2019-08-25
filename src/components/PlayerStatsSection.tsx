import React, { useState } from 'react';
import { Player, PlayerStats } from '../models/BBallModels';
import { ModalState } from './BBallMatchCard';
import { getTotalAveragePlayerStats } from '../services/BBallDataRetriever';
import { Jumbotron, Button, Container, Col, Dropdown } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import './BBall.css';
import { DropdownButton } from 'react-bootstrap';

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
  gamesPlayed: string;
}

interface LeagueSeasons {
  seasonId: number | undefined;
  label: string;
  currentSeason?: boolean
}

const formatStats = (playerId: string, season: LeagueSeasons): FormattedPlayerStats => {
  const playerStats = getTotalAveragePlayerStats(playerId, season.seasonId);
  return {
      number: playerStats.player.number.toString(),
      name: playerStats.player.name,
      gamesPlayed: playerStats.gamesPlayed.toString(),
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

  const seasons: LeagueSeasons[] = [
    {
      seasonId: 1,
      label: "Season 1",
    },
    {
      seasonId: 2,
      label: "Current Season",
      currentSeason: true
    },
    {
      seasonId: undefined,
      label: "Total"
    }
  ]
  
  export const PlayerStatsSection = (({ playerId }: Props) => {
    
    function changeSeason(season: LeagueSeasons){
      setSeason(season);
    }
    
    if (!playerId){
      return null;
    }

    const [currentSeason, setSeason] = useState<LeagueSeasons>( {
      seasonId: undefined,
      label: "Total"
    });

    const playerStats = formatStats(playerId, currentSeason);

    const firstRow = playerStats.stats.filter(stats => stats.label === "APG" || stats.label === "PPG" || stats.label === "RPG");
    const secondRow = playerStats.stats.filter(stats => stats.label === "FG%" || stats.label === "3PT%" || stats.label === "FT%");
    const thirdRow = playerStats.stats.filter(stats => stats.label === "SPG" || stats.label === "BPG" || stats.label === "TOV");
    const rows = [firstRow, secondRow, thirdRow];
    
    return (  
      <>
        <Jumbotron>
          <h1>#{playerStats.number}. {playerStats.name}</h1> 
          <div>Games played: {playerStats.gamesPlayed}</div>
          <div>
            <DropdownButton id="dropdown-basic-button" title={currentSeason.label}>
              {seasons.map(season => 
                <Dropdown.Item 
                  onClick={() => changeSeason(season)} 
                  key={season.label}>
                    {season.label}
                </Dropdown.Item>
              )}
            </DropdownButton>
          </div>
        </Jumbotron>
        <Container>
          {rows && rows.map((rows, index) => (
            <div key={index} className="player-score">
            <Row>
              {rows && rows.map(stat => (
                <Col key={stat.label}>
                  <h2>{stat.stat}</h2>
                  {stat.volume && <h5>({stat.volume.made}/{stat.volume.attempted})</h5>}
                  {stat.label}
                </Col>
              ))}
            </Row>
            </div>
          ))}
        </Container>
      </>     
    );
});
