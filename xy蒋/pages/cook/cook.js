// pages/cook/cook.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      '../images/swiper/xh6.jpg',
      '../images/swiper/xh5.jpg',
      '../images/swiper/xh4.jpg',
      '../images/swiper/xh2.jpg',
      '../images/swiper/xh1.jpg',
      '../images/swiper/xh7.jpg',
    ],
    indicatorDots: true,
    autoplay:true,
    interval: 2000,
    duration: 1000,
    searchicon: '../images/index/icon_search.png',
    array:[]

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
         var array = this.initData();
         this.setData({array:array});
       },
       initData:function(){
         var array = [];
         var object1 = new Object();
         object1.img = '../images/list/xh7.jpg';
         object1.title = '爱心早餐';
         object1.type = '健康养生';
         object1.liulan = '30988浏览';
         object1.pinglun = '7评论';
         array[0] = object1;
     
         var object2 = new Object();
         object2.img = '../images/list/xh7.jpg';
         object2.title = '困了只想喝咖啡';
         object2.type = '家庭医生在线';
         object2.liulan = '29999浏览';
         object2.pinglun = '14评论';
         array[1] = object2;
     
         var object3 = new Object();
         object3.img = '../images/list/xh7.jpg';
         object3.title = '橘子多吃变小黄人';
         object3.type = '家庭医生在线';
         object3.liulan = '19356浏览';
         object3.pinglun = '5评论';
         array[2] = object3;
         
         var object4 = new Object();
         object4.img = '../images/list/xh7.jpg';
         object4.title = '搜狐新闻，手机用久了';
         object4.type = '广告';
         object4.liulan = '5046浏览';
         object4.pinglun = '3评论';
         array[3] = object4;
     
         var object5 = new Object();
         object5.img = '../images/list/xh7.jpg';
         object5.title = '困了只想喝咖啡';
         object5.type = '家庭医生在线';
         object5.liulan = '29999浏览';
         object5.pinglun = '13评论';
         array[4] = object5;
     
         return array;
       },

  

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})