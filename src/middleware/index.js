export function ensemblMiddleware() {
    return (next) => (action) => {
        const {promise, types, ...rest} = action;
        if (!promise) {
            return next(action);
        }
        const {
            ENSEMBL_SUCCESS,
            ENSEMBL_REQUEST,
            ENSEMBL_ERROR
        } = types;
        next({...rest, type: ENSEMBL_REQUEST});
        promise
        .then((result) => {
            next({...result, type: ENSEMBL_SUCCESS});
        })
        .catch((error) => {
            next({...error, type: ENSEMBL_ERROR});
        });
    }
}
