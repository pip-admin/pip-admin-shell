export interface IShellService {
    hideNav: string[];
    hideBar: string[];
    hideMain(): string[];
}

export interface IShellProvider {
    hideNav: string[];
    hideBar: string[];
    addHideBar(value: string);
    addHideNav(value: string);
}