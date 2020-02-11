import { IShellService, IShellProvider } from './IShellService';

class ShellService implements IShellService {
    private _hideNav: string[] = [];
    private _hideBar: string[] = [];

    public constructor(
        hideNav: string[],
        hideBar: string[]
    ) {
        this._hideNav = hideNav;
        this._hideBar = hideBar;
    }

    public get hideBar(): string[] {
        return this._hideBar;
    }

    public get hideNav(): string[] {
        return this._hideNav;
    }

    public set hideBar(value: string[]) {
        this._hideBar = value;
    }

    public set hideNav(value: string[]) {
        this._hideNav = value;
    }

    public hideMain(): string[] {
        return _.intersection(this._hideBar, this._hideNav);
    }
}


class ShellProvider implements ng.IServiceProvider, IShellProvider {
    private _service: ShellService;
    private _hideNav: string[] = ['landing', 'signin', 'signup', 'post_signup', 'recover_password', 'reset_password'];
    private _hideBar: string[] = ['landing'];

    public set hideBar(value: string[]) {
        this._hideBar = value;
    }

    public set hideNav(value: string[]) {
        this._hideNav = value;
    }

    public addHideNav(value: string) {
        this._hideNav.push(value);
    }

    public addHideBar(value: string) {
        this._hideBar.push(value);
    }

    public $get(): ShellService {
        "ngInject";

        if (this._service == null)
            this._service = new ShellService(this._hideNav, this._hideBar);

        return this._service;
    }
}


angular
    .module('pipShellService', [])
    .provider('pipShell', ShellProvider);