import React from 'react';
import { Player } from '../models/BBallModels';
import { ModalState } from './BBallMatchCard';
import { getTotalAveragePlayerStats } from '../services/BBallDataRetriever';



interface Props {
  player: Player;
  handleModalAction: (modalState: ModalState, player: Player | undefined) => void;
}

export const PlayerStatsModal = (({ player, handleModalAction }: Props) => {
    const playerStats = getTotalAveragePlayerStats(player.name);
    return (        
    // <Modal
    //     aria-labelledby="simple-modal-title"
    //     aria-describedby="simple-modal-description"
    //     open={true}
    //     onClose={() => handleModalAction(ModalState.Close, undefined)}
    //   >
    //     <div className={classes.root}>
    //     <Paper className={classes.paper}>
    //         <Grid wrap="nowrap" container spacing={40} direction="column">
    //             <Grid item xs container>
    //                 <Grid item>
    //                     {player.number}. {player.name}    
    //                 </Grid>
    //             </Grid>
    //             <Grid item xs container direction="row" spacing={24}
    //                 justify="space-evenly">
    //                     <Grid item>
    //                         <Typography style={{ cursor: 'pointer' }}>PPG</Typography>
    //                         <Typography style={{ cursor: 'pointer' }}><strong>{playerStats.pointsPerGame.toFixed(3)}</strong></Typography>                    
                    
    //                     </Grid>
    //                     <Grid item>
    //                         <Typography style={{ cursor: 'pointer' }}>RPG</Typography>
    //                         <Typography style={{ cursor: 'pointer' }}><strong>{playerStats.reboundsPerGame.toFixed(3)}</strong></Typography>                    
                    
    //                     </Grid>
    //                     <Grid item>
    //                         <Typography style={{ cursor: 'pointer' }}>APG</Typography>
    //                         <Typography style={{ cursor: 'pointer' }}><strong>{playerStats.assistsPerGame.toFixed(3)}</strong></Typography>                    
    //                     </Grid>
    //             </Grid>
    //             <Grid item xs container direction="row" spacing={24}
    //                 justify="space-evenly">
    //                     <Grid item>
    //                         <Typography style={{ cursor: 'pointer' }}>FG%</Typography>
    //                         <Typography style={{ cursor: 'pointer' }}><strong>{playerStats.fieldGoalPercentage.toFixed(3)}</strong>
    //                         ({playerStats.fieldGoalsMade}/{playerStats.fieldGoalsAttempted})
    //                         </Typography>                    
                    
    //                     </Grid>
    //                     <Grid item>
    //                         <Typography style={{ cursor: 'pointer' }}>3PT%</Typography>
    //                         <Typography style={{ cursor: 'pointer' }}><strong>{playerStats.threePointPercentage.toFixed(3)}</strong>
    //                         ({playerStats.threePointsMade}/{playerStats.threePointsAttempted})
    //                         </Typography>                    
                    
    //                     </Grid>
    //                     <Grid item>
    //                         <Typography style={{ cursor: 'pointer' }}>FT%</Typography>
    //                         <Typography style={{ cursor: 'pointer' }}><strong>{playerStats.freePointPercentage.toFixed(3)}</strong>
    //                         </Typography>                    
    //                     </Grid>
    //             </Grid>
    //             <Grid item xs container direction="row" spacing={24}
    //                 justify="space-evenly">
    //                     <Grid item>
    //                         <Typography style={{ cursor: 'pointer' }}>SPG</Typography>
    //                         <Typography style={{ cursor: 'pointer' }}><strong>{playerStats.stealsPerGame.toFixed(3)}</strong></Typography>                    
                    
    //                     </Grid>
    //                     <Grid item>
    //                         <Typography style={{ cursor: 'pointer' }}>BPG</Typography>
    //                         <Typography style={{ cursor: 'pointer' }}><strong>{playerStats.blocksPerGame.toFixed(3)}</strong></Typography>                    
                    
    //                     </Grid>
    //                     <Grid item>
    //                         <Typography style={{ cursor: 'pointer' }}>TPG</Typography>
    //                         <Typography style={{ cursor: 'pointer' }}><strong>{playerStats.turnoversPerGame.toFixed(3)}</strong></Typography>                    
    //                     </Grid>
    //             </Grid>
    //         </Grid>
    //     </Paper>
    //     </div>
    //   </Modal>
    //   )
    <></>
    )
});
