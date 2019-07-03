import React from 'react';
import ReactPlayer from 'react-player';
export interface Props {
  matchId: string | undefined;
}

export function MatchVideo({ matchId }: Props) {
  return (
    <ReactPlayer 
      url={"https://www.youtube.com/watch?v=GDJsXJICaa8"} />
  )
}