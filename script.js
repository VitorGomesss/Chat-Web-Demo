// 1. Leitura dos dados guardados no navegador
const clienteSalvoId = localStorage.getItem('clienteId');
const clienteSalvoNome = localStorage.getItem('nome');

// Alterna o ecrã caso o cliente já esteja registado
if (clienteSalvoId) {
    document.getElementById('identificacao-container').style.display = 'none';
    document.getElementById('sessao-ativa-container').style.display = 'block';
    document.getElementById('dados-salvos').innerHTML = `Nome: ${clienteSalvoNome} <br> ID: ${clienteSalvoId}`;
}

// 2. Funções de controlo dos botões
function salvarEIniciar() {
    const nome = document.getElementById('campo-nome').value.trim();
    const id = document.getElementById('campo-id').value.trim();

    if (!nome || !id) {
        alert("Por favor, preencha o Nome e o ID/E-mail.");
        return;
    }

    localStorage.setItem('nome', nome);
    localStorage.setItem('clienteId', id);
    location.reload(); // Recarrega para injetar os dados no script do Connect
}

function limparSessao() {
    localStorage.removeItem('nome');
    localStorage.removeItem('clienteId');
    location.reload();
}

// 3. Inicialização do NOVO Widget do Amazon Connect
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
    openChat: { color: '#ffffff', backgroundColor: '#123456' }, 
    closeChat: { color: '#ffffff', backgroundColor: '#123456'} 
});

amazon_connect('snippetId', 'QVFJREFIaEZ5ZjhlbTkwTGlJQ0RQVlozbFpkalBOMm91NWh2aGNUZHZhTTZac1lEMndFL0lYS3pFTFNWTUZHNjhVMUhwc3BvQUFBQWJqQnNCZ2txaGtpRzl3MEJCd2FnWHpCZEFnRUFNRmdHQ1NxR1NJYjNEUUVIQVRBZUJnbGdoa2dCWlFNRUFTNHdFUVFNLzA3ZmZYVXZhODZheTlHWEFnRVFnQ3VGc0xXcVpoWGxSdDZxUGsxWWpnRlNnT0dqelB4R3NaRUJmWUcyM1RYUGVlancwVkk0cCt3bFNNTEo6Ok5XQy9ZclJOWWVZLzF1M2RXMmpYTFhoUnp0UDFvcmJncEYxQUcyNE45alR3SEFKbG94K244RkZIaE5lSEEvOEdnZ0Z2YVhuYzdyUFJGZXVrekFVMVR2bHEvdzg1OEZXaExGQ1ZnbnFDdCsvRHZscit3RHExRnIrNHdnUWxRcEZCTXpXeEkrbmlJUE9Ub2hSTXZzdTRMcVNEMXNWaFBIRT0=');

amazon_connect('supportedMessagingContentTypes', [ 
    'text/plain', 
    'text/markdown', 
    'application/vnd.amazonaws.connect.message.interactive', 
    'application/vnd.amazonaws.connect.message.interactive.response' 
]);

// 4. Injeção dinâmica no Amazon Connect (O PONTO CHAVE)
// Isto envia os atributos lidos do localStorage diretamente para as variáveis do fluxo
if (clienteSalvoId) {
    amazon_connect('contactAttributes', {
        clienteId: clienteSalvoId,
        nome: clienteSalvoNome
    });
}
