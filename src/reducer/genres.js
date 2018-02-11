import {genres as defaultGenres} from '../fixture'

const genres  = (state = defaultGenres, action) => {
    switch(action.type){
        case '1': return state;
    }
    return state;
}

export default genres;