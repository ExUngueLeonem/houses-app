# Getting Started with Create React App

Тестовое задание frontend developer

Верстка Макета https://www.figma.com/file/O6wbnTCIVOyjowWBWAMMDJ/UI-Dev-test-task-2
Данные для карточек запрашивать аяксом отсюда: https://603e38c548171b0017b2ecf7.mockapi.io/homes

В данных есть два типа карточек IndependentLiving (голубой лейбл), SupportAvailable (оранжевый лейбл).

В верхней части макета есть текстовое поле Filter. При введении текста более трех символов  в это поле, карточки должны фильтроваться по полю title, т.е. должны отображаться только те карточки, заголовок которых содержит текст из поля filter.

Карточка является ссылкой на страницу о конкретном доме вида /details/[id]. Страницу о конкретном доме делать не надо.

Изображения можно взять любые, например вот из этого сервиса https://via.placeholder.com/300x150/FF0000/FFFFFF?text=title

Кнопка “See more” не ведет никуда.


Требования к выполнению тестового задания:

1.	Верстка не ломается на маленьком экране, карточки встают друг под другом.
2.	Результат отправить в виде архива (node_modules не включать в архив) на почту ---, либо публичный репозитория на github. 
3.	Страница должна открываться из папки без сервера, либо выложена в интернет и доступна по урлу.

Будет плюсом:

1.	Webpack для сборки.
2.	Использование для верстки одной из технологий: LESS/SASS.
3.	БЭМ в части именования классов.
4.	ES2015+.
5.	Хорошие практики с точки зрения accessibility, SEO, performance.




This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
