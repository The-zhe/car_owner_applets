var fileHost = "https://yxz-oss-files.oss-cn-hangzhou.aliyuncs.com/";//你的阿里云地址最后面跟上一个/   在你当前小程序的后台的uploadFile 合法域名也要配上这个域名
var config = {
   //aliyun OSS config
   uploadImageUrl: `${fileHost}`, // 默认存在根目录，可根据需求改
   AccessKeySecret:'Jyf2lX1ocQR4EgWjd85Yxa0MXnjlY0',        // AccessKeySecret 去你的阿里云上控制台上找
   OSSAccessKeyId: 'LTAI4GJHVwyx6exEihGzCUMj',         // AccessKeyId 去你的阿里云上控制台上找
   timeout: 87600 //这个是上传文件时Policy的失效时间
};
module.exports = config