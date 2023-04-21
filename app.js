const DemoApp = {
        initData: Telegram.WebApp.initData || '',
        initDataUnsafe: Telegram.WebApp.initDataUnsafe || {},
        MainButton: Telegram.WebApp.MainButton,

        init(options) {
            document.body.style.visibility = '';
            Telegram.WebApp.ready();
            Telegram.WebApp.MainButton.setParams({
                text: 'CLOSE WEBVIEW',
                is_visible: true
            }).onClick(DemoApp.close);
        },
        expand() {
            Telegram.WebApp.expand();
        },
        close() {
            Telegram.WebApp.close();
        },
        toggleMainButton(el) {
            const mainButton = Telegram.WebApp.MainButton;
            if (mainButton.isVisible) {
                mainButton.hide();
                el.innerHTML = 'Show Main Button';
            } else {
                mainButton.show();
                el.innerHTML = 'Hide Main Button';
            }
        }}
