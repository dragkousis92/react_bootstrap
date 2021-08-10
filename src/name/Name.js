import React from 'react';

type Props = {
  name: string,
};

const Hello = ({ name }: Props) => <span>{name}</span>;

Hello.defaultProps = { name: 'dimitris' };

export { Hello };
export default Hello;
