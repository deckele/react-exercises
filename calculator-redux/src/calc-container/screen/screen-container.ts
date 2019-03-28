import { connect, MapStateToProps } from 'react-redux';
import { AppState } from '../../redux/store';
import { Screen } from './screen';

export interface ScreenOwnProps {

}
export interface ScreenStateProps {
    result: string
}

const mapStateToProps: MapStateToProps<ScreenStateProps, ScreenOwnProps, AppState> = (state) => ({
    result: state.resultState.result
});
export const ScreenContainer = connect(mapStateToProps)(Screen);
