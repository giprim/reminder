import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function GoogleIcon(props) {
  return (
    <Svg
      width={20}
      height={20}
      viewBox='0 0 20 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}>
      <Path
        d='M19.531 10.227c0 5.527-3.785 9.46-9.375 9.46A9.676 9.676 0 01.47 10 9.676 9.676 0 0110.156.312c2.61 0 4.805.958 6.496 2.536l-2.636 2.535C10.566 2.055 4.152 4.555 4.152 10c0 3.379 2.7 6.117 6.004 6.117 3.836 0 5.274-2.75 5.5-4.176h-5.5V8.61h9.223c.09.496.152.973.152 1.618z'
        fill='#EB5555'
      />
    </Svg>
  );
}

export default GoogleIcon;
