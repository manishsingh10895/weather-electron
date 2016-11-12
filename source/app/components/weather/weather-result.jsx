import React from 'react';


export default class WeatherResultComponent extends React.Component
{
    constructor(props) {
        super(props);
    }

    
    render() {
        
        let {city, temp} = this.props;

        if(city.length === 0 && temp.length == 0) return <div></div>;
        else 
        {
            return (
                <div>
                    Its {temp}F in {city}
                </div> 
            )
        }
    }
}