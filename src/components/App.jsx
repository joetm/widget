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
            results: [],
            // API URL parameters
            internal_only: false,
            exact: false,
            searchterm: '',
            match_type: 'included',
            apiURL: 'http://terminologies.gfbio.org/api/terminologies/search?query=&match_type=included&internal_only=true'
        };
    }

    changeInternalCheckbox() {
        const newState = !this.state.internal_only;
        this.setState({internal_only: newState});
    }
    changeExactCheckbox() {
        const newState = !this.state.exact;
        this.setState({exact: newState});
    }

    useExample(e) {
        const searchterm = e.target.innerText;
        console.log('using example:', searchterm);
        this.setState({searchterm});
    }

    queryAPI() {

        const apiURL = `http://terminologies.gfbio.org/api/terminologies/search?query=${this.state.searchterm}&match_type=${this.state.match_type}&internal_only=${this.state.internal_only}`;
        console.log('apiURL', apiURL);
        this.setState({
            loading: true,
            apiURL
        });

        const _this = this;
        this.serverRequest = fetch(this.state.apiURL)
        .then(function(response) {
            return response.json();
        }).then(function(json) {
            console.log('json', json);
            const results = json.results;
            // setting state will trigger a re-render (in componentDidMount)
            _this.setState({
                loading: false,
                results
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

    render(props, state) {
        return (
            <div>
                <Form
                    queryAPI={this.queryAPI.bind(this)}
                    useExample={this.useExample.bind(this)}
                    searchterm={this.state.searchterm}
                    apiURL={this.state.apiURL}
                    internal_only={state.internal_only}
                    exact={state.exact}
                    changeURLparameter={this.changeURLparameter}
                    changeExactCheckbox={this.changeExactCheckbox.bind(this)}
                    changeInternalCheckbox={this.changeInternalCheckbox.bind(this)}
                />
                <Results
                    results={state.results}
                    loading={state.loading}
                />
            </div>
        );
    }
}


