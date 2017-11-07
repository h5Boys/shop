<template>
  <div class="pinlei">
    <ul class="pinglei_header">
      <li><span class="sp-01">Men</span></li>
      <li><span class="sp-02">Women</span></li>
      <li><span class="sp-03">Kids</span></li>
    </ul>
    <div class="shopCount">
      <div class="men">
        <ul class="left-silder">
          <li>上衣</li>
          <li>裤装</li>
          <li>鞋靴</li>
          <li>包类</li>
          <li>服佩</li>
          <li>美妆/个护</li>
          <li>数码3</li>
          <li>玩具礼品</li>
          <li><a href="#">成人用品</a></li>
          <li>内衣/家居服</li>
          <li>厨房餐具</li>
          <li>运动装备</li>
          <li>文具杂志</li>
          <li>生活电器</li>
        </ul>
        <!--上衣-->
        <div class="shangyi">
          <ul class="ul_01">
            <li>
              <img-show :ims="n"  v-if="index<3 " v-for="(n,index) in item" :key="n.id">{{n}}</img-show>
            </li>
          </ul>
          <h1><i></i><span>全部上衣</span><i></i></h1>
          <ul class="ul_02">
            <img-show :ims="n"  v-if="index<3 " v-for="(n,index) in item" :key="n.id">{{n}}</img-show>
          </ul>
          <h1><i></i><span>热门品牌</span><i></i></h1>
          <ul class="ul_03">
            <li><img-show :ims="n"  v-if="index>=81 && index<=86 " v-for="(n,index) in item" :key="n.id">{{n}}</img-show></li>
          </ul>
        </div>
        <div class="kuzi">
          <ul class="ul_01">
            <li>
              <img-show :ims="n"  v-if="index>=15 && index<=17 " v-for="(n,index) in item" :key="n.id">{{n}}</img-show>
            </li>
          </ul>
          <h1><i></i><span>全部裤子</span><i></i></h1>
          <ul class="ul_02">
            <li><img-show :ims="n"  v-if="index>=15 && index<=17 " v-for="(n,index) in item" :key="n.id">{{n}}</img-show></li>
          </ul>
          <h1><i></i><span>热门品牌</span><i></i></h1>
          <ul class="ul_03">
            <li><img-show :ims="n"  v-if="index>=81 && index<=86 " v-for="(n,index) in item" :key="n.id">{{n}}</img-show></li>
          </ul>
        </div>
        <div class="xiexue">
          <ul class="ul_01">
            <li><img-show :ims="n"  v-if="index>=18 && index<=20 " v-for="(n,index) in item" :key="n.id">{{n}}</img-show></li>
          </ul>
          <h1><i></i><span>全部鞋靴</span><i></i></h1>
          <ul class="ul_02">
            <li><img-show :ims="n"  v-if="index>=18 && index<=20 " v-for="(n,index) in item" :key="n.id">{{n}}</img-show></li>
          </ul>
          <h1><i></i><span>热门品牌</span><i></i></h1>
          <ul class="ul_03">
            <li><img-show :ims="n"  v-if="index>=81 && index<=86 " v-for="(n,index) in item" :key="n.id">{{n}}</img-show></li>
          </ul>
        </div>
        <div class="baolei">
          <ul class="ul_01">
            <li><img-show :ims="n"  v-if="index>=21 && index<=23 " v-for="(n,index) in item" :key="n.id">{{n}}</img-show></li>
          </ul>
          <h1><i></i><span>全部包类</span><i></i></h1>
          <ul class="ul_02">
            <li><img-show :ims="n"  v-if="index>=21 && index<=23 " v-for="(n,index) in item" :key="n.id">{{n}}</img-show></li>
          </ul>
          <h1><i></i><span>热门品牌</span><i></i></h1>
          <ul class="ul_03">
            <li><img-show :ims="n"  v-if="index>=81 && index<=86 " v-for="(n,index) in item" :key="n.id">{{n}}</img-show></li>
          </ul>
        </div>
        <div class="fupei">
          <ul class="ul_01">
            <li><img-show :ims="n"  v-if="index>=24 && index<=26 " v-for="(n,index) in item" :key="n.id">{{n}}</img-show></li>
          </ul>
          <h1><i></i><span>全部服佩</span><i></i></h1>
          <ul class="ul_02">
            <li><img-show :ims="n"  v-if="index>=24 && index<=26 " v-for="(n,index) in item" :key="n.id">{{n}}</img-show></li>
          </ul>
          <h1><i></i><span>热门品牌</span><i></i></h1>
          <ul class="ul_03">
            <li><img-show :ims="n"  v-if="index>=81 && index<=86 " v-for="(n,index) in item" :key="n.id">{{n}}</img-show></li>
          </ul>
        </div>
        <div class="meizhuang">
          <ul class="ul_01">
            <li><img-show :ims="n"  v-if="index>=3 && index<=5 " v-for="(n,index) in item" :key="n.id">{{n}}</img-show></li>
          </ul>
          <h1><i></i><span>全部美妆</span><i></i></h1>
          <ul class="ul_02">
            <li><img-show :ims="n"  v-if="index>=3 && index<=5 " v-for="(n,index) in item" :key="n.id">{{n}}</img-show></li>
          </ul>
          <h1><i></i><span>热门品牌</span><i></i></h1>
          <ul class="ul_03">
            <li><img-show :ims="n"  v-if="index>=81 && index<=86 " v-for="(n,index) in item" :key="n.id">{{n}}</img-show></li>
          </ul>
        </div>
        <div class="shuma">
          <ul class="ul_01">
            <li><img-show :ims="n"  v-if="index>=12 && index<=14 " v-for="(n,index) in item" :key="n.id">{{n}}</img-show></li>
          </ul>
          <h1><i></i><span>全部数码</span><i></i></h1>
          <ul class="ul_02">
            <li><img-show :ims="n"  v-if="index>=12 && index<=14 " v-for="(n,index) in item" :key="n.id">{{n}}</img-show></li>
          </ul>
          <h1><i></i><span>热门品牌</span><i></i></h1>
          <ul class="ul_03">
            <li><img-show :ims="n"  v-if="index>=81 && index<=86 " v-for="(n,index) in item" :key="n.id">{{n}}</img-show></li>
          </ul>
        </div>
        <div class="wanju">
          <ul class="ul_01">
            <li><img-show :ims="n"  v-if="index>=39 && index<=41 " v-for="(n,index) in item" :key="n.id">{{n}}</img-show></li>
          </ul>
          <h1><i></i><span>全部玩具礼品</span><i></i></h1>
          <ul class="ul_02">
            <li><img-show :ims="n"  v-if="index>=39 && index<=41 " v-for="(n,index) in item" :key="n.id">{{n}}</img-show></li>
          </ul>
          <h1><i></i><span>热门品牌</span><i></i></h1>
          <ul class="ul_03">
            <li><img-show :ims="n"  v-if="index>=81 && index<=86 " v-for="(n,index) in item" :key="n.id">{{n}}</img-show></li>
          </ul>
        </div>
        <div class="neiyi">
          <ul class="ul_01">
            <li><img-show :ims="n"  v-if="index>=27 && index<=29 " v-for="(n,index) in item" :key="n.id">{{n}}</img-show></li>
          </ul>
          <h1><i></i><span>全部内衣</span><i></i></h1>
          <ul class="ul_02">
            <li><img-show :ims="n"  v-if="index>=27 && index<=29 " v-for="(n,index) in item" :key="n.id">{{n}}</img-show></li>
          </ul>
          <h1><i></i><span>热门品牌</span><i></i></h1>
          <ul class="ul_03">
            <li><img-show :ims="n"  v-if="index>=81 && index<=86 " v-for="(n,index) in item" :key="n.id">{{n}}</img-show></li>
          </ul>
        </div>
        <div class="chufang">
          <ul class="ul_01">
            <li><img-show :ims="n"  v-if="index>=33 && index<=35 " v-for="(n,index) in item" :key="n.id">{{n}}</img-show></li>
          </ul>
          <h1><i></i><span>全部厨房用具</span><i></i></h1>
          <ul class="ul_02">
            <li><img-show :ims="n"  v-if="index>=33 && index<=35 " v-for="(n,index) in item" :key="n.id">{{n}}</img-show></li>
          </ul>
          <h1><i></i><span>热门品牌</span><i></i></h1>
          <ul class="ul_03">
            <li><img-show :ims="n"  v-if="index>=81 && index<=86 " v-for="(n,index) in item" :key="n.id">{{n}}</img-show></li>
          </ul>
        </div>
        <div class="sports">
          <ul class="ul_01">
            <li><img-show :ims="n"  v-if="index>=30 && index<=32 " v-for="(n,index) in item" :key="n.id">{{n}}</img-show></li>
          </ul>
          <h1><i></i><span>全部运动装备</span><i></i></h1>
          <ul class="ul_02">
            <li><img-show :ims="n"  v-if="index>=30 && index<=32 " v-for="(n,index) in item" :key="n.id">{{n}}</img-show></li>
          </ul>
          <h1><i></i><span>热门品牌</span><i></i></h1>
          <ul class="ul_03">
            <li><img-show :ims="n"  v-if="index>=81 && index<=86 " v-for="(n,index) in item" :key="n.id">{{n}}</img-show></li>
          </ul>
        </div>
        <div class="wenju">
          <ul class="ul_01">
            <li><img-show :ims="n"  v-if="index>=36 && index<=38 " v-for="(n,index) in item" :key="n.id">{{n}}</img-show></li>
          </ul>
          <h1><i></i><span>全部玩具礼品</span><i></i></h1>
          <ul class="ul_02">
            <li><img-show :ims="n"  v-if="index>=36 && index<=38 " v-for="(n,index) in item" :key="n.id">{{n}}</img-show></li>
          </ul>
          <h1><i></i><span>热门品牌</span><i></i></h1>
          <ul class="ul_03">
            <li><img-show :ims="n"  v-if="index>=81 && index<=86 " v-for="(n,index) in item" :key="n.id">{{n}}</img-show></li>
          </ul>
        </div>
        <div class="dianqi">
          <ul class="ul_01">
            <li><img-show :ims="n"  v-if="index>=9 && index<=11 " v-for="(n,index) in item" :key="n.id">{{n}}</img-show></li>
          </ul>
          <h1><i></i><span>全部电器</span><i></i></h1>
          <ul class="ul_02">
            <li><img-show :ims="n"  v-if="index>=9 && index<=11 " v-for="(n,index) in item" :key="n.id">{{n}}</img-show></li>
          </ul>
          <h1><i></i><span>热门品牌</span><i></i></h1>
          <ul class="ul_03">
            <li><img-show :ims="n"  v-if="index>=81 && index<=86 " v-for="(n,index) in item" :key="n.id">{{n}}</img-show></li>
          </ul>
        </div>
      </div>
      <div class="women">
        <ul class="left-silder">
          <li>上衣</li>
          <li>裤装</li>
          <li>鞋靴</li>
          <li>包类</li>
          <li>服佩</li>
          <li>美妆/个护</li>
          <li>数码3</li>
          <li>玩具礼品</li>
          <li><a href="#">家居生活</a></li>
          <li>内衣/家居服</li>
          <li>厨房餐具</li>
          <li>运动装备</li>
          <li>文具杂志</li>
          <li>生活电器</li>
          <li>裙类</li>
        </ul>
        <div class="shangyi">
          <ul class="ul_01">
            <li><img-show :ims="n"  v-if="index>=46 && index<=48 " v-for="(n,index) in item" :key="n.id">{{n}}</img-show></li>
          </ul>
          <h1><i></i><span>全部上衣</span><i></i></h1>
          <ul class="ul_02">
            <li><img-show :ims="n"  v-if="index>=46 && index<=48 " v-for="(n,index) in item" :key="n.id">{{n}}</img-show></li>
          </ul>
          <h1><i></i><span>热门品牌</span><i></i></h1>
          <ul class="ul_03">
            <li><img-show :ims="n"  v-if="index>=87 && index<=92 " v-for="(n,index) in item" :key="n.id">{{n}}</img-show></li>
          </ul>
        </div>
        <div class="kuzi">
          <ul class="ul_01">
            <li><img-show :ims="n"  v-if="index>=49 && index<=51 " v-for="(n,index) in item" :key="n.id">{{n}}</img-show></li>
          </ul>
          <h1><i></i><span>全部裤子</span><i></i></h1>
          <ul class="ul_02">
            <li><img-show :ims="n"  v-if="index>=49 && index<=51 " v-for="(n,index) in item" :key="n.id">{{n}}</img-show></li>
          </ul>
          <h1><i></i><span>热门品牌</span><i></i></h1>
          <ul class="ul_03">
            <li><img-show :ims="n"  v-if="index>=87 && index<=92 " v-for="(n,index) in item" :key="n.id">{{n}}</img-show></li>
          </ul>
        </div>
        <div class="xiexue" >
          <ul class="ul_01">
            <li><img-show :ims="n"  v-if="index>=52 && index<=54 " v-for="(n,index) in item" :key="n.id">{{n}}</img-show></li>
          </ul>
          <h1><i></i><span>全部鞋靴</span><i></i></h1>
          <ul class="ul_02">
            <li><img-show :ims="n"  v-if="index>=52 && index<=54" v-for="(n,index) in item" :key="n.id">{{n}}</img-show></li>
          </ul>
          <h1><i></i><span>热门品牌</span><i></i></h1>
          <ul class="ul_03">
            <li><img-show :ims="n"  v-if="index>=87 && index<=92 " v-for="(n,index) in item" :key="n.id">{{n}}</img-show></li>
          </ul>
        </div>
        <div class="baolei">
          <ul class="ul_01">
            <li><img-show :ims="n"  v-if="index>=21 && index<=23 " v-for="(n,index) in item" :key="n.id">{{n}}</img-show></li>
          </ul>
          <h1><i></i><span>全部包类</span><i></i></h1>
          <ul class="ul_02">
            <li><img-show :ims="n"  v-if="index>=21 && index<=23 " v-for="(n,index) in item" :key="n.id">{{n}}</img-show></li>
          </ul>
          <h1><i></i><span>热门品牌</span><i></i></h1>
          <ul class="ul_03">
            <li><img-show :ims="n"  v-if="index>=87 && index<=92 " v-for="(n,index) in item" :key="n.id">{{n}}</img-show></li>
          </ul>
        </div>
        <div class="fupei">
          <ul class="ul_01">
            <li><img-show :ims="n"  v-if="index>=24 && index<=26 " v-for="(n,index) in item" :key="n.id">{{n}}</img-show></li>
          </ul>
          <h1><i></i><span>全部服佩</span><i></i></h1>
          <ul class="ul_02">
            <li><img-show :ims="n"  v-if="index>=24 && index<=26 " v-for="(n,index) in item" :key="n.id">{{n}}</img-show></li>
          </ul>
          <h1><i></i><span>热门品牌</span><i></i></h1>
          <ul class="ul_03">
            <li><img-show :ims="n"  v-if="index>=87 && index<=92 " v-for="(n,index) in item" :key="n.id">{{n}}</img-show></li>
          </ul>
        </div>
        <div class="meizhuang">
          <ul class="ul_01">
            <li><img-show :ims="n"  v-if="index>=3 && index<=5 " v-for="(n,index) in item" :key="n.id">{{n}}</img-show></li>
          </ul>
          <h1><i></i><span>全部美妆</span><i></i></h1>
          <ul class="ul_02">
            <li><img-show :ims="n"  v-if="index>=3 && index<=5 " v-for="(n,index) in item" :key="n.id">{{n}}</img-show></li>
          </ul>
          <h1><i></i><span>热门品牌</span><i></i></h1>
          <ul class="ul_03">
            <li><img-show :ims="n"  v-if="index>=87 && index<=92 " v-for="(n,index) in item" :key="n.id">{{n}}</img-show></li>
          </ul>
        </div>
        <div class="shuma">
          <ul class="ul_01">
            <li><img-show :ims="n"  v-if="index>=12 && index<=14 " v-for="(n,index) in item" :key="n.id">{{n}}</img-show></li>
          </ul>
          <h1><i></i><span>全部数码</span><i></i></h1>
          <ul class="ul_02">
            <li><img-show :ims="n"  v-if="index>=12 && index<=14 " v-for="(n,index) in item" :key="n.id">{{n}}</img-show></li>
          </ul>
          <h1><i></i><span>热门品牌</span><i></i></h1>
          <ul class="ul_03">
            <li><img-show :ims="n"  v-if="index>=87 && index<=92 " v-for="(n,index) in item" :key="n.id">{{n}}</img-show></li>
          </ul>
        </div>
        <div class="wanju">
          <ul class="ul_01">
            <li><img-show :ims="n"  v-if="index>=39 && index<=41 " v-for="(n,index) in item" :key="n.id">{{n}}</img-show></li>
          </ul>
          <h1><i></i><span>全部玩具礼品</span><i></i></h1>
          <ul class="ul_02">
            <li><img-show :ims="n"  v-if="index>=39 && index<=41 " v-for="(n,index) in item" :key="n.id">{{n}}</img-show></li>
          </ul>
          <h1><i></i><span>热门品牌</span><i></i></h1>
          <ul class="ul_03">
            <li><img-show :ims="n"  v-if="index>=87 && index<=92 " v-for="(n,index) in item" :key="n.id">{{n}}</img-show></li>
          </ul>
        </div>
        <div class="neiyi">
          <ul class="ul_01">
            <li><img-show :ims="n"  v-if="index>=27 && index<=29 " v-for="(n,index) in item" :key="n.id">{{n}}</img-show></li>
          </ul>
          <h1><i></i><span>全部内衣</span><i></i></h1>
          <ul class="ul_02">
            <li><img-show :ims="n"  v-if="index>=27 && index<=29 " v-for="(n,index) in item" :key="n.id">{{n}}</img-show></li>
          </ul>
          <h1><i></i><span>热门品牌</span><i></i></h1>
          <ul class="ul_03">
            <li><img-show :ims="n"  v-if="index>=87 && index<=92 " v-for="(n,index) in item" :key="n.id">{{n}}</img-show></li>
          </ul>
        </div>
        <div class="chufang">
          <ul class="ul_01">
            <li><img-show :ims="n"  v-if="index>=33 && index<=35 " v-for="(n,index) in item" :key="n.id">{{n}}</img-show></li>
          </ul>
          <h1><i></i><span>全部厨房用具</span><i></i></h1>
          <ul class="ul_02">
            <li><img-show :ims="n"  v-if="index>=33 && index<=35 " v-for="(n,index) in item" :key="n.id">{{n}}</img-show></li>
          </ul>
          <h1><i></i><span>热门品牌</span><i></i></h1>
          <ul class="ul_03">
            <li><img-show :ims="n"  v-if="index>=87 && index<=92 " v-for="(n,index) in item" :key="n.id">{{n}}</img-show></li>
          </ul>
        </div>
        <div class="sports">
          <ul class="ul_01">
            <li><img-show :ims="n"  v-if="index>=30 && index<=32 " v-for="(n,index) in item" :key="n.id">{{n}}</img-show></li>
          </ul>
          <h1><i></i><span>全部运动装备</span><i></i></h1>
          <ul class="ul_02">
            <li><img-show :ims="n"  v-if="index>=30 && index<=32 " v-for="(n,index) in item" :key="n.id">{{n}}</img-show></li>
          </ul>
          <h1><i></i><span>热门品牌</span><i></i></h1>
          <ul class="ul_03">
            <li><img-show :ims="n"  v-if="index>=87 && index<=92 " v-for="(n,index) in item" :key="n.id">{{n}}</img-show></li>
          </ul>
        </div>
        <div class="wenju">
          <ul class="ul_01">
            <li><img-show :ims="n"  v-if="index>=36 && index<=38 " v-for="(n,index) in item" :key="n.id">{{n}}</img-show></li>
          </ul>
          <h1><i></i><span>全部文具杂志</span><i></i></h1>
          <ul class="ul_02">
            <li><img-show :ims="n"  v-if="index>=36 && index<=38 " v-for="(n,index) in item" :key="n.id">{{n}}</img-show></li>
          </ul>
          <h1><i></i><span>热门品牌</span><i></i></h1>
          <ul class="ul_03">
            <li><img-show :ims="n"  v-if="index>=87 && index<=92 " v-for="(n,index) in item" :key="n.id">{{n}}</img-show></li>
          </ul>
        </div>
        <div class="dianqi">
          <ul class="ul_01">
            <li><img-show :ims="n"  v-if="index>=9 && index<=11 " v-for="(n,index) in item" :key="n.id">{{n}}</img-show></li>
          </ul>
          <h1><i></i><span>全部生活电器</span><i></i></h1>
          <ul class="ul_02">
            <li><img-show :ims="n"  v-if="index>=9 && index<=11 " v-for="(n,index) in item" :key="n.id">{{n}}</img-show></li>
          </ul>
          <h1><i></i><span>热门品牌</span><i></i></h1>
          <ul class="ul_03">
            <li><img-show :ims="n"  v-if="index>=87 && index<=92 " v-for="(n,index) in item" :key="n.id">{{n}}</img-show></li>
          </ul>
        </div>
        <div class="qunlei">
          <ul class="ul_01">
            <li><img-show :ims="n"  v-if="index>=55 && index<=57 " v-for="(n,index) in item" :key="n.id">{{n}}</img-show></li>
          </ul>
          <h1><i></i><span>全部群类</span><i></i></h1>
          <ul class="ul_02">
            <li><img-show :ims="n"  v-if="index>=55 && index<=57 " v-for="(n,index) in item" :key="n.id">{{n}}</img-show></li>
          </ul>
          <h1><i></i><span>热门品牌</span><i></i></h1>
          <ul class="ul_03">
            <li><img-show :ims="n"  v-if="index>=87 && index<=92 " v-for="(n,index) in item" :key="n.id">{{n}}</img-show></li>
          </ul>
        </div>
      </div>
      <div class="kids">
        <ul class="left-silder">
          <li>上衣</li>
          <li>裤装</li>
          <li>鞋靴</li>
          <li>包类</li>
          <li>裙装</li>
          <li>服佩</li>
        </ul>
        <div class="shangyi">
          <ul class="ul_01">
            <li><img-show :ims="n"  v-if="index>=58 && index<=60 " v-for="(n,index) in item" :key="n.id">{{n}}</img-show></li>
          </ul>
          <h1><i></i><span>全部上衣</span><i></i></h1>
          <ul class="ul_02">
            <li><img-show :ims="n"  v-if="index>=58 && index<=60 " v-for="(n,index) in item" :key="n.id">{{n}}</img-show></li>
          </ul>
          <h1><i></i><span>热门品牌</span><i></i></h1>
          <ul class="ul_03">
            <li><img-show :ims="n"  v-if="index>=76 && index<=80 " v-for="(n,index) in item" :key="n.id">{{n}}</img-show></li>
          </ul>
        </div>
        <div class="kuzi">
          <ul class="ul_01">
            <li><img-show :ims="n"  v-if="index>=61 && index<=63 " v-for="(n,index) in item" :key="n.id">{{n}}</img-show></li>
          </ul>
          <h1><i></i><span>全部裤子</span><i></i></h1>
          <ul class="ul_02">
            <li><img-show :ims="n"  v-if="index>=61 && index<=63 " v-for="(n,index) in item" :key="n.id">{{n}}</img-show></li>
          </ul>
          <h1><i></i><span>热门品牌</span><i></i></h1>
          <ul class="ul_03">
            <li><img-show :ims="n"  v-if="index>=76 && index<=80 " v-for="(n,index) in item" :key="n.id">{{n}}</img-show></li>
          </ul>
        </div>
        <div class="xiexue">
          <ul class="ul_01">
            <li><img-show :ims="n"  v-if="index>=64 && index<=66 " v-for="(n,index) in item" :key="n.id">{{n}}</img-show></li>
          </ul>
          <h1><i></i><span>全部鞋靴</span><i></i></h1>
          <ul class="ul_02">
            <li><img-show :ims="n"  v-if="index>=64 && index<=66 " v-for="(n,index) in item" :key="n.id">{{n}}</img-show></li>
          </ul>
          <h1><i></i><span>热门品牌</span><i></i></h1>
          <ul class="ul_03">
            <li><img-show :ims="n"  v-if="index>=76 && index<=80 " v-for="(n,index) in item" :key="n.id">{{n}}</img-show></li>
          </ul>
        </div>
        <div class="baolei">
          <ul class="ul_01">
            <li><img-show :ims="n"  v-if="index>=67 && index<=69 " v-for="(n,index) in item" :key="n.id">{{n}}</img-show></li>
          </ul>
          <h1><i></i><span>全部包类</span><i></i></h1>
          <ul class="ul_02">
            <li><img-show :ims="n"  v-if="index>=67 && index<=69 " v-for="(n,index) in item" :key="n.id">{{n}}</img-show></li>
          </ul>
          <h1><i></i><span>热门品牌</span><i></i></h1>
          <ul class="ul_03">
            <li><img-show :ims="n"  v-if="index>=76 && index<=80 " v-for="(n,index) in item" :key="n.id">{{n}}</img-show></li>
          </ul>
        </div>
        <div class="fupei">
          <ul class="ul_01">
            <li><img-show :ims="n"  v-if="index>=70 && index<=72 " v-for="(n,index) in item" :key="n.id">{{n}}</img-show></li>
          </ul>
          <h1><i></i><span>全部裙装</span><i></i></h1>
          <ul class="ul_02">
            <li><img-show :ims="n"  v-if="index>=70 && index<=72 " v-for="(n,index) in item" :key="n.id">{{n}}</img-show></li>
          </ul>
          <h1><i></i><span>热门品牌</span><i></i></h1>
          <ul class="ul_03">
            <li><img-show :ims="n"  v-if="index>=76 && index<=80 " v-for="(n,index) in item" :key="n.id">{{n}}</img-show></li>
          </ul>
        </div>
        <div class="meizhuang">
          <ul class="ul_01">
            <li><img-show :ims="n"  v-if="index>=73 && index<=75 " v-for="(n,index) in item" :key="n.id">{{n}}</img-show></li>
          </ul>
          <h1><i></i><span>全部服佩</span><i></i></h1>
          <ul class="ul_02">
            <li><img-show :ims="n"  v-if="index>=73 && index<=75 " v-for="(n,index) in item" :key="n.id">{{n}}</img-show></li>
          </ul>
          <h1><i></i><span>热门品牌</span><i></i></h1>
          <ul class="ul_03">
            <li><img-show :ims="n"  v-if="index>=76 && index<=80 " v-for="(n,index) in item" :key="n.id">{{n}}</img-show></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import imgShow from './imgShow.vue'
  import '../../assets/js/swiper.min.js'
  import '../../assets/js/jquery-1.8.3.min.js'
  import '../../assets/js/classify.js'
  export default {
    props:['item'],

    components: {
      imgShow
    },
    mounted(){
      $('.pinglei_header li span').click(function(){
        $(this).css('color','#696969').parent().siblings().find("span").css('color','#b0b0b0')
      })
      $('.left-silder li').click(function(){
        $(this).css({
          borderLeft: '0.04rem solid #444',
          backgroundColor: '#fff'
        })
        $(this).siblings().css({
          borderLeft: '0',
          backgroundColor: '#f0f0f0'
        })
      })
      $(".sp-01").click(function(){
        $('.men').show().siblings().hide();

      })
      $(".sp-02").click(function(){
        $('.women').show().siblings().hide();
      })
      $(".sp-03").click(function(){
        $('.kids').show().siblings().hide();
      })
      $('.left-silder li:nth-child(1)').click(function(){
        $('.shangyi').show().siblings('div').hide()
      })
      $('.left-silder li:nth-child(2)').click(function(){
        $('.kuzi').show().siblings('div').hide()
      })
      $('.left-silder li:nth-child(3)').click(function(){
        $('.xiexue').show().siblings('div').hide()
      })
      $('.left-silder li:nth-child(4)').click(function(){
        $('.baolei').show().siblings('div').hide()
      })
      $('.left-silder li:nth-child(5)').click(function(){
        $('.fupei').show().siblings('div').hide()
      })
      $('.left-silder li:nth-child(6)').click(function(){
        $('.meizhuang').show().siblings('div').hide()
      })
      $('.left-silder li:nth-child(7)').click(function(){
        $('.shuma').show().siblings('div').hide()
      })
      $('.left-silder li:nth-child(8)').click(function(){
        $('.wanju').show().siblings('div').hide()
      })
      $('.left-silder li:nth-child(9)').click(function(){
        $(location).attr('href', '#');
      })
      $('.left-silder li:nth-child(10)').click(function(){
        $('.neiyi').show().siblings('div').hide()
      })
      $('.left-silder li:nth-child(11)').click(function(){
        $('.chufang').show().siblings('div').hide()
      })
      $('.left-silder li:nth-child(12)').click(function(){
        $('.sports').show().siblings('div').hide()
      })
      $('.left-silder li:nth-child(13)').click(function(){
        $('.wenju').show().siblings('div').hide()
      })
      $('.left-silder li:nth-child(14)').click(function(){
        $('.dianqi').show().siblings('div').hide()
      })
      $('.left-silder li:nth-child(15)').click(function(){
        $('.qunlei').show().siblings('div').hide()
      })
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import '../../assets/css/classify.css';
</style>
