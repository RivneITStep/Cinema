import React from 'react'

import Player from './Player'
import { YouTube } from '../components/players/YouTube'
import { SoundCloud } from '../components/players/SoundCloud'



const PRELOAD_PLAYERS = [
  {
    Player: YouTube,
    configKey: 'youtube',
    url: 'https://www.youtube.com/watch?v=GlCmAC4MHek'
  },
  {
    Player: SoundCloud,
    configKey: 'soundcloud',
    url: 'https://soundcloud.com/seucheu/john-cage-433-8-bit-version'
  },

]

export default function renderPreloadPlayers (url, controls, config) {
  const players = []

  for (let player of PRELOAD_PLAYERS) {
    if (!player.Player.canPlay(url) && config[player.configKey].preload) {
      players.push(
        <Player
          key={player.Player.displayName}
          activePlayer={player.Player}
          url={player.url}
          controls={controls}
          playing
          muted
          style={{ display: 'none' }}
        />
      )
    }
  }

  return players
}
