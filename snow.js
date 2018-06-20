
//    窗口大小
    var oPageX=screen.width;
    var oPageY=screen.height;
    var aSnow=[];
    alert(oPageX);
//    雪花模板
    function snow(x,y,xspeed,yspeed,xsin,size){//x水平位置,y垂直位置,xspeed水平步距,yspeed垂直步距,xsin振幅,size雪花大小
        this.node=document.createElement('body');
        this.x=x;
        this.y=y;
        this.xspeed=xspeed;
        this.yspeed=yspeed;
        this.xsin=xsin;
        this.size=size;
        this.createSnow=function(){
            this.node.style.position='fixed';//'absolute';
            this.node.style.top=this.y+'px';
            this.node.style.left=this.x+'px';
            this.node.innerHTML='*';
            document.body.appendChild(this.node);
        };
        //this.createSnow();
        this.snowMove=function(){
            this.node.style.top=parseInt(this.node.style.top)+this.yspeed+'px';//垂直方向运动
            this.node.style.left=parseInt(this.node.style.left)+this.xsin*Math.sin(this.xspeed)+'px';
            this.node.style.fontSize=this.size+'px';
//            this.node.style.color='rgb('+Math.ceil(Math.random()*255)+','+Math.ceil(Math.random()*255)+','+Math.ceil(Math.random()*255)+')';
        };
    }
//    创建雪花
    function createSnow(){
        aSnow.push(new snow(Math.random()*oPageX,-50,0.02+Math.random()/10,1+Math.random(),Math.random()*30,20+Math.random()*30));
    }
    setInterval(createSnow,100);//一秒钟创建一个雪花0
//    雪花移动函数
    function snowMove(){
        for(var j=0;j<aSnow.length;j++){
            aSnow[j].snowMove();
            if(parseInt(aSnow[j].node.style.top)>oPageY || parseInt(aSnow[j].node.style.left)>oPageX){
                aSnow[j].node.parentNode.removeChild(aSnow[j].node);
                aSnow.splice(j,1);
            }
        }
    }
    setInterval(snowMove,10);
