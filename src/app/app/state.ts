import { IAppConfig } from '../config/IAppConfig';

export interface IAppState {
  locale: string;
  config: IAppConfig;
  defaultMessages: any;
  redirectTo: string;
  cookieConsentVersion: string;
  menuitems: boolean[];
}

export const AppDefaultState = (): IAppState => {
  return {
    locale:               null,
    config:               null,
    defaultMessages:      {},
    redirectTo:           null,
    cookieConsentVersion: '',
    menuitems: [false, false, false, false, false, false],
  };
};
