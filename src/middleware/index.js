import agent from 'superagent';

export function ensemblMiddleware() {
    return (next) => (action) => {
        const {endpoint, types, ...rest} = action;
        if (!endpoint) {
            return next(action);
        }
        const {
            ENSEMBL_SUCCESS,
            ENSEMBL_REQUEST,
            ENSEMBL_ERROR
        } = types;
        next({...rest, type: ENSEMBL_REQUEST});
        agent
            .get(endpoint)
            .set('Content-type', 'application/json')
            .end((err, res) => {
                if (err) {
                    next({
                        error: err.response.body,
                        id: action.id,
                        type: ENSEMBL_ERROR
                    });
                } else {
                    next({
                        response: res.body,
                        id: action.id,
                        type: ENSEMBL_SUCCESS
                    });
                }
            });
    };
}
