const env = process.env.mode || 'development'
const mode = {
    development: {
        apiUrl: 'http://apidev.pluginesia.com'
    },
    staging: {
        apiUrl: 'http://apidev.pluginesia.com'
    },
    production: {
        apiUrl: 'http://apidev.pluginesia.com'
    },
};

export default mode[env];
