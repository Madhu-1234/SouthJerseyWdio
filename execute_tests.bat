npm run cleandir & ^
npm run test & ^
allure generate allure-results --clean
netlify deploy --dir=allure-report & ^
netlify deploy --prod --dir=allure-report & ^
node utils/sendmail.js & ^
PAUSE