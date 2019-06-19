import React from "react";

class Questions extends React.Component {
  constructor(props){
    super(props);
    this.lebouton = React.createRef();
  }
  render() {
    return (
      <div className="questions">
        <form onSubmit={this.props.onSubmit} id="formulaire">
          <div className="question1">
            <h1>Un film de quel genre ?</h1>
            <div>
              <input
                type="radio"
                id="q1option1"
                name="genre"
                value="35"
                onChange={this.props.onChangeGenre}
              />
              <label htmlFor="q1option1">Comedie</label>

              <input
                type="radio"
                id="q1option2"
                value="18"
                name="genre"
                onChange={this.props.onChangeGenre}
              />
              <label htmlFor="q1option2">Drame</label>

              <input
                type="radio"
                value="28"
                name="genre"
                id="q1option3"
                onChange={this.props.onChangeGenre}
              />
              <label htmlFor="q1option3">Action</label>

              <input
                type="radio"
                value="10751"
                name="genre"
                id="q1option4"
                onChange={this.props.onChangeGenre}
              />
              <label htmlFor="q1option4">Famille</label>

              <input
                type="radio"
                value="10749"
                name="genre"
                id="q1option5"
                onChange={this.props.onChangeGenre}
              />
              <label htmlFor="q1option5">Romantique</label>

              <input
                type="radio"
                value="99"
                name="genre"
                id="q1option6"
                onChange={this.props.onChangeGenre}
              />
              <label htmlFor="q1option6">Documentaire</label>
            </div>
          </div>

          <div className="question2">
            <h1>Qui dure combien de temps ?</h1>
            <div>
              <input
                type="radio"
                id="q2option1"
                value="90"
                name="pays"
                onChange={this.props.onChangePays}
              />
              <label htmlFor="q2option1">1h30 maximum</label>

              <input
                type="radio"
                id="q2option2"
                value="150"
                name="pays"
                onChange={this.props.onChangePays}
              />
              <label htmlFor="q2option2">2h30 maximum</label>

              <input
                type="radio"
                id="q2option3"
                value=""
                name="pays"
                onChange={this.props.onChangePays}
              />
              <label htmlFor="q2option3">Peu importe</label>
            </div>
          </div>

          <div className="question3">
            <h1>De quelle époque ?</h1>
            <div>
              <input
                type="radio"
                id="q3option1"
                value="&primary_release_date.gte=2000-1-1&primary_release_date.lte=2100-1-1"
                name="Epoque"
                onChange={this.props.onChangeEpoque}
              />
              <label id="comedy" htmlFor="q3option1">Un film récent</label>

              <input
                type="radio"
                id="q3option2"
                value="&primary_release_date.gte=1980-1-1&primary_release_date.lte=2000-1-1"
                name="Epoque"
                onChange={this.props.onChangeEpoque}
              />
              <label htmlFor="q3option2">Un vieux film</label>

              <input
                type="radio"
                id="q3option3"
                value=""
                name="Epoque"
                onChange={this.props.onChangeEpoque}
              />
              <label htmlFor="q3option3">J'ai du mal à choisir</label>
            </div>
          </div>
        </form>
        <button id="submit "type="submit" form="formulaire" ref={this.lebouton}>
          Trouver un film ↓
        </button>
      </div>
    );
  }
}

export default Questions;
