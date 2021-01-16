import { DefaultTheme } from 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    primaryTitleColor: string; //主标题颜色
    secondaryTitleColor: string; //副标题颜色
    // secondaryColor: string;
    // titleMainColor: string;
  }
}

export const lightTheme: DefaultTheme = {
  primaryTitleColor: '#FF2201',
  secondaryTitleColor: '#540504',
  // titleMainColor: '#333',
  // secondaryColor: '#666',
};

// export const darkTheme: DefaultTheme = {
//   primaryColor: '#fff',
//   secondaryColor: '#cacaca',
// };
