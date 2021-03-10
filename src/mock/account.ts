import Mock from 'mockjs';
import { getQueryVariable } from '@/utils';

export default {
    'GET /account': res => {
        const { url } = res;
        const {
            pageNo,
            pageSize,
            account,
            name,
        } = getQueryVariable(url);
        const rows = accountList.filter(
            i =>  (!account || i.account.indexOf(account) > -1)
                && (!name || i.name.indexOf(name) > -1),
        );
        return {
            status: 0,
            message: 'success',
            data: {
                rows: rows.slice((pageNo - 1) * pageSize, pageNo * pageSize),
                total: rows.length,
                totalPages: Math.ceil(rows.length / pageSize),
            },
        };
    },
    'POST /account': res => {
        return {
            status: 0,
            message: 'success',
            data: null,
        };
    },
    'PUT /account': res => {
        return {
            status: 0,
            message: 'success',
            data: null,
        };
    },
    'DELETE /account': res => {
        return {
            status: 0,
            message: 'success',
            data: null,
        };
    },
};

const accountList = [
    {
        id: '8461160053886412',
        account: '8461160053886412',
        name: '许超',
        gender: 'MALE',
        creator: 'admin',
        creationTime: 1047369689808,
    },
    {
        id: '6285221670250852',
        account: '6285221670250852',
        name: '林娜',
        gender: 'FEMALE',
        creator: 'admin',
        creationTime: 404015077509,
    },
    {
        id: '1652154150995004',
        account: '1652154150995004',
        name: '侯秀兰',
        gender: 'FEMALE',
        creator: 'admin',
        creationTime: 402135872172,
    },
    {
        id: '696441419213878',
        account: '696441419213878',
        name: '赖勇',
        gender: 'MALE',
        creator: 'admin',
        creationTime: 982396320741,
    },
    {
        id: '2009946831230324',
        account: '2009946831230324',
        name: '金明',
        gender: 'MALE',
        creator: 'admin',
        creationTime: 1048422417095,
    },
    {
        id: '761179887776030',
        account: '761179887776030',
        name: '戴涛',
        gender: 'MALE',
        creator: 'admin',
        creationTime: 429638305308,
    },
    {
        id: '1224628107399610',
        account: '1224628107399610',
        name: '叶刚',
        gender: 'MALE',
        creator: 'admin',
        creationTime: 397239629182,
    },
    {
        id: '4293866376677016',
        account: '4293866376677016',
        name: '李杰',
        gender: 'MALE',
        creator: 'admin',
        creationTime: 941729357003,
    },
    {
        id: '7953580342869194',
        account: '7953580342869194',
        name: '傅丽',
        gender: 'FEMALE',
        creator: 'admin',
        creationTime: 204317524401,
    },
    {
        id: '3119396350725082',
        account: '3119396350725082',
        name: '秦勇',
        gender: 'MALE',
        creator: 'admin',
        creationTime: 1543598528215,
    },
    {
        id: '4895660345740510',
        account: '4895660345740510',
        name: '武娟',
        gender: 'FEMALE',
        creator: 'admin',
        creationTime: 1054104138975,
    },
    {
        id: '8456335313547734',
        account: '8456335313547734',
        name: '叶霞',
        gender: 'FEMALE',
        creator: 'admin',
        creationTime: 613442780492,
    },
    {
        id: '3418253713131438',
        account: '3418253713131438',
        name: '龚桂英',
        gender: 'FEMALE',
        creator: 'admin',
        creationTime: 428214590797,
    },
    {
        id: '3501881021363106',
        account: '3501881021363106',
        name: '董伟',
        gender: 'MALE',
        creator: 'admin',
        creationTime: 838941725004,
    },
    {
        id: '4819956236444740',
        account: '4819956236444740',
        name: '金平',
        gender: 'MALE',
        creator: 'admin',
        creationTime: 1529815661895,
    },
    {
        id: '1006768291808532',
        account: '1006768291808532',
        name: '崔艳',
        gender: 'FEMALE',
        creator: 'admin',
        creationTime: 1494387116373,
    },
    {
        id: '6607798338755388',
        account: '6607798338755388',
        name: '武艳',
        gender: 'FEMALE',
        creator: 'admin',
        creationTime: 878383211239,
    },
    {
        id: '7156244269152734',
        account: '7156244269152734',
        name: '姜芳',
        gender: 'FEMALE',
        creator: 'admin',
        creationTime: 97915967641,
    },
    {
        id: '1586306595365852',
        account: '1586306595365852',
        name: '魏丽',
        gender: 'FEMALE',
        creator: 'admin',
        creationTime: 1168794964401,
    },
    {
        id: '167673372892750',
        account: '167673372892750',
        name: '贺涛',
        gender: 'MALE',
        creator: 'admin',
        creationTime: 724284040494,
    },
];
