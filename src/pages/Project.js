import React, {Component} from "react";
import gql from "graphql-tag";
import {Query} from "react-apollo";
import PrivateRoute from "../router/PrivateRoute";
import ProjectGantt from "./ProjectGantt";
import ProjectAgile from "./ProjectAgile";
import Button from "../../node_modules/@material-ui/core/Button/Button";
import {Link} from "react-router-dom";

class Project extends Component<{ match: any }> {
    render() {
        let {match} = this.props;
        let projectId = match.params.projectId;
        return (
                <Query query={gql`
          query Project($id: String!) {
            projects(id:$id) {
              id
              name
              description
            }
          }
        `}
                       variables={{id: projectId}}
                >
                    {({loading, error, data}) => {
                        if (loading) return <p>Loading...</p>;
                        if (error) return <p>Error :(</p>;
                        let {id, name, description} = data.projects[0];
                        return (
                            <div style={{height: '100%', minHeight: 0, display: 'flex', flexDirection: 'column'}}>
                                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'start', alignItems: 'center'}}><h1 title={description}>{id}:{name}</h1>
                                    <div>
                                        <Button size="small" component={Link} to={`/project/${projectId}`}>Home</Button>
                                        <Button size="small" component={Link} to={`/project/${projectId}/gantt`}>Gantt</Button>
                                        <Button size="small" component={Link} to={`/project/${projectId}/agile`}>Agile</Button>
                                    </div>
                                </div>
                                <PrivateRoute path="/project/:projectId/gantt" component={ProjectGantt}/>
                                <PrivateRoute path="/project/:projectId/agile" component={ProjectAgile}/>
                            </div>
                        )
                    }}
                </Query>
        );
    }
}

export default Project;