import { connect } from 'react-redux';

import separatePropCreators from './utils';

const EMPTY_OBJ = {};

const createProps = statePropsCreators => (state, ownProps) =>
  Object.entries(statePropsCreators).reduce((props, [key, propSelector]) => {
    props[key] = propSelector(state, ownProps);
    return props;
  }, {});

const createActionProps = actionPropsCreators => (dispatch, ownProps) =>
  Object.entries(actionPropsCreators).reduce((props, [key, action]) => {
    props[key] = (...args) => dispatch(action(...args, ownProps));
    return props;
  }, {});

const withModelProps = (propsCreators = EMPTY_OBJ, mergeProps, config) => {
  const { statePropsCreators, actionPropsCreators } =
    separatePropCreators(propsCreators);
  const props = createProps(statePropsCreators || EMPTY_OBJ);
  const actionProps = createActionProps(actionPropsCreators || EMPTY_OBJ);
  return connect(props, actionProps, mergeProps, config);
};

export default withModelProps;
