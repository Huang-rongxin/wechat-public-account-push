/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wxab1185ddeeec6de4',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '0069cfbf91479c2fc8089b1ab7622ebf',

  PROVINCE: '广东',
  CITY: '深圳',

  USERS: [
    {
      // 想要发送的人的名字
      name: '温大可爱',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oqUhz6ABbKBSfGRTig2tcnOpYLMo',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'N8fioAjVOF_fil3sZ-DgQPnOVZywy8cuUo8NUnmxHMg',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '05-09',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*农历生日', name: '温大可爱', year: '1998', date: '04-09',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '农历生日', name: '乖乖', year: '1999', date: '06-12',
        },
        {
          type: '节日', name: '恋爱周年纪念日', year: '2022', date: '07-09',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 认识的日子
        { keyword: 'meet_day', date: '2022-06-10' },
        // 在一起的日子
        { keyword: 'love_day', date: '2022-07-09' },
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: 'N8fioAjVOF_fil3sZ-DgQPnOVZywy8cuUo8NUnmxHMg',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
//       id: 'oqUhz6ABbKBSfGRTig2tcnOpYLMo',
    }
  ],

}

module.exports = USER_CONFIG

