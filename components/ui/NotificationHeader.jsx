import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Info, X } from 'lucide-react-native';
import { useEffect, useState } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import Animated, {
  Easing,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

export default function NotificationHeader( { text} ) {
  const [visible, setVisible] = useState(true);
  const height = useSharedValue(0);
  const opacity = useSharedValue(0);
  const [shouldRender, setShouldRender] = useState(true); // controls render cleanup safely

  useEffect(() => {
    if (visible) {
      setShouldRender(true);
      height.value = withTiming(50, { duration: 400, easing: Easing.out(Easing.quad) });
      opacity.value = withTiming(1, { duration: 400 });
    } else {
      // Animate out, then remove from render tree after animation ends
      height.value = withTiming(0, { duration: 400, easing: Easing.in(Easing.quad) }, () => {
        runOnJS(setShouldRender)(false);
      });
      opacity.value = withTiming(0, { duration: 400 });
    }
  }, [visible]);

  const animatedStyle = useAnimatedStyle(() => ({
    height: height.value,
    opacity: opacity.value,
  }));

  if (!shouldRender) return null;

  return (
    <Animated.View style={[animatedStyle, { overflow: 'hidden', marginBottom: 2 }]}>
      <ThemedView
        lightColor="#FFF8E1"
        darkColor="#3a3a3aff"
        style={styles.container}
      >
        <View style={styles.iconWrapper}>
          <Info size={20} color="#ff9800" strokeWidth={2} />
        </View>
 
        <ThemedText
          fontSize={12}
          fontFamily="InstrumentSans_400Regular"
          lightColor="#795548"
          darkColor="#ffd180"
          style={styles.text}
        >
       { text ? text :  'Account is under review. We will get back to you shortly.'}
        </ThemedText>

        <TouchableOpacity
          style={styles.closeButton}
          onPress={() => setVisible(false)}
        >
          <X size={13} color="#795548" strokeWidth={2} />
        </TouchableOpacity>
      </ThemedView>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    borderRadius: 8,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#ffcc80',
  },
  iconWrapper: {
    marginRight: 10,
  },
  text: {
    flex: 1,
    flexWrap: 'wrap',
    lineHeight: 14,
  },
  closeButton: {
    marginLeft: 10,
    padding: 4,
  },
});
