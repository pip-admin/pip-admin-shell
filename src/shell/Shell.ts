import { IShellService, IShellProvider } from './IShellService';

interface IAdminShellBindings {
    [key: string]: any;
}

const AdminShellBindings: IAdminShellBindings = {}

class AdminShellChanges implements ng.IOnChangesObject, IAdminShellBindings {
    [key: string]: ng.IChangesObject<any>;
}

class AdminShellController {
    constructor(
        private $state: ng.ui.IStateService,
        private pipShell: IShellService) {
    }

    public showMain(): boolean {

        let find: boolean = true;
        if (this.$state.current.name == "") return false;
        this.pipShell.hideMain().forEach(element => {
            if (element == this.$state.current.name) { find = false; return; }
        });
        return find
    }

     public showBar(): boolean {
        let find: boolean = true;
        if (this.$state.current.name == "") return false;
        this.pipShell.hideBar.forEach(element => {
            if (element == this.$state.current.name) { find = false; return; }
        });
        return find
    }

    public showNav(): boolean {
        let find: boolean = true;
        if (this.$state.current.name == "") return false;
        this.pipShell.hideNav.forEach(element => {
            if (element == this.$state.current.name) { find = false; return; }
        });
        return find
    }


}

(() => {
    angular
        .module('pipAdminShell', [
            'pipNav',
            'pipEntry',
            'pipAdminShell.Templates'
        ])
        .component('pipAdminShell', {
            bindings: AdminShellBindings,
            templateUrl: 'shell/Shell.html',
            controller: AdminShellController,
            controllerAs: '$ctrl'
        })

})();
