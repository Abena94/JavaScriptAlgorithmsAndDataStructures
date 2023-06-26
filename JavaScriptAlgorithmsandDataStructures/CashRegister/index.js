const CURRENCY_UNIT = {
    "PENNY": .01,
    "NICKEL": .05,
    "DIME": .10,
    "QUARTER": .25,
    "ONE": 1.00,
    "FIVE": 5.00,
    "TEN": 10.00,
    "TWENTY": 20.00,
    "ONE HUNDRED": 100.00
  }
  
  function calculateChange(change, cashInDrawer) {
    let changeDue = [];
    for(let i = cashInDrawer.length - 1; i >= 0; i--){
      const coinName = cashInDrawer[i][0];
      const coinTotal = cashInDrawer[i][1];
      const coinValue = CURRENCY_UNIT[coinName];
      let coinAmount = (change / coinValue) | 0;
      let coinChange = coinAmount * coinValue;
      if (coinChange > coinTotal) {
        coinAmount = (coinTotal / coinValue) | 0;
        coinChange = coinAmount * coinValue;
      }
  
      if (coinAmount > 0) {
        change -= coinChange;
        change = change.toFixed(2);
        changeDue.push([coinName, coinChange]);
      }
    }
    return changeDue;
  }
  
  function checkCashRegister(price, cash, cid) {
    let change = cash - price;
    
    let totalCid = cid.reduce((total, amount) => total + amount[1], 0.0);
  
    if (totalCid < change) {
      return { status: "INSUFFICIENT_FUNDS", change: [] };
    } else if (totalCid === change) {
      return { status: "CLOSED", change: cid };
    } else {
      let changeArr = calculateChange(change, cid);
      if (changeArr.length < 1 || change > changeArr.reduce((acc, curr) => acc + curr[1], 0.0)) {
        return { status: "INSUFFICIENT_FUNDS", change: [] };
      } else {
        return { status: "OPEN", change: changeArr };
      }
    }
  }
  
  checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);