import { Colors } from '@/constants/theme';
import { useRouter } from 'expo-router';
import { ChevronLeft } from 'lucide-react-native';
import { StyleSheet, TouchableOpacity, useColorScheme, View } from 'react-native';
import { ThemedText } from '../themed-text';

const GoBack = ({ title = 'Back' }) => {
  const router = useRouter();
  const colorScheme = useColorScheme();
  const canGoBack = router.canGoBack();

  if (!canGoBack) return null;

  const handleBack = () => router.back();

  return (
    <TouchableOpacity style={styles.container} onPress={handleBack} activeOpacity={0.7}>
      <View style={styles.inner}>
        <ChevronLeft
          size={20}
          color={Colors[colorScheme ?? 'light'].text}
          strokeWidth={2.5}
        />
        <ThemedText
          style={[styles.text, { color: Colors[colorScheme ?? 'light'].text }]}
          fontFamily="DMSans_300Light"
        >
          {title}
        </ThemedText>
      </View>
    </TouchableOpacity>
  );
};

export default GoBack;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 8,
    alignSelf: 'flex-start',
  },
  inner: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  text: {
    fontSize: 15,
  },
});
