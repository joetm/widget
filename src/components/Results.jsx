import { h, Component } from 'preact';

import Result from "./Result.jsx";

export default class Results extends Component {
    render(props, state) {

        console.log('results', props.results);

        if (!props.results.length) {
            return null;
        }

        let results = props.results.map((item) => {
                        return (
                            <Result
                                label={item.label}
                                value={item.label}
                                description={item.description}
                                id={item.uri}
                                sourceTerminology={item.sourceTerminology}
                            />
                        );
                    });

        return (
            <table id="results">
                <thead>
                    <th>label</th>
                    <th>description</th>
                    <th>uri</th>
                    <th>sourceTerminology</th>
                </thead>
                <tbody>
                    <tr style={{display: props.loading ? 'block' : 'none'}}>
                        <td colspan="4">...loading...</td>
                    </tr>
                    {results}
                </tbody>
            </table>
        );
    }
}
