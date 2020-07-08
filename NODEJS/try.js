function a() {
    return new Promise((rs, rj) => {
        rs('finish');
    });
}
a().then(console.log);