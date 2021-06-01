function Calculator() {
  this.input = document.querySelector("#input");

  this.start = () => {
    this.catchClicks();
    this.catchEnter();
  };

  this.catchClicks = () => {
    document.addEventListener("click", (event) => {
      const element = event.target;

      if (element.classList.contains("btn-num")) {
        this.addNumberInput(element);
      }
      if (element.classList.contains("clear")) {
        this.clear();
      }
      if (element.classList.contains("delete")) {
        this.del(element);
      }
      if (element.classList.contains("equal")) {
        this.makeCount(element);
      }
    });
  };

  this.addNumberInput = (element) => {
    this.input.value += element.innerText;
    this.input.focus();
  };

  this.clear = () => (this.input.value = "");

  this.del = () => (this.input.value = this.input.value.slice(0, -1));

  this.makeCount = () => {
    try {
      const conta = eval(this.input.value);

      if (!conta) {
        alert("conta invalida");
        return;
      }
      this.input.value = conta;
    } catch (error) {
      alert("conta invalida");
      return;
    }
  };

  this.catchEnter = () => {
    document.addEventListener("keyup", (event) => {
      if (event.keyCode === 13) return;
      this.makeCount();
    });
  };
}

const calculadora = new Calculator();
calculadora.start();
