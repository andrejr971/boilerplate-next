export default {
  colors: {
    primary: '#6B58E9',
    primary_light: '#6C73EE',
    primary_dark: '#784BCE',
    secondary: '#4BE841',
    secondary_ligth: '#7DEE58',
    secondary_dark: '#36CE4D',
    white: '#F1EFFD',
    white_light: '#FAFAFF',
    white_dark: '#EBE8FF',
    black: '#15112C',
    black_light: '#221D3F',
    black_dark: '#0E0B21',
    gray_100: '#DDDBEB',
    gray_200: '#CECAE5',
    gray_300: '#C1BED1',
    gray_400: '#B4B2C1',
    gray_500: '#9694A6',
    gray_600: '#8F8F8F',
    gradient_01: 'linear-gradient(269.24deg, #6C73EE 6.3%, #784BCE 92.64%);',
    gradient_02:
      'linear-gradient(0deg, rgba(120, 75, 206, 0) 1.27%, #6C73EE 100%);',
    gradient_03: 'linear-gradient(269.24deg, #221D3F 6.3%, #15112C 92.64%);',
    gradient_04: 'linear-gradient(269.24deg, #FAFAFF 6.3%, #EBE8FF 92.64%);',
    gradient_05:
      'linear-gradient(106.42deg, rgba(21, 17, 44, 0.4) 0%, rgba(21, 17, 44, 0.2) 100%);',
    red: '#F03D3D',
    yellow: '#FFCE52',
    blue: '#1B69D2',
    green: '#4BE841',
  },
  font: {
    title:
      "Saira, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    text: "Mukta, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    light: 300,
    normal: 400,
    semibold: 500,
    bold: 600,
    sizes: {
      xxsmall: '1.6rem',
      xsmall: '1.8rem',
      small: '2rem',
      medium: '2.4rem',
      large: '3.2rem',
      xlarge: '4.8rem',
      xxlarge: '7.2rem',
      huge: '9.6rem',
    },
  },
  effects: {
    shadows: {
      purple: '0px 4px 40px rgba(107, 88, 233, 0.25)',
      dark: '0px 4px 40px rgba(21, 17, 44, 0.2);',
    },
  },
  spacing: {
    xxlarge: '3.2rem',
    xlarge: '2.4rem',
    large: '1.6rem',
    medium: '1.2rem',
    small: '0.8rem',
    xsmall: '0.4rem',
  },
  gutter: {
    xxlarge: '4.8rem',
    xlarge: '3.2rem',
    large: '2.4rem',
    medium: '1.6rem',
    small: '0.8rem',
  },
} as const;
