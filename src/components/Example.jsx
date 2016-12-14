import { h, Component } from 'preact';

const styles = {
    cursor: 'pointer'
};

export default class Example extends Component {
    render(props, state) {
        return (
        	<span
        		style={styles}
        		onClick={this.props.useExample}
        	>{props.name}</span>
        );
    }
};
