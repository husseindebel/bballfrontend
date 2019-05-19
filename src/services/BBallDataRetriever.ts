import { Match, MatchState, PlayerStats, CompleteMatchStats, AveragePlayerStats, MatchStats } from "../models/BBallModels";
import * as bballData from '../models/data.json';


export function parseBBallData(data: any): Match[] {
    const matches: Match[] = data.default;
    matches.map(match => {
      match.status === "complete" ? match.matchStats.matchStatus = MatchState.Complete : match.matchStats.matchStatus = MatchState.Incomplete;    
    })
    return data.default;
}

const getTotalPlayerStats = (matchData: MatchStats[], playerName: string): PlayerStats => {
    const playerMatchData = matchData.flatMap((match) => {
        if (match.matchStatus === MatchState.Incomplete) return [];
        var playerMatches = match.homeTeamStats.filter((playerStats => playerStats.player.name === playerName));
        return playerMatches;
    });
    const playerData = playerMatchData.reduce((prevStats, currentStats) => {
        return {
            player: prevStats.player,
            fieldGoalsAttempted: prevStats.fieldGoalsAttempted + currentStats.fieldGoalsAttempted,
            totalPoints: 0,
            fieldGoalsMade: prevStats.fieldGoalsMade + currentStats.fieldGoalsMade,
            threePointsAttempted: prevStats.threePointsAttempted + currentStats.threePointsAttempted,
            threePointsMade: prevStats.threePointsMade + currentStats.threePointsMade,
            freeThrowsAttempted: prevStats.freeThrowsAttempted + currentStats.freeThrowsAttempted,
            freeThrowsMade: prevStats.freeThrowsMade + currentStats.freeThrowsMade,
            assists: prevStats.assists + currentStats.assists,
            rebounds: prevStats.rebounds + currentStats.rebounds,
            steals: prevStats.steals + currentStats.steals,
            blocks: prevStats.blocks + currentStats.blocks,
            turnovers: prevStats.turnovers + currentStats.turnovers,
            foulsDrawn: prevStats.foulsDrawn + currentStats.foulsDrawn,
            foulsGiven: prevStats.foulsGiven + currentStats.foulsGiven
        }
    });
    return {...playerData, totalPoints: playerData.threePointsMade*3 + (playerData.fieldGoalsMade - playerData.threePointsMade)*2 +  playerData.freeThrowsMade};
}

export const getTotalAveragePlayerStats = (playerName: string): AveragePlayerStats => {
    const matchData = parseBBallData(bballData);
    var completeMatches: MatchStats[] = matchData.map(match => match.matchStats).filter(match => match.matchStatus === MatchState.Complete);

    var totalStats: PlayerStats = getTotalPlayerStats(completeMatches, playerName);
    return {
        player: totalStats.player,
        pointsPerGame: totalStats.totalPoints / matchData.length,
        assistsPerGame: totalStats.assists / matchData.length,
        reboundsPerGame: totalStats.rebounds / matchData.length,
        blocksPerGame: totalStats.blocks / matchData.length,
        stealsPerGame: totalStats.steals / matchData.length,
        fieldGoalPercentage: totalStats.fieldGoalsMade / totalStats.fieldGoalsAttempted,
        threePointPercentage: totalStats.threePointsMade / totalStats.threePointsAttempted,
        freePointPercentage: totalStats.freeThrowsMade / totalStats.freeThrowsAttempted,
        fieldGoalsAttempted: totalStats.fieldGoalsAttempted,
        fieldGoalsMade: totalStats.fieldGoalsMade,
        threePointsAttempted: totalStats.threePointsAttempted,
        threePointsMade: totalStats.threePointsMade,
    }
}
