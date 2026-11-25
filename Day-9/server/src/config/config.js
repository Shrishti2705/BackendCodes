

import dotenv from 'dotenv'
dotenv.config()


const config = {
    MongoDB_URI: process.env.MongoDB_URI,
    AccessToken_secret: process.env.AccessToken_secret,
    RefreshToken_secret: process.env.RefreshToken_secret
}

export default config