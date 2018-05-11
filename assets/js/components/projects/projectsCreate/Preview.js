import React from 'react';
import SingleProjectView from '../SingleProjectView';
import { connect } from 'react-redux';

class Preview extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='project-create-single-project-preview'>
                <SingleProjectView project={this.props.project} />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        project: state.projectCreate,
    };
}

export default connect(mapStateToProps)(Preview);