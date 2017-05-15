import React, { Component } from 'react';
import { browserHistory } from 'react-router'

class SearchPage extends Component {
  constructor (props) {
    super(props)

    this.state = {
      query: ''
    }
  }

  render() {
    const { query } = this.state
    return (
      <div className="container">
        <div className="row">
              <h3 style={{ paddingTop: '80px'  }}>Просто - это агрегатор цен на мобильные телефоны в Беларуси </h3>
          <div className="input-group input-group-lg col-md-12" style={{ paddingTop: '150px', paddingBottom: '30px'  }}>
            <input
              type="text"
              className="form-control"
              placeholder="Введите модель мобильного телефона.."
              aria-describedby="sizing-addon1"
              onChange={(e) => this.setState({ query: e.target.value })}
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                browserHistory.push({ pathname: `/results`, query: { query } })
                console.log(query)
              }
              }}
            />
          </div>
          <div className="col-md-12">
            <button
              type="button"
              className="btn btn-primary btn-lg"
              onClick={() => {
                browserHistory.push({ pathname: `/results`, query: { query } })
                console.log(query)
              }}
              >
              Поиск
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchPage;
