import React from 'react';

class ProjectCreateIntro extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount(){

    }

    render() {
        return (
            <div className="container">
                <div className="col-md-12 user-project-list-intro">
                    <h1><strong>Jūsų projektų sąrašas</strong></h1>
                    <h3>Vieta kur galite matyti visus jūsų projektus</h3>
                </div>
                <div className="col-md-12 user-project-list-item">
                    <div className="col-md-2">
                    </div>
                    <div className="col-md-8">
                    </div>
                    <div className="col-md-2 ">
                    </div>
                </div>
            </div>
        );
    }
}

export default ProjectCreateIntro