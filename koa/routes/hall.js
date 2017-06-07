var router = require('koa-router')();


router.get('/getRoomList', async function (ctx, next) {
	console.log('aaaaaaaaa');
  let loginbean = ctx.session.loginbean;
  console.log('loginbean:'+loginbean);
  if(!loginbean){
  	ctx.body='登陆过期';
  	return;
  }
  ctx.body=["登录成功"];
})


// router.get('/newRoom', async function (ctx, next) {
// 	let loginbean = 
// })
module.exports = router;