import { Tabs } from "expo-router";
import React from "react";
import { Platform } from "react-native";

// import { HapticTab } from '@/components/HapticTab';
// import { IconSymbol } from '@/components/ui/IconSymbol';
// import TabBarBackground from '@/components/ui/TabBarBackground';
// import { Colors } from '@/constants/Colors';
// import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
	return (
		<Tabs
			screenOptions={{
				headerShown: false,
				tabBarStyle: Platform.select({
					ios: {
						position: "absolute",
					},
					default: {},
				}),
			}}
		>
			<Tabs.Screen
				name="index"
				options={{
					title: "Home",
				}}
			/>
			<Tabs.Screen
				name="blocklists"
				options={{
					title: "Blocklists",
				}}
			/>
			<Tabs.Screen
				name="integrations"
				options={{
					title: "Integrations",
				}}
			/>
		</Tabs>
	);
}
