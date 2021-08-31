var grid;
var isSet = false;

function cellClick(id) {
}

function main() {
    var main = document.getElementById("main");
    var setup = document.getElementById("setup");
    var reset = document.getElementById("reset");

    var width = document.getElementById("width");
    var height = document.getElementById("height");

    setup.addEventListener("click", function(){
        if (!isSet) {
            grid = width.value * height.value;
            main.style.gridTemplateColumns = "repeat("+width.value+", 1fr)";
            main.style.gridTemplateRows = "repeat("+height.value+", 1fr)";
            console.log(grid);

            for(var i = 0; i < grid; i++) {
                const e = document.createElement('div');
                e.id = i;
                e.className = "cell";
                e.innerHTML = " ";
                e.addEventListener("click", function () {
                    cECount = this.childElementCount; 
                    if (cECount < 3) {
                        var cell = document.getElementById(this.id);
                        const x = document.createElement('div');
                        x.className = "subcell c"+cECount;
                        x.id = this.id + "-"+ cECount;
                        cell.appendChild(x);
                    }
                });
                main.appendChild(e);
            }
            isSet = true;
        }
    });

    reset.addEventListener("click", function(){
        if (isSet) {
            console.log(grid);

            for(var i = 0; i < grid; i++) {
                const e = document.getElementById(i);
                e.remove()
            }
            isSet = false;   
        }
    });
}

main();