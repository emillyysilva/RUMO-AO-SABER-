const questions = {
    linguagens: [
        {
            question: "Na oração 'O estudante lê muito', qual é a função sintática do termo 'O estudante'?",
            options: { a: 'Sujeito', b: 'Objeto direto', c: 'Objeto indireto', d: 'Adjunto adverbial' },
            correct: 'a'
        },
        {
            question: "Qual figura de linguagem está presente no verso: 'A noite é um mar de estrelas'?",
            options: { a: 'Metáfora', b: 'Hipérbole', c: 'Personificação', d: 'Metonímia' },
            correct: 'a'
        },
        {
            question: "Na frase 'O menino foi embora', qual é a classe gramatical da palavra 'foi'?",
            options: { a: 'Verbo', b: 'Substantivo', c: 'Adjetivo', d: 'Advérbio' },
            correct: 'a'
        },
        {
            question: 'Complete de acordo com a norma-padrão: "Ontem, assisti ___ filme."',
            options: { a: 'ao', b: 'o', c: 'do', d: 'no' },
            correct: 'a'
        },
        {
            question: "O plural de 'pessoa-chave' é:",
            options: { a: 'pessoas-chave', b: 'pessoa-chaves', c: 'pessoas-chaves', d: 'pessoa-chave' },
            correct: 'a'
        },
        {
            question: 'Qual é o tipo de texto cobrado no ENEM?',
            options: { a: 'Dissertativo-argumentativo', b: 'Narrativo', c: 'Descritivo', d: 'Epistolar' },
            correct: 'a'
        },
        {
            question: 'Qual das palavras abaixo é proparoxítona?',
            options: { a: 'café', b: 'parabéns', c: 'histórico', d: 'fazer' },
            correct: 'c'
        },
        {
            question: 'O gênero textual da redação do ENEM é:',
            options: { a: 'Artigo de opinião', b: 'Carta argumentativa', c: 'Dissertação argumentativa', d: 'Editorial' },
            correct: 'c'
        },
        {
            question: "Em 'Ele chegou depressa', 'depressa' é:",
            options: { a: 'Substantivo', b: 'Adjetivo', c: 'Advérbio', d: 'Verbo' },
            correct: 'c'
        },
        {
            question: 'Agora, Maria e eu ___ ao cinema.',
            options: { a: 'vamos', b: 'vão', c: 'vai', d: 'vou' },
            correct: 'a'
        }
    ],
    humanas: [
        {
            question: 'Qual evento, em 1789, tornou-se um símbolo do início da Revolução Francesa?',
            options: { a: 'A tomada da Bastilha', b: 'A queda do Muro de Berlim', c: 'A assinatura do Tratado de Versalhes', d: 'A Revolução Russa' },
            correct: 'a'
        },
        {
            question: 'O Iluminismo foi um movimento intelectual que surgiu no:',
            options: { a: 'Século XVII', b: 'Século XVIII', c: 'Século XVI', d: 'Século XIX' },
            correct: 'b'
        },
        {
            question: 'A Primeira Guerra Mundial ocorreu entre os anos de:',
            options: { a: '1914-1918', b: '1939-1945', c: '1914-1916', d: '1918-1922' },
            correct: 'a'
        },
        {
            question: 'A Constituição Federal de 1988 é conhecida como:',
            options: { a: 'Constituição de Ouro', b: 'Constituição Cidadã', c: 'Constituição Verde', d: 'Constituição da República' },
            correct: 'b'
        },
        {
            question: 'O Brasil foi colonizado inicialmente pelos:',
            options: { a: 'Franceses', b: 'Holandeses', c: 'Portugueses', d: 'Espanhóis' },
            correct: 'c'
        },
        {
            question: 'A Segunda Guerra Mundial começou em:',
            options: { a: '1914', b: '1939', c: '1945', d: '1938' },
            correct: 'b'
        },
        {
            question: 'Qual movimento brasileiro reivindicou eleições diretas para presidente na década de 1980?',
            options: { a: 'Constituição de 1988', b: 'Lei Áurea', c: 'Lei Afonso Arinos', d: 'Diretas Já' },
            correct: 'd'
        },
        {
            question: 'Qual característica está associada à globalização econômica contemporânea?',
            options: { a: 'Maior integração dos mercados e das economias', b: 'Fim das relações comerciais entre países', c: 'Substituição de toda produção por agricultura local', d: 'Proibição da circulação internacional de capitais' },
            correct: 'a'
        },
        {
            question: 'O processo de independência do Brasil foi em:',
            options: { a: '1815', b: '1822', c: '1889', d: '1500' },
            correct: 'b'
        },
        {
            question: 'A Ditadura Militar no Brasil durou de:',
            options: { a: '1964-1985', b: '1937-1945', c: '1969-1985', d: '1964-1988' },
            correct: 'a'
        }
    ],
    natureza: [
        {
            question: 'A célula vegetal possui uma estrutura que não existe na célula animal. Qual é ela?',
            options: { a: 'Núcleo', b: 'Mitocôndria', c: 'Parede celular', d: 'Ribossomo' },
            correct: 'c'
        },
        {
            question: 'A fotossíntese ocorre em qual organela celular?',
            options: { a: 'Mitocôndria', b: 'Cloroplasto', c: 'Ribossomo', d: 'Núcleo' },
            correct: 'b'
        },
        {
            question: 'O elemento químico de número atômico 8 é:',
            options: { a: 'Nitrogênio', b: 'Oxigênio', c: 'Carbono', d: 'Hidrogênio' },
            correct: 'b'
        },
        {
            question: 'A Lei de Ohm estabelece que:',
            options: { a: 'V = I × R', b: 'V = I / R', c: 'V = I + R', d: 'V = I - R' },
            correct: 'a'
        },
        {
            question: 'Qual é a unidade de medida da corrente elétrica no SI?',
            options: { a: 'Volt (V)', b: 'Ampère (A)', c: 'Ohm (Ω)', d: 'Watt (W)' },
            correct: 'b'
        },
        {
            question: 'A fórmula da velocidade escalar média é:',
            options: { a: 'V = d/t', b: 'V = t/d', c: 'V = d×t', d: 'V = d+t' },
            correct: 'a'
        },
        {
            question: 'A unidade de medida de energia no SI é:',
            options: { a: 'Watt', b: 'Joule', c: 'Caloria', d: 'Elétron-volt' },
            correct: 'b'
        },
        {
            question: 'O processo de divisão celular equitativa se chama:',
            options: { a: 'Mitose', b: 'Meiose', c: 'Bipartição', d: 'Fragmentação' },
            correct: 'a'
        },
        {
            question: 'A tabela periódica atual tem ___ elementos:',
            options: { a: '108', b: '118', c: '115', d: '120' },
            correct: 'b'
        },
        {
            question: 'O pH neutro é:',
            options: { a: '0', b: '7', c: '14', d: '1' },
            correct: 'b'
        }
    ],
    matematica: [
        {
            question: 'Se 2x + 5 = 15, então x é igual a:',
            options: { a: '5', b: '10', c: '7,5', d: '4' },
            correct: 'a'
        },
        {
            question: 'O volume de um cubo de aresta 3 cm é:',
            options: { a: '9 cm³', b: '27 cm³', c: '18 cm³', d: '12 cm³' },
            correct: 'b'
        },
        {
            question: 'A média aritmética de 4, 6 e 8 é:',
            options: { a: '6', b: '5', c: '7', d: '8' },
            correct: 'a'
        },
        {
            question: 'Quanto é 10% de 500?',
            options: { a: '50', b: '10', c: '100', d: '5' },
            correct: 'a'
        },
        {
            question: 'Um triângulo equilátero tem:',
            options: { a: 'Lados diferentes', b: 'Dois lados iguais', c: 'Três lados iguais', d: 'Nenhum lado igual' },
            correct: 'c'
        },
        {
            question: 'π (pi) é aproximadamente:',
            options: { a: '2,14', b: '3,14', c: '4,13', d: '3,41' },
            correct: 'b'
        },
        {
            question: 'A área de um círculo de raio 2 é:',
            options: { a: '4π', b: '2π', c: 'π', d: '8π' },
            correct: 'a'
        },
        {
            question: '(-5) × (-3) =',
            options: { a: '-15', b: '15', c: '-8', d: '8' },
            correct: 'b'
        },
        {
            question: 'Quanto é 20% de desconto em R$ 200,00?',
            options: { a: 'R$ 40,00', b: 'R$ 20,00', c: 'R$ 50,00', d: 'R$ 30,00' },
            correct: 'a'
        },
        {
            question: 'Um triângulo com dois lados iguais é:',
            options: { a: 'Escaleno', b: 'Isósceles', c: 'Equilátero', d: 'Retângulo' },
            correct: 'b'
        }
    ]
};

let currentArea = 'linguagens';
let currentQuestionIndex = 0;
let score = 0;
let selectedAnswer = null;
let answered = false;
let answeredQuestions = [];
let quizTimer = null;
let timeRemaining = 30;
let questionStartedAt = 0;
let quizElapsedSeconds = 0;
let quizStarted = false;

function getAreaName(area) {
    const names = {
        linguagens: 'Linguagens e Códigos',
        humanas: 'Ciências Humanas',
        natureza: 'Ciências da Natureza',
        matematica: 'Matemática e suas Tecnologias'
    };
    return names[area] || area;
}

function stopTimer() {
    if (quizTimer) {
        clearInterval(quizTimer);
        quizTimer = null;
    }
}

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${String(remainingSeconds).padStart(2, '0')}`;
}

function getQuestionElapsedSeconds() {
    if (!questionStartedAt) return 0;
    return Math.min(30, Math.ceil((Date.now() - questionStartedAt) / 1000));
}

function updateProgress() {
    const totalQuestions = questions[currentArea].length;
    const completedQuestions = currentQuestionIndex + (answered ? 1 : 0);
    const progress = (completedQuestions / totalQuestions) * 100;
    const progressFill = document.getElementById('quiz-progress');

    if (progressFill) {
        progressFill.style.width = `${Math.min(progress, 100)}%`;
    }

    const timerDisplay = document.getElementById('timer');
    if (timerDisplay) {
        timerDisplay.textContent = formatTime(timeRemaining);
        timerDisplay.setAttribute('aria-label', `Tempo restante: ${timeRemaining} segundos`);
    }
}

function resetQuizState() {
    selectedAnswer = null;
    answered = false;
    stopTimer();

    const feedback = document.getElementById('feedback');
    if (feedback) {
        feedback.style.display = 'none';
        feedback.textContent = '';
        feedback.className = 'quiz-feedback';
    }

    const nextBtn = document.getElementById('next-btn');
    if (nextBtn) nextBtn.disabled = true;

    document.querySelectorAll('.option').forEach((option) => {
        option.classList.remove('selected', 'correct', 'incorrect');
        option.disabled = false;
    });
}

function updateStats() {
    const areaSelect = document.getElementById('area-select');
    if (areaSelect) {
        currentArea = areaSelect.value;
    }

    const currentQ = document.getElementById('current-q');
    if (currentQ) {
        currentQ.textContent = `${Math.min(currentQuestionIndex + 1, 10)}/10`;
    }

    const areaName = document.getElementById('area-name');
    if (areaName) {
        areaName.textContent = `Área: ${getAreaName(currentArea)}`;
    }

    const questionNumber = document.getElementById('question-number');
    if (questionNumber) {
        questionNumber.textContent = `Questão ${currentQuestionIndex + 1} de ${questions[currentArea].length}`;
    }
}

function startTimer() {
    stopTimer();
    timeRemaining = 30;
    questionStartedAt = Date.now();
    updateProgress();

    quizTimer = setInterval(() => {
        timeRemaining -= 1;
        updateProgress();

        if (timeRemaining <= 0) {
            stopTimer();
            if (!answered) {
                const options = document.querySelectorAll('.option');
                options.forEach((opt) => {
                    opt.disabled = true;
                });

                checkAnswer(null, true);
            }
        }
    }, 1000);
}

function renderQuestion() {
    const areaQuestions = questions[currentArea];
    if (!areaQuestions || currentQuestionIndex >= areaQuestions.length) {
        showResults();
        return;
    }

    const question = areaQuestions[currentQuestionIndex];
    const optionsContainer = document.getElementById('options');
    const questionText = document.getElementById('question-text');

    if (questionText) questionText.textContent = question.question;
    if (optionsContainer) {
        optionsContainer.innerHTML = '';
        Object.keys(question.options).forEach((key) => {
            const button = document.createElement('button');
            button.type = 'button';
            button.className = 'option';
            button.dataset.value = key;
            button.textContent = `${key.toUpperCase()}) ${question.options[key]}`;
            button.addEventListener('click', () => selectAnswer(button));
            optionsContainer.appendChild(button);
        });
    }

    updateStats();
    resetQuizState();
    updateProgress();
    startTimer();
}

function selectAnswer(button) {
    if (answered) return;

    selectedAnswer = button.dataset.value;
    document.querySelectorAll('.option').forEach((option) => {
        option.classList.remove('selected');
    });
    button.classList.add('selected');
    checkAnswer();
}

function checkAnswer(answer = selectedAnswer, timedOut = false) {
    const question = questions[currentArea][currentQuestionIndex];
    const feedback = document.getElementById('feedback');
    const nextBtn = document.getElementById('next-btn');

    if (answered) return;
    answered = true;
    stopTimer();
    quizElapsedSeconds += getQuestionElapsedSeconds();

    answeredQuestions.push({
        question: question.question,
        options: question.options,
        correct: question.correct,
        userAnswer: answer,
        isCorrect: answer === question.correct
    });

    const selectedBtn = answer
        ? document.querySelector(`.option[data-value="${answer}"]`)
        : null;
    const correctBtn = document.querySelector(`.option[data-value="${question.correct}"]`);

    if (answer === question.correct) {
        score += 1;
        if (feedback) {
            feedback.textContent = '✅ Correto! Muito bem!';
            feedback.className = 'quiz-feedback correct';
            feedback.style.display = 'block';
        }
        if (selectedBtn) selectedBtn.classList.add('correct');
    } else {
        if (feedback) {
            const message = timedOut ? '⏰ Tempo esgotado.' : '❌ Incorreto.';
            feedback.textContent = `${message} A resposta correta é: ${question.correct.toUpperCase()}) ${question.options[question.correct]}`;
            feedback.className = 'quiz-feedback incorrect';
            feedback.style.display = 'block';
        }
        if (selectedBtn) selectedBtn.classList.add('incorrect');
        if (correctBtn) correctBtn.classList.add('correct');
    }

    document.querySelectorAll('.option').forEach((option) => {
        option.disabled = true;
    });

    if (nextBtn) nextBtn.disabled = false;
    updateProgress();
}

function nextQuestion() {
    currentQuestionIndex += 1;
    const totalQuestions = questions[currentArea].length;

    if (currentQuestionIndex >= totalQuestions) {
        showResults();
        return;
    }

    renderQuestion();
}

function showResults() {
    const quizBox = document.getElementById('quiz-box');
    const results = document.getElementById('results');
    const totalQuestions = questions[currentArea].length;
    const percentage = (score / totalQuestions) * 100;

    if (quizBox) quizBox.style.display = 'none';
    if (results) results.style.display = 'block';

    const scoreText = document.getElementById('score-text');
    if (scoreText) scoreText.textContent = `${score}/${totalQuestions}`;

    const percentageText = document.getElementById('percentage-text');
    if (percentageText) percentageText.textContent = `${Math.round(percentage)}%`;

    const timeText = document.getElementById('time-text');
    const averageTime = Math.round(quizElapsedSeconds / totalQuestions);
    if (timeText) timeText.textContent = `${formatTime(averageTime)}/questão`;

    const scoreDetail = document.getElementById('score-detail');
    if (scoreDetail) {
        let detail = `Você acertou ${Math.round(percentage)}% das questões`;
        if (percentage >= 80) detail += ' - Excelente! Continue assim! 🔥';
        else if (percentage >= 60) detail += ' - Bom trabalho! Mas pode melhorar! 💪';
        else detail += ' - Continue estudando! Você consegue! 📚';
        scoreDetail.textContent = detail;
    }

    stopTimer();
    quizStarted = false;
}

function showQuestions() {
    const results = document.getElementById('results');
    const questionsReview = document.getElementById('questions-review');
    const reviewList = document.getElementById('review-list');

    if (results) results.style.display = 'none';
    if (questionsReview) questionsReview.style.display = 'block';
    if (reviewList) {
        reviewList.innerHTML = '';
        answeredQuestions.forEach((item, index) => {
            const div = document.createElement('div');
            div.className = `review-item ${item.isCorrect ? 'correct' : 'incorrect'}`;
            const status = document.createElement('div');
            status.className = 'review-status';
            status.textContent = item.isCorrect ? '✅ Correto' : '❌ Incorreto';

            const question = document.createElement('div');
            question.className = 'review-question';
            question.textContent = `${index + 1}. ${item.question}`;

            const options = document.createElement('div');
            options.className = 'review-options';
            const userAnswer = document.createElement('div');
            userAnswer.textContent = `Sua resposta: ${item.userAnswer ? item.userAnswer.toUpperCase() + ') ' + item.options[item.userAnswer] : 'Sem resposta'}`;
            const correctAnswer = document.createElement('div');
            correctAnswer.textContent = `Correta: ${item.correct.toUpperCase()}) ${item.options[item.correct]}`;
            options.append(userAnswer, correctAnswer);
            div.append(status, question, options);
            reviewList.appendChild(div);
        });
    }
}

function backToResults() {
    const results = document.getElementById('results');
    const questionsReview = document.getElementById('questions-review');

    if (questionsReview) questionsReview.style.display = 'none';
    if (results) results.style.display = 'block';
}

function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    answeredQuestions = [];
    quizElapsedSeconds = 0;
    quizStarted = true;
    currentArea = document.getElementById('area-select')?.value || 'linguagens';

    const quizBox = document.getElementById('quiz-box');
    const quizStart = document.getElementById('quiz-start');
    const results = document.getElementById('results');
    const review = document.getElementById('questions-review');
    if (quizBox) quizBox.style.display = 'block';
    if (quizStart) quizStart.style.display = 'none';
    if (results) results.style.display = 'none';
    if (review) review.style.display = 'none';

    renderQuestion();
}

function startQuiz() {
    const quizStart = document.getElementById('quiz-start');
    const quizBox = document.getElementById('quiz-box');
    const results = document.getElementById('results');

    if (quizStart) quizStart.style.display = 'none';
    if (results) results.style.display = 'none';
    if (quizBox) quizBox.style.display = 'block';

    currentQuestionIndex = 0;
    score = 0;
    answeredQuestions = [];
    quizElapsedSeconds = 0;
    quizStarted = true;
    renderQuestion();
}

function initAreaSelector() {
    const areaSelect = document.getElementById('area-select');
    if (areaSelect) {
        areaSelect.addEventListener('change', () => {
            currentArea = areaSelect.value;
            currentQuestionIndex = 0;
            score = 0;
            answeredQuestions = [];
            quizElapsedSeconds = 0;
            timeRemaining = 30;
            const quizBox = document.getElementById('quiz-box');
            const results = document.getElementById('results');
            const quizStart = document.getElementById('quiz-start');
            const review = document.getElementById('questions-review');
            stopTimer();

            if (quizStarted) {
                if (quizBox) quizBox.style.display = 'block';
                if (quizStart) quizStart.style.display = 'none';
                renderQuestion();
            } else {
                if (quizBox) quizBox.style.display = 'none';
                if (quizStart) quizStart.style.display = 'block';
                updateStats();
                updateProgress();
            }
            if (results) results.style.display = 'none';
            if (review) review.style.display = 'none';
        });
    }
}

function initTabs() {
    const tabs = Array.from(document.querySelectorAll('.nav-tab, .tab-btn'));
    tabs.forEach((button, index) => {
        button.addEventListener('click', () => {
            const tabId = button.getAttribute('data-tab');
            switchTab(tabId);
        });
        button.addEventListener('keydown', (event) => {
            let nextIndex;
            if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
                nextIndex = (index + 1) % tabs.length;
            } else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
                nextIndex = (index - 1 + tabs.length) % tabs.length;
            } else if (event.key === 'Home') {
                nextIndex = 0;
            } else if (event.key === 'End') {
                nextIndex = tabs.length - 1;
            } else {
                return;
            }

            event.preventDefault();
            const nextTab = tabs[nextIndex];
            switchTab(nextTab.getAttribute('data-tab'));
            nextTab.focus();
        });
    });

    document.querySelectorAll('.tab-trigger').forEach((button) => {
        button.addEventListener('click', () => {
            const tabId = button.getAttribute('data-tab');
            if (tabId) switchTab(tabId);
        });
    });

    document.querySelectorAll('.quick-access-card').forEach((card) => {
        card.addEventListener('click', () => {
            const tabId = card.getAttribute('data-tab');
            if (tabId) switchTab(tabId);
        });
    });
}

function switchTab(tabId) {
    if (!tabId) return;
    const activePane = document.getElementById(tabId);
    if (!activePane || !activePane.classList.contains('tab-pane')) return;

    document.querySelectorAll('.nav-tab, .tab-btn').forEach((button) => {
        const isActive = button.getAttribute('data-tab') === tabId;
        button.classList.toggle('active', isActive);
        button.setAttribute('aria-selected', String(isActive));
        button.tabIndex = isActive ? 0 : -1;
    });

    document.querySelectorAll('.tab-pane').forEach((pane) => {
        pane.classList.toggle('active', pane === activePane);
    });

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

document.addEventListener('DOMContentLoaded', () => {
    const quizBox = document.getElementById('quiz-box');
    const quizStart = document.getElementById('quiz-start');
    const results = document.getElementById('results');

    if (quizBox) quizBox.style.display = 'none';
    if (quizStart) quizStart.style.display = 'block';
    if (results) results.style.display = 'none';
    const startButton = document.getElementById('start-btn');
    const nextButton = document.getElementById('next-btn');
    if (startButton) startButton.addEventListener('click', startQuiz);
    if (nextButton) nextButton.addEventListener('click', nextQuestion);

    initTabs();
    initAreaSelector();
    updateStats();
    updateProgress();
});

window.restartQuiz = restartQuiz;
window.showQuestions = showQuestions;
window.backToResults = backToResults;
