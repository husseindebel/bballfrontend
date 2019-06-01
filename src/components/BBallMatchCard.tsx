import React from 'react';
import { Match, CompleteMatchStats, MatchState, Player } from '../models/BBallModels';
import classnames from 'classnames';
import { BBallMatchStats } from './BBallMatchStats';
import { getTotalAveragePlayerStats } from '../services/BBallDataRetriever';
import { PlayerStatsModal } from './PlayerStatsModal';
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
// export default withStyles(styles)(BBallMatchCard);

/* <>
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
</> */