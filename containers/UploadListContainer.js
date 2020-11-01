import {connect} from 'react-redux';
import {fetchUploads, addUpload} from '../actions';
import UploadList from '../components/UploadList';

const mapStateToProps = state => {
  return {
    uploads: state.uploads,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchUploads: () => {
      dispatch(fetchUploads());
    },
    addUpload: (file_name, image) => {
      dispatch(addUpload(file_name, image));
    },
  };
};

const UploadListContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(UploadList);

export default UploadListContainer;
