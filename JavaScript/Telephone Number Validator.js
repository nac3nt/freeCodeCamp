const telephoneCheck = (str) => {
    return /^(((1)?(\s)?(\()\d\d\d(\)))|^((1)?(\s)?\d\d\d))(-)?(\s)?\d\d\d(-)?(\s)?\d\d\d\d$/.test(str)
}