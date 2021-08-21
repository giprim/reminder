import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function PauseIcon(props) {
  return (
    <Svg
      width={20}
      height={20}
      viewBox='0 0 20 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}>
      <Path
        d='M6.875 18.71h-3.75a1.875 1.875 0 01-1.875-1.874V3.086c0-1.035.84-1.875 1.875-1.875h3.75c1.035 0 1.875.84 1.875 1.875v13.75c0 1.035-.84 1.875-1.875 1.875zm11.875-1.874V3.086c0-1.035-.84-1.875-1.875-1.875h-3.75c-1.035 0-1.875.84-1.875 1.875v13.75c0 1.035.84 1.875 1.875 1.875h3.75c1.035 0 1.875-.84 1.875-1.875z'
        fill='#000'
      />
    </Svg>
  );
}

export default PauseIcon;
