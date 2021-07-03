class tictactoe { 
    constructor() { 
        this.body = document.querySelector('body');
        this.table = document.querySelector('table');
        this.xscore = document.querySelector('.xscore');
        this.oscore = document.querySelector('.oscore');
        this.newg = document.querySelector('.new');
        this.resetg = document.querySelector('.reset')
        this.rows = []; 
        this.cells = []; 
        this.turn = 'X';
        this.full = false;
    }

    handleClick = event => {
        var row = this.rows.indexOf(event.target.parentNode);
        var col = this.cells[row].indexOf(event.target);
        if (this.cells[row][col].textContent === '') {   
            this.inputValue(row,col)
            this.checkWinner(row,col)
            this.checkTie()
            this.calculate(row,col)
        }
    };
    
    inputValue = (row, col) => { 
        this.cells[row][col].textContent = this.turn;    
        if (this.turn === 'X') { 
            this.cells[row][col].classList.remove('O')
        } else { 
            this.cells[row][col].classList.remove('X')
        }
        this.cells[row][col].classList.add(this.turn)
    }


    checkWinner = (row, col) => { 
        if(this.cells[row][0].textContent === this.turn &&
            this.cells[row][1].textContent === this.turn && 
            this.cells[row][2].textContent===this.turn){ 
                this.full= true;
            }
       
        if(this.cells[0][col].textContent===this.turn &&
        this.cells[1][col].textContent===this.turn &&
        this.cells[2][col].textContent===this.turn ){
            this.full= true;
        }
    
        if (row - col === 0 || Math.abs(row - col) === 2) {
            if((this.cells[0][0].textContent === this.turn &&
            this.cells[1][1].textContent === this.turn &&
            this.cells[2][2].textContent === this.turn ) || (this.cells[0][2].textContent===this.turn && this.cells[2][0].textContent ===this.turn && this.cells[1][1].textContent ===this.turn)){
                this.full =true;
            }
        }
    }

    checkTie = () => { 
        var tie = true;
        this.cells.forEach(r => {
            r.forEach(c => {
                if (c.textContent === '') { 
                    tie = false;
                    return;
                }
            })
        }) 
        
        if (tie) { 
            this.reset()
        }
    }


    calculate = (row, col) => { 
        if(this.full){
            if (this.turn === 'X') {
                this.xscore.innerHTML = Number(this.xscore.innerHTML.trim()) + 1;
            } else { 
                this.oscore.innerHTML = Number(this.oscore.innerHTML.trim()) + 1;
            }
            this.reset()
        }else{ 
            if(this.turn === 'X'){
                this.turn = 'O';

            }else{
                this.turn = 'X';
            }
        }
    }

    reset = () => { 
        this.turn = 'X';
        this.cells.forEach(function(r){
            r.forEach(function(c){
                c.textContent='';
            });
        });
        this.full = false;
    }

    initTable = () => { 
        var r = [];
        Array.from(this.table.children[0].children).forEach((tr) => {
            r = [];
            this.rows.push(tr)
            Array.from(tr.children).forEach((td) => {
                r.push(td)
                td.addEventListener('click', this.handleClick);
            })
            this.cells.push(r)
        })
    }

    controllEvent = () => { 
        this.resetg.addEventListener('click', () => { 
            this.reset();
            this.xscore.innerHTML = 0;
            this.oscore.innerHTML = 0;
        })
    
        this.newg.addEventListener('click', () => { 
            this.reset();
        })
    }

    init = () => {
        this.initTable();
        this.controllEvent();
    }
}


start = () => { 
    var t = new tictactoe()
    t.init();
}

start();


