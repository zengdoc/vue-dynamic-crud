const ENV = {
    mock: {
        mock: 'true'
    },
    dev: {
        mock: 'false',
        baseUrl: 'localhost',
    },
    sit: {
        mock: 'false',
        baseUrl: 'sit',
    },
};
// 获取启动进程时传入的命令行参数
const argv = process.argv.map(i => i.replace(/-/g, ''));
const envConfig = ENV[Object.keys(ENV).find(key => argv.indexOf(key.replace(/-/g, '')) > -1)];
module.exports = Object.assign({}, envConfig);
