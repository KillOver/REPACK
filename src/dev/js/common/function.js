// unicode和gb2312之间的转码
var GB2312UnicodeConverter = {
  ToUnicode: function (str) {
    return str != null ? escape(str).toLocaleLowerCase().replace(/%u/gi, '\\u') : null;
  }
  , ToGB2312: function (str) {
    return str != null ? unescape(str.replace(/\\u/gi, '%u')) : null;
  }
};

// 写cookie
function nSetCookie(name, value, time) {
  var strsec = getsec(time);
  var exp = new Date();
  exp.setTime(exp.getTime() + strsec*1);
  document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString();
}

function getsec(str) {
  var str1 = str.substring(1, str.length) * 1;
  var str2 = str.substring(0, 1);
  if (str2=="s") {
    return str1*1000;
  } else if (str2=="h") {
    return str1*60*60*1000;
  } else if (str2=="d") {
    return str1*24*60*60*1000;
  }
}

//读取cookies
function nGetCookie(name) {
  var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
  if (arr = document.cookie.match(reg))
    return (arr[2]);
  else
    return null;
}

//删除cookies
function delCookie(name) {
  //获取当前时间
  var date = new Date();
  //将date设置为过去的时间
  date.setTime(date.getTime() - 10000);
  var v = nGetCookie(name);
  //将userId这个cookie删除
  if (v != null) {
    document.cookie= name + "=" + v + "; expires=" + date.toGMTString();
  }
}
