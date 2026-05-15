// Array completo contendo todas as categorias de operadores
const operators = [
    // --- 1. OPERADORES ARITMÉTICOS ---
    { name: "Adição", symbol: "+", desc: "[Aritmético] Soma os valores ou junta textos.", action: (a, b) => Number(a) + Number(b) },
    { name: "Subtração", symbol: "-", desc: "[Aritmético] Subtrai o segundo do primeiro.", action: (a, b) => a - b },
    { name: "Multiplicação", symbol: "*", desc: "[Aritmético] Multiplica dois valores.", action: (a, b) => a * b },
    { name: "Divisão", symbol: "/", desc: "[Aritmético] Divide o primeiro pelo segundo.", action: (a, b) => a / b },
    { name: "Resto (Módulo)", symbol: "%", desc: "[Aritmético] Retorna o resto da divisão.", action: (a, b) => a % b },
    { name: "Potência", symbol: "**", desc: "[Aritmético] Eleva o primeiro ao segundo.", action: (a, b) => a ** b },
    { name: "Incremento", symbol: "++", desc: "[Aritmético] Adiciona 1 ao valor.", unary: true, action: (a) => { let x = Number(a); return ++x; } },
    { name: "Decremento", symbol: "--", desc: "[Aritmético] Subtrai 1 do valor.", unary: true, action: (a) => { let x = Number(a); return --x; } },

    // --- 2. OPERADORES DE ATRIBUIÇÃO ---
    { name: "Atrib. Simples", symbol: "=", desc: "[Atribuição] Define um valor (x = y).", action: (a, b) => { let x = a; x = b; return `A variável agora vale: ${x}`; } },
    { name: "Atrib. Adição", symbol: "+=", desc: "[Atribuição] Soma e atribui (x += y).", action: (a, b) => { let x = Number(a); x += Number(b); return x; } },
    { name: "Atrib. Subtração", symbol: "-=", desc: "[Atribuição] Subtrai e atribui (x -= y).", action: (a, b) => { let x = Number(a); x -= Number(b); return x; } },
    { name: "Atrib. Multiplic.", symbol: "*=", desc: "[Atribuição] Multiplica e atribui (x *= y).", action: (a, b) => { let x = Number(a); x *= Number(b); return x; } },
    { name: "Atrib. Divisão", symbol: "/=", desc: "[Atribuição] Divide e atribui (x /= y).", action: (a, b) => { let x = Number(a); x /= Number(b); return x; } },
    { name: "Atrib. Resto", symbol: "%=", desc: "[Atribuição] Resto e atribui (x %= y).", action: (a, b) => { let x = Number(a); x %= Number(b); return x; } },
    { name: "Atrib. Potência", symbol: "**=", desc: "[Atribuição] Potência e atribui (x **= y).", action: (a, b) => { let x = Number(a); x **= Number(b); return x; } },

    // --- 3. OPERADORES DE COMPARAÇÃO ---
    { name: "Igualdade", symbol: "==", desc: "[Comparação] Valores são iguais? (Ignora o tipo)", action: (a, b) => a == b },
    { name: "Igual. Estrita", symbol: "===", desc: "[Comparação] Valores E tipos são iguais?", action: (a, b) => a === b },
    { name: "Desigualdade", symbol: "!=", desc: "[Comparação] São diferentes?", action: (a, b) => a != b },
    { name: "Desig. Estrita", symbol: "!==", desc: "[Comparação] Diferentes em valor OU tipo?", action: (a, b) => a !== b },
    { name: "Maior que", symbol: ">", desc: "[Comparação] O 1º é maior que o 2º?", action: (a, b) => a > b },
    { name: "Menor que", symbol: "<", desc: "[Comparação] O 1º é menor que o 2º?", action: (a, b) => a < b },
    { name: "Maior ou igual", symbol: ">=", desc: "[Comparação] O 1º é maior ou igual ao 2º?", action: (a, b) => a >= b },
    { name: "Menor ou igual", symbol: "<=", desc: "[Comparação] O 1º é menor ou igual ao 2º?", action: (a, b) => a <= b },

    // --- 4. OPERADORES LÓGICOS ---
    { name: "E (AND)", symbol: "&&", desc: "[Lógico] Verdadeiro se AMBOS forem verdadeiros.", action: (a, b) => a && b },
    { name: "OU (OR)", symbol: "||", desc: "[Lógico] Verdadeiro se UM deles for verdadeiro.", action: (a, b) => a || b },
    { name: "NÃO (NOT)", symbol: "!", desc: "[Lógico] Inverte a lógica (true vira false).", unary: true, action: (a) => !a },

    // --- 5. OPERADORES BIT A BIT ---
    { name: "Bitwise AND", symbol: "&", desc: "[Bit a Bit] AND no nível de bits.", action: (a, b) => a & b },
    { name: "Bitwise OR", symbol: "|", desc: "[Bit a Bit] OR no nível de bits.", action: (a, b) => a | b },
    { name: "Bitwise XOR", symbol: "^", desc: "[Bit a Bit] XOR exclusivo em bits.", action: (a, b) => a ^ b },
    { name: "Bitwise NOT", symbol: "~", desc: "[Bit a Bit] Inverte os bits do número.", unary: true, action: (a) => ~a },
    { name: "Desloc. Esquerda", symbol: "<<", desc: "[Bit a Bit] Empurra bits para a esquerda.", action: (a, b) => a << b },
    { name: "Desloc. Direita", symbol: ">>", desc: "[Bit a Bit] Empurra bits para a direita.", action: (a, b) => a >> b },
    { name: "Desloc. Direita (>)", symbol: ">>>", desc: "[Bit a Bit] Empurra direita preenchendo com zero.", action: (a, b) => a >>> b },

    // --- 6. OPERADORES CONDICIONAIS ---
    { name: "Ternário", symbol: "? :", desc: "[Condicional] Atalho para o if/else.", action: (a, b) => a ? b : "Condição Falhou" },
    { name: "Nullish Coalescing", symbol: "??", desc: "[Condicional] Mostra o 2º se o 1º for null/undefined.", action: (a, b) => a ?? b },

    // --- 7. OPERADORES DE TIPO/RELACIONAIS ---
    { name: "Typeof", symbol: "typeof", desc: "[Tipo] Diz qual é o tipo do dado (texto, número, etc).", unary: true, action: (a) => typeof a },
    { name: "Instanceof", symbol: "instanceof", desc: "[Relacional] Verifica herança de objetos.", action: (a, b) => `Exige objetos complexos. No console: [] instanceof Array é true` },
    { name: "In", symbol: "in", desc: "[Relacional] Verifica se uma propriedade existe no objeto.", action: (a, b) => `Exige objetos complexos. Ex: "nome" in pessoa é true` },
    { name: "Delete", symbol: "delete", desc: "[Tipo] Remove propriedades de objetos.", unary: true, action: (a) => `Propriedade do objeto deletada com sucesso!` },

    // --- 8. ESPALHAMENTO E MODERNOS ---
    { name: "Spread / Rest", symbol: "...", desc: "[Moderno] Expande arrays ou objetos em pedaços.", action: (a, b) => `Usado para clonar/juntar: [...arr1, ...arr2]` },
    { name: "Optional Chaining", symbol: "?.", desc: "[Moderno] Acessa propriedades de forma segura.", unary: true, action: (a) => `Previne quebras: objeto?.propriedadeInexistente retorna undefined` }
];

const container = document.getElementById('cards-container');

function renderCards() {
    operators.forEach((op, index) => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <div class="operator-symbol">${op.symbol === "? :" ? "?" : op.symbol}</div>
            <h2>${op.name}</h2>
            <p>${op.desc}</p>
            <button class="btn-test" onclick="testarOperador(${index})">Testar Lógica!</button>
        `;
        container.appendChild(card);
    });
}

function testarOperador(index) {
    const op = operators[index];
    alert(`Preparando a magia para o operador: ${op.name} ( ${op.symbol} )`);
    
    // Se for operador unário (ex: ! ou typeof), pede só um valor
    let val1 = prompt(op.unary ? `Digite um valor (tente números ou palavras como 'true'):` : `Digite o PRIMEIRO valor:`);
    
    if (val1 === null || val1.trim() === "") {
        alert("Operação cancelada.");
        return;
    }

    let val2 = null;
    if (!op.unary) {
        val2 = prompt(`Digite o SEGUNDO valor:`);
        if (val2 === null || val2.trim() === "") {
            alert("Operação cancelada.");
            return;
        }
    }

    // Tradutor inteligente: converte o texto do prompt para os tipos corretos do JS
    const traduzirTipo = (str) => {
        if (!isNaN(str) && str.trim() !== "") return parseFloat(str); // Converte para Número
        if (str.toLowerCase() === "true") return true;                // Converte para Booleano (Verdadeiro)
        if (str.toLowerCase() === "false") return false;              // Converte para Booleano (Falso)
        if (str.toLowerCase() === "null") return null;                // Converte para Nulo
        return str;                                                   // Mantém como Texto
    };

    let valorFormatado1 = traduzirTipo(val1);
    let valorFormatado2 = op.unary ? null : traduzirTipo(val2);

    // Executa o cálculo mágico
    let resultado = op.action(valorFormatado1, valorFormatado2);
    
    // Monta o visual da continha para mostrar no Alert
    let expressaoTexto = op.unary 
        ? `${op.symbol} ${valorFormatado1}` 
        : `${valorFormatado1} ${op.symbol} ${valorFormatado2}`;

    if (op.symbol === "? :") expressaoTexto = `${valorFormatado1} ? ${valorFormatado2} : "Condição Falhou"`;

    alert(`✨ O resultado processado pelo JavaScript é:\n\n[ ${expressaoTexto} ]\n\n👉 ${resultado}`);
}

renderCards();