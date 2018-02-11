import { genres } from '../fixture';
import { SEARCH } from '../constants';

const arts = (store = genres.arts, action) => {
  switch (action.type) {
    case SEARCH: return store;
  }
  return store;
};

export default arts;
