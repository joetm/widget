import { h, Component } from 'preact';

import 'whatwg-fetch';

import Form from "./Form.jsx";
import Results from "./Results.jsx";



export default class App extends Component {

    constructor() {
        super();
        // initialise the state (once)
        const internal_only = true;
        this.state = {
            loading:false,
            results: ['hello'],
            // API URL parameters
            internal_only: true,
            searchterm: '',
            match_type: 'included'
        };
    }

    queryAPI() {
        const _this = this;
        this.serverRequest = fetch(this.state.apiURL)
        .then(function(response) {
            return response.json();
        }).then(function(json) {
            // setting state will trigger a re-render (in componentDidMount)
            _this.setState({
                loading: false,
                results: json
            });
        }).catch(function(ex) {
            console.error('Error:', ex)
        });
    }

    // abort the running request if component is unmounted
    componentWillUnmount() {
        if (this.serverRequest) {
            this.serverRequest.abort();
        }
    }

    changeURLparameter(param, value) {
        let newState = {};
        newState[param] = value;
        this.setState(newState);
    }

    render(props, state) {
        let apiURL = `http://terminologies.gfbio.org/api/terminologies/search?query=${this.state.searchterm}&match_type=${this.state.match_type}&internal_only=${this.state.internal_only}`;
        console.log(apiURL);
        return (
            <div>
                <Form
                    queryAPI={this.queryAPI.bind(this)}
                    apiURL={apiURL}
                    changeURLparameter={this.changeURLparameter}
                />
                <Results
                    results={state.results}
                />
            </div>
        );
    }
}


