const NumFormat = function (value) {
	if(!value) return '0.00'
	value = value.toFixed(2)
	var intPart = Math.trunc(value)// 获取整数部分
	var intPartFormat = intPart.toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,') // 将整数部分逢三一断
	var floatPart = '.00' // 预定义小数部分
	var value2Array = value.split('.')
	// =2表示数据有小数位
	if(value2Array.length === 2) {
	  floatPart = value2Array[1].toString() // 拿到小数部分
	  if(floatPart.length === 1) { // 补0,实际上用不着
		return intPartFormat + '.' + floatPart + '0'
	  } else {
		return intPartFormat + '.' + floatPart
	  }
	} else {
	  return intPartFormat + floatPart
	}
  }
			  
const timeFormat = (value, format) => {
	let date = new Date(value);
	let y = date.getFullYear();
	let m = date.getMonth() + 1;
	let d = date.getDate();
	let h = date.getHours();
	let min = date.getMinutes();
	let s = date.getSeconds();
	let result = "";
	if (format == undefined) {
		result = `${y}-${m < 10 ? "0" + m : m}-${d < 10 ? "0" + d : d} ${
		h < 10 ? "0" + h : h
	  }:${min < 10 ? "0" + min : min}:${s < 10 ? "0" + s : s}`;
	}
	if (format == "yyyy-mm-dd") {
		result = `${y}-${m < 10 ? "0" + m : m}-${d < 10 ? "0" + d : d}`;
	}
	if (format == "yyyy-mm") {
		result = `${y}-${m < 10 ? "0" + m : m}`;
	}
	if (format == "mm-dd") {
		result = ` ${mm < 10 ? "0" + mm : mm}:${ddmin < 10 ? "0" + dd : dd}`;
	}
	if (format == "hh:mm") {
		result = ` ${h < 10 ? "0" + h : h}:${min < 10 ? "0" + min : min}`;
	}
	if (format == "yyyy") {
		result = `${y}`;
	}
    
    return result;
};
			  
export {
	NumFormat,
	timeFormat
}