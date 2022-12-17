# Список сотрудников

> Стек: React, TypeScript, CSS

Простое приложение для создания списка сотрудников.

Проведен рефакторинг приложения, в ходе которого оно было переписано на TypeScript, классовые компоненты заменены на функциональные. CSS стили рефакторингу не подлежали, было принято решение в качестве изоляции стилей оставить имеющееся решение, реализующее БЭМ методологию.

Среди прочего, было реализовано:
- автоматическое выведение типов actions для useReducer (файл: `src/reducer/actions`);
- удобная, хорошо типизированная обертка над localStorage. Ключи, используемые в localStorage, описываются на этапе инстанцирования класса-обертки, который реализован в виде дженерика, благодаря чему исключена вероятность ошибки при написании ключей в ходе работы с экземпляром класса (файл: `src/services/storage.ts`);
- хук, инкапсулирующий логику фильтрации и работы с данными приложения (файл: `src/hook/useApp.ts`);
- каррирование функций, нашедшее применение в вариативности механизма фильтрации (файл: `src/hook/useApp.ts`) и при привязке actions к dispatch (функция bindActions в файле `src/reducer/actions`)

## Демонстрация проекта

[https://employee-list.pages.dev/](https://employee-list.pages.dev/)

## Руководство к запуску

Для работы приложения необходимо наличие установленного Node.js, версию, а также наличие пакета, можно проверить командой `node -v`

После клонирования github репозитория проекта, перейти в папку проекта и в терминале запустить одну из следующих команду:
```bash
# рекомендуемый пакетный менеджер
yarn install

# или
# альтернативный пакетный менеджер
npm i
```

Произойдет установка зависимостей, после завершений которой запустить проект командой:
```bash
yarn dev

# или, в случае использования npm
npm run dev
```

Список остальных команд, доступных в приложении, указан в файле 'package.json', в поле 'scripts'.