import React from 'react';
import { Match } from '../models/BBallModels';
import { BBallMatchCard } from './BBallMatchCard';
import './BBall.css';
import { Container, Col, Row } from 'react-bootstrap';

interface Props {
  seasonMatches: Match[]
}

export function BBallSeasonMatches({ seasonMatches }: Props) {
  seasonMatches.reverse(); // mutating state
  return (
      <div className="match-season">
    <Container>
        {
          seasonMatches.map((match) => {
            return (
              <Row key={match.matchId}>
                <Col></Col>
                <Col xs={10}>
                  <BBallMatchCard matchData={match} />
                 </Col>
                 <Col></Col>
              </Row>
              )
            })
          }
      </Container>
          </div>
  )
}