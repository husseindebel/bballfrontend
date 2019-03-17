import React from 'react';
import { Match, CompleteMatchStats, MatchState } from '../models/BBallModels';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { Theme, createStyles, withStyles, Button, WithStyles, createMuiTheme, MuiThemeProvider, Card, Grid, IconButton, Collapse, CardContent } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import classnames from 'classnames';
import { BBallMatchStats } from './BBallMatchStats';

const styles = (theme: Theme) => createStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    padding: theme.spacing.unit * 2,
  },
  matchCardRight: {
    textAlign: 'right',
    backgroundColor: 'grey',
  },
  matchCardMiddle: {
    textAlign: 'center',
  },
  matchCardLeft: {
    backgroundColor: 'gold',
  },
  matchContainer: {
    margin: '-16px',
    width: '105%',
  },
  matchText: {
    padding: '20px',
    fontSize: '20px'
  },
  arrowIcon: {
    fontSize: "30px",
    padding: "0px"
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
    marginLeft: 'auto',
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
});

interface Props extends WithStyles<typeof styles> {
  matchData: Match;
}


export const BBallMatchCard = withStyles(styles)(({ matchData, classes }: Props) => {
  const [isExpanded, changeCardState] = React.useState(false);
  const matchStats = matchData.matchStats;

  return (
    <Card className={classes.root}>
      <Grid className={classes.matchContainer} container spacing={24}>
        <Grid className={classes.matchCardLeft} item xs={4}>
          <Typography className={classes.matchText}>
            {matchData.homeTeam.name}
          </Typography>
        </Grid>
        <Grid className={classes.matchCardMiddle} item xs={4}>
          {matchStats.matchStatus === MatchState.Complete &&
            <div className={classes.matchText} >{matchStats.homeTeamScore} - {matchStats.awayTeamScore}</div>
          }
          {matchStats.matchStatus === MatchState.Incomplete &&
            <div className={classes.matchText} >VS</div>
          }
          <IconButton
            className={classnames(classes.arrowIcon, classes.expand, {
              [classes.expandOpen]: isExpanded,
            })}
            onClick={() => changeCardState(!isExpanded)}
            aria-expanded={isExpanded}
            aria-label="Show more"
          >
            <ExpandMoreIcon className={classes.arrowIcon} />
          </IconButton>
        </Grid>
        <Grid className={classes.matchCardRight} item xs={4}>
          <Typography className={classes.matchText}>
            No Presence
         </Typography>
        </Grid>
      </Grid>
      <Collapse in={isExpanded} timeout="auto" unmountOnExit>
        {matchStats.matchStatus === MatchState.Incomplete &&
          <div>Data Not Available</div>
        }
        {matchStats.matchStatus === MatchState.Complete &&
          <BBallMatchStats matchStats={matchStats}/>
        }
      </Collapse>
    </Card>
  )
});
// export default withStyles(styles)(BBallMatchCard);