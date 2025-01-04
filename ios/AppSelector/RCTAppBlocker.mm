//
//  RCTAppBlocker.m
//  ActiveBlock
//
//  Created by Eneh, Izu on 1/2/25.
//
#import "RCTAppBlocker.h"

#import <react/renderer/components/ActiveBlockSpec/ComponentDescriptors.h>
#import <react/renderer/components/ActiveBlockSpec/EventEmitters.h>
#import <react/renderer/components/ActiveBlockSpec/Props.h>
#import <react/renderer/components/ActiveBlockSpec/RCTComponentViewHelpers.h>

#import "ActiveBlock-Bridging-Header.h"
#import "ActiveBlock-Swift.h"

using namespace facebook::react;


@interface RCTAppBlocker () <RCTAppBlockerViewProtocol>
@end

@implementation RCTAppBlocker {
  AppSelectorViewController * _appSelectorVC;
}

-(instancetype)init
{
  if (self = [super init]) {
    _appSelectorVC = [AppSelectorViewController new];
    [self addSubview: _appSelectorVC.view];
  }
//  AppSelectorViewController *appSelectorUIViewController = [[AppSelectorViewController alloc] init];
  return self;
}

- (void)updateProps:(Props::Shared const &)props oldProps:(Props::Shared const &)oldProps
{
  const auto &oldViewProps = *std::static_pointer_cast<CustomWebViewProps const>(_props);
  const auto &newViewProps = *std::static_pointer_cast<CustomWebViewProps const>(props);

  // Handle your props here
  [super updateProps:props oldProps:oldProps];
}

-(void)layoutSubviews
{
  [super layoutSubviews];
  _appSelectorVC.view.frame = self.bounds;
}

// Event emitter convenience method
- (const AppBlockerEventEmitter &)eventEmitter
{
  return static_cast<const AppBlockerEventEmitter &>(*_eventEmitter);
}

+ (ComponentDescriptorProvider)componentDescriptorProvider
{
  return concreteComponentDescriptorProvider<AppBlockerComponentDescriptor>();
}

//Class<RCTAppBlockerViewProtocol> WebViewCls(void)
//{
//  return RCTAppBlocker.class;
//}

@end
