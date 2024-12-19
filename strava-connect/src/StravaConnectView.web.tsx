import * as React from 'react';

import { StravaConnectViewProps } from './StravaConnect.types';

export default function StravaConnectView(props: StravaConnectViewProps) {
  return (
    <div>
      <iframe
        style={{ flex: 1 }}
        src={props.url}
        onLoad={() => props.onLoad({ nativeEvent: { url: props.url } })}
      />
    </div>
  );
}
