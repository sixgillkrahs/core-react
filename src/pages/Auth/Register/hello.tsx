import React, { memo } from 'react';

const SubComponent = (props: { input: number }) => {
  console.log('render', props.input);
  return <div>SubComponent</div>;
};

export default memo(SubComponent);
