import { h, Component } from 'preact';

import Example from "./Example.jsx";


export default class Form extends Component {

    render() {
        return (
            <form action={this.props.apiURL} method="GET">
                <input id="normalSearchInput" value={this.props.searchterm} type="search" />
                <input type="button" value="Search" onClick={this.props.queryAPI} />
                <div>
                    <div>
                        <label>
                            <input
                                onChange={this.props.changeInternalCheckbox}
                                type="checkbox"
                                name='searchTerminology'
                                value={this.props.internal_only}
                                checked={this.props.internal_only ? 'checked' : false}
                            />
                            Include external terminologies
                        </label>
                    </div>
                    <div>
                        <label>
                            <input
                                onChange={this.props.changeExactCheckbox}
                                type='checkbox'
                                name='searchType'
                                value={this.props.exact}
                                checked={this.props.exact === true ? 'checked' : false}
                            />
                            Exact Search
                        </label>
                    </div>
                    <div>
                        Examples: <Example useExample={this.props.useExample} name={"bacteria"} />, <Example useExample={this.props.useExample} name={"polydesmus"} />, <Example useExample={this.props.useExample} name={"soil"} />
                    </div>
                </div>
            </form>
        );
    }
};
