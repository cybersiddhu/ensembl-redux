import types from '../constants';

const overlapURL = 'http://rest.ensembl.org/overlap/id/';

export function getOverlap(id) {
    const url = [overlapURL, id, '?feature=gene'].join('');
    return {
        types: types,
        endpoint: url,
        id
    };
}
