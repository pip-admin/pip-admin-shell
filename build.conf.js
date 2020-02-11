module.exports = {
    module: {
        name: 'pipAdminShell',
        styles: 'index',
        export: 'pip.admin.shell',
        standalone: 'pip.admin.shell'
    },
    build: {
        js: false,
        ts: false,
        tsd: true,
        bundle: true,
        html: true,
        sass: true,
        lib: true,
        images: true,
        dist: false
    },
    file: {
        lib: [
            '../node_modules/pip-webui-all/dist/**/*',
            '../node_modules/pip-suite-all/dist/**/*'
        ]
    },
    samples: {
        port: 8180,
        https: false
    },
    api: {
        port: 8181
    }
};
