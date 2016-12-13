import { h, Component } from 'preact';

export default class Result extends Component {
    render(props, state) {
        return (
            <div class="result">
                {props.title}
                {props.URI}
                {props.taxonomy}
            </div>
        );
    }
}
