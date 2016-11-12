import React from 'react';


export default class WeatherFormComponent extends React.Component
{
    
    render() {
        return (
            <div>
                <form onSubmit={this.handleWeatherSubmit.bind(this)}>
                    <div className="ui action input">
                        <input placeholder="Enter City Name" ref="cityInput"/>
                        <button type="submit" className="ui green button">Search</button>
                    </div>
                </form>
            </div> 
        )
    }

    handleWeatherSubmit(e)
    {
        e.preventDefault();
        let city = this.refs.cityInput.value;

        if(city.length > 0) {
            this.props.onWeatherClick(this.refs.cityInput.value);
            this.refs.cityInput.value = '';
        }
        else alert("Kuch likh to lodu");
    }

}