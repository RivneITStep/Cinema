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
        const { url, playing, controls, light, volume, muted, loop, playbackRate, pip } = this.state


        return (


            <div className='app'>

                <section className='section'>
                    <table>
                        <tbody>
                            <tr>
                                <td>
                                    <form>
                                        <p className="filmtext" >Макс Стіл</p>
                                        <div className="form_image" >
                                            <p className="text" >
                                                Название:&nbsp;Max&nbsp;Steel
                                                <br/><br/>
                                                Год&nbsp;выхода:&nbsp;2016
                                                <br/><br/>
                                                Актеры:&nbsp;Бен&nbsp;Уинчелл,Джош&nbsp;Бренер,Мария&nbsp;Белло,
                                                Энди&nbsp;Гарсиа,Ана&nbsp;Вийафанья
                                                Режиссер:&nbsp;Стюарт&nbsp;Хендлер
                                                <br/><br/>
                                                Страна:&nbsp;Великобритания,&nbsp;США
                                                <br/><br/>
                                                Жанр:&nbsp;Фильмы,&nbsp;Боевики,&nbsp;Приключения,
                                                Семейные,&nbsp;Фантастика,&nbsp;Фэнтези
                                                <br/><br/>
                                      </p>
                                        </div>
                                        <p className="text_g">Сюжет данной картины закручен вокруг необычного подростка по имени Макс МакГрат. Главный герой "Макса Стила" однажды обнаруживает за собой уникальную способность генерировать мощную энергию, которая является неповторимой в своем роде во всей Вселенной.
Подросток вынужден встретиться с единственным существом, способным совладать с такой мощной энергией — таинственным техноорганическим инопланетянином по имени Стил. Эта встреча кардинальным образом изменит жизнь не только нашего мальчика-подростка, но и возможно всего человечества.</p>
                                        {/*class="embed-responsive embed-responsive-4by3"  */}
                                        <div className="left">
                                            <div className="embed-responsive embed-responsive-4by3">
                                                <iframe title="asd" className="embed-responsive-item" src="//www.youtube.com/embed/kmX3c6hfDbI"></iframe>
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
              <label className="center"  onClick={() => this.setState({ url: 'https://www.youtube.com/watch?v=TqrgAM_8FvA' })} htmlFor="button">► Начать просмотр</label>
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
                    </div>\
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
                                {/* <th>Custom URL</th>
                                <td>
                                    <input ref={input => { this.urlInput = input }} type='text' placeholder='Enter URL' />
                                    <button onClick={() => this.setState({ url: 'https://www.youtube.com/watch?v=TqrgAM_8FvA' })}>Load</button>
                                </td> */}
                            </tr>
                        </tbody>
                    </table>

                </section>

            </div>
        )
    }
}

export default hot(module)(Application)