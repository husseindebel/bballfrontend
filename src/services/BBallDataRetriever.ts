import { Match, MatchState, PlayerStats, CompleteMatchStats, AveragePlayerStats, MatchStats } from "../models/BBallModels";
import * as bballData from '../models/data.json';


export function parseBBallData(data: any): Match[] {
    const matches: Match[] = data.default;
    matches.map(match => {
      match.status === "complete" ? match.matchStats.matchStatus = MatchState.Complete : match.matchStats.matchStatus = MatchState.Incomplete;    
    })
    return data.default;
}

export function getMatch(matchId: string | undefined){
    if (!matchId){
        return undefined;
    }
    const matchIdNumber = parseInt(matchId);
    const matchData = parseBBallData(bballData);
    const filteredMatch = matchData.filter(match => match.matchId == matchIdNumber);
    return filteredMatch.length === 0 ? undefined : filteredMatch[0];
}

const getTotalPlayerStats = (matchData: MatchStats[], playerNumber: number): PlayerStats => {
    const playerMatchData = matchData.flatMap((match) => {
        if (match.matchStatus === MatchState.Incomplete) return [];
        var playerMatches = match.homeTeamStats.filter((playerStats => playerStats.player.number === playerNumber));
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

export const getTotalAveragePlayerStats = (playerId: string): AveragePlayerStats => {
    const matchData = parseBBallData(bballData);
    const playerNumber = parseInt(playerId);
    var completeMatches: MatchStats[] = matchData.map(match => match.matchStats).filter(match => match.matchStatus === MatchState.Complete);

    var totalStats: PlayerStats = getTotalPlayerStats(completeMatches, playerNumber);
    return {
        player: totalStats.player,
        pointsPerGame: totalStats.totalPoints / matchData.length,
        assistsPerGame: totalStats.assists / matchData.length,
        reboundsPerGame: totalStats.rebounds / matchData.length,
        blocksPerGame: totalStats.blocks / matchData.length,
        stealsPerGame: totalStats.steals / matchData.length,
        fieldGoalPercentage: totalStats.fieldGoalsMade / totalStats.fieldGoalsAttempted,
        threePointPercentage: totalStats.threePointsMade / totalStats.threePointsAttempted,
        freeThrowPercentage: totalStats.freeThrowsMade / totalStats.freeThrowsAttempted,
        fieldGoalsAttempted: totalStats.fieldGoalsAttempted,
        fieldGoalsMade: totalStats.fieldGoalsMade,
        threePointsAttempted: totalStats.threePointsAttempted,
        threePointsMade: totalStats.threePointsMade,
        freeThrowsMade: totalStats.freeThrowsMade,
        freeThrowsAttempted: totalStats.freeThrowsAttempted,
        turnoversPerGame: totalStats.turnovers / matchData.length
    }
}
