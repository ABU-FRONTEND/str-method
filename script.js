    // function repeat(str, count) {
    //     let num = ''
    //     for(let i = 0; i < count; i++){
    //         num += str
    //     }
    //     return num
    // }
    // console.log(repeat("abdusamad", 2));


    // function startsWith(str, str2) {
    //   return  str[0] === str2 ? true : false
    // }
    // console.log(startsWith("Abdusamad", "a"));



    // function endsWith(str, str2) {
    //     return  str[str.length - 1] === str2 ? true : false
    //   }
    //   console.log(startsWith("Abdusamad", "d"));



    // function includes(str, from) {
    //     let arr = str.split(" ")
    //     let boolen = false
    //     for(let i = 0; i < arr.length; i++){
    //         if(arr[i] === from){
    //             boolen = true
    //         }
    //     }
    //     return boolen
    // }
    // console.log(includes("abdusamad qandesan zurmisan", 'sda'));




    // function indexOf(str, from) {
    //     for (let i = 0; i < str.length; i++) {
    //       if (str[i] === from) {
    //         return i;
    //       }
    //     }
    //     return -1;
    //   }
    // console.log(indexOf("abdusamad qalesan zurmisan", "e"));



    // function slice(str, from, to) {
    //     let res = ''
    //     for(let i = from; i < to; i++){
    //         res += str[i]
    //     }
    //     return res
    // }
    // console.log(slice("abdusamad", 1, 3));



    // function substr(str, from, to) {
    //     let res = ''
    //     for(let i = from; i <= to; i++){
    //         res += str[i]
    //     }
    //     return res
    // }
    // console.log(slice("abdusamad", 1, 3));


    function substring(str, from, to) {
        let res = ''
        for(let i = from; i < to; i++){
            if(from < 0 || to < 0){
                return undefined
            }
            res += str[i]
        }
        return res
    }
    console.log(slice("abdusamad", 5, 3));