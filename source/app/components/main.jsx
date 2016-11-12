import React from 'react';
import NavComponent from './nav';



export default class MainComponent extends React.Component
{
    constructor(props)
    {
        super(props);
        console.log('something');
    }

    render() {
        let currLocation = this.props.location.pathname;

        let classes = currLocation === "/" ? "ui one raised segment column stackable center aligned page grid transparent": "ui one raised segment column stackable center aligned page grid";

        
        return (
            <div>
                <NavComponent/>
                <div className="ui container">
                    <div className={classes}>
                    {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
}