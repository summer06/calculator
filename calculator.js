var expression = "";

function writeToScreen() {
	document.getElementById('polynomial').innerHTML = expression;
}

// 除数为0的情况还没有实现

function calculator() {
	var input = document.getElementsByTagName("button");
	for (var i = 0; i < input.length; i++) {
		if(input[i].value != "del" && input[i].value != "del-all" 
			&& input[i].value != "=") {
			input[i].onclick = function() {
				expression += this.value;
				writeToScreen();
			}
		} else if (input[i].value == "del") {
			input[i].onclick = function() {
				var size = expression.length;
				expression = expression.substring(0, size - 1);
				writeToScreen();
			}
		} else if (input[i].value == "del-all") {
			input[i].onclick = function() {
				expression = "";
				writeToScreen();
			}
		} else if (input[i].value == "=") {
			input[i].onclick = function() {
				try {
					expression = eval(expression).toString();
					if (expression.indexOf(".") != -1) {
						var a = expression.split(".");
						if (a[1].length > 2) {
							expression = parseFloat(expression);
							expression = expression.toFixed(2);
						}
					}
					if(expression == "Infinity") {
						alert("The expression is illegal!");
						expression = "";
					}
					writeToScreen();
				}
				catch(exception) {
					alert("The expression is illegal!");
					expression = "";
					writeToScreen();
				}
			}
		}
	}
}

calculator();

// window.onload = calculator;

