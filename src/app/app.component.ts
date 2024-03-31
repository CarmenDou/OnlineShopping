import { Component, OnInit, ViewChild } from '@angular/core';
import { AlertController, IonInfiniteScroll } from '@ionic/angular';
import Swiper from 'swiper';
import {SwiperContainer, register} from 'swiper/element/bundle';
register();
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit{
  // list = [1123,1223,124314,3535,6456547,567583,456463,234241,523452,23232]
  // @ViewChild('myAd3', { static: true })
  // private mySlides3!: SwiperContainer;
  
  ngOnInit(){
    //组件初始化完成, 让轮播广告”开始自动播放“
    // this.mySlides3.autoplay;
  }

  
  doClick(){
    console.log("列表项被单击了")
  }

  doExit(){
    //use AlertController to create an instance.
    this.alertController.create({
      header: 'Confirm',
      message: 'Are you sure to exit?',
      buttons: ['Yes','No']
    }).then((myAlert)=>{
      //异步创建对话框并呈现出来
      myAlert.present()
    })
  }

  @ViewChild('myScroll',{static:true})
  public myInfiniteScroll!:IonInfiniteScroll

  // loadMore(){
  //   console.log("正在加载更多数据...")
  //   //使用定时器模拟：3s获得更多数据
  //   setTimeout(()=>{
  //     for(let i=0; i<10; i++){
  //       let n = Math.floor(Math.random()*9000 + 1000)
  //       this.list.push(n)
  //     }
  //     //通知“无限滚动组件”：数据已经加载完成-否则永远不会再次加载！
  //     this.myInfiniteScroll.complete()
  //   },3000)
  // }
  constructor(private alertController: AlertController) {
  }
}
