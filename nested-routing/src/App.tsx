import React from 'react';
import './App.css';
import { BrowserRouter, Link, Route, RouteComponentProps } from "react-router-dom";
import { topics } from "./constants/data";

const ResourceList: React.FC<RouteComponentProps<any>> = ({ match }) => {
    const topicId = match.params.topicId;
    const topic = topics.find(topic => topic.id === topicId);
    if (!topic) {
        return null;
    }
    return (
        <div className="resource-list">
            {topic.resources.map(resource => 
                <div className="resource-link" key={resource.id}>
                    <a href={resource.url} >{resource.name}</a>
                    <p>
                        {resource.description}
                    </p>
                </div>
            )}
        </div>
    );
}

export const App: React.FC = () => {
    return (
        <div className="App">
            <BrowserRouter>
                {
                    topics.map(topic => 
                        <div className="topic-link" key={topic.id}>
                            <Link to={topic.id}>{topic.name}</Link>
                            <p>
                                {topic.description}
                            </p>
                        </div>
                    )
                }
                <hr />
                <Route path="/:topicId" component={ResourceList} /> 
            </BrowserRouter>
        </div>
    );
}
