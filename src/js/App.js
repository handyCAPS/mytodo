import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from './actions/actionCreators';

import Main from './components/Main';

function mapStateToProps(state) {
    return {
        tasks: state.tasks,
        visibilityFilter: state.VisibilityFilter,
        editing: state.Editing
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actionCreators, dispatch);
}

const App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App;