import { h, Component } from 'preact';

import Result from "./Result.jsx";

export default class Results extends Component {
    render(props, state) {
        console.log(props);
        return (
            <div id="results">
                {
                    props.results.map((item) => {
                        return (
                            <Result
                                label={item.label}
                                value={item.label}
                                id={item.uri}
                                query={item.term}
                                sourceTerminology={item.sourceTerminology}
                            />
                        );
                    })
                }
            </div>
        );
    }
}
