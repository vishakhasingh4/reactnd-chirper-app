
import { RECEIVE_TWEEETS } from '../actions/tweets'

export default function tweets (state={}, action){
    switch(action.type) {
        case RECEIVE_TWEEETS :
            return {
                ...state,
                ...action.tweets
            }
        default :
          return state    
    }
}