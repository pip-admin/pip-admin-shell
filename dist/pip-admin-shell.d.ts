declare module pip.admin.shell {

export class HomePage {
    Name?: string;
    Items: HomePageItem[];
}
export class HomePageItem {
    Name: string;
    State: string;
    ColorBadge?: string;
    Count?: number;
    Params?: any;
    Color?: string;
    Icon?: string;
}


export interface IShellService {
    hideNav: string[];
    hideBar: string[];
    hideMain(): string[];
}
export interface IShellProvider {
    hideNav: string[];
    hideBar: string[];
    addHideBar(value: string): any;
    addHideNav(value: string): any;
}



}
