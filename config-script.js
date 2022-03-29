const fs = require('fs');

const config = {
    cognito: {
        userPoolId: process.env.STACK_UI_COGNITO_USER_POOL_ID,
        clientId: process.env.STACK_UI_COGNITO_CLIENT_ID,
        secret: process.env.STACK_UI_COGNITO_CLIENT_SECRET
    }
}

fs.writeFileSync('./src/assets/config.json', JSON.stringify(config));