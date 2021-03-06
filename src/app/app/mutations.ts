import { IAppState } from './state';

export interface IAppMutations {
  CHANGE_LOCALE(state: IAppState, locale: string): void;

  SET_COOKIE_CONSENT_VERSION(state: IAppState, version: string): void;

  // TOGGLE_MENU_TARGET(state: IAppState, menuitems: boolean[]): void;
}

export const AppMutations: IAppMutations = {
  CHANGE_LOCALE:              (state: IAppState, locale: string) => {
    state.locale = locale;
  },
  SET_COOKIE_CONSENT_VERSION: (state: IAppState, version: string) => {
    state.cookieConsentVersion = version;
  },
//  TOGGLE_MENU_TARGET(state: IAppState, menuitems: boolean[]) =>{
// }
};
