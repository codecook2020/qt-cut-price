/* eslint-disable prettier/prettier */

import React,{useEffect,useState} from 'react';
import qt from '@qt-base/jssdk'
import wxShare from '@qt-wx/share'
import  "@qt-web/rem-standard"
import "@qt-web/css-common";
import { Provider } from "@qt-builder/material-context";


const isInApp = qt.env.inApp;

wxShare.initShare(process.env.SITE_ENV)

const basicConfig = {
    title:'蜻蜓FM',
    shareTitle:'蜻蜓FM',
    shareImg:'https://sss.staging.qingting.fm/qt-builder-manage/upload_2bb66b65e93998005bb3751e72cb7f3b.png',
    shareSubTitle:'',
    shareLink:"",
    isHiddenAppShare:false,
    isHiddenWxShare:false
}

const containerConfig = {
    startTime: '',
    endTime:'',
    bgc:'#b22222',
    themeColor:'#333',
    style:{},
    endTitle:'页面已过期~',
    beforeTitle:'活动还未开始，敬请期待~',
    bgimg:'',
    padding:'',
    margin:''
}


//格式化时间
const formatTime = (time) =>{
    const newTime = new Date(time.replace(/-/g, '/'))
    return newTime
}

//当前活动是否过期
const isExpire = (endTime) =>{
    const currentTime = new Date()
    if(endTime){
        const newEndTime = formatTime(endTime)
        if(currentTime > newEndTime){
            return true
        }
    }
    return false
}

// 活动是否未开始
const isNotStart = (startTime) =>{
    const currentTime = new Date()
    if(startTime){
        const newStartTime = formatTime(startTime)
        if(currentTime < newStartTime){
            return true
        }
    }
    return false
}


//当前内容是否处在活动期内
const getDisplayBlock = (startTime,endTime)=>{
    let display = "block";

    if((endTime && isExpire(endTime)) || (startTime && isNotStart(startTime))){
        display='none'
    }

    return display
}

//获取分享的默认链接
const getShareLink = () =>{
    const url = window.location.href
    return url
}

const getHeight = ()=>{
    const winHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
    return winHeight
}

const ContainerRender = ({basicConfig, children, id = '',nodeId='',nodeType = ''}) =>{

    const shareConfig = {
        title:basicConfig.shareTitle,
        desc:basicConfig.shareSubTitle,
        imageUrl:basicConfig.shareImg,
        link:basicConfig.shareLink || getShareLink()
    }

    const wxShareConfig = {
        title:basicConfig.shareTitle,
        desc:basicConfig.shareSubTitle,
        imgUrl:basicConfig.shareImg,
        link:basicConfig.shareLink || getShareLink()
    }

    //微信分享
    if(wxShare.isInWeixin){
        if(basicConfig.isHiddenWxShare){
            wxShare.hiddenShareItems()
        }else{
            wxShare.setShareConfig(wxShareConfig);
        }
    }

    if(isInApp){

        window.onPageAppear = async () => {
            await qt.page.setNavbar({ show: true })
        }

        qt.page.setNavbar({hideShare:basicConfig.isHiddenAppShare})
        qt.page.setShare(shareConfig)
    }

    let inIosApp = qt.env.inIosApp;

    if(inIosApp){
        window.addEventListener('hashchange',function(){
            qt.page.setShare(shareConfig)
        })
    }

    useEffect(()=>{
        qt.monitor.bmsPageViewEntry({eventId: 'componentContainer_view', nodeId, nodeType});
        document.title = basicConfig.title;
        document.body.style.fontSize = '16px';
        document.body.style.background = containerConfig.bgc;
        document.body.style.backgroundImage = containerConfig.bgimg;
        document.body.style.backgroundRepeat = 'repeat'
        document.getElementById('root').minHeight = window.innerHeight
        // #demo
        if(inIosApp){
            return window.removeEventListener('hashchange',()=>{})
        }
    },[])

    const {startTime,endTime, endTitle, beforeTitle,bgc,themeColor,bgimg,style,margin,padding} = containerConfig;
    const isExpireShow = isExpire(endTime)
    const tip = (endTime && isExpireShow)?(endTitle?endTitle:'页面已过期~'):(beforeTitle?beforeTitle:'活动还未开始，敬请期待~')
    const display = getDisplayBlock(startTime,endTime)
    console.log({display});
    const currentStyle = {
        background:bgc,
        color:themeColor,
        minHeight:getHeight(),
        backgroundImage:`url(${bgimg})`,
        backgroundRepeat:'repeat',
        margin,
        padding
    }
    const useStyle = Object.assign({overflowX: 'visible'},currentStyle,style)

    return display === 'block'?<div style={useStyle}>
      {children}
      </div>:<div style={{minHeight:getHeight(),display:'flex',alignItems: 'center'}}>
        <div style={{textAlign:'center',transform:'translateY(-1rem)',width:'100%'}}>
            <div style={{width:'6rem',margin:'0 auto'}}><img style={{width:'100%'}} alt={'logo'} src={'https://pic.qingting.fm/activity/123/qtlogo.png'}/></div>
            <div style={{fontSize:'0.85rem',color:'#333',width:'100%',textAlign:'center',paddingTop:'0.5rem'}}>{tip}</div>
        </div>
    </div>
}

const ContainnerProvider = Provider('containnerProvider', ({context, children,  ...props}) => {
    const [shareConfig, setShareConfig] = useState(basicConfig);
    context.shareConfig = shareConfig;
    context.setShareConfig = setShareConfig;
    return <ContainerRender   children = {children}  basicConfig = {shareConfig} {...props} />

});

export default  ContainnerProvider;

// export default ({children})  => {
//     const basicConfig = {
//         title:'蜻蜓FM',
//         shareTitle:'蜻蜓FM',
//         shareImg:'https://sss.staging.qingting.fm/qt-builder-manage/upload_2bb66b65e93998005bb3751e72cb7f3b.png',
//         shareSubTitle:'',
//         shareLink:"",
//         isHiddenAppShare:false,
//         isHiddenWxShare:false
//     }

//     const containerConfig = {
//         startTime: '',
//         endTime:'',
//         bgc:'#fff',
//         themeColor:'#333',
//         style:{},
//         endTitle:'页面已过期~',
//         beforeTitle:'活动还未开始，敬请期待~',
//         bgimg:'',
//         padding:'',
//         margin:''
//     }
//     return <ContainnerProvider containerConfig = {containerConfig} basicConfig={basicConfig}>
//        {children}
//     </ContainnerProvider>
// }

