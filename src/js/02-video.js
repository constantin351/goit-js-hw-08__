import Player from "@vimeo/player";
import throttle from "lodash.throttle";

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const LOCALSTORAGE_KEY = "videoplayer-current-time";

 const onPlay = function({ seconds }) {
    // data is an object containing properties specific to that event
    // player.setCurrentTime("videoplayer-current-time", seconds);
    localStorage.setItem("videoplayer-current-time", seconds);

    console.log(localStorage);
};

player.on('timeupdate', throttle(onPlay, 1000));

player.setCurrentTime(localStorage.getItem("videoplayer-current-time"));

