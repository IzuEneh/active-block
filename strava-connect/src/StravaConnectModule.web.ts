import { registerWebModule, NativeModule } from 'expo';

import { StravaConnectModuleEvents } from './StravaConnect.types';

class StravaConnectModule extends NativeModule<StravaConnectModuleEvents> {
  PI = Math.PI;
  async setValueAsync(value: string): Promise<void> {
    this.emit('onChange', { value });
  }
  hello() {
    return 'Hello world! 👋';
  }
}

export default registerWebModule(StravaConnectModule);
