



// 1 uyfda vazifa

let words = prompt('Enter words');

function main(str) {

    let obj = {};
    let arr = str.split('');
    

    for (let i = 0; i < arr.length; i++) {

        obj[arr[i]] = ''

    }
    console.log(Object.keys(obj).join(' '))

}

main(words)


// 2 uyda fazifa






