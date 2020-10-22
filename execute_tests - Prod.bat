cleandir allure-results-Prod & ^
npm run test-prod & ^
allure generate allure-results-Prod --clean
netlify deploy --dir=allure-report & ^
netlify deploy --prod --dir=allure-report & ^
node utils/sendmail.js & ^
PAUSE