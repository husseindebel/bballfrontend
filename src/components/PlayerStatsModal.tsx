import React from 'react';
import { Theme, createStyles, WithStyles, withStyles, Modal, Typography, Grid, Paper, ButtonBase } from '@material-ui/core';
import { Player } from '../models/BBallModels';
import { ModalState } from './BBallMatchCard';
import { getTotalAveragePlayerStats } from '../services/BBallDataRetriever';

const styles = (theme: Theme) => createStyles({
    root: {
        flexGrow: 1,
      },
      paper: {
        padding: theme.spacing.unit * 2,
        margin: 'auto',
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        position: 'fixed',
        width: theme.spacing.unit * 50,
        outline: 'none',
        top: '45%',
        left: '45%',
        marginLeft: '-150px',
        marginTop: '-150px',
      },
});

interface Props extends WithStyles<typeof styles> {
  player: Player;
  handleModalAction: (modalState: ModalState, player: Player | undefined) => void;
}

export const PlayerStatsModal = withStyles(styles)(({ player, handleModalAction, classes }: Props) => {
    const playerStats = getTotalAveragePlayerStats(player.name);
    return (        
    <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={true}
        onClose={() => handleModalAction(ModalState.Close, undefined)}
      >
        <div className={classes.root}>
        <Paper className={classes.paper}>
            <Grid container spacing={40} direction="column">
                <Grid item xs container>
                    <Grid item>
                        {player.number}. {player.name}    
                    </Grid>
                </Grid>
                <Grid item xs container direction="row" spacing={24}
                    justify="space-evenly">
                        <Grid item>
                            <Typography style={{ cursor: 'pointer' }}>PPG</Typography>
                            <Typography style={{ cursor: 'pointer' }}><strong>{playerStats.pointsPerGame}</strong></Typography>                    
                    
                        </Grid>
                        <Grid item>
                            <Typography style={{ cursor: 'pointer' }}>RPG</Typography>
                            <Typography style={{ cursor: 'pointer' }}><strong>{playerStats.reboundsPerGame}</strong></Typography>                    
                    
                        </Grid>
                        <Grid item>
                            <Typography style={{ cursor: 'pointer' }}>APG</Typography>
                            <Typography style={{ cursor: 'pointer' }}><strong>{playerStats.assistsPerGame}</strong></Typography>                    
                        </Grid>
                </Grid>
                <Grid item xs container direction="row" spacing={24}
                    justify="space-evenly">
                        <Grid item>
                            <Typography style={{ cursor: 'pointer' }}>FG%</Typography>
                            <Typography style={{ cursor: 'pointer' }}><strong>{playerStats.fieldGoalPercentage.toFixed(3)}</strong>
                            ({playerStats.fieldGoalsMade}/{playerStats.fieldGoalsAttempted})
                            </Typography>                    
                    
                        </Grid>
                        <Grid item>
                            <Typography style={{ cursor: 'pointer' }}>3PT%</Typography>
                            <Typography style={{ cursor: 'pointer' }}><strong>{playerStats.threePointPercentage.toFixed(3)}</strong>
                            ({playerStats.threePointsMade}/{playerStats.threePointsAttempted})
                            </Typography>                    
                    
                        </Grid>
                        <Grid item>
                            <Typography style={{ cursor: 'pointer' }}>FT%</Typography>
                            <Typography style={{ cursor: 'pointer' }}><strong>{playerStats.freePointPercentage.toFixed(3)}</strong>
                            </Typography>                    
                        </Grid>
                </Grid>
                <Grid item xs container direction="row" spacing={24}
                    justify="space-evenly">
                        <Grid item>
                            <Typography style={{ cursor: 'pointer' }}>SPG</Typography>
                            <Typography style={{ cursor: 'pointer' }}><strong>{playerStats.stealsPerGame}</strong></Typography>                    
                    
                        </Grid>
                        <Grid item>
                            <Typography style={{ cursor: 'pointer' }}>BPG</Typography>
                            <Typography style={{ cursor: 'pointer' }}><strong>{playerStats.blocksPerGame}</strong></Typography>                    
                    
                        </Grid>
                        <Grid item>
                            <Typography style={{ cursor: 'pointer' }}>TPG</Typography>
                            <Typography style={{ cursor: 'pointer' }}><strong>{playerStats.turnoversPerGame}</strong></Typography>                    
                        </Grid>
                </Grid>
            </Grid>
        </Paper>
        </div>
      </Modal>
      )
});
