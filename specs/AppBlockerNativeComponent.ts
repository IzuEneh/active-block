import type {HostComponent, ViewProps} from 'react-native';
import codegenNativeComponent from 'react-native/Libraries/Utilities/codegenNativeComponent';

interface NativeProps extends ViewProps {
  // add other props here
}

export default codegenNativeComponent<NativeProps>(
  'AppBlocker',
) as HostComponent<NativeProps>;
