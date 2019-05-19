import React from 'react';
import { Match } from '../models/BBallModels';
import { BBallMatchCard } from './BBallMatchCard';
import './BBall.css';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core';
import { getTotalAveragePlayerStats } from '../services/BBallDataRetriever';

interface Props {
  seasonMatches: Match[]
}

export function BBallMatchPanel({ seasonMatches }: Props) {
  seasonMatches.reverse(); // mutating state
  console.log(getTotalAveragePlayerStats("Roy Aranda"));
  console.log(getTotalAveragePlayerStats("Alvin Soh"));
  console.log(getTotalAveragePlayerStats("Jeremy Soh"));
  console.log(getTotalAveragePlayerStats("Hussein Debel"));
  console.log(getTotalAveragePlayerStats("Usman Haidar"));
  console.log(getTotalAveragePlayerStats("Khatami Chau"));
  console.log(getTotalAveragePlayerStats("Tavonga Nyoka"));

  return (
    <div className="match-panel">
      {
        seasonMatches.map((match) => {
          const theme = createMuiTheme({
            palette: {
              primary: {
                // light: will be calculated from palette.primary.main,
                main: match.homeTeam.colour,
                // dark: will be calculated from palette.primary.main,
                // contrastText: will be calculated to contrast with palette.primary.main
              },
              secondary: {
                light: '#0066ff',
                main: match.awayTeam.colour,
                // dark: will be calculated from palette.secondary.main,
                contrastText: '#ffcc00',
              },
              // error: will use the default color
            },
          });
          return (
            <MuiThemeProvider key={match.matchId}  theme={theme}>
            <BBallMatchCard matchData={match} />
            </MuiThemeProvider>
          )
        })
      }
    </div>
  )
}