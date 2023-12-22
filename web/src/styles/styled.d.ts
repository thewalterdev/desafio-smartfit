import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      dark_grey: string;
      light_grey: string;
      yellow: string;
      red: string;
      green: string;
    };
  }
}
