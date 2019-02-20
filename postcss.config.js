module.exports = {
  plugins:{
    'postcss-pxtorem':{
      rootValue:16,
      unitPrecision:5,//小数位数
      propList:['*'],
      minPixelValue:5
    },
    'autoprefixer':{ browsers: 'last 10 version'},
  }
}
