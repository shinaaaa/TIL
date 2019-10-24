(async function result() {
    const customer = await getCustomer(1);
    console.log('Customer: ', customer);
    const topMovies = await getTopMovies(customer.isGold);
    console.log('Top movies: ', topMovies);
    const email = await sendEmail(customer.email, topMovies);
    console.log('Email sent...');

})();

/* getCustomer(1, (customer) => {
    console.log('Customer: ', customer);
    if (customer.isGold) {
        getTopMovies((movies) => {
            console.log('Top movies: ', movies);
            sendEmail(customer.email, movies, () => {
                console.log('Email sent...')
            });
        });
    }
}); */

function getCustomer(id) {
    const users = [
        {
            id: 1,
            name: 'Mosh Hamedani',
            isGold: true,
            email: 'email'
        }
    ];
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const user = users.find(user => user.id === id);
            if (user) resolve(user);
            else reject(new Error("유저를 찾을수 없습니다."));
        }, 4000);
    });
};

function getTopMovies(callback) {
    const movies = ['movie1', 'movie2'];
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (callback) resolve(movies);
            else reject(new Error("영화를 찾을수 없습니다."));
        }, 4000);

    });
}

function sendEmail(email, movies) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (email) resolve(movies);
            else reject(new Error("메일을 보낼 수 없습니다."));
        }, 4000);
    });
}