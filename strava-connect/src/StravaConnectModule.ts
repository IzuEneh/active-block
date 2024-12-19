import { NativeModule, requireNativeModule } from 'expo';

import { StravaConnectModuleEvents } from './StravaConnect.types';

declare class StravaConnectModule extends NativeModule<StravaConnectModuleEvents> {
  PI: number;
  hello(): string;
  setValueAsync(value: string): Promise<void>;
}

// This call loads the native module object from the JSI.
export default requireNativeModule<StravaConnectModule>('StravaConnect');
