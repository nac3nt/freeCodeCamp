function rot13(str) {
    let res = ""
    for (let i = 0; i < str.length; i++) {
        if(str.charCodeAt(i) >= 65 && str.charCodeAt(i) <=90) {
            let place = str.charAt(i).charCodeAt(0)
            if (place + 13 > 90) {
                place = 64 + ((place + 13) - 90)
            }
            else {
                place = place + 13
            }
            res += String.fromCharCode(place)
        }
        else {
            res += str.charAt(i)
        }
    }
    return res
}