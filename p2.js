document.getElementById('p1').hidden = true;
document.getElementById('p2').hidden = true;
document.getElementById('p3').hidden = true;
document.getElementById('p4').hidden = true;
document.getElementById('p5').hidden = true;
document.getElementById('respostacerta').hidden = true;
document.getElementById('respostaerrada').hidden = true;
document.getElementById('pontuacaoboa').hidden = true;
document.getElementById('pontuacaoma').hidden = true;
document.getElementById('recomecar').hidden = true;
document.getElementById('mostraralunos').hidden = true;
document.getElementById('tabelaalunos').hidden = true;
// _________________________________________________________________________________________________________________________

var temporizador;

    function comecartempo(tt) {
        temporizador = setInterval(function() {
            if (tt == 0) {
                tt = 20;
            }
            document.getElementById('tempo').innerHTML = "TEMPO " + tt;
            if (tt > 12) {
                document.getElementById('tempo').style.border = '4px inset greenyellow';
                document.getElementById('tempo').style.color = 'greenyellow';
            } else if (tt < 12 && tt >= 5) {
                document.getElementById('tempo').style.border = '4px inset orange';
                document.getElementById('tempo').style.color = 'orange';
            } else if (tt < 5) {
                document.getElementById('tempo').style.border = '4px inset red';
                document.getElementById('tempo').style.color = 'red';
            }
            tt--;
        }, 1000);
    }

    function parartempo() {
        clearInterval(temporizador);
    }
// _________________________________________________________________________________________________________________________




//PONTOAÇÃO
var pontos = 0;
//pergunta1

document.getElementById('comecar').onclick = function() {

    var nome = document.getElementById('nome').value;
    var verificar = /^[a-zA-Zãç ]+$/.test(nome);


    if (verificar == true) {
        document.getElementById('comecar').disabled = true;

        setTimeout(function() {
    // ________________________________________________________
            comecartempo(0);
            document.getElementById('nomeinserido').innerHTML = nome;
            document.getElementById('informacao').hidden = true;
            document.getElementById('comecar').hidden = true;
            document.getElementById('p1').hidden = false;
            document.getElementById('p2').hidden = true;
            document.getElementById('p3').hidden = true;
            document.getElementById('p4').hidden = true;
            document.getElementById('p5').hidden = true;
    // ________________________________________________________
            }, 1000);

        //botoes
        document.getElementById('a1').onclick = function() {
            parartempo();
        // __________________________________________________________
            document.getElementById('respostaerrada').hidden = false;
            document.getElementById('a1').disabled = true;
            document.getElementById('a2').disabled = true;
            document.getElementById('a3').disabled = true;
            document.getElementById('a4').disabled = true;
            clearTimeout(perguntaa2);
            pergunta2()   
        }
        document.getElementById('a2').onclick = function() {
            document.getElementById('respostacerta').hidden = false;
            document.getElementById('a1').disabled = true;
            document.getElementById('a2').disabled = true;
            document.getElementById('a3').disabled = true;
            document.getElementById('a4').disabled = true;
            pontos = pontos + 5;
            parartempo();
            clearTimeout(perguntaa2); 
            pergunta2() 
        }
        document.getElementById('a3').onclick = function() {
            document.getElementById('respostaerrada').hidden = false;
            document.getElementById('a1').disabled = true;
            document.getElementById('a2').disabled = true;
            document.getElementById('a3').disabled = true;
            document.getElementById('a4').disabled = true;
            parartempo();
            clearTimeout(perguntaa2);
            pergunta2()
        
        }
        document.getElementById('a4').onclick = function() {
            document.getElementById('respostaerrada').hidden = false;
            document.getElementById('a1').disabled = true;
            document.getElementById('a2').disabled = true;
            document.getElementById('a3').disabled = true;
            document.getElementById('a4').disabled = true;
            parartempo();   
            clearTimeout(perguntaa2);
            pergunta2()
        }
        var perguntaa2 = setTimeout(function() {
            document.getElementById('a1').disabled = true;
            document.getElementById('a2').disabled = true;
            document.getElementById('a3').disabled = true;
            document.getElementById('a4').disabled = true;
            document.getElementById('respostaerrada').hidden = false;
            parartempo();
            pergunta2()
        }, 23000);
    }else{
        alert("Digite um nome válido (com letras apenas)");
        document.getElementById('nome').value="";
    }
}

function pergunta2() {
    setTimeout(function() {
        comecartempo(0);
        document.getElementById('respostacerta').hidden = true;
        document.getElementById('respostaerrada').hidden = true;
    document.getElementById('p1').hidden = true;
    document.getElementById('p2').hidden = false;
    document.getElementById('p3').hidden = true;
    document.getElementById('p4').hidden = true;
    document.getElementById('p5').hidden = true;
    }, 2000);

    //botoes
    document.getElementById('b1').onclick = function() {
        document.getElementById('respostaerrada').hidden = false;
        document.getElementById('b1').disabled = true;
        document.getElementById('b2').disabled = true;
        document.getElementById('b3').disabled = true;
        document.getElementById('b4').disabled = true;
        parartempo();
        clearTimeout(perguntaa3);
        pergunta3()
    }
    document.getElementById('b2').onclick = function() {
        document.getElementById('respostaerrada').hidden = false;
        document.getElementById('b1').disabled = true;
        document.getElementById('b2').disabled = true;
        document.getElementById('b3').disabled = true;
        document.getElementById('b4').disabled = true;
        parartempo();
        clearTimeout(perguntaa3);
        pergunta3()
    }
    document.getElementById('b3').onclick = function() {
        document.getElementById('respostacerta').hidden = false;
        document.getElementById('b1').disabled = true;
        document.getElementById('b2').disabled = true;
        document.getElementById('b3').disabled = true;
        document.getElementById('b4').disabled = true;
        parartempo();
        pontos = pontos + 5;
        clearTimeout(perguntaa3);
        pergunta3()
    }
    document.getElementById('b4').onclick = function() {
        document.getElementById('respostaerrada').hidden = false;
        document.getElementById('b1').disabled = true;
        document.getElementById('b2').disabled = true;
        document.getElementById('b3').disabled = true;
        document.getElementById('b4').disabled = true;
        parartempo();
        clearTimeout(perguntaa3);
        pergunta3()
    }
    var perguntaa3 = setTimeout(function() {
        document.getElementById('respostaerrada').hidden = false;
        document.getElementById('b1').disabled = true;
        document.getElementById('b2').disabled = true;
        document.getElementById('b3').disabled = true;
        document.getElementById('b4').disabled = true;
        parartempo();
        pergunta3()
    }, 24000);
}

function pergunta3() {
    setTimeout(function() {
    comecartempo(0);
    document.getElementById('respostacerta').hidden = true;
    document.getElementById('respostaerrada').hidden = true;
    document.getElementById('p1').hidden = true;
    document.getElementById('p2').hidden = true;
    document.getElementById('p3').hidden = false;
    document.getElementById('p4').hidden = true;
    document.getElementById('p5').hidden = true;
    }, 2000);

    //botoes
    document.getElementById('c1').onclick = function() {
        document.getElementById('respostaerrada').hidden = false;
        document.getElementById('c1').disabled = true;
        document.getElementById('c2').disabled = true;
        document.getElementById('c3').disabled = true;
        document.getElementById('c4').disabled = true;
        parartempo();
        clearTimeout(perguntaa4);
        pergunta4()
    }
    document.getElementById('c2').onclick = function() {
        document.getElementById('respostacerta').hidden = false;
        document.getElementById('c1').disabled = true;
        document.getElementById('c2').disabled = true;
        document.getElementById('c3').disabled = true;
        document.getElementById('c4').disabled = true;
        parartempo();
        clearTimeout(perguntaa4);
        pontos = pontos + 5;
        pergunta4()
    }
    document.getElementById('c3').onclick = function() {
        document.getElementById('respostaerrada').hidden = false;
        document.getElementById('c1').disabled = true;
        document.getElementById('c2').disabled = true;
        document.getElementById('c3').disabled = true;
        document.getElementById('c4').disabled = true;
        parartempo();
        clearTimeout(perguntaa4);
        pergunta4()
    }
    document.getElementById('c4').onclick = function() {
        document.getElementById('respostaerrada').hidden = false;
        document.getElementById('c1').disabled = true;
        document.getElementById('c2').disabled = true;
        document.getElementById('c3').disabled = true;
        document.getElementById('c4').disabled = true;
        parartempo();
        clearTimeout(perguntaa4);
        pergunta4()
    }
    var perguntaa4 = setTimeout(function() {
        
        document.getElementById('respostaerrada').hidden = false;
        document.getElementById('c1').disabled = true;
        document.getElementById('c2').disabled = true;
        document.getElementById('c3').disabled = true;
        document.getElementById('c4').disabled = true;
        parartempo();
        pergunta4()
    }, 24000);
}

function pergunta4() {
    setTimeout(function() {
        comecartempo(0);
    document.getElementById('respostacerta').hidden = true;
    document.getElementById('respostaerrada').hidden = true;
    document.getElementById('p1').hidden = true;
    document.getElementById('p2').hidden = true;
    document.getElementById('p3').hidden = true;
    document.getElementById('p4').hidden = false;
    document.getElementById('p5').hidden = true;
    }, 2000);

    //botoes
    document.getElementById('d1').onclick = function() {
        parartempo();
        document.getElementById('respostaerrada').hidden = false;
        document.getElementById('d1').disabled = true;
        document.getElementById('d2').disabled = true;
        document.getElementById('d3').disabled = true;
        document.getElementById('d4').disabled = true;
        
        clearTimeout(perguntaa5);
        pergunta5()
    }
    document.getElementById('d2').onclick = function() {
        parartempo();
        document.getElementById('respostaerrada').hidden = false;
        document.getElementById('d1').disabled = true;
        document.getElementById('d2').disabled = true;
        document.getElementById('d3').disabled = true;
        document.getElementById('d4').disabled = true;
        
        clearTimeout(perguntaa5);
        pergunta5()
    }
    document.getElementById('d3').onclick = function() {
        parartempo();
        document.getElementById('respostaerrada').hidden = false;
        document.getElementById('d1').disabled = true;
        document.getElementById('d2').disabled = true;
        document.getElementById('d3').disabled = true;
        document.getElementById('d4').disabled = true;
        
        clearTimeout(perguntaa5);
        pergunta5()
    }
    document.getElementById('d4').onclick = function() {
        parartempo();
        document.getElementById('respostacerta').hidden = false;
        document.getElementById('d1').disabled = true;
        document.getElementById('d2').disabled = true;
        document.getElementById('d3').disabled = true;
        document.getElementById('d4').disabled = true;
        clearTimeout(perguntaa5);
        pontos = pontos + 5;
        pergunta5()
    }
    var perguntaa5 = setTimeout(function() {
        parartempo();
        document.getElementById('d1').disabled = true;
        document.getElementById('d2').disabled = true;
        document.getElementById('d3').disabled = true;
        document.getElementById('d4').disabled = true;
        document.getElementById('respostaerrada').hidden = false;
        pergunta5()
    }, 24000);
}

function pergunta5() {
    setTimeout(function() {
        comecartempo(0);
    document.getElementById('respostacerta').hidden = true;
    document.getElementById('respostaerrada').hidden = true;
    document.getElementById('p1').hidden = true;
    document.getElementById('p2').hidden = true;
    document.getElementById('p3').hidden = true;
    document.getElementById('p4').hidden = true;
    document.getElementById('p5').hidden = false;
    }, 2000);

    //botoes
    document.getElementById('e1').onclick = function() {
        parartempo();
        document.getElementById('respostacerta').hidden = false;
        document.getElementById('e1').disabled = true;
        document.getElementById('e2').disabled = true;
        document.getElementById('e3').disabled = true;
        document.getElementById('e4').disabled = true;
        
        clearTimeout(pontuacaoo);
        pontos = pontos + 5;
        pontuacao()
    }
    document.getElementById('e2').onclick = function() {
        parartempo();
        document.getElementById('respostaerrada').hidden = false;
        document.getElementById('e1').disabled = true;
        document.getElementById('e2').disabled = true;
        document.getElementById('e3').disabled = true;
        document.getElementById('e4').disabled = true;
        
        clearTimeout(pontuacaoo);
        pontuacao()
    }
    document.getElementById('e3').onclick = function() {
        parartempo();
        document.getElementById('respostaerrada').hidden = false;
        document.getElementById('e1').disabled = true;
        document.getElementById('e2').disabled = true;
        document.getElementById('e3').disabled = true;
        document.getElementById('e4').disabled = true;
        
        clearTimeout(pontuacaoo);
        pontuacao()
    }
    document.getElementById('e4').onclick = function() {
        parartempo();
        document.getElementById('respostaerrada').hidden = false;
        document.getElementById('e1').disabled = true;
        document.getElementById('e2').disabled = true;
        document.getElementById('e3').disabled = true;
        document.getElementById('e4').disabled = true;
        
        clearTimeout(pontuacaoo);
        pontuacao()
    }

    var pontuacaoo = setTimeout(function() {
        parartempo();
        comecartempo("End");
        parartempo();
        document.getElementById('respostaerrada').hidden = false;
        document.getElementById('e1').disabled = true;
        document.getElementById('e2').disabled = true;
        document.getElementById('e3').disabled = true;
        document.getElementById('e4').disabled = true;
        pontuacao()
    }, 24000);
}

function pontuacao() {
    setTimeout(function() {

        var nome = document.getElementById('nome').value;
        var tabela = document.getElementById('tabela');
        var criarlinha = document.createElement('tr');

        criarlinha.style.borderTop = "#ea7474 5px solid";
        criarlinha.style.borderLeft = "#ff0000 5px solid";
        criarlinha.style.borderRight = "#f1b2b2 5px solid";
        criarlinha.style.padding = "0px 5px";
        criarlinha.style.fontSize = "30px";

        tabela.appendChild(criarlinha);
        var adicionarcelula = document.createElement('td');
        criarlinha.appendChild(adicionarcelula);
        var adicionarcelula2 = document.createElement('td');
        criarlinha.appendChild(adicionarcelula2);

        adicionarcelula.textContent = nome;
        adicionarcelula2.textContent = pontos;
    
 

    document.getElementById('mostraralunos').hidden = false;
    document.getElementById('respostacerta').hidden = true;
    document.getElementById('respostaerrada').hidden = true;
    document.getElementById('p1').hidden = true;
    document.getElementById('p2').hidden = true;
    document.getElementById('p3').hidden = true;
    document.getElementById('p4').hidden = true;
    document.getElementById('p5').hidden = true;
    document.getElementById('pontos').innerHTML = pontos;
    document.getElementById('pontosmaus').innerHTML = pontos;
    document.getElementById('recomecar').hidden = false;


   

    if(pontos >= 15) {
    document.getElementById('pontuacaoboa').hidden = false;
    }else{
        document.getElementById('pontuacaoma').hidden = false;
    }}, 2000);
    }   

var buttons = document.getElementsByTagName("button");
for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("mouseover", function() {
        this.style.backgroundColor = "white";
    });
    buttons[i].addEventListener("mouseout", function() {
        this.style.backgroundColor = "rgb(249, 140, 16)";
    });
}

document.getElementById('recomecar').onclick = function() {
    document.getElementById('tabelaalunos').hidden = true;
    document.getElementById('mostraralunos').hidden = true;
    document.getElementById('p1').hidden = true;
    document.getElementById('p2').hidden = true;
    document.getElementById('p3').hidden = true;
    document.getElementById('p4').hidden = true;
    document.getElementById('p5').hidden = true;
    document.getElementById('respostacerta').hidden = true;
    document.getElementById('respostaerrada').hidden = true;
    document.getElementById('pontuacaoboa').hidden = true;
    document.getElementById('pontuacaoma').hidden = true;
    document.getElementById('recomecar').hidden = true;
    document.getElementById('informacao').hidden = false;
    document.getElementById('comecar').hidden = false;
    document.getElementById('comecar').disabled = false;
    document.getElementById('a1').disabled = false;
    document.getElementById('a2').disabled = false;
    document.getElementById('a3').disabled = false;
    document.getElementById('a4').disabled = false;
    document.getElementById('b1').disabled = false;
    document.getElementById('b2').disabled = false;
    document.getElementById('b3').disabled = false;
    document.getElementById('b4').disabled = false;
    document.getElementById('c1').disabled = false;
    document.getElementById('c2').disabled = false;
    document.getElementById('c3').disabled = false;
    document.getElementById('c4').disabled = false;
    document.getElementById('d1').disabled = false;
    document.getElementById('d2').disabled = false;
    document.getElementById('d3').disabled = false;
    document.getElementById('d4').disabled = false;
    document.getElementById('e1').disabled = false;
    document.getElementById('e2').disabled = false;
    document.getElementById('e3').disabled = false;
    document.getElementById('e4').disabled = false;
    pontos = 0;
    document.getElementById('nome').value = "";
    document.getElementById('nomeinserido').innerHTML = "";
}

document.getElementById('mostraralunos').onclick = function() {
    document.getElementById('mostraralunos').hidden=true;
    document.getElementById('tabelaalunos').hidden = false;
    document.getElementById('pontuacaoboa').hidden = true;
    document.getElementById('pontuacaoma').hidden = true;
}
