function Calculator(){
    this.input = document.querySelector('#input');
    
    this.start = () => this.catchClicks();

    this.catchClicks = () =>{
        document.addEventListener('click',event =>{
            const element = event.target;

            if(element.classList.contains('btn-num')){
                this.addNumberInput(element);
            }
            if(element.classList.contains('clear')){
                this.clear();
            }
            if(element.classList.contains('delete')){
                this.del(element);
            }
            if(element.classList.contains('equal')){
                this.makeCount(element);
            }

        });
    }

    this.clear = () => this.input.value = "";
    

    this.addNumberInput = element => this.input.value += element.innerText;

}

const calculadora = new Calculator();
calculadora.start();