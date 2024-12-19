import { Text, View } from "react-native";
import { useCallback, useMemo, useRef, useState } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Button } from "@/components/Button";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { RadioGroup, RadioGroupItem } from "@/components/RadioGroup";

export default function Integrations() {
	const bottomSheetRef = useRef<BottomSheet>(null);
	const [integration, setIntegration] = useState<string>("strava");
	const handleClosePress = () => {
		if (!bottomSheetRef.current) {
			return;
		}

		bottomSheetRef.current.expand();
	};

	const handleAdd = () => {
		if (!integration) {
			return;
		}

		switch (integration) {
			case "strava":
				break;
			case "a-health":
				break;
			default:
				console.log("Unsupported integration");
		}
	};

	return (
		<GestureHandlerRootView
			style={{
				flex: 1,
				justifyContent: "center",
				alignItems: "center",
				padding: 50,
			}}
		>
			<View style={{ flex: 1, justifyContent: "center" }}>
				<Text>
					Edit app/integrations.tsx to edit this screen. {integration}
				</Text>
			</View>
			<Button
				label="Add Integration"
				size="lg"
				className="self-end justify-self-end"
				onPress={handleClosePress}
			/>
			<BottomSheet ref={bottomSheetRef} snapPoints={["90%"]}>
				<BottomSheetView>
					<RadioGroup defaultValue="strava" onValueChange={setIntegration}>
						<RadioGroupItem value="strava" label="Strava" />
						<RadioGroupItem value="a-health" label="Apple Health" />
					</RadioGroup>
					<Button label="Add" />
				</BottomSheetView>
			</BottomSheet>
		</GestureHandlerRootView>
	);
}
