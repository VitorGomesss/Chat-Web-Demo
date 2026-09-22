(function(w, d, x, id){
  s = d.createElement('script');
  s.src = 'https://testeskillbuilder.my.connect.aws/connectwidget/static/amazon-connect-chat-interface-client.js';
  s.async = 1;
  s.id = id;
  d.getElementsByTagName('head')[0].appendChild(s);
  w[x] = w[x] || function() { (w[x].ac = w[x].ac || []).push(arguments) };
})(window, document, 'amazon_connect', '9cf40dd7-536e-4a11-b50f-848b83b6da67');

amazon_connect('styles', { 
  iconType: 'CHAT', 
  openChat: { color: '#ffffff', backgroundColor: '#123456' }, 
  closeChat: { color: '#ffffff', backgroundColor: '#123456'} 
});

amazon_connect('snippetId', 'QVFJREFIaEZ5ZjhlbTkwTGlJQ0RQVlozbFpkalBOMm91NWh2aGNUZHZhTTZac1lEMndGcW1TUzZTN0hqRnZPN001UHZDYkpFQUFBQWJqQnNCZ2txaGtpRzl3MEJCd2FnWHpCZEFnRUFNRmdHQ1NxR1NJYjNEUUVIQVRBZUJnbGdoa2dCWlFNRUFTNHdFUVFNa2RBUC9rZDZBdXRJd1N2bUFnRVFnQ3RBQytlMFNxc0tQQ2tmdmtnSmNseTI0YVFXbThlelVuYzJGWkN3cCs3a2JhVURzZ1AzK1RDNTk2U2w6OlNLd2RTMkk4Q0RmZytJOEpVOVpubENtc0tIbTFwZGp4V0tNaXBYRkhvOEdNQ2FjbStWUTUrVWgwMzNOMzBLanZ3dDdEb0tmRFMrSUFJT3JvK1llSDdnZk9YMUtUY3dDZUJRV01naStXUktsMTN4dnFOVi81Q0MyKzdaNzEzYUlvR0JqR1c5Y2IrZnFKN0EyK2xISEo5N0V3SEZHY1VnST0=');

amazon_connect('supportedMessagingContentTypes', [
  'text/plain', 
  'text/markdown', 
  'application/vnd.amazonaws.connect.message.interactive', 
  'application/vnd.amazonaws.connect.message.interactive.response'
]);