const mongoose = require('mongoose')

//连接mongo 并且用imooc这个集合
const DB_URL = 'mongodb://127.0.0.1:27017/imooc';
mongoose.connect(DB_URL);
mongoose.connection.on('connected', function (params) {
    console.log('mongo connect success');
})

mongoose.connection.on('error',function (error) {
    console.log('数据库连接失败', + error)
})

const models = {
    user: {
        'user': { type: String, required: true },
        'password': { type: String, required: true },
        'type': { type: String, required: true },
        //头像
        'avtor': { type: String },
        //简介
        'desc': { type: String },
        //职位
        'title': { type: String },
        //如果是boss
        'company': { type: String },
        'money': {type: Number}
    },
    chat:{}
}

for (let m in models) {
    mongoose.model(m,new mongoose.Schema(models[m]))
}

module.exports = {
    getModel: function(name) {
        return mongoose.model(name)
    }
}