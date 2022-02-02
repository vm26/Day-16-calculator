document.body.innerHTML = ` <h1 id='title'>Calculator</h1>
<p id="description">To perform Mathematic operations</p>
<div class='box'>        
    <div class='container'>
        <div class='row'>
            <input type="text" name="res" id="result" class="col-12" value='0'>
        </div>
        <div class='row'>
            <button class="col-3 red" id="clear" onclick='document.getElementById("result").value="0"'>C</button>
            <button class="col-3" onclick="dellast(document.getElementById('result').value)"><-</button>
            <button class="col-3" onclick='display(".")'>.</button>
            <button class="col-3  blue" onclick='display("x")'>x</button>
           
        </div>
        <div class='row'>
            <button class="col-3" onclick='display("7")'>7</button>
            <button class="col-3" onclick='display("8")'>8</button>
            <button class="col-3" onclick='display("9")'>9</button>
            <button class="col-3 blue" onclick='display("/")'>/</button>
            
        </div>
        <div class='row'>
            <button class="col-3" onclick='display("4")'>4</button>
            <button class="col-3" onclick='display("5")'>5</button>
            <button class="col-3" onclick='display("6")'>6</button>
            <button class="col-3 blue"  id="subtract" onclick='display("-")'>-</button>
        </div> 
        <div class='row'>
            <button class="col-3" onclick='display("1")'>1</button>
            <button class="col-3" onclick='display("2")'>2</button>
            <button class="col-3" onclick='display("3")'>3</button>
            <button class="col-3 blue" id="add" onclick='display("+")'>+</button>
           
        </div>
        <div class='row'>
            <button class="col-3" onclick='display("0")'>0</button>
            <button class="col-3" onclick='display("00")'>00</button>
            <button class="col-6 blue" id="equal" onclick="e(document.getElementById('result').value)">=</button>
           
        </div>
    </div>
</div>`;

var arr = [];
function display(num) {

    if (document.getElementById('result').value == 0) {
        arr = [];
        document.getElementById('result').value = num;
        arr.push(num);
    }
    else {
        document.getElementById('result').value += num;
        arr.push(num);

    }
}


function add(num1, num2) {
    return +num1 + +num2;
}
function sub(num1, num2) {
    return num1 - num2;
}
function mul(num1, num2) {
    return num1 * num2;
}
function div(num1, num2) {
    return num1 / num2;
}
function mod(num1, num2) {
    return num1 % num2;
}
function dellast(value) {
    if (value.length > 1) {
        let updatedValue = value.substr(0, value.length - 1);
        document.getElementById('result').value = updatedValue;
    }
    else {
        document.getElementById('result').value = 0;
    }

}
function e(value) {
    var arr = String(value).match(/[^\d()]+|[\d.]+/g);
    console.log(arr);
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == '.') {
            if (i === 0) {
                ans = String(arr[i]) + String(arr[i + 1]);
                arr[i + 1] = ans;
                arr.splice(0, 1);
                console.log(arr);

            }
        }
    }
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == '+.' || arr[i] == '-.' || arr[i] == 'x.' || arr[i] == '/.') {
            {
                arr[i] = arr[i].substring(0, 1);
                arr[i + 1] = '0.' + arr[i + 1];

            }
        }
    }
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == '/') {
            let ans = div(arr[i - 1], arr[i + 1]);
            let index = arr.indexOf(arr[i - 1]);
            arr[i + 1] = ans;
            arr.splice(index, 2);
            console.log(arr);

        }
    }
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == 'x') {
            let ans = mul(arr[i - 1], arr[i + 1]);
            let index = arr.indexOf(arr[i - 1]);
            arr[i + 1] = ans;
            arr.splice(index, 2);
            console.log(arr);


        }
    }

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == '+') {
            let ans = add(arr[i - 1], arr[i + 1]);
            let index = arr.indexOf(arr[i - 1]);
            arr[i + 1] = ans;
            arr.splice(index, 2);
            console.log(arr);

        }
    }
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == '-') {
            let ans = sub(arr[i - 1], arr[i + 1]);
            let index = arr.indexOf(arr[i - 1]);
            arr[i + 1] = ans;
            arr.splice(index, 2);
            console.log(arr);

        }
    }

    document.getElementById('result').value = arr[0];
    arr = [];
}
window.addEventListener('keypress', function (e) {
    var keycode = e.keyCode;
    var valueEntered = String.fromCharCode(keycode);
    if (isNaN(valueEntered))
        alert("Only numbers are allowed");
    else {
        if (document.getElementById('result').value == 0)
            document.getElementById('result').value = String(valueEntered).substring(0, valueEntered.length);
        else
            document.getElementById('result').value += String(valueEntered).substring(0, valueEntered.length);
    }

});