import { Match, MatchState, PlayerStats, CompleteMatchStats, AveragePlayerStats, MatchStats } from "../models/BBallModels";
import * as bballData from '../models/data.json';

export function parseBBallData(data: any, seasonId?: number): Match[] {
    const rawMatches: Match[] = data.default;

    // im sorry
    rawMatches.map(match => {
      match.status === "complete" 
        ? match.matchStats.matchStatus = MatchState.Complete : match.matchStats.matchStatus = MatchState.Incomplete;    
    });

    if (seasonId != undefined){
        return rawMatches.filter(match => match.seasonId === seasonId);
    }

    return rawMatches;
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

export interface TeamTotalStats {
    totalFieldGoalsAttempted: number;
    totalFieldGoalsMade: number;
    totalThreePointsAttempted: number;
    totalThreePointsMade: number;
    totalFreeThrowsAttempted: number;
    totalFreeThrowsMade: number;
}


export interface KeyPlayerStat {
    playerName: string;
    label: string;
    total: number;    
}

export const getTopPlayerMatchStats = (matchData: CompleteMatchStats): KeyPlayerStat[] => {
    const topPoints:KeyPlayerStat = matchData.homeTeamStats.map(playerStat => {
        return {
            playerName: playerStat.player.name,
            label: "Points",
            total: playerStat.threePointsMade*3 + (playerStat.fieldGoalsMade - playerStat.threePointsMade)*2 +  playerStat.freeThrowsMade
        }
    }).sort((a, b) => b.total - a.total)[0];
    
    const topAssists:KeyPlayerStat = matchData.homeTeamStats
        .map(playerStat => { return {playerName: playerStat.player.name, label: "Assists", total: playerStat.assists}})
        .sort((a, b) => b.total - a.total)[0];

    const topRebounds = matchData.homeTeamStats
        .map(playerStat => { return {playerName: playerStat.player.name, label: "Rebounds", total: playerStat.rebounds}})
        .sort((a, b) => b.total - a.total)[0];

    const topSteals = matchData.homeTeamStats
        .map(playerStat => { return {playerName: playerStat.player.name, label: "Steals", total: playerStat.steals}})
        .sort((a, b) => b.total - a.total)[0];    

    return [topPoints, topAssists, topRebounds, topSteals];
}

export const getTotalTeamStats = (matchData: CompleteMatchStats): TeamTotalStats => {
    const teamStats:TeamTotalStats = matchData.homeTeamStats
        .map(playerStats => {
            return {
                totalFieldGoalsAttempted: playerStats.fieldGoalsAttempted,
                totalFieldGoalsMade: playerStats.fieldGoalsMade,
                totalThreePointsAttempted: playerStats.threePointsAttempted,
                totalThreePointsMade: playerStats.threePointsMade,
                totalFreeThrowsAttempted: playerStats.freeThrowsAttempted,
                totalFreeThrowsMade: playerStats.freeThrowsMade
            }
        }).reduce((prev, current) => {
            return {
                totalFieldGoalsAttempted: prev.totalFieldGoalsAttempted + current.totalFieldGoalsAttempted,
                totalFieldGoalsMade: prev.totalFieldGoalsMade + current.totalFieldGoalsMade,
                totalThreePointsAttempted: prev.totalThreePointsAttempted + current.totalThreePointsAttempted,
                totalThreePointsMade: prev.totalThreePointsMade + current.totalThreePointsMade,
                totalFreeThrowsAttempted: prev.totalFreeThrowsAttempted + current.totalFreeThrowsAttempted,
                totalFreeThrowsMade: prev.totalFreeThrowsMade + current.totalFreeThrowsMade,
            }
        });

    return teamStats;
}

const getTotalPlayerStats = (matchData: MatchStats[], playerNumber: number): PlayerStats => {
    const playerMatchData = matchData.flatMap((match) => {
        if (match.matchStatus === MatchState.Incomplete) return [];
        var playerMatches = match.homeTeamStats
            .filter((playerStats => playerStats.player.number === playerNumber && playerStats.played === undefined));
        return playerMatches;
    });

    const playerData: PlayerStats = playerMatchData.reduce((prevStats, currentStats) => {
        return {
            matchesPlayed: playerMatchData.length,
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

export const getTotalAveragePlayerStats = (playerId: string, seasonId?: number): AveragePlayerStats => {
    const matchData = parseBBallData(bballData, seasonId);
    const playerNumber = parseInt(playerId);
    const completeMatches: MatchStats[] = matchData
        .map(match => match.matchStats)
        .filter(match => match.matchStatus === MatchState.Complete);

    var totalStats: PlayerStats = getTotalPlayerStats(completeMatches, playerNumber);
    return {
        player: totalStats.player,
        gamesPlayed: totalStats.matchesPlayed,
        pointsPerGame: totalStats.totalPoints / totalStats.matchesPlayed,
        assistsPerGame: totalStats.assists / totalStats.matchesPlayed,
        reboundsPerGame: totalStats.rebounds / totalStats.matchesPlayed,
        blocksPerGame: totalStats.blocks / totalStats.matchesPlayed,
        stealsPerGame: totalStats.steals / totalStats.matchesPlayed,
        fieldGoalPercentage: totalStats.fieldGoalsMade / totalStats.fieldGoalsAttempted,
        threePointPercentage: totalStats.threePointsMade / totalStats.threePointsAttempted,
        freeThrowPercentage: totalStats.freeThrowsMade / totalStats.freeThrowsAttempted,
        fieldGoalsAttempted: totalStats.fieldGoalsAttempted,
        fieldGoalsMade: totalStats.fieldGoalsMade,
        threePointsAttempted: totalStats.threePointsAttempted,
        threePointsMade: totalStats.threePointsMade,
        freeThrowsMade: totalStats.freeThrowsMade,
        freeThrowsAttempted: totalStats.freeThrowsAttempted,
        turnoversPerGame: totalStats.turnovers / totalStats.matchesPlayed
    }
}
