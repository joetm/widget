import { h, Component } from 'preact';

const styles = {
    example: {
        cursor: 'pointer'
    }
};

class Example extends Component {
    render(props, state) {
        return <span style={styles.example}>{props.name}</span>;
    }
};

export default class Form extends Component {

    constructor() {
        super();
        this.state = {
            internal_only: false
        };
    }

    changeInternalCheckbox() {
        const newState = !this.state.internal_only;
        this.setState({internal_only: newState});
        this.props.changeURLparameter('internal_only', newState)
    }

    render(props, state) {
        return (
            <form action={props.apiURL} method="GET">
                <input id="normalSearchInput" type="search" />
                <input type="button" value="Search" onClick={props.queryAPI} />
                <div>
                    <div>
                        <label>
                            <input onClick={this.changeInternalCheckbox.bind(this)} type="checkbox" name='searchTerminology' value={this.state.internal_only} />
                            Include external terminologies
                        </label>
                    </div>
                    <div>
                        <label>
                            <input type='checkbox' name='searchType' value='exact' checked />
                            Exact Search
                        </label>
                    </div>
                    <div>
                        Examples: <Example name={"bacteria"} />, <Example name={"polydesmus"} />, <Example name={"soil"} />
                    </div>
                </div>
            </form>
        );
    }
}


