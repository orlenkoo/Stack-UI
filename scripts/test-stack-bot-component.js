const fs = require("fs-extra");

const html = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Stack Bot Testing</title>
    <style>
        section {
            min-height: 100vh;
        }
        section:nth-child(1) {
            background: #c44;
        }
        section:nth-child(2) {
            background: #0fa;
        }
    </style>
</head>
<body style="background-color:#323232; margin: 0;padding: 0">
    <section></section>
    <section></section>
    <stack-bot theme="light" theme-color="orange"></stack-bot>
    <script src="./stack-bot.js"></script>
</body>
</html>
`;

fs.ensureDir('test-web-component')
    .then(() => {
        fs.writeFile('./test-web-component/index.html', html, (err) => {
            if (err) {
                console.error('Writing index.html failed!');
            }
            fs.copyFile('./dist/stack-bot/stack-bot.js', './test-web-component/stack-bot.js', (errr) => {
                if (errr) {
                    console.error('Error while copying stack-bot.js!');
                }
                console.log('Test folder created and assets moved');
            })
        });
    });