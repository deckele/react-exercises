import { connect, MapDispatchToProps } from "react-redux";
import { resultActions } from '../../redux/result-actions';
import { Button } from './button';

export interface ButtonOwnProps {
    label: string;
}
export interface ButtonDispatchProps {
    onClick: () => void;
}

function createResultAction(label: string) {
    switch(label) {
        case "=":
            return resultActions.equal();
        case "c":
        case "C":
            return resultActions.reset();
        default:
            return resultActions.input(label);
    }
}

const mapDispatchToProps: MapDispatchToProps<ButtonDispatchProps, ButtonOwnProps> = (dispatch, ownProps) => ({
    onClick: () => dispatch(createResultAction(ownProps.label))
});
export const ButtonContainer = connect(null, mapDispatchToProps)(Button);
