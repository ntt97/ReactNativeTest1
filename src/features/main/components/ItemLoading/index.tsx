import ContentLoader, { Rect } from 'react-content-loader/native';
import React from 'react';
import { colors, WIDTH_RATIO } from '@constants/vars';
const MyLoader = (props: any) => (
  <ContentLoader backgroundColor="#f2f2f2" foregroundColor={colors.MESSAGE_FORM} {...props}>
    <Rect x="0%" y="5%" height="1%" width="100%" />
    <Rect x="4%" y="10%" height="15%" width="40%" />
    <Rect x="50%" y="18%" height="1%" width="35%" />
    <Rect x="50%" y="24%" height="1%" width="40%" />
    <Rect x="4%" y="30%" height="15%" width="40%" />
    <Rect x="50%" y="38%" height="1%" width="35%" />
    <Rect x="50%" y="44%" height="1%" width="40%" />
    <Rect x="4%" y="50%" height="15%" width="40%" />
    <Rect x="50%" y="58%" height="1%" width="35%" />
    <Rect x="50%" y="64%" height="1%" width="40%" />
    <Rect x="4%" y="70%" height="15%" width="40%" />
    <Rect x="50%" y="78%" height="1%" width="35%" />
    <Rect x="50%" y="84%" height="1%" width="40%" />
  </ContentLoader>
);

export const FooterLoading = (props: any) => (
  <ContentLoader
    height={140 * WIDTH_RATIO}
    speed={1}
    backgroundColor={'#f2f2f2'}
    foregroundColor={colors.MESSAGE_FORM}
    // viewBox="0 0 380 70"
  >
    {/* Only SVG shapes */}
    <Rect x="4" y="4%" height="100%" width="45%" />
    <Rect x="50%" y="65%" height="5%" width="45%" />
    <Rect x="50%" y="95%" height="5%" width="35%" />
  </ContentLoader>
);
export default MyLoader;
