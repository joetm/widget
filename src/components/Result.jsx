import { h, Component } from 'preact';

export default class Result extends Component {
    render(props, state) {
        return (
            <tr class="result">
                <td>{props.label}</td>
                <td>{props.description}</td>
                <td>{props.uri}</td>
                <td>{props.sourceTerminology}</td>
            </tr>
        );
    }
}
