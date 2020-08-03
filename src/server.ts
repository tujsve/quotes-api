import serverInstance from './app';

console.log(__dirname);

serverInstance.listen(3000, (err) => {
    if (err) {
        console.log('Error while starting server!');
    }
    else {
        // console.log('Starting server...');
        console.log('Server started at port 3000!');
    }
})