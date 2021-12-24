function checkCashRegister(price, cash, cid) {
    let change = cash - price;
    let deno = [
        ["ONE HUNDRED", 100.0],
        ["TWENTY", 20.0],
        ["TEN", 10.0],
        ["FIVE", 5.0],
        ["ONE", 1],
        ["QUARTER", 0.25],
        ["DIME", 0.1],
        ["NICKEL", 0.05],
        ["PENNY", 0.01]
    ]
    let res = {
        status: "OPEN",
        change: []
    }
    for (let i = 0; i < deno.length; i++) {
        let [unit, val] = deno[i]
        let cidIndex = cid.findIndex(x => x[0] === unit)
        let available = Math.floor(cid[cidIndex][1]/val)
        let needed = Math.floor(change/val)
        if (needed >= available) {
            const used = available * val
            change = (change - used).toFixed(2)
            res.change.push([unit, used])
        } else if (needed > 0) {
            const used = needed * val
            change = (change - used).toFixed(2)
            res.change.push([unit, used])
        }
    }
    let totalCID = cid.reduce((sum, x) => sum + x[1], 0)
    if (parseFloat(change) > 0) {
        res.status = "INSUFFICIENT_FUNDS"
        res.change = []
        return res
    }
    if (parseFloat(change) === 0) {
        if(totalCID - price > 0) {
            res.status = "OPEN"
        } else {
            res.status = "CLOSED"
            res.change = cid
            return res
        }
    }
    return res
}