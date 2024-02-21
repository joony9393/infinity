const { Router } = require('express');
const hashPassword = require('../utils/hash-password');
const { User } = require('../models');

const router = Router();

/**
 * 작성자: 이정은
 * 작성일: 2024.02.20
 * passport.js를 사용한 로그인 라우터 코드입니다.
 */
router.get('/', (req, res) => {
    if(req.user) {
        res.redirect('/');// 로그인 된 경우 메인페이지로
        return;
    }
    res.redirect('/login'); 
  // 로그인 되지 않은 경우 /login 으로
});

//로그인 페이지
router.get('/login', (req, res, next) => {
  res.render('user/login');
});

//회원가입 페이지
router.get('/join', (req, res, next) => {
  res.render('user/join');
});

router.post('/join', asyncHandler(async (req, res) => {
  const { id, password } = req.body;
  const hashedPassword = hashPassword(password);
  const user = await User.create({
    id,
    password: hashedPassword,
  });
  
  console.log('신규 회원', user);
  
  res.redirect('/');
}));

module.exports = router;