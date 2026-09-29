// 1. Leitura dos dados armazenados no navegador
const clienteSalvoId = localStorage.getItem('clienteId');
const clienteSalvoNome = localStorage.getItem('nome');

// Se já existir um pacote/cliente salvo, exibe o painel de acompanhamento
if (clienteSalvoId) {
    document.getElementById('identificacao-container').style.display = 'none';
    document.getElementById('sessao-ativa-container').style.display = 'block';
    document.getElementById('dados-salvos').innerHTML = `
        <strong>Código do Pacote:</strong> ${clienteSalvoId} <br>
        <strong>Destinatário:</strong> ${clienteSalvoNome}
    `;
}

// 2. Funções de controle dos botões
function salvarEIniciar() {
    const nome = document.getElementById('campo-nome').value.trim();
    const id = document.getElementById('campo-id').value.trim();

    if (!nome || !id) {
        alert("Por favor, preencha o Nome do Destinatário e o Código de Rastreio.");
        return;
    }

    // Mantemos as mesmas chaves para não quebrar a Lambda nem o Connect
    localStorage.setItem('nome', nome);
    localStorage.setItem('clienteId', id);
    
    // Recarrega a página para inicializar o widget com os parâmetros da entrega
    location.reload(); 
}

function limparSessao() {
    localStorage.removeItem('nome');
    localStorage.removeItem('clienteId');
    location.reload();
}

// ==========================================
// 3. INICIALIZAÇÃO DO CHAT
// Carrega o widget apenas quando houver encomenda identificada
// ==========================================

if (clienteSalvoId) {
    
    (function(w, d, x, id){
      s=d.createElement('script');
      s.src='https://testeskillbuilder.my.connect.aws/connectwidget/static/amazon-connect-chat-interface-client.js';
      s.async=1;
      s.id=id;
      d.getElementsByTagName('head')[0].appendChild(s);
      w[x] =  w[x] || function() { (w[x].ac = w[x].ac || []).push(arguments) };
    })(window, document, 'amazon_connect', 'e4969724-19f9-4518-9d9d-8aee87e5d6a4');

    amazon_connect('styles', { 
        iconType: 'CHAT', 
        openChat: { color: '#ffffff', backgroundColor: '#0284c7' }, 
        closeChat: { color: '#ffffff', backgroundColor: '#0284c7'} 
    });

    amazon_connect('snippetId', 'QVFJREFIaEZ5ZjhlbTkwTGlJQ0RQVlozbFpkalBOMm91NWh2aGNUZHZhTTZac1lEMndFL0lYS3pFTFNWTUZHNjhVMUhwc3BvQUFBQWJqQnNCZ2txaGtpRzl3MEJCd2FnWHpCZEFnRUFNRmdHQ1NxR1NJYjNEUUVIQVRBZUJnbGdoa2dCWlFNRUFTNHdFUVFNLzA3ZmZYVXZhODZheTlHWEFnRVFnQ3VGc0xXcVpoWGxSdDZxUGsxWWpnRlNnT0dqelB4R3NaRUJmWUcyM1RYUGVlancwVkk0cCt3bFNNTEo6Ok5XQy9ZclJOWWVZLzF1M2RXMmpYTFhoUnp0UDFvcmJncEYxQUcyNE45alR3SEFKbG94K244RkZIaE5lSEEvOEdnZ0Z2YVhuYzdyUFJGZXVrekFVMVR2bHEvdzg1OEZXaExGQ1ZnbnFDdCsvRHZscit3RHExRnIrNHdnUWxRcEZCTXpXeEkrbmlJUE9Ub2hSTXZzdTRMcVNEMXNWaFBIRT0=');

    amazon_connect('supportedMessagingContentTypes', [ 
        'text/plain', 
        'text/markdown', 
        'application/vnd.amazonaws.connect.message.interactive', 
        'application/vnd.amazonaws.connect.message.interactive.response' 
    ]);

    // Envia os dados para a sessão do Amazon Connect
    amazon_connect('contactAttributes', {
        clienteId: clienteSalvoId,
        nome: clienteSalvoNome
    });
}
