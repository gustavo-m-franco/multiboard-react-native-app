import { takeLatest, call, select, put, } from 'redux-saga/effects';
import { SAVE_PROGRESS, UPDATE_GAME_NAME, saveGame, updateSavedGame, } from './../actions';
import { gameSelector, activeGameSelector, playersSelector, } from './../selectors';
import { WON, LOST, PLAYING, ENDED, IN_COURSE, } from './../utility/constants';

function* saveGameProgress({ type, gameName, }) {
    const game = yield select(gameSelector);
    const players = yield select(playersSelector);
    const savedGame = { data: game, players, };
    const activeGame = yield select(activeGameSelector);
    if (activeGame>=0) {
        yield put(updateSavedGame(activeGame, savedGame));
    } else {
        yield put(saveGame(savedGame));
    }
}

export default function* saveGameSaga() {
    yield takeLatest(SAVE_PROGRESS, saveGameProgress);
}
