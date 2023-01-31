import React, { createRef, useState } from 'react'
import "./../Player/player.scss"

const link = "https://rr3---sn-5hnekn7s.googlevideo.com/videoplayback?expire=1675129590&ei=lh7YY5zfH6CZv_IPwqCvyAQ&ip=154.92.120.73&id=o-AK6UG8K4etuNGsEzFf4byV9_FVNeZ4Zzh-PSZIR5NkfS&itag=22&source=youtube&requiressl=yes&mh=ld&mm=31%2C29&mn=sn-5hnekn7s%2Csn-5hne6n6l&ms=au%2Crdu&mv=u&mvi=3&pl=24&spc=H3gIho9QhapFVdZONGIckQcPImHSpLQ&vprv=1&mime=video%2Fmp4&ns=W0I9OJZVdcdqQ8K9YPSJWzEL&cnr=14&ratebypass=yes&dur=1476.185&lmt=1675054796367708&mt=1675106162&fvip=5&fexp=24007246&c=WEB&txp=4432434&n=SjSP8pGhFEyWoQ&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cspc%2Cvprv%2Cmime%2Cns%2Ccnr%2Cratebypass%2Cdur%2Clmt&sig=AOq0QJ8wRQIgfqww1v2o_GnGfMRIgTCR-LUYdAIYDxD5wxzSZhe0Ig4CIQDq4ZTLUnFUmFJfQfitfHjMqE8sXySWXUkD0_pHE9ermA%3D%3D&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl&lsig=AG3C_xAwRQIhAPLRdELg62Tgh8fuaHCm4xbMrnwJd0MLBKOuGJu4ZJjOAiBz89k6AIOHiPA2gAv7y-hMMymoLP1Kk5wsQol7niMXrw%3D%3D&title=%D0%91%D0%A0%D0%90%D0%A2%D0%98%D0%A8%D0%9A%D0%98%D0%9D%20%D0%A1%D0%9C%D0%9E%D0%A2%D0%A0%D0%98%D0%A2%20%D0%92%D0%95%D0%91%D0%9C%D0%AB%20%D0%A2%D0%98%D0%9A%20%D0%A2%D0%9E%D0%9A%20(48%20%D1%87%D0%B0%D1%81%D1%82%D1%8C)"
const svg = {
    pause: "M42,2.98v43.54c0,0.54-0.71,0.98-1.59,0.98h-7.08c-0.88,0-1.59-0.44-1.59-0.98V2.98 c0-0.54,0.71-0.98,1.59-0.98h7.08C41.29,2,42,2.44,42,2.98z M18.62,2.98v43.54c0,0.54-0.71,0.98-1.59,0.98H9.96c-0.88,0-1.59-0.44-1.59-0.98V2.98C8.37,2.44,9.08,2,9.96,2 h7.08C17.91,2,18.62,2.44,18.62,2.98z",
    play: "M8.5,2.99v43.88c0,0.66,0.74,1.05,1.29,0.68l31.73-21.87c0.47-0.33,0.47-1.03,0-1.35L9.79,2.31 C9.25, 1.93, 8.5, 2.32, 8.5, 2.99z",
    fullscreen: "M 19,89 0,89 0,131 0,150 19,150 60,150 60,131 19,131 z M 131,131 90,131 90,150 131,150 150,150 150,131 150,89 131,89 z M 131,0 90,0 90,19 131,19 131,61 150,61 150,19 150,0 z M 0,0 0,19 0,61 19,61 19,19 60,19 60,0 19,0 z",
    extend: "M 0,91 0,110 38.88,110 38.88,150 57,150 57,110 57,91 38.88,91 z M 150.1,91 110.1,91 91.1,91 91.1,109.12 91.1,150 110.1,150 110.1,109.12 150.1,109.12 z M 149.69,59.14 149.69,40.14 110.81,40.14 110.81,0.14 92.69,0.14 92.69,40.14 92.69,59.14 110.81,59.14 z M 39.59,41.02 -0.41,41.02 -0.41,59.14 39.59,59.14 39.59,59.14 58.59,59.14 58.59,59.14 58.59,41.02 58.59,0.14 39.59,0.14 z",
    settings: "M148.29,93.77c0.32-2.65,0.53-5.41,0.53-8.27c0-2.68-0.19-5.17-0.47-7.73c-0.04-0.33,0.1-0.66,0.36-0.87l17.39-13.66c1.59-1.27,2.01-3.5,0.95-5.41L150.1,28.57c-0.95-1.8-3.29-2.54-5.09-1.8l-20.59,8.28c-0.32,0.13-0.67,0.08-0.94-0.13c-4.09-3.13-8.54-5.7-13.37-7.72c-0.31-0.13-0.54-0.42-0.58-0.75l-3.1-21.93C106.2,2.48,104.4,1,102.28,1H68.35c-2.12,0-3.82,1.48-4.13,3.5l-3.1,21.94c-0.05,0.33-0.27,0.61-0.58,0.75c-4.74,2.03-9.2,4.7-13.38,7.74c-0.27,0.2-0.62,0.24-0.93,0.12l-20.6-8.28c-1.91-0.74-4.13,0-5.09,1.8L3.57,57.83c-1.06,1.8-0.53,4.13,0.95,5.41L21.91,76.9c0.26,0.21,0.4,0.53,0.36,0.87c-0.28,2.5-0.47,5.16-0.47,7.74c0,2.58,0.19,5.16,0.47,7.74c0.04,0.33-0.1,0.66-0.36,0.87L4.53,107.76c-1.59,1.27-2.01,3.5-0.95,5.41l16.96,29.26c0.95,1.8,3.29,2.54,5.09,1.8l20.59-8.28c0.32-0.13,0.67-0.08,0.94,0.13c4.09,3.13,8.54,5.7,13.37,7.72c0.31,0.13,0.54,0.42,0.58,0.75l3.1,21.93c0.21,2.01,2.01,3.5,4.13,3.5h33.93c2.12,0,3.82-1.48,4.13-3.5l3.1-21.94c0.05-0.33,0.27-0.61,0.58-0.75c4.74-2.03,9.2-4.7,13.38-7.74c0.27-0.2,0.62-0.24,0.93-0.12l20.6,8.28c1.91,0.74,4.13,0,5.09-1.8l16.96-29.26c0.95-1.8,0.53-4.13-0.95-5.41L148.29,93.77C148.29,93.77,148.29,93.77,148.29,93.77z M85.32,115.08c-16.33,0-29.69-13.25-29.69-29.69c0-16.33,13.25-29.69,29.69-29.69c16.33,0,29.69,13.25,29.69,29.69C115,101.72,101.75,115.08,85.32,115.08L85.32,115.08z"
}

const PlayerModule = () => {

    //event route

    const onTimeUpdate = () => {
        timeLineBuffer()
        timeLineCurrent()
        videoTimeCurrent()
    }

    let onLoadStart = () => {
        dokoaPlayer.current.volume = 0.5; //default volume
    }

    let onLoadedMetadata = () => {
        videoTimeDuration()

    }
    //interface

    let keyReg = (e) => {
        e.preventDefault()
        try {
            switch (e.code) {
                case "Space":
                    Play();
                    interfaceVisible()
                    break;
                case "ArrowRight":
                    dokoaPlayer.current.currentTime += 5;
                    break;
                case "ArrowLeft":
                    dokoaPlayer.current.currentTime -= 5;
                    break;
                case "ArrowUp":
                    arrowVolumeUp()
                    break;
                case "ArrowDown":
                    arrowVolumeDown()
                    break;
            }
        } catch { // it's easier than re-checking each function :3 
        }
    }

    let interfaceVisible = () => {
        let playerInterfaces = document.getElementsByClassName("playerInterface")
        for (var i = 0; i < playerInterfaces.length; i++) {
            playerInterfaces[i].style.opacity = "1"
        }

        if (dokoaPlayer.current.paused == true || !isPlayed) {
            for (var i = 0; i < playerInterfaces.length; i++) {
                playerInterfaces[i].style.opacity = "1"
            }
        } else {
            let timer = setTimeout(function () {
                for (var i = 0; i < playerInterfaces.length; i++) {
                    playerInterfaces[i].style.opacity = "0"
                }
            }, 3000);

            if (timer) {
                for (var i = 0; i < timer; i++) {
                    clearTimeout(i);
                }
            }
        }
    }

    function repeatSVG() {
        document.getElementById('playBtn').setAttribute("d", svg.play);
    }

    //timeLine

    let timeLine = createRef()
    let mouseLine = createRef()
    let bufferLine = createRef()
    let currentLine = createRef()

    let timeLineCalc = (e) => {
        let mousePos = e.clientX
        let timeLineStart = timeLine.current.getBoundingClientRect().left
        let timeLineEnd = timeLine.current.getBoundingClientRect().right
        let percent = (100 / ((timeLineEnd - timeLineStart) / (mousePos - timeLineStart)));

        if (percent <= 100) {
            mouseLine.current.style.width = percent + "%";
        }
    }

    let timeLineClear = () => {
        mouseLine.current.style.width = 0 + "%";
    }

    let timeLineSet = (e) => {
        let mousePos = e.clientX
        let timeLineStart = timeLine.current.getBoundingClientRect().left
        let timeLineEnd = timeLine.current.getBoundingClientRect().right
        let percent = (100 / ((timeLineEnd - timeLineStart) / (mousePos - timeLineStart)));
        dokoaPlayer.current.currentTime = (dokoaPlayer.current.duration / 100) * percent;
    }

    let timeLineCurrent = () => {
        
        let currentTime = dokoaPlayer.current.currentTime;
        let duration = dokoaPlayer.current.duration;
        let percent = (100 / (duration / currentTime))
        currentLine.current.style.width = percent + "%";
    }

    let timeLineBuffer = () => {
        let current = dokoaPlayer.current.currentTime
        
            for (var buffer_length_now = 0; buffer_length_now < dokoaPlayer.current.buffered.length; buffer_length_now++) {
                if (current >= dokoaPlayer.current.buffered.start(buffer_length_now) && current <= dokoaPlayer.current.buffered.end(buffer_length_now)) {
                    bufferLine.current.style.width = (100 / (dokoaPlayer.current.duration / dokoaPlayer.current.buffered.end(buffer_length_now))) + "%";
                }
            }
    }

    //invisible controls interface

    let isPhone = (navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/iPhone/i)) ? true : false;

    let playRewind = () => {
        if (document.getElementsByClassName("playerInterface")[0].style.opacity == 0) {
            interfaceVisible()
        } else {
            interfaceVisible()
            Play()
        }
    }

    let leftRewind = (e) => {
        setTimeout(() => {
            if (e.detail == 1) {
                playRewind()
            }
        }, 150)
        if (e.detail > 1 && isPhone) {
            if (!isPlayed) { Play() }
            dokoaPlayer.current.currentTime -= 5;
        }
    }

    let rightRewind = (e) => {
        setTimeout(() => {
            if (e.detail == 1) {
                playRewind()
            }
        }, 150)
        if (e.detail > 1 && isPhone) {
            if (!isPlayed) { Play() }
            dokoaPlayer.current.currentTime += 5;
        }
    }

    function arrowVolumeUp() {
        if (dokoaPlayer.current.volume > 0.95) { dokoaPlayer.current.volume = 0.95 }
        dokoaPlayer.current.volume += 0.05;
        volumeInput.current.value = dokoaPlayer.current.volume * 100;
    }

    function arrowVolumeDown() {
        if (dokoaPlayer.current.volume < 0.05) { dokoaPlayer.current.volume = 0.05 }
        dokoaPlayer.current.volume -= 0.05;
        volumeInput.current.value = dokoaPlayer.current.volume * 100;
    }

    //controlPanel

    let dokoaPlayer = createRef()
    let dokoaParent = createRef()
    let volumeInput = createRef()

    let isPlayed;

    let Play = () => {
        if (dokoaPlayer.current.currentTime > 0 && !dokoaPlayer.current.paused && !dokoaPlayer.current.ended && dokoaPlayer.current.readyState > 2 || isPlayed) {
            isPlayed = false;
            dokoaPlayer.current.pause()
            interfaceVisible()
            document.getElementById('playBtn').setAttribute("d", svg.play);
        } else {
            isPlayed = true;
            dokoaPlayer.current.play()
            interfaceVisible()
            document.getElementById('playBtn').setAttribute("d", svg.pause);
        }
    }

    let volume = () => {
        dokoaPlayer.current.volume = volumeInput.current.value / 100;
        interfaceVisible() // android chromium fix bug with reading movements in parent class via input range
    }

    // duration and current video render
    let [timeData, setTimeData] = useState({
        current: '00:00',
        duration: '00:00',
    })

    let videoTimeDuration = () => {
        let time = dokoaPlayer.current.duration
        let timeInMinutes = Math.floor(time / 60);
        let timeInSeconds = Math.floor(time % 60);
        if (timeInMinutes < 10) { timeInMinutes = "0" + timeInMinutes }
        if (timeInSeconds < 10) { timeInSeconds = "0" + timeInSeconds }
        let duration = timeInMinutes + ':' + timeInSeconds;
        setTimeData({
            ...timeData, duration: duration,
        })
    }

    let videoTimeCurrent = () => {
        let time = dokoaPlayer.current.currentTime
        let timeInMinutes = Math.floor(time / 60);
        let timeInSeconds = Math.floor(time % 60);
        if (timeInMinutes < 10) { timeInMinutes = "0" + timeInMinutes }
        if (timeInSeconds < 10) { timeInSeconds = "0" + timeInSeconds }
        let current = timeInMinutes + ':' + timeInSeconds;
        setTimeData({
            ...timeData, current: current,
        })
    }

    let currentVideoTime = createRef();
    let durationVideoTime = createRef();

    // settings

    const settingsParent = createRef();
    const settingsMainWndow = createRef();
    const settingsSpeedWindow = createRef();
    const backToMainWindow = createRef();

    const settingsButtonClick = () => {
        if (settingsParent.current.classList.contains('settingsActive')) {
            console.log('unactive')
            settingsParent.current.classList.remove('settingsActive');
            settingsParent.current.style.display = "none";
        } else {
            console.log('active')
            settingsParent.current.classList.add('settingsActive');
            settingsParent.current.style.display = "contents";
        }
    }

    const backToMainWindowButton = () => {
        settingsMainWndow.current.style.display = "contents";
        settingsSpeedWindow.current.style.display = "none";
        backToMainWindow.current.style.display = "none";
    }

    function settingsOptionChange(option) {
        settingsMainWndow.current.style.display = "none";
        settingsSpeedWindow.current.style.display = "contents";
        backToMainWindow.current.style.display = "flex";
        console.log(option)

    }

    let fullScreen = () => {
        if (document.fullscreenElement) {
            closeFullscreen()
        } else {
            openFullscreen()
        }

        function openFullscreen() {
            if (dokoaParent.current.requestFullscreen) {
                dokoaParent.current.requestFullscreen();
            } else if (dokoaParent.current.webkitRequestFullscreen) {
                dokoaParent.current.webkitRequestFullscreen();
            } else if (dokoaParent.current.msRequestFullscreen) {
                dokoaParent.current.msRequestFullscreen();
            }
        }

        function closeFullscreen() {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            } else if (document.webkitExitFullscreen) {
                document.webkitExitFullscreen();
            } else if (document.msExitFullscreen) {
                document.msExitFullscreen();
            }
        }
       
        // technical functions


        function fullscreenSVG() {
            if (document.fullscreenElement) {
                document.getElementById('fullscreenBtn').setAttribute("d", svg.extend);
            } else {
                document.getElementById('fullscreenBtn').setAttribute("d", svg.fullscreen);
            }
        }

        // non-react event

        document.addEventListener('fullscreenchange', fullscreenSVG);
} 

    return (
        <div >
            <div className="dokoaPlayer" ref={dokoaParent} onMouseMove={interfaceVisible} onKeyDown={keyReg}>
                <div className="blackBack"></div>
                
                <video ref={dokoaPlayer} src={link} preload="auto" onTimeUpdate={onTimeUpdate} onEnded={repeatSVG} onLoadStart={onLoadStart} onLoadedMetadata={onLoadedMetadata} ></video>
                <div className="rewindControls" >
                    <button className="leftRewind rewind" onClick={leftRewind}></button>
                    <button className="rightRewind rewind" onClick={rightRewind}></button>
                </div>

                <div className="settingsParent" ref={settingsParent}>
                    <div className="settingsOutlineChecker" onClick={settingsButtonClick}></div>
                    <div className="settingsContainer">

                        <div className="backToMainWindow" ref={backToMainWindow}>
                            <button onClick={backToMainWindowButton}>
                                <svg viewBox="0 0 600 600" width="25px" height="30px" fill="transparent">
                                    <g>
                                        <path fill="white" d="M 573.73418,237.53137 A 42.015938,42.066681 0 0 0 560.01946,208.40774 L 328.86196,-1.8622997 a 42.015938,42.066681 0 0 0 -0.0513,-0.034908 42.015938,42.066681 0 0 0 -28.2031,-11.5463712 42.015938,42.066681 0 0 0 -28.199,11.5443177 42.015938,42.066681 0 0 0 -0.0554,0.036962 L 41.195655,208.40774 a 42.015938,42.066681 0 0 0 -2.844323,59.42387 42.015938,42.066681 0 0 0 59.351082,2.84809 L 258.59123,124.32847 v 452.27155 a 42.015938,42.066681 0 0 0 42.01633,42.06633 42.015938,42.066681 0 0 0 42.01632,-42.06633 V 124.32847 L 503.51065,270.6797 a 42.015938,42.066681 0 0 0 59.35313,-2.84809 42.015938,42.066681 0 0 0 10.8704,-30.30024 z" />
                                    </g>
                                </svg>
                            </button>
                        </div>

                        <div className="settingsMainWndow" ref={settingsMainWndow}>
                            <button className="settingsOption" onClick={function () { settingsOptionChange("speed") }}>
                                <div className="settignsIco">
                                    <svg width="40px" height="40px" viewBox="0 0 24 24" fill="transparent" >
                                        <path d="M6.34315 17.6569C5.22433 16.538 4.4624 15.1126 4.15372 13.5607C3.84504 12.0089 4.00346 10.4003 4.60896 8.93853C5.21446 7.47672 6.23984 6.22729 7.55544 5.34824C8.87103 4.46919 10.4177 4 12 4C13.5823 4 15.129 4.46919 16.4446 5.34824C17.7602 6.22729 18.7855 7.47672 19.391 8.93853C19.9965 10.4003 20.155 12.0089 19.8463 13.5607C19.5376 15.1126 18.7757 16.538 17.6569 17.6569" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M12 12L16 10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                            <div className="settingsOptionButton">speed</div>
                            </button>

                            <button className="settingsOption" onClick={function () { settingsOptionChange("caption") }}>
                                <div className="settignsIco">
                                    <svg fill="#000000" width="40px" height="38px" viewBox="0 0 32 32" fill="white">
                                        <path d="M15,21H10a2,2,0,0,1-2-2V13a2,2,0,0,1,2-2h5v2H10v6h5Z" ></path>
                                        <path d="M25,21H20a2,2,0,0,1-2-2V13a2,2,0,0,1,2-2h5v2H20v6h5Z"></path>
                                        <path d="M28,26H4a2,2,0,0,1-2-2V8A2,2,0,0,1,4,6H28a2,2,0,0,1,2,2V24A2,2,0,0,1,28,26ZM4,8V24H28V8Z"></path>
                                    </svg>
                                </div>
                            <div className="settingsOptionButton">caption</div>
                        </button>
                        </div>

                        <div className="settingsSpeedWindow" ref={settingsSpeedWindow}><button className="settingsOption" onClick={function () { settingsOptionChange("speed") }}>
                                <div className="settignsIco">
                                    <svg fill="#000000" width="40px" height="38px" viewBox="0 0 32 32" fill="white">
                                        <path d="M15,21H10a2,2,0,0,1-2-2V13a2,2,0,0,1,2-2h5v2H10v6h5Z" ></path>
                                        <path d="M25,21H20a2,2,0,0,1-2-2V13a2,2,0,0,1,2-2h5v2H20v6h5Z"></path>
                                        <path d="M28,26H4a2,2,0,0,1-2-2V8A2,2,0,0,1,4,6H28a2,2,0,0,1,2,2V24A2,2,0,0,1,28,26ZM4,8V24H28V8Z"></path>
                                    </svg>
                                </div>
                            <div className="settingsOptionButton">speed</div>
                        </button></div>

                        <div className="settingsCaptionWindow"></div>

                    </div>
                </div>
                <div className="timeLineContainer">
                    <button className="timeLine playerInterface" id="timeLine" ref={timeLine} onClick={timeLineSet} onMouseLeave={timeLineClear} onMouseMove={timeLineCalc} onTouchMove={timeLineCalc} onTouchEnd={timeLineSet}>
                        <div className="line"></div>
                        <div className="bufferLine" ref={ bufferLine }></div>
                        <div className="mouseLine" ref={ mouseLine }></div>
                        <div className="currentLine" ref={ currentLine }></div>
                    </button>
                </div>

                <div className="controlPanel playerInterface">
                    <div className="leftControl">
                <div className="PlayButton">
                            <button onClick={Play} className="Play-btn">
                                <svg viewBox="0 0 50 50"> 
                                    <path id="playBtn" d={ svg.play }/>
                                 </svg>
                            </button>
                </div>
                <div className="volumeContainer">
                            <input ref={volumeInput} onChange={volume} className="volumeInput" type="range" min="0" max="100"  ></input>
                        </div>

                        <div className="currentTimeContainer">
                            <div className="currentTime" ref={currentVideoTime}> {timeData.current} </div>
                            <div className="currentTime" >/</div>
                            <div className="currentTime" ref={durationVideoTime}> {timeData.duration} </div>
                        </div>

                    </div>

                <div className="rightControl">
                    <div className="settingsButtonContainer">
                            <button className="settings" onClick={settingsButtonClick}>
                                <svg viewBox="0 0 200 200">
                                    <path id="settingsBtn" d={svg.settings} />
                                </svg>
                            </button>
                </div>
                <div className="fullScreenContainer">
                            <button className="fullScreen" onClick={fullScreen} >
                                <svg viewBox="0 0 170 170">
                                    <path id="fullscreenBtn" d={svg.fullscreen} />
                                </svg>
                            </button>
                        </div>
                </div>
            </div>
            </div>
        </div>
    )
}
export default PlayerModule;