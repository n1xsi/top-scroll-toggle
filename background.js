// Скрипт постоянно работает в фоне, ожидая взаимодействия пользователя с расширением.

browser.action.onClicked.addListener((tab) => {
    // Проверка на системную страницу (туда нельзя внедрять скрипты)
    if (!tab.url.startsWith("about:") && !tab.url.startsWith("chrome:")) {
        // Внедрение и выполнение скриата в активной вкладке
        browser.scripting.executeScript({
            target: { tabId: tab.id },
            files: ["content.js"]
        });
    }
});
