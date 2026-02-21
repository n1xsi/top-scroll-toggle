(function() {
    // Проверка на инициализацию переменной для хранения последней позиции прокрутки
    if (typeof window.LastScroll === 'undefined') {
        window.LastScroll = 0;
    }

    const currentScroll = window.scrollY;  // Текущая позиция по вертикали

    // Если НЕ в самом верху страницы
    if (currentScroll > 0) {
        // Запись текущей позиции страницы
        window.LastScroll = currentScroll;

        // Скролл в самый верх
        window.scrollTo({ top: 0, behavior: 'auto' });
    }

    // Если УЖЕ в самом верху страницы
    else {
        // Возврат к сохранённой позиции страницы
        if (window.LastScroll > 0) {
            window.scrollTo({ top: window.LastScroll, behavior: 'auto' });
        }
    }
})();