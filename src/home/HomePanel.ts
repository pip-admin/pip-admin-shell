import {HomePage,  HomePageItem} from './HomePage';

interface IAdminHomeBindings {
    [key: string]: any;

    pages: any,
    defaultIcon: any,
    defaultColor: any
}

const AdminHomeBindings: IAdminHomeBindings = {
    pages: "<pipPages",
    defaultIcon: "<?pipDefaultIcon",
    defaultColor: "<?pipDefaultColor"
}

class AdminHomeChanges implements ng.IOnChangesObject, IAdminHomeBindings {
    [key: string]: ng.IChangesObject<any>;

    pages: ng.IChangesObject<HomePage[]>;
    defaultIcon: ng.IChangesObject<string>;
    defaultColor: ng.IChangesObject<string>;
}

class AdminHomeController {
    public pages: HomePage[];
    public defaultIcon: string = null;
    public defaultColor: string = null;

    constructor(private $state: ng.ui.IStateService) {}
    public $onInit() {}
    public gotoDetails(item: HomePageItem) {
        this.$state.go(item.State, item.Params);
    }

}

(() => {
    angular
        .module('pipAdminHomePanel', [
            'pipAdminShell.Templates'
        ])
        .component('pipAdminHomePanel', {
            bindings: AdminHomeBindings,
            templateUrl: 'home/HomePanel.html',
            controller: AdminHomeController,
            controllerAs: '$ctrl'
        })

})();
