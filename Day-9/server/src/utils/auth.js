import jwt from 'jsonwebtoken'
import config from '../config/config.js'


export const generateToken=({userId})=>{

const accessToken=jwt.sign({id:userId}, config.AccessToken_secret, {expiresIn: "15m"})
const refreshToken=jwt.sign({id: userId}, config.RefreshToken_secret, {expiresIn:"7d"})
  

return {accessToken, refreshToken}
}

export const verifyToken=(token)=>{
    const verifyAccessToken=jwt.verify(token, config.AccessToken_secret)

    return verifyAccessToken
}

export const verifyRefreshToken=(token)=>{
const verifyRefreshToken=jwt.verify(token, config.RefreshToken_secret)
return verifyRefreshToken
}

