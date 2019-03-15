function transform(arg) {
  var result = {
    isOK: false,    // 数据是否合法，合法为 true，非法为 false
    reason: '',     // 数据非法的原因
    p: []           // 转换后的概率数值数组
                     
  };

  if(arg.length === 3) {
    result.p = arg[2].split(',');
             
  } else {
    for(var i=2; i<arg.length; i++)  result.p.push(arg[i]);
             
  }

  if(result.p.length < 2) { 
    result.reason = '命令行参数错误：概率数据少于两个！\n';
    result.isOK = false;
    return result;
  }
  for(i=0; i<result.p.length; i++) {
    var msg = validate(result.p[i]);
    if(!msg.isOK) {
      result.reason = msg.reason;
      return result;
                             
    }
  }

  if(sigma(result.p) > 1) {
    result.reason = '概率空间不封闭，概率和大于 1！';
    return result; 
                   
  }
  if(sigma(result.p) < 1) {
    result.reason = '概率空间不封闭，概率和小于 1！';
    return result;
                   
  }

  result.isOK = true;
  for(i=0; i<result.p.length; i++)   result.p[i] = Number(result.p[i]);

  return result;
}
function validate(pi) {
  var result = {
    isOK: false,
    reason: ''
  };

  if(isNaN(Number(pi))) {
    result.reason = '请输入数字！';
    return result; 
  } 

  if(Number(pi) < 0) {
    result.reason = '请输入大于 0 的数！'; 
    return result; 
            
  }

  if(Number(pi) > 1) {
    result.reason = '请输入小于 1 的数！'; 
    return result; 
            
  }

    result.isOK = true;
    return result;

}
function sigma(p) {
  return p.reduce((total, pi) => {
  return roundFractional(total + Number(pi), 2);
        
  }, 0);

}

function h(p) {
  return p.reduce((total, pi) => {
  return total - pi * Math.log2(pi);
}, 0);

}

function roundFractional(x, n) {
  return Math.round(x * Math.pow(10, n)) / Math.pow(10, n);
}

module.exports.h = h;
module.exports.sigma = sigma;
module.exports.validate = validate;
module.exports.transform = transform;
module.exports.roundFractional = roundFractional;
