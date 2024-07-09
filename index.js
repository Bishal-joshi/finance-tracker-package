import { FinanceBuilder } from "./src/Financetracker.js";

// console.log(new FinanceTracker({ type: "save" }).toString());
// type should be save or spend only, if save then save else spend

console.log(new FinanceBuilder().setAmount(100).toString());
console.log(new FinanceBuilder().setAmount(200).getType());
