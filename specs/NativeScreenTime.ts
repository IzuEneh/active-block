import type {TurboModule} from 'react-native';
import {TurboModuleRegistry} from 'react-native';

interface Spec extends TurboModule {
  createCollection(): void;
}

export default TurboModuleRegistry.getEnforcing<Spec>('NativeScreenTime');
