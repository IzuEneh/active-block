// Reexport the native module. On web, it will be resolved to StravaConnectModule.web.ts
// and on native platforms to StravaConnectModule.ts
export { default } from './StravaConnectModule';
export { default as StravaConnectView } from './StravaConnectView';
export * from  './StravaConnect.types';
