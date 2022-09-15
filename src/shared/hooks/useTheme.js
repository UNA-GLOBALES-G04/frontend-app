const useTheme = () => {
  const { colors } = useCKTheme();
  const { colorMode, toggleColorMode } = useColorMode();

  const colorPalette = colors;
  const theme = colorMode || 'light';
  const textColor = theme === 'light' ? colors.gray[800] : 'white';

  const switchTheme = toggleColorMode;

  return { colorPalette, theme, textColor, switchTheme }
}

export default useTheme;