import Joi from 'joi';
import Account from 'models/Account';

export const localRegister = async (ctx) => {
    // 데이터 검증
    const schema = Joi.object().keys({
        username: Joi.string().alphanum().min(4).max(15).required(),
        email: Joi.string().email().required(),
        password: Joi.string().required().min(6)
    });

    const result = Joi.validate(ctx.request.body, schema);

    // 스키마 검증 실패
    if(result.error) {
        ctx.status = 400;
        return;
    }

    // TODO : 아이디,이메일 중복처리 구현

    // 계정 생성
    let account = null;
    try {
        account = await Account.localRegister(ctx.request.body);
    } catch(e) {
        ctx.throw(500, e);
    }

    ctx.body = account.profile;
};

export const localLogin = async (ctx) => {
    ctx.body = 'login';
}

export const exists = async (ctx) => {
    ctx.body = 'exists';
}

export const logout = async (ctx) => {
    ctx.body = 'logout';
}