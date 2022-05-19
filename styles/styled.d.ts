import { Theme } from '../types/thme.types';

declare module 'styled-components' {
  export interface DefaultTheme extends Theme{}
}
