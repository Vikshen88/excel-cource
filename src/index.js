import './scss/index.scss';

console.log('Working...')

async function start () {
    return await Promise.resolve('Async works');
}

start().then(console.log);