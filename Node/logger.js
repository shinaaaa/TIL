const url = 'https;//naver.com'

console.log('이 코드는 한번만 실행됨니다.');


const log = msg => {
    console.log(`Loggig Message : ${msg}`)
}


module.exports = log
/*
module.exports.log = log
exports.log = log

exports = log //   module.exports 에는 아무것도 할당 되지않음
*/
