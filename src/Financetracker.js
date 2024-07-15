import { budgetType } from "./constant/constant.js";

class Finance {
  constructor({ type, amount }) {
    this.type = budgetType[type] ?? budgetType.spend;
    this.amount = amount ?? 0;
    this.date = new Date().toLocaleDateString();
    this.remarks = "";
  }
  toString() {
    return `${this.type}: ${this.amount} (${this.date}) (${this.remarks})`;
  }
  toJson() {
    return {
      type: this.type,
      amount: this.amount,
      date: this.date,
      remarks: this.remarks,
    };
  }
}

export class FinanceBuilder {
  #finance; //defining private variable
  constructor() {
    this.#finance = new Finance({});
  }
  setType(type) {
    this.#finance.type = budgetType[type] ?? budgetType.spend;
    return this;
  }
  setAmount(amount) {
    this.#finance.amount = amount ?? 0;
    return this;
  }
  setRemarks(remarks) {
    this.#finance.remarks = remarks;
    return this;
  }

  getType() {
    return this.#finance.type;
  }
  getAmount() {
    return this.#finance.amount;
  }
  getDate() {
    return this.#finance.date;
  }
  getRemarks() {
    return this.#finance.remarks;
  }
  toString() {
    return this.#finance.toString();
  }
  toJson() {
    return this.#finance.toJson();
  }
}
