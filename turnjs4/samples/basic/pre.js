////letterss display..........
window.addEventListener('DOMContentLoaded', () => {

    const textContainer = document.getElementById('mes');
    textContainer.innerHTML += "";
    var me="I Didn't even told to my closed one that How much you're close to my heart...... Coz,My closed one is you!!!..."
    const text = me.trim();
    const letters = text.split('');
  
    let delay = 70; // Delay between displaying each letter in milliseconds
    let i = 0;
    console.log(letters)
    function displayNextLetter() {
      if (i < letters.length) {
        textContainer.innerHTML += letters[i];
        i++;
        setTimeout(displayNextLetter, 40);
      }
    }
  
    setTimeout(displayNextLetter, delay);
  });



//closing the popupp.......
function cl(){
    pop.style="display:none;"
    ///tostop the music when close is clicked.......
    stop()
    
}
window.addEventListener("click", function (event) {
    if (event.target == pop) {
       pop.style.display="none";
       stop()
    }
});


/////stopppppp music...///clolse buttonnnnn
function stop(){
    for(let i=0;i<song.length;i++){
        song[i].pause()
    }
    
    audio_tr.pause()  ;
    video.pause();
    bl.pause();
    video_2.pause();
    // fi_v.pause()
    audio_ch.pause();
    video_lst.pause()

    w33.innerHTML=te_w33
}



///keys clicking........
var booke=document.querySelector(".book")
var pop_con=document.getElementById("pop_con");
var keyss=document.querySelectorAll(".white,.bl")
var pop=document.getElementById("pop")
console.log(keyss[0])
for(let i of keyss){
i.addEventListener("click",function(){
    if(i!=booke){
    pop.style="display:block;"
    }
})

}



// spotify.....
//expand the respdctive div
function exp(div){
    var load=document.querySelectorAll(".load")
    var spp=document.querySelectorAll(".spp")
    for(let i=0;i<load.length;i++){
        if(load[i]==div){
            load[i].style="flex:5; justify-content:start";
            spp[i].style="filter:grayscale(0);"
        }
        else{
            load[i].style="flex:1; justify-content:center";
            spp[i].style="filter:grayscale(1);"
        }
    }
    
}
//gloww..
function gl(){
    var sp=document.querySelectorAll(".sp");
    sp[0].classList.add("trr");
   
}

///function music/.....
var isp=[false,false,false,false,false,false,false,false,false];
var ado=['song/s1.mp3','song/s2.mp3','song/s3.mp3','song/s4.mp3','song/s5.mp3','song/s6.mp3','song/s7.mp3','song/s8.mp3','song/s9.mp3']
var song=[]
var tr=document.querySelectorAll(".tr")
for(let j=0;j<tr.length;j++){
 song.push(new Audio(ado[j]))
}
function music(div){
    console.log(div)
    
    var pl=document.querySelectorAll(".play")
    var pu=document.querySelectorAll(".pause")
   
   console.log(pl)
    for(let i=0;i<tr.length;i++){
        if(div==tr[i]&&isp[i]==false){
            pl[i].classList.add("pp")
            pu[i].classList.remove("pp")
            song[i].play();
            isp[i]=true;
            tr[i].classList.add("playing")
           
        }
        else if(div==tr[i]&&isp[i]==true){
            pu[i].classList.add("pp")
            song[i].pause();
            pl[i].classList.remove("pp")
            tr[i].classList.add("playing")
            isp[i]=false;
            // console.log(isp)
        }
        else{
            pl[i].classList.remove("pp")
            pu[i].classList.add("pp")
            isp[i]=false;
            song[i].pause();
            tr[i].classList.remove("playing")
            // console.log(isp)
        }
    }
    

}

//w4 and nine songsssss........
var key=document.querySelectorAll(".kk")
var pro=document.querySelectorAll(".pro")


for(let i of pro){
    i.classList.add("rem");
}
function nin(kee,ee){
    

console.log(pro)
    for(let i=0;i<key.length;i++){
        
        if(key[i]==kee){
            pro[i].classList.remove("rem");
        }
        else{
            pro[i].classList.add("rem");
        }
    }
    if(ee==1){

    }
}

///to play the troll musicccc.....
var ispp=false
var audio_tr=new Audio('song/troll.mp3')
var pau_tr=document.querySelector(".pause_tr");
var pla_tr=document.querySelector(".play_tr");
function music_tr(tr){
    if (ispp) {
        audio_tr.pause();
        ispp = false;
        pau_tr.classList.add("pp")
        pla_tr.classList.remove("pp")
        // console.log(tr_mu);
        // tr_mu.pause();
        ispp=false;
        console.log("pause")
        tr.classList.add("playing")
    } else {
        pla_tr.classList.add("pp")
        pau_tr.classList.remove("pp")
        audio_tr.play();
        ispp=true;
        tr.classList.add("playing")
        console.log("play")
    }

}

//heart when clicked
var isc=false;
function hrt(hrt){
var ic=document.querySelector(".ic");
// var hrt=document.getElementById("hrt");
if(isc==false){
    hrt.classList.add("mkc");
    hrt.classList.add("hrt_click")
    hrt.classList.remove("hrt_shake")
   
    
    
    isc=true
}
else{
    isc=false
    hrt.classList.add("hrt_shake")
    hrt.addEventListener("animationend",function(){
        hrt.classList.remove("hrtt");
        hrt.style="cursor:pointer;"
    })
    hrt.classList.remove("mkc");
    hrt.classList.remove("hrt_click")
    hrt.classList.add("hrt_rem")
    console.log("dc")
    
}
hrt.addEventListener("mouseout",function(){
    hrt.classList.add("hrtt")
})

}
///download....
function down(musicc,n){
    // var musicc='song/troll.mp3';
    var lnk=document.createElement('a');
    lnk.href=musicc;
    if(n==1)
    lnk.download='vox';
    else
    lnk.download='uyire'
    document.body.appendChild(lnk);
    lnk.click();
    document.body.removeChild(lnk);
}




////nxt....
var w=document.getElementById("slider")
var ro=-2;
for(let i=w.children.length-2;i>=0;i--){
    ro=ro*(w.children.length-i)+1;
    w.children[i].style.transform="rotate(" + ro + "deg)";
    ro=-2;
}

var nxt=document.getElementById("nxt")
var pre=document.getElementById("pre")
console.log(pre)
pre.style.display="none"
function pree(){
    nxt.style.display="block"
    var last=document.querySelector(".last")
    var z=document.getElementById("z")
    // console.log(last[0])
     last.classList.add("eshow")
     last.classList.remove("slideshow")
     last.classList.add("first")
     
     
    for(let i=0;i<w.children.length;i++){
        if(w.children[i]!=last){
        w.children[i].classList.remove("first")
        
       
        }
       else if(i==w.children.length-1){
        pre.style.display="none"
       }
        else{
            
            w.children[i+1].classList.add("last")
            pre.style.display="block"
        }
    }
    last.classList.remove("last")
    // console.log(last[0])

}

var sss=1
var roo=2
function nxtt(){
    
    pre.style.display="block"
    var first=document.querySelector(".first")
    first.classList.remove("eshow")
    first.classList.add("slideshow")
    first.classList.add("last")
    
    
    for(let i=0;i<w.children.length;i++){
        if(w.children[i]!=first){
        w.children[i].classList.remove("last")
        // w.children[i].style.transform="rotate(" + roo*sss + "deg)";
        sss++;
        
        }
        if(w.children[i]==first && i!=0){
            nxt.style.display="block"
            w.children[i-1].classList.add("first")
           
            
        }
        if(i==0){
        nxt.style.display="none"
        }
       
    }
    first.classList.remove("first")
}
//book.....
function book(){
    window.open("../basic/in2.html","_blank")
}
///////////press and nxt in thrid section..........
var clk=document.querySelector(".clk")
clk.innerHTML=""

var im=document.querySelectorAll(".im_thr")
var prs_but=document.querySelector('.prs')
var nt_but=document.querySelector('.nxt_thr')
function prs() {
    prs_but.classList.add('none')
    nt_but.classList.remove('none')
    let iii=0;
    console.log(im)
    let myin
    times=1;
    console.log(im)
    function up(){
        // im[iii].style="display:block;"       
        im[iii].classList.add("ani")
        im[iii].classList.remove("none")
        im[iii].classList.remove("dis")
        iii++
        // console.log(iii)
        if(iii==im.length){
            clearInterval(myin)
        }
}
     myin=setInterval(up,850)
times++


}
var cov=document.querySelectorAll(".co")
var ques=document.querySelectorAll(".ques")
var im__=document.querySelectorAll(".im__")
function nxt_thr(){
    clk.classList.remove('none')
    nt_but.classList.add('none')

    var clk_t="Click them..."
    var clkkk=clk_t.split("")
    let delay = 100; // Delay between displaying each letter in milliseconds
        let i = 0;
        
        function displayNextLetter() {
          if (i < clkkk.length) {
            clk.innerHTML += clkkk[i];
            i++;
            setTimeout(displayNextLetter, 150);
          }
        }
      
        setTimeout(displayNextLetter, delay);
      
    



    let car=0
    let time=0;
    let pre_crd=0;
    let myint;
    function upp(){
        im[car].classList.add('crd_h');
        // im[car].setAttribute('src',"img/n2.jpg")
        console.log(im[car])
        cov[car].classList.add('cov');
        
        ques[car].classList.add('q_sh');
       ques[car].classList.remove("none")
       
        
        
        car++ 
            
        if(car==im.length){
            clearInterval(myint)
            }
        }
     myint=setInterval(upp,1000)
       
}

///invertted image array.....

var in_img_ar=['img/photo 5.jpg','img/photo 6.jpg','img/photo 7.jpg','img/photo 8.jpg']
function doo(divv,i){
    im__[i].setAttribute('src',in_img_ar[i])
    im__[i].style="rotate:180deg;"
    divv.classList.add("cov_down")
    
}

// troll image.........

function tr_(){
    var tr_=document.querySelector(".tr_")
    var hvr_=document.querySelector(".hvr_")
    tr_.classList.remove("tr_po")
    hvr_.classList.remove("hvr_co")
  
    console.log("sa")
}
function trr_(){
    var tr_=document.querySelector(".tr_")
    var hvr_=document.querySelector(".hvr_")
    
    hvr_.classList.add("hvr_co")
    tr_.classList.add("tr_po")
  
}


var audio_ch=new Audio('song/uyire.mp3')
var isch=false;

var shakco=0;
let hoco=0;
var plco=1;
let cubco=0;
var clss=['ch1','ch2','ch3','ch4']
var cub=document.querySelectorAll('.cub')
// var bg_=document.querySelector('.bg_')
var ch_img=document.querySelector(".ch_img")
var nht=document.querySelector('.night')
let ch_ic=document.querySelector(".ch_ic")


let details = navigator.userAgent;
let regexp = /android|iphone|kindle|ipad/i;
let isMobileDevice = regexp.test(details);


function ch_h(){
///// shaking for the first time...................
ch_ic.style="display:flex;"
hoco=1
if(shakco==0&&plco==1){
nht.style="display:none"
ch_img.classList.add('fl')
var myt=setInterval(()=>{
    // bg_.classList.add('bg_im')
            clearTimeout(myt)
    
},380)
var ch_hh=document.querySelector(".ch_h")
ch_hh.classList.add("ch_hh")

for(let i=0;i<cub.length;i++){
    cub[i].classList.add(clss[i]);
    // cub[i].style="display=none";
    
}

// to start while hover......
if(!isch&&plco==1){
sng_pr.style.display="block";
pla_ch.classList.add("pp")
pau_ch.classList.remove("pp")
audio_ch.play();
plco=2;
isch=true
pau_ch.classList.add("playing")
console.log("play")

}
}
else if(cubco==0 && shakco==1){
    let ft=setTimeout(()=>{
        ch_img.classList.remove("fl")
        nht.style="display:block"
        /////// to find phone or tablet;;;;;
        
    

        if (isMobileDevice) {
            ch_img.style="margin-top:100px";
        } else {
            ch_img.style="margin-top:40px";
        }
        
    },250)
}
    
    
}
function cubc(){
    cubco=1
}
function cub_o(){
    cubco=0
}
function cou(){
    if(hoco==0){
    shakco=0;
    }
    else{
        ch_img.classList.add("fl")
        nht.style="display:none"
        if (isMobileDevice) {
            ch_img.style="margin-top:100px";
        } else {
            ch_img.style="margin-top:0px";
        }
        shakco=1
        
    }
}

////to play float music........

var pau_ch=document.querySelector(".pause_ch");
var pla_ch=document.querySelector(".play_ch");
function music_ch(){
    sng_pr.style.display="block";
    // alert("clicked...")
    if (isch) {
        audio_ch.pause();
        isch = false;
        pau_ch.classList.add("pp")
        pla_ch.classList.remove("pp")
        plco=2;
        // console.log(tr_mu);
        // tr_mu.pause();
        isch=false;
        console.log("pause")
        pla_ch.classList.add("playing")
    } else {
        pla_ch.classList.add("pp")
        pau_ch.classList.remove("pp")
        audio_ch.play();
        isch=true;
        pau_ch.classList.add("playing")
        console.log("play")
    }

}

//// song forward and backward............
let aud=document.getElementById("aud")
let pr_per=document.querySelector(".pr_per");
let sng_pr=document.querySelector(".sng_pr");

sng_pr.addEventListener("click",(e)=>{
    // var audio_ch=new Audio('song/uyire.mp3');
    let wid=sng_pr.clientWidth
    let clk_wid=e.offsetX
    const dur=audio_ch.duration
    let new_dur=(clk_wid/wid)*dur;

        if (isMobileDevice) {

        } 
        else {
            console.log(new_dur)
            audio_ch.currentTime=new_dur;
        }

   
   
    
})

audio_ch.addEventListener("timeupdate",(e)=>{
    const dur=e.srcElement.duration;
    const ctime=e.srcElement.currentTime;
    const sng_pro=(ctime/dur)*100;
    pr_per.style.width=`${sng_pro}%`
    if(ctime==dur){
        audio_ch.pause();
        isch = false;
        pau_ch.classList.add("pp")
        pla_ch.classList.remove("pp")
        // console.log(tr_mu);
        // tr_mu.pause();
        isch=false;
        console.log("pause")
        pla_ch.classList.add("playing")
 }
})

function per(){
    ch_img.classList.remove('fl')
}
 
function per_o(){
    ch_img.classList.add('fl')
}
// sng_pr.addEventListener("on")
let per_conta=document.querySelector(".per_con")
function handleTouch(event) {
    const resizableDiv = pr_per
    const audio = audio_ch;
    let isResizing = false;
    let startPositionX, startWidth;

    resizableDiv.addEventListener('touchstart', initResize, false);
    window.addEventListener('touchmove', resizeDiv, false);
    window.addEventListener('touchend', stopResize, false);

    function initResize(e) {
      isResizing = true;
      startPositionX = e.touches[0].clientX;
      startWidth = parseInt(document.defaultView.getComputedStyle(resizableDiv).width, 10);

      // Pause the audio while resizing to prevent accidental playback jumps
      audio.pause();
    }

    function resizeDiv(e) {
      if (!isResizing) return;
      const touchX = e.touches[0].clientX;
      const width = startWidth + touchX - startPositionX;
      resizableDiv.style.width = width + 'px';

      // Update audio's current time based on the div width
      const progress = width / resizableDiv.parentElement.clientWidth;
      const newTime = progress * audio.duration;
      audio.currentTime = newTime;

    }

    function stopResize() {
      isResizing = false;

      // Resume audio playback when resizing is complete
      audio.play();
      pla_ch.classList.add("pp")
      pau_ch.classList.remove("pp")
      audio_ch.play();
      isch=true;
      pau_ch.classList.add("playing")
      console.log("play")
    }

    // Update div width based on audio progress
    function updateDivWidth() {
      const progress = (audio.currentTime / audio.duration) * 100;
      resizableDiv.style.width = progress + '%';
      requestAnimationFrame(updateDivWidth);
    }

    // Listen for the audio "play" event to start updating the div width
    audio.addEventListener('play', () => {
      updateDivWidth();
    });
  }
 //////////////////////


 





 
 const ctx = canvas2.getContext("2d");
 canvas2.width = window.innerWidth;
 canvas2.height = window.innerHeight;
 let cx = ctx.canvas.width / 2;
 let cy = ctx.canvas.height / 2;

 let confetti = [];
 const confettiCount = 1000; // Increase the number of confetti particles
 const gravity = 0.5;
 const terminalVelocity = 5;
 const drag = 0.075;
 const colors = [
   { front: 'red', back: 'darkred' },
   { front: 'green', back: 'darkgreen' },
   { front: 'blue', back: 'darkblue' },
   { front: 'yellow', back: 'darkyellow' },
   { front: 'orange', back: 'darkorange' },
   { front: 'pink', back: 'darkpink' },
   { front: 'purple', back: 'darkpurple' },
   { front: 'turquoise', back: 'darkturquoise' }
 ];

 const resizecanvas2 = () => {
   canvas2.width = window.innerWidth;
   canvas2.height = window.innerHeight;
   cx = ctx.canvas.width / 2;
   cy = ctx.canvas.height / 2;
 };

 const randomRange = (min, max) => Math.random() * (max - min) + min;

 const initConfetti = () => {
   for (let i = 0; i < confettiCount; i++) {
     confetti.push({
       color: colors[Math.floor(randomRange(0, colors.length))],
       dimensions: {
         x: randomRange(12, 18), // Increase the width of the confetti particles
         y: randomRange(12, 22)   // Increase the height of the confetti particles
       },
       position: {
         x: randomRange(0, canvas2.width),
         y: canvas2.height - 1
       },
       rotation: randomRange(0, 2 * Math.PI),
       scale: {
         x: 1,
         y: 1
       },
       velocity: {
         x: randomRange(-25, 25),
         y: randomRange(0, -50)
       }
     });
   }
 };

 const render = () => {
   ctx.clearRect(0, 0, canvas2.width, canvas2.height);

   confetti.forEach((confetto, index) => {
     let width = confetto.dimensions.x * confetto.scale.x;
     let height = confetto.dimensions.y * confetto.scale.y;

     ctx.translate(confetto.position.x, confetto.position.y);
     ctx.rotate(confetto.rotation);

     confetto.velocity.x -= confetto.velocity.x * drag;
     confetto.velocity.y = Math.min(confetto.velocity.y + gravity, terminalVelocity);
     confetto.velocity.x += Math.random() > 0.5 ? Math.random() : -Math.random();

     confetto.position.x += confetto.velocity.x;
     confetto.position.y += confetto.velocity.y;

     if (confetto.position.y >= canvas2.height) confetti.splice(index, 1);

     if (confetto.position.x > canvas2.width) confetto.position.x = 0;
     if (confetto.position.x < 0) confetto.position.x = canvas2.width;

     confetto.scale.y = Math.cos(confetto.position.y * 0.1);
     ctx.fillStyle = confetto.scale.y > 0 ? confetto.color.front : confetto.color.back;

     ctx.fillRect(-width / 2, -height / 2, width, height);

     ctx.setTransform(1, 0, 0, 1, 0, 0);
   });

   if (confetti.length <= 10) initConfetti();

   window.requestAnimationFrame(render);
 };

 initConfetti();
 render();

 window.addEventListener('resize', () => {
   resizecanvas2();
 });

 window.addEventListener('click', () => {
   initConfetti();
 });




//  ////// last pre keyyyyyyyyyyyyyyyyyyyyyyyy............................................
let w6=document.querySelector(".w6")
var video = document.getElementById("video_lt");
w6.addEventListener("click", function() {
    // alert("sa")
 
    video.play();
});

let w66=document.querySelector(".w5")
var video_2 = document.getElementById("video_ltt");
w66.addEventListener("click", function() {
    // alert("sa")
 
    video_2.play();
});


///// last key.......
let w7=document.querySelector(".w7");
let ct_con=document.querySelector(".ct_con")
let video_lst = document.getElementById("video_lst");
let ct=4;
let bl=new Audio("song/bl.mp3")
w7.addEventListener("click", function() {
    console.log("igcdcui");
  
    console.log()
    bl.play()
    
    
    let ct_nm=document.querySelector(".ct_nm")
    console.log(ct_nm)
    let ct_=setInterval(()=>{
        ct_nm.innerHTML=ct--
        
        if(ct==0){
            console.log("kcb")
            clearInterval(ct_)
           celeb()
        }
    },1000)
    

});


/////function celeb.....,.
let can_va=document.querySelector(".confetti")
can_va.height="1000"
can_va.width="1500"
function celeb() {
    // ct_con.style="display:none"
    ct_con.classList.add("ct_dis");
  
    let pop_t=setTimeout(()=>{
        
        
        can_va.style="display:block";
        can_va.click()
        clearTimeout(pop_t)
    },1100)

    let pop_v=setTimeout(()=>{
        video_lst.play()
        
        clearTimeout(pop_v)
    },3500)

    
    let pop_dis_t=setTimeout(()=>{
        can_va.style="display:none";
        clearTimeout(pop_t)

    },3500)

}

/////img_diiii

let im_di=document.querySelectorAll(".im_di");
let im_di_con=document.querySelector(".im_di_con");
let q_fl={
    1: 'GREEN,RED',
    2: 'VIJAY,RAJINI ',
    3: 'ASHOK SELVAN,HARISH KALYAN',
    4: 'BLUE LAYS,RED LAYS',
    5:'UG,PG',
    6:'FICTION,NON-FICTION',
    7:'RUGGED,CHOCO GIRL',
    8:'DAYSCHOLAR,HOSTELLER_LIFE',
    9:'KEYBOARD,FLUTE'
}
let re_co=0;
let answers=['GREEN','RAJINI','ASHOK SELVAN','BLUE LAYS','PG','NON-FICTION','CHOCO GIRL','HOSTELLER_LIFE','FLUTE']
let wrn_ans=['RED','VIJAY','HARISH KALYAN','RED LAYS','UG','FICTION','RUGGED','DAYSCHOLAR','KEYBOARD']
let temp_html=im_di_con.innerHTML;
function ques_fl(no){
    let data=q_fl[no].split(",")

    im_di_con.innerHTML=`
            <p class="ch_o">choose one</p>
            <div>
            <button class="ques_butt" onclick=res_(this) >${data[0]}</button>
           <button class="ques_butt" onclick=res_(this) >${data[1]}</button>
           </div>
    `

}
var reveal = [];
function res_(butt_){
    console.log(butt_.innerText)
    console.log(reveal)
   
    if(answers.includes(butt_.innerText)){
        let ans_in=answers.indexOf(butt_.innerText)
       
       
        im_di_con.innerHTML=temp_html;
        let im_di=document.querySelectorAll(".im_di");
        if(re_co>0){
            for(let i=0;i<reveal.length;i++){
                im_di[reveal[i]].style="display:none";
                console.log("sakr")
            }
        }
        im_di[ans_in].classList.add("yes")
        reveal.push(ans_in)
        re_co++;
        console.log(ans_in)
        console.log(re_co)
        
      
    }
    else{
        im_di_con.innerHTML=temp_html;
         let ans_in=wrn_ans.indexOf(butt_.innerText)
       
        let im_di=document.querySelectorAll(".im_di");
        if(re_co!=0){
            for(let i=0;i<reveal.length;i++){
                im_di[reveal[i]].style="display:none";
            }
        }
        im_di[ans_in].classList.add("wrn")
    }
    
}
let fi_v=document.querySelector(".fi_v")
let vd=['img/vd1.mp4','img/vd2.mp4','img/vd3.mp4']
let w33=document.querySelector(".w33")
var te_w33=w33.innerHTML;
function vid(n){
    w33.innerHTML=`<video class="fi_v" autoplay controls>
                         <source  src="${vd[n-1]}" type="video/mp4">
                </video>`
    
}
