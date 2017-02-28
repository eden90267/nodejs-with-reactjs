/**
 * Created by eden90267 on 2017/2/28.
 */
setTimeout(() => {
    console.log('sending SIGTERM to process %d', process.pid);
    process.kill(14848, 'SIGTERM');
}, 500);

setTimeout(function () {
    console.log('never called');
}, 1000);