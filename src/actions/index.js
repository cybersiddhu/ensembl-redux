import types from '../constants';
import axios from 'axios';

const overlapURL = 'http://rest.ensembl.org/overlap/id/';

export function getOverlap(id) {
    const url = [overlapURL, id, '?feature=gene'].join('');
    return {
        types: types,
        promise: axios.get(url, {headers: {'Content-type': 'application/json'}}),
        id
    };
}
