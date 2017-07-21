import { LIKED_JOB } from '../actions/types';
import _ from 'lodash';

export default (state=[], action) => {
	switch(action.type) {
		case LIKED_JOB:
			return _.uniqBy([ action.payload, ...state ], 'jobkey')
		default: 
			return state;
	}
}