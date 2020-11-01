export const FETCH_UPLOADS = 'FETCH_UPLOADS';
export const FETCH_UPLOADS_COMMIT = 'FETCH_UPLOADS_COMMIT';
export const FETCH_UPLOADS_ROLLBACK = 'FETCH_UPLOADS_ROLLBACK';

export const ADD_UPLOAD = 'ADD_UPLOAD';
export const ADD_UPLOAD_COMMIT = 'ADD_UPLOAD_COMMIT';
export const ADD_UPLOAD_ROLLBACK = 'ADD_UPLOAD_ROLLBACK';

export const fetchUploads = () => ({
  type: FETCH_UPLOADS,
  payload: {},
  meta: {
    offline: {
      effect: {url: 'http://localhost:8000/uploads', method: 'GET'},
      commit: {type: FETCH_UPLOADS_COMMIT, meta: {}},
      rollback: {type: FETCH_UPLOADS_ROLLBACK, meta: {}},
    },
  },
});

export const addUpload = (file_name, image) => ({
  type: ADD_UPLOAD,
  payload: {file_name, image},
  meta: {
    offline: {
      effect: {
        url: 'http://localhost:8000/uploads',
        method: 'POST',
        json: {file_name, image},
      },
      commit: {type: ADD_UPLOAD_COMMIT, meta: {file_name, image}},
      rollback: {type: ADD_UPLOAD_ROLLBACK, meta: {file_name, image}},
    },
  },
});
