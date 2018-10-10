const express = require('express')
const Router = express.Router();
const model = require('./model')
const User = model.getModel('user');
const utils = require('utility');
const _filter = { 'password': 0, '_v': 0 };

Router.get('/list', function (req, res) {
    // User.remove({},function (err,doc) {
    //     console.log(doc);
    // })
    const type = req.query.type || null
    // const { type } = req.query;
    // console.log(type)
    User.find({type}, function(err, doc) {
        return res.json({code:0,data:doc})
    })
})

Router.post('/register', function(req, res) {
    // console.log('注册请求参数', req.body);
    const { user, password, type } = req.body;
    User.findOne({ user }, function(err, doc) {
        if (doc) {
            return res.json({ code: 1, msg: '用户名重复' })
        }
        const userModel = new User({ user, type, password: md5Pass(password) })

        userModel.save(function(e, d) {
            if (e) {
                return res.json({ code: 1, msg: '后台出了问题', e: e })
            }
            const { user, type, _id } = d;
            res.cookie('userid', _id);
            return res.json({ code: 0, data: { user, type, _id } })
        })
    })
})

Router.post('/update', function (req, res) {
    const { userid } = req.cookies;
    if (!userid) {
        return json.dumps({code: 1})
    }
    const body = req.body;
    User.findByIdAndUpdate(userid, body, { "new": true }, function (err, doc) {
        if (err) {
            console.log(err)
        }
        const data = Object.assign({}, {
            user: doc.user,
            type: doc.type
        }, body);
        return res.json({code: 0, data})
    })
})

Router.post('/login', function(req, res) {
    const { user, password, type } = req.body;
    User.findOne({ user, password: md5Pass(password) }, _filter, function(err, doc) {
        if (!doc) {
            return res.json({ code: 1, msg: '用户名或密码错误' })
        }
        res.cookie('userid', doc._id );
        return res.json({ code: 0, data: doc })
    })
})

Router.get('/info', function(req, res) {
    //有没有cookie
    const { userid } = req.cookies;
    if (!userid) {
        return res.json({ code: 1 })
    }
    User.findById(userid, _filter, function(err, doc) {
        if (err) {
            return res.json({ code: 1, msg: '后端出错' })
        }
        if (doc) {
            return res.json({ code: 0, data: doc })
        }
    })

})

function md5Pass(password) {
    const salt = 'my_encrypt_asjidjisd!@!@#@#w4$%4';
    return utils.md5(utils.md5(password + salt))
}

module.exports = Router;