import Mock from 'mockjs';
import example from './account';

interface Request {
    url: string;
    type: string;
    body: object | null;
}

interface MockType {
    [key: string]: (req: Request) => object;
}

Mock.setup({
    timeout: 500,
});

const mocks = {
    example,
};

const mock = () => {
    _.forEach(mocks, (mocksValue: MockType) => {
        _.forEach(mocksValue, (mockValue, mockKey) => {
            const config = mockKey.split(' ');
            if (config.length === 2) {
                const [ method, api ] = config;
                Mock.mock( new RegExp(`.*${api}`), method.toLowerCase(), options => {
                    return mockValue(options);
                });
            } else {
                console.error(`${config} wrong format--'method api'`);
            }
        });
    });
};

export default mock;
