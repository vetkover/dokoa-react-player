import React, { createRef } from 'react'
import "player.scss"

const link = "https://drive.google.com/u/0/uc?id=1_1qah9bAps87rurOFnKgOxui-NnneQ_O&export=download&confirm=t&uuid=26b1c2c4-091d-459d-9574-3f92c19ab924&at=AHV7M3cBHszCNxm9sM8lNgYjwHaR:1668074390852"

const svg = {
    pause: "M42,2.98v43.54c0,0.54-0.71,0.98-1.59,0.98h-7.08c-0.88,0-1.59-0.44-1.59-0.98V2.98 c0-0.54,0.71-0.98,1.59-0.98h7.08C41.29,2,42,2.44,42,2.98z M18.62,2.98v43.54c0,0.54-0.71,0.98-1.59,0.98H9.96c-0.88,0-1.59-0.44-1.59-0.98V2.98C8.37,2.44,9.08,2,9.96,2 h7.08C17.91,2,18.62,2.44,18.62,2.98z",
    play: "M8.5,2.99v43.88c0,0.66,0.74,1.05,1.29,0.68l31.73-21.87c0.47-0.33,0.47-1.03,0-1.35L9.79,2.31 C9.25, 1.93, 8.5, 2.32, 8.5, 2.99z",
    fullscreen: "M 19,89 0,89 0,131 0,150 19,150 60,150 60,131 19,131 z M 131,131 90,131 90,150 131,150 150,150 150,131 150,89 131,89 z M 131,0 90,0 90,19 131,19 131,61 150,61 150,19 150,0 z M 0,0 0,19 0,61 19,61 19,19 60,19 60,0 19,0 z",
    extend: "M 0,91 0,110 38.88,110 38.88,150 57,150 57,110 57,91 38.88,91 z M 150.1,91 110.1,91 91.1,91 91.1,109.12 91.1,150 110.1,150 110.1,109.12 150.1,109.12 z M 149.69,59.14 149.69,40.14 110.81,40.14 110.81,0.14 92.69,0.14 92.69,40.14 92.69,59.14 110.81,59.14 z M 39.59,41.02 -0.41,41.02 -0.41,59.14 39.59,59.14 39.59,59.14 58.59,59.14 58.59,59.14 58.59,41.02 58.59,0.14 39.59,0.14 z",
    settings: "M148.29,93.77c0.32-2.65,0.53-5.41,0.53-8.27c0-2.68-0.19-5.17-0.47-7.73c-0.04-0.33,0.1-0.66,0.36-0.87l17.39-13.66c1.59-1.27,2.01-3.5,0.95-5.41L150.1,28.57c-0.95-1.8-3.29-2.54-5.09-1.8l-20.59,8.28c-0.32,0.13-0.67,0.08-0.94-0.13c-4.09-3.13-8.54-5.7-13.37-7.72c-0.31-0.13-0.54-0.42-0.58-0.75l-3.1-21.93C106.2,2.48,104.4,1,102.28,1H68.35c-2.12,0-3.82,1.48-4.13,3.5l-3.1,21.94c-0.05,0.33-0.27,0.61-0.58,0.75c-4.74,2.03-9.2,4.7-13.38,7.74c-0.27,0.2-0.62,0.24-0.93,0.12l-20.6-8.28c-1.91-0.74-4.13,0-5.09,1.8L3.57,57.83c-1.06,1.8-0.53,4.13,0.95,5.41L21.91,76.9c0.26,0.21,0.4,0.53,0.36,0.87c-0.28,2.5-0.47,5.16-0.47,7.74c0,2.58,0.19,5.16,0.47,7.74c0.04,0.33-0.1,0.66-0.36,0.87L4.53,107.76c-1.59,1.27-2.01,3.5-0.95,5.41l16.96,29.26c0.95,1.8,3.29,2.54,5.09,1.8l20.59-8.28c0.32-0.13,0.67-0.08,0.94,0.13c4.09,3.13,8.54,5.7,13.37,7.72c0.31,0.13,0.54,0.42,0.58,0.75l3.1,21.93c0.21,2.01,2.01,3.5,4.13,3.5h33.93c2.12,0,3.82-1.48,4.13-3.5l3.1-21.94c0.05-0.33,0.27-0.61,0.58-0.75c4.74-2.03,9.2-4.7,13.38-7.74c0.27-0.2,0.62-0.24,0.93-0.12l20.6,8.28c1.91,0.74,4.13,0,5.09-1.8l16.96-29.26c0.95-1.8,0.53-4.13-0.95-5.41L148.29,93.77C148.29,93.77,148.29,93.77,148.29,93.77z M85.32,115.08c-16.33,0-29.69-13.25-29.69-29.69c0-16.33,13.25-29.69,29.69-29.69c16.33,0,29.69,13.25,29.69,29.69C115,101.72,101.75,115.08,85.32,115.08L85.32,115.08z"
}

const PlayerModule = () => {

    //interface

    let keyReg = (e) => {
        e.preventDefault()
        try {
            if (e.code == "Space") {
                
                Play();
                interfaceVisible()
            } if (e.code == "ArrowRight") {
                dokoaPlayer.current.currentTime += 5;
            } if (e.code == "ArrowLeft") {
                dokoaPlayer.current.currentTime -= 5;
            } if (e.code == "ArrowUp") {
                dokoaPlayer.current.volume += 0.1;
            }
        } catch { }
    };

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
            let timer = setTimeout(function()  { 
                for (var i = 0; i < playerInterfaces.length; i++) {
                    playerInterfaces[i].style.opacity = "0"
                }
            }, 3000);

            if (timer) {
                for (var i = 0; i < timer; i += 1) {
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
        timeLineBuffer()
        let currentTime = dokoaPlayer.current.currentTime;
        let duration = dokoaPlayer.current.duration;
        let percent = (100 / (duration / currentTime) )
        currentLine.current.style.width = percent + "%";
    }

    let timeLineBuffer = () => {
        let current = dokoaPlayer.current.currentTime
        setTimeout(() => {
            for (var buffer_length_now = 0; buffer_length_now < dokoaPlayer.current.buffered.length; buffer_length_now++) {
                if (current >= dokoaPlayer.current.buffered.start(buffer_length_now) && current <= dokoaPlayer.current.buffered.end(buffer_length_now)) {
                    bufferLine.current.style.width = (100 / (dokoaPlayer.current.duration / dokoaPlayer.current.buffered.end(buffer_length_now))) + "%";
                }
            }
        },200)
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
            document.getElementById('playBtn').setAttribute("d", svg.pause );
        }
    }

    let volume = () => {
        dokoaPlayer.current.volume = volumeInput.current.value / 100;
        interfaceVisible() // android chromium fix bug with reading movements in parent class via input range
    }

    function fullscreenSVG() {
        if (document.fullscreenElement) {
            document.getElementById('fullscreenBtn').setAttribute("d", svg.extend);
        } else {
            document.getElementById('fullscreenBtn').setAttribute("d", svg.fullscreen);
        }
    }

    let playRewind = () => {
            if (document.getElementsByClassName("playerInterface")[0].style.opacity == "0") {
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
        }, 300)
        if (e.detail > 1) {
            if (!isPlayed) { Play() }
                dokoaPlayer.current.currentTime -= 5;
            }
    }

    let rightRewind = (e) => {

        setTimeout(() => {
            if (e.detail == 1) {
                playRewind()
            }
        }, 300)
        if (e.detail > 1) {
            if (!isPlayed) { Play() }
            dokoaPlayer.current.currentTime += 5;
        }
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

        // non-react event

        document.addEventListener('fullscreenchange', fullscreenSVG);
    
} 

    return (
        <div >
            <div className="dokoaPlayer" ref={dokoaParent} onMouseMove={interfaceVisible} onKeyDown={keyReg}>
                <div className="blackBack"></div>
                
                <video ref={dokoaPlayer} src={link} preload="auto" onTimeUpdate={timeLineCurrent} onEnded={repeatSVG} ></video>
                <div className="rewindControls" >
                    <button className="leftRewind rewind" onClick={leftRewind}></button>
                    <button className="rightRewind rewind" onClick={rightRewind}></button>
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
                    </div>
                <div className="rightControl">
                    <div className="settingsContainer">
                            <button className="settings">
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
            <div className="playlistContainer">
                </div>

        </div>
    )
}
export default PlayerModule;