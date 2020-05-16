export const RECEIVE_TWEEETS = 'RECEIVE_TWEETS'

export function receiveTweets (tweets) {
    return {
        type : RECEIVE_TWEEETS,
        tweets,
    }
}