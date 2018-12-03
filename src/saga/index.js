import {all} from 'redux-saga/effects';
import authSaga from './AuthSaga';
import scheduleSaga from './ScheduleSaga';
import rotationSaga from './RotationSaga';

export default function* rootSaga(getState) {
    yield all([
        authSaga(),
        scheduleSaga(),
        rotationSaga()
    ]);
}
