import React from 'react';
import './BBall.css';
import { Match } from '@reach/router';
import { MatchStats, MatchState } from '../models/BBallModels';
import { getMatch } from '../services/BBallDataRetriever';
import { Jumbotron, Button, Container, Col } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { BBallMatchStats } from './BBallMatchStats';

interface Props {
    matchId: string | undefined;
}

interface MatchPanelTab {
    key: string;
    name: string;
    label: string;
}

interface State {
    activeTab: MatchPanelTab;
}

export function BBallMatchPanel({ matchId }: Props) {
    const matchData = getMatch(matchId);

    const matchPanelTabs: MatchPanelTab[] = [
        {
            key: "1",
            name: "match-stats",
            label: "Match Stats"
        },
        {
            key: "2",
            name: "player-stats",
            label: "Player Stats"
        },
        {
            key: "3",
            name: "video",
            label: "Video"
        }
    ];

    const [state, setState] = React.useState({activeTab: matchPanelTabs[1]});


    return (
        <div className="match-panel">
         {matchData &&
         <div>
            <Jumbotron className="text-center">
                <span>{matchData.homeTeam.name}</span> {matchData.matchStats.matchStatus === MatchState.Complete &&
                    <span>{matchData.matchStats.homeTeamScore} - {matchData.matchStats.awayTeamScore}</span>
                } {matchData.matchStats.matchStatus === MatchState.Incomplete &&
                    <span>VS</span>
                } <span>{matchData.awayTeam.name}</span>
            </Jumbotron>                
            <Nav variant="pills" activeKey={state.activeTab.key} onSelect={(key: string) => setState({activeTab: matchPanelTabs.filter(x => x.key === key)[0]})}>
                {matchPanelTabs.map(panel => (
                    <Nav.Item key={panel.key}>
                        <Nav.Link eventKey={panel.key}>
                            {panel.label}
                        </Nav.Link>
                    </Nav.Item>
                ))}
            </Nav>
            <Container>
            <Col></Col>
            <Col>
            {state.activeTab.name === "match-stats" &&
                <span>Match Stats</span>
            }            
            {state.activeTab.name === "player-stats" &&
                matchData.matchStats.matchStatus === MatchState.Complete &&
                <BBallMatchStats matchStats={matchData.matchStats} />
            }
            </Col>
            <Col></Col>
            </Container>
        </div>
         }   
        </div>
    );
}