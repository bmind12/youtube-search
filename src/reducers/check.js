const CHECK = 'CHECK';

// const defaultWord = 'Defaault value'

export default (word = 'defaultWord', action) => {
    const { type, payload } = action

    switch (type) {
        case CHECK: {
            return payload.word
        }

        default: {
            return 'Default word'
        }
    }
}
