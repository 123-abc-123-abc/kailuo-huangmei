/* ===== 《开锣》本地私密配置（勿提交 / 勿分享 / 勿截屏）=====
   - 密钥 base64 分段存放，仅防随手翻看（Ctrl+F 搜不到完整密钥），并非真加密
   - 本文件已列入 .gitignore；打包公开材料时请移除（AI 对话会自动降级为内置模板回复）
   - 若不慎泄露：到 bigmodel.cn 控制台重置密钥，再按同格式重建此文件
   - 格式：每段 atob 后拼接 = 完整密钥 */
(function(){
  const s = [
  'Mjg4MmZi',
  'NWM1Zjhi',
  'NDZhMTgw',
  'MDQxZDhk',
  'NjRjZTli',
  'NzcuQ2sx',
  'THRrbHdL',
  'ejhOSFpX',
  'bQ=='
  ];
  window.LOCAL_SECRETS = window.LOCAL_SECRETS || {};
  window.LOCAL_SECRETS.zhipuKey = s.map(function(x){ return atob(x); }).join('');
})();
