function convertToRoman(num) {
    let dict = {
        1: "I", 2: "II", 3: "III", 4: "IV", 5: "V", 
        6: "VI", 7: "VII", 8: "VIII", 9: "IX", 10: "X", 
        20: "XX", 30: "XXX", 40: "XL", 50: "L", 60: "LX", 
        70: "LXX", 80: "LXXX", 90: "XC", 100: "C", 200: "CC", 
        300: "CCC", 400: "CD", 500: "D", 600: "DC", 700: "DCC", 
        800: "DCCC", 900: "CM", 1000: "M"
    }
    let res = ""
    let factor = 1
    while (num) {
        let nth = (num % 10) * factor
        if (nth > 0) {
            if(nth >= 2000) {
                let times = nth / 1000
                res = dict[1000].repeat(times) + res
            } else {
                res = dict[nth] + res
            }
        }
        num = Math.floor(num/10)
        factor *= 10
    }
    return res
}