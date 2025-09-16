if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/safetylightai-pwa/dev-sw.js?dev-sw', {
    scope: '/safetylightai-pwa/',
    type: 'classic',
  });
}
