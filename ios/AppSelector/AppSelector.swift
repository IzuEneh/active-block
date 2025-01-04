//
//  AppSelector.swift
//  ActiveBlock
//
//  Created by Eneh, Izu on 1/1/25.
//
import FamilyControls
import SwiftUI

struct AppSelector: View {
  @State var selection = FamilyActivitySelection()
  @State var isPresented = false
    var body: some View {
      Button("ADD A NEW BLOCKLIST") {
        isPresented = true
      }
      .familyActivityPicker(isPresented: $isPresented,
                            selection: $selection)
      .onChange(of: selection) { newSelection in
        let applications = selection.applications
        let categories = selection.categories
        let webDomains = selection.webDomains
      }
    }
}

#Preview {
    AppSelector()
}
