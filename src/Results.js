import React from 'react';

class Results extends React.Component {
    constructor(){
        super();
        this.state = {
            filmsResults: [],
        }
    }
    
    componentDidUpdate(){
        var genreNumber = this.props.genreNumber;
        fetch('https://api.themoviedb.org/3/discover/movie?api_key=00d3862837b278c00036b0c34b9be79d&language=fr-FR&sort_by=popularity.desc&with_genres='+genreNumber)
        .then(results => {
            return results.json();
        }).then(data => {
            let filmsResults = data.results.map((films) => {
                return(
                    <div key={films.results}>
                        <p>{films.title}</p>
                    </div>
                )
            })
            this.setState({
                filmsResults: filmsResults
            });
            console.log("state", this.state.filmsResults)
        })
    }
    render(){
        return <div>{this.state.filmsResults}</div>
    }
}

export default Results;