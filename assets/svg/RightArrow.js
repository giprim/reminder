import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function RightArrow(props) {
  return (
    <Svg
      width={16}
      height={16}
      viewBox='0 0 16 16'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}>
      <Path
        d='M8 0c4.42 0 8 3.58 8 8s-3.58 8-8 8-8-3.58-8-8 3.58-8 8-8zm-.932 4.632l2.435 2.336h-5.89a.772.772 0 00-.774.774v.516c0 .43.345.774.774.774h5.89l-2.435 2.336c-.313.3-.32.8-.013 1.106l.355.352a.771.771 0 001.093 0l4.28-4.278a.771.771 0 000-1.093L8.504 3.17a.771.771 0 00-1.093 0l-.355.352c-.307.31-.3.81.013 1.11z'
        fill='#605870'
      />
    </Svg>
  );
}

export default RightArrow;
