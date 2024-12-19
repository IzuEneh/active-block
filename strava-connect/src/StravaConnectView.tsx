import { requireNativeView } from 'expo';
import * as React from 'react';

import { StravaConnectViewProps } from './StravaConnect.types';

const NativeView: React.ComponentType<StravaConnectViewProps> =
  requireNativeView('StravaConnect');

export default function StravaConnectView(props: StravaConnectViewProps) {
  return <NativeView {...props} />;
}
