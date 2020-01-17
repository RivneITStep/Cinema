import React, { Component } from 'react'
import { findDOMNode } from 'react-dom'
import { hot } from 'react-hot-loader'
import screenfull from 'screenfull'

import './reset.css'
import './defaults.css'
import './range.css'
import './App.css'
import './players.css'

import ReactPlayer from '../../ReactPlayer'


class Application extends Component {
  state = {
    url: null,
    pip: false,
    playing: true,
    controls: true,
    light: false,
    volume: 0.8,
    muted: false,
    played: 0,
    loaded: 0,
    duration: 0,
    playbackRate: 1.0,
    loop: false
  }
  load = url => {
    this.setState({
      url,
      played: 0,
      loaded: 0,
      pip: false
    })
  }
  playPause = () => {
    this.setState({ playing: !this.state.playing })
  }
  stop = () => {
    this.setState({ url: null, playing: false })
  }
  toggleControls = () => {
    const url = this.state.url
    this.setState({
      controls: !this.state.controls,
      url: null
    }, () => this.load(url))
  }
  toggleLight = () => {
    this.setState({ light: !this.state.light })
  }
  toggleLoop = () => {
    this.setState({ loop: !this.state.loop })
  }
  setVolume = e => {
    this.setState({ volume: parseFloat(e.target.value) })
  }
  toggleMuted = () => {
    this.setState({ muted: !this.state.muted })
  }
  setPlaybackRate = e => {
    this.setState({ playbackRate: parseFloat(e.target.value) })
  }
  togglePIP = () => {
    this.setState({ pip: !this.state.pip })
  }
  onPlay = () => {
    console.log('onPlay')
    this.setState({ playing: true })
  }
  onEnablePIP = () => {
    console.log('onEnablePIP')
    this.setState({ pip: true })
  }
  onDisablePIP = () => {
    console.log('onDisablePIP')
    this.setState({ pip: false })
  }
  onPause = () => {
    console.log('onPause')
    this.setState({ playing: false })
  }
  onSeekMouseDown = e => {
    this.setState({ seeking: true })
  }
  onSeekChange = e => {
    this.setState({ played: parseFloat(e.target.value) })
  }
  onSeekMouseUp = e => {
    this.setState({ seeking: false })
    this.player.seekTo(parseFloat(e.target.value))
  }
  onProgress = state => {
    console.log('onProgress', state)

    if (!this.state.seeking) {
      this.setState(state)
    }
  }
  onEnded = () => {
    console.log('onEnded')
    this.setState({ playing: this.state.loop })
  }
  onDuration = (duration) => {
    console.log('onDuration', duration)
    this.setState({ duration })
  }
  onClickFullscreen = () => {
    screenfull.request(findDOMNode(this.player))
  }
  renderLoadButton = (url, label) => {
    return (
      <button onClick={() => this.load(url)}>
        {label}
      </button>
    )
  }
  ref = player => {
    this.player = player
  }

  render() {
    const { url, playing, controls, light, volume, muted, loop,playbackRate, pip } = this.state
    

    return (


      <div className='app'>

        <section className='section'>
          <table>
            <tbody>
            <tr>
              <td>
                <form>
                  <p className="filmtext" >Телохранитель</p>
                  <div className="form-content" >
                    <p className="text" >
                      Название:&nbsp;Телохранитель
                      Оригинальное&nbsp;название:&nbsp;London&nbsp;Boulevard
                      Год:&nbsp;2010
                      Страна:&nbsp;США,&nbsp;Великобритания
                      Слоган:&nbsp;«Not&nbsp;every&nbsp;criminal&nbsp;wants&nbsp;to&nbsp;be&nbsp;one.»
                      Режиссер:&nbsp;Уильям&nbsp;Монахэн
                      Жанр:&nbsp;Драмы,Криминальные
                      Время:&nbsp;01:40:23
                      Цикл:&nbsp;Фильмы&nbsp;про&nbsp;преступников
                      Доп.язык озвучки:&nbsp;Английский
                      В&nbsp;главных&nbsp;ролях:&nbsp;Колин&nbsp;Фаррелл,Кира&nbsp;Найтли,Рэй&nbsp;<br />Уинстон,Дэвид&nbsp;Тьюлис,Анна&nbsp;Фрил,Бен&nbsp;Чаплин,
                      Эдди&nbsp;Марсан,Санджив&nbsp;Бхаскар,&nbsp;Стивен&nbsp;Грэм,<br />Офелия&nbsp;Ловибонд
                     </p>
                  </div>
                  <p className="text_g">Гангстер по имени Митчелл знакомится с очаровательной киноактрисой Шарлоттой, которая является очень ранимой натурой, поэтому вынуждена всегда скрываться от папараци и прочих преследователей. Митч отчаянно хочет порвать со своим прошлым и находит утешение в этой милой девушке, для которой готов сделать все. Однако, криминальный мир не спешит расставаться с таким профессионалом, как Митч. Все начинается с того, что несколько головорезов убивают его лучшего друга и теперь Митч берется за их поиски. А через некоторое время криминальный магнат города Роб Гант совершает убийство на глазах Митча, делая его соучастником преступления. Теперь Гант любыми способами намерен вернуть Митча к себе в команду.
Смотрите онлайн фильм «Телохранитель» в хорошем HD качестве на нашем сайте, бесплатно и без регистрации.</p>
                  {/*class="embed-responsive embed-responsive-4by3"  */}
                  <div className="left">
                    <div className="embed-responsive embed-responsive-4by3">
                      <iframe title="asd" className="embed-responsive-item" src="//www.youtube.com/embed/WGrRbrRB51c"></iframe>
                    </div>
                  </div>
                  <br /><br /><br /><br />
                  
                </form>
              </td>
            </tr>
            </tbody>
          </table>
          <div className='player-wrapper'>
            <div className="module-button-hide">
              <input id="button" type="checkbox" />
              <label className="center"  onClick={(event) => this.setState({ url: 'https://www.youtube.com/watch?v=tInCbMNqRxo' })} htmlFor="button">► Начать просмотр</label>
            </div>
            <ReactPlayer
              ref={this.ref}
              className='react-player'
              width='100%'
              height='100%'
              url={url}
              pip={pip}
              playing={playing}
              controls={controls}
              light={light}
              loop={loop}
              playbackRate={playbackRate}
              volume={volume}
              muted={muted}
              onReady={() => console.log('onReady')}
              onStart={() => console.log('onStart')}
              onPlay={this.onPlay}
              onEnablePIP={this.onEnablePIP}
              onDisablePIP={this.onDisablePIP}
              onPause={this.onPause}
              onBuffer={() => console.log('onBuffer')}
              onSeek={e => console.log('onSeek', e)}
              onEnded={this.onEnded}
              onError={e => console.log('onError', e)}
              onProgress={this.onProgress}
              onDuration={this.onDuration}
            />
          </div>
        </section>
        <section className='section'>
          <table>
            <tbody>

              <tr>
                
                <td>
                  {/* {this.renderLoadButton('https://www.youtube.com/watch?v=tInCbMNqRxo', 'start')} */}

                </td>
              </tr>
               <tr>
                <th>Custom URL</th>
                <td>
                  <input ref={input => { this.urlInput = input }} type='text' placeholder='Enter URL' />
                  <button onClick={() => this.setState({ url: 'https://www.youtube.com/watch?v=TqrgAM_8FvA' })}>Load</button>
                </td>
              </tr>  
            </tbody> 
          </table>

        </section>

      </div>
    )
  }
}

export default hot(module)(Application)