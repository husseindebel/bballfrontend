import React from 'react';
import { Match, CompleteMatchStats, MatchState, Player } from '../models/BBallModels';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { Theme, createStyles, withStyles, Button, WithStyles, createMuiTheme, MuiThemeProvider, Card, Grid, IconButton, Collapse, CardContent, Modal } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import classnames from 'classnames';
import { BBallMatchStats } from './BBallMatchStats';
import { getTotalAveragePlayerStats } from '../services/BBallDataRetriever';
import { PlayerStatsModal } from './PlayerStatsModal';

const styles = (theme: Theme) => createStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    padding: theme.spacing.unit * 2,
    margin: '50px'
  },
  matchCardRight: {
    textAlign: 'right',
    backgroundColor: theme.palette.secondary.main,
  },
  matchCardMiddle: {
    textAlign: 'center',
  },
  matchCardLeft: {
    backgroundColor: theme.palette.primary.main,
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

interface State {
  expanded: boolean;
  modalOpen: ModalState;
  currentPlayer: Player | undefined;
}

export enum ModalState {
  Open, Close
}

export const BBallMatchCard = withStyles(styles)(({ matchData, classes }: Props) => {

  const initState: State = {
    expanded: false,
    modalOpen: ModalState.Close,
    currentPlayer: undefined,
  }

  const [cardState, changeCardState] = React.useState(initState);
  const matchStats = matchData.matchStats;

  const handleExpandCard = () => changeCardState({
    ...cardState,
    expanded: !cardState.expanded
  });

  const handleModalAction = (modalState: ModalState, player: Player | undefined) => changeCardState({
    ...cardState,
    modalOpen: modalState,
    currentPlayer: player,
  });

  return (
    <>
    <div>{matchData.matchNumber} {matchData.date}</div>
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
              [classes.expandOpen]: cardState.expanded,
            })}
            onClick={() => handleExpandCard()}
            aria-expanded={cardState.expanded}
            aria-label="Show more"
          >
            <ExpandMoreIcon className={classes.arrowIcon} />
          </IconButton>
        </Grid>
        <Grid className={classes.matchCardRight} item xs={4}>
          <Typography className={classes.matchText}>
            {matchData.awayTeam.name}
         </Typography>
        </Grid>
      </Grid>
      <Collapse in={cardState.expanded} timeout="auto" unmountOnExit>
        {matchStats.matchStatus === MatchState.Incomplete &&
          <div>Data Not Available</div>
        }
        {matchStats.matchStatus === MatchState.Complete &&
          <BBallMatchStats matchStats={matchStats} handleModalAction={handleModalAction}/>
        }
      </Collapse>
    </Card>
    {cardState.modalOpen == ModalState.Open && cardState.currentPlayer && <PlayerStatsModal player={cardState.currentPlayer} handleModalAction={handleModalAction}/>}
    </>
  )
});
// export default withStyles(styles)(BBallMatchCard);