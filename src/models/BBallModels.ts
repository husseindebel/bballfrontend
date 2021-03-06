export interface Player {
    name: string;
    number: number;
    team: Team;
}

export interface Team {
    name: string;
    colour: string; 
    players: Player[] | undefined;
}

export interface Match {
    matchId: number;
    seasonId: number;
    homeTeam: Team;
    awayTeam: Team;
    date: string;
    status: string;
    matchNumber: string;
    matchStats: MatchStats;
}

export enum MatchState {
    Complete,
    Incomplete
}

export interface CompleteMatchStats {
    homeTeamScore: number;
    awayTeamScore: number;
    homeTeamStats: PlayerStats[];
    matchStatus: MatchState.Complete;
}

export interface PlayerStats {
    matchesPlayed: number;
    player: Player;
    totalPoints: number;
    fieldGoalsAttempted: number;
    fieldGoalsMade: number;
    threePointsAttempted: number;
    threePointsMade: number;
    freeThrowsAttempted: number;
    freeThrowsMade: number;
    assists: number;
    rebounds: number;
    steals: number;
    blocks: number;
    turnovers: number;
    foulsGiven: number;
    foulsDrawn: number;
    played?: boolean;
}

export interface AveragePlayerStats {
    player: Player;
    gamesPlayed: number;
    pointsPerGame: number;
    assistsPerGame: number;
    stealsPerGame: number;
    blocksPerGame: number;
    reboundsPerGame: number;
    fieldGoalsAttempted: number;
    fieldGoalsMade: number;
    threePointsAttempted: number;
    threePointsMade: number;
    fieldGoalPercentage: number;
    threePointPercentage: number;
    freeThrowPercentage: number;
    freeThrowsMade: number;
    freeThrowsAttempted: number;
    turnoversPerGame: number;
}

export interface IncompleteMatch {
    matchStatus: MatchState.Incomplete;
}

export type MatchStats = CompleteMatchStats | IncompleteMatch;

export interface BBallSeason {
    matches: Match[]
}