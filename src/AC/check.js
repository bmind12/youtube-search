const CHECK = 'CHECK';

export const runCheck = (word) => {
    return {
        type: CHECK,
        payload: {
            word
        }
    }
}
