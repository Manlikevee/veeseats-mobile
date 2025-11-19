import { useThemeColor } from '@/hooks/use-theme-color';
import { StyleProp, View, ViewStyle, type ViewProps } from 'react-native';

export type ThemedViewProps = ViewProps & {
  lightColor?: string;
  darkColor?: string;
  borderWidth?: number;
  lightBorderColor?: string;
  darkBorderColor?: string;
  style?: StyleProp<ViewStyle>;
};

export function ThemedView({
  style,
  lightColor,
  darkColor,
  borderWidth = 0,
  lightBorderColor,
  darkBorderColor,
  ...otherProps
}: ThemedViewProps) {
  const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background');
  const borderColor = useThemeColor({ light: lightBorderColor, dark: darkBorderColor }, 'border');

  return (
    <View
      style={[
        { backgroundColor, borderWidth, borderColor },
        style,
      ]}
      {...otherProps}
    />
  );
}
