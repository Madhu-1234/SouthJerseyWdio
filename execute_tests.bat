cd C:\Users\Alok's\Documents\WebDriverIO
npm run cleandir & ^
npm run test & ^
npx junit-merge -d ./Results -o ./merged-junit-results/merged-test-results.xml & ^
npm run generate-html-report & ^
node utils/sendmail.js & ^
npm run allure-report & ^
PAUSE