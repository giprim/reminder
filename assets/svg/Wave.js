import * as React from 'react';
import Svg, { G, Path, Defs } from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: filter */

function Wave(props) {
  return (
    <Svg
      width={375}
      height={472}
      viewBox='0 0 375 472'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}>
      <G filter='url(#prefix__filter0_d)'>
        <Path
          d='M-63-44h482C185.002 80.01 383.988 359.034-63 418V-44z'
          fill='#D90429'
          fillOpacity={0.77}
          shapeRendering='crispEdges'
        />
      </G>
      <Path
        d='M-107-14h500c-242.736 126.426-36.32 410.886-500 471V-14z'
        fill='#405E76'
        fillOpacity={0.8}
      />
      <G filter='url(#prefix__filter1_i)'>
        <Path d='M-31-35h413C181.5 67 352 296.5-31 345V-35z' fill='#fff' />
      </G>
      <Defs></Defs>
    </Svg>
  );
}

export default Wave;
