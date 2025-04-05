import {
  FirstLetterTop,
  FirstLetterSingle,
  GradientText,
  LogoTitleOnly,
  SecondIconLogo,
  SvgLogo,
  TopEachOther,
  TypographyLogo,
  OnlySvgLogo,
  SvgLeftLogo,
  SquareSvgLogo,
} from 'src/components/logo-concepts';

const logoConcepts = {
  SVG_LEFT_LOGO: 'SVG_LEFT_LOGO',
  FIRST_LETTER_TOP: 'FIRST_LETTER_TOP',
  FIRST_LETTER_SINGLE: 'FIRST_LETTER_SINGLE',
  GRADIENT_TEXT: 'GRADIENT_TEXT',
  LOGO_TITLE_ONLY: 'LOGO_TITLE_ONLY',
  SECOND_ICON_LOGO: 'SECOND_ICON_LOGO',
  SVG_LOGO: 'SVG_LOGO',
  TOP_EACH_OTHER: 'TOP_EACH_OTHER',
  TYPOGRAPHY: 'TYPOGRAPHY',
  ONLY_SVG_LOGO: 'ONLY_SVG_LOGO',
  SQUARE_SVG_LOGO:"SQUARE_SVG_LOGO"
};

export const renderLogos = {
  [logoConcepts.FIRST_LETTER_SINGLE]: FirstLetterSingle,
  [logoConcepts.GRADIENT_TEXT]: GradientText,
  [logoConcepts.LOGO_TITLE_ONLY]: LogoTitleOnly,
  [logoConcepts.SECOND_ICON_LOGO]: SecondIconLogo,
  [logoConcepts.SVG_LOGO]: SvgLogo,
  [logoConcepts.TOP_EACH_OTHER]: TopEachOther,
  [logoConcepts.TYPOGRAPHY]: TypographyLogo,
  [logoConcepts.ONLY_SVG_LOGO]: OnlySvgLogo,
  [logoConcepts.SVG_LEFT_LOGO]: SvgLeftLogo,
  [logoConcepts.SQUARE_SVG_LOGO]:SquareSvgLogo
};

export const COLORCHECK = ["ONLY_SVG_LOGO", "SQUARE_SVG_LOGO"];

export default logoConcepts;
