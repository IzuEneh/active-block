//
//  AppSelectorViewController.swift
//  ActiveBlock
//
//  Created by Eneh, Izu on 1/3/25.
//

import SwiftUI
import UIKit

class AppSelectorViewController: UIViewController {
  override func viewDidLoad() {
    super.viewDidLoad()
    
    let appSelectorView = AppSelector()
    let hostingController = UIHostingController(rootView: appSelectorView)
    addChild(hostingController)
    view.addSubview(hostingController.view)
    
    hostingController.view.translatesAutoresizingMaskIntoConstraints = false
    NSLayoutConstraint.activate([
      hostingController.view.leadingAnchor.constraint(equalTo: view.leadingAnchor),
      hostingController.view.trailingAnchor.constraint(equalTo: view.trailingAnchor),
      hostingController.view.topAnchor.constraint(equalTo: view.topAnchor),
      hostingController.view.bottomAnchor.constraint(equalTo: view.bottomAnchor)
    ])
    
    hostingController.didMove(toParent: self)
  }
}
