import snakeCase from 'lodash/snakeCase';

const componentActionGenerator = packageName => {
  const componentActionGeneratorNamePrefix =
    snakeCase(packageName).toUpperCase() + '__';

  const actionGenerator = actionName => {
    const actionType =
      componentActionGeneratorNamePrefix + snakeCase(actionName).toUpperCase();

    const actionCreatorFunc = payload => ({
      type: actionType,
      payload,
    });

    actionCreatorFunc.type = actionType;

    return actionCreatorFunc;
  };

  const effectGenerator = effectName => {
    const actionType =
      componentActionGeneratorNamePrefix + snakeCase(effectName).toUpperCase();

    const action = actionGenerator(actionType);

    action.succeeded = actionGenerator(`${effectName}_SUCCEEDED`);
    action.failed = actionGenerator(`${effectName}_FAILED`);

    return action;
  };

  return {
    createAction: actionGenerator,
    createEffect: effectGenerator,
  };
};

export default componentActionGenerator;
