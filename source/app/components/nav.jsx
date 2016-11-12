import React from 'react';
import { Link, IndexLink } from 'react-router';

export default class NavComponent extends React.Component
{

    render() {
        return (
            
            <div className="ui pointing  menu">
                <IndexLink activeClassName="item active" to="/" className="item" >Get Weather</IndexLink>
                <Link activeClassName="item active" to="/about" className="item">About</Link>
                <Link activeClassName="item active" to="/examples" className="item">Examples</Link>
            </div>
        );
    }
}