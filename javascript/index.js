const imgData=[
    {
        name:'Jordan',
        url:'https://images.pexels.com/photos/4144095/pexels-photo-4144095.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
        name:'Alex Hales',
        url:'https://images.pexels.com/photos/8363029/pexels-photo-8363029.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
        name:'Jonathan',
        url:'https://images.pexels.com/photos/5212334/pexels-photo-5212334.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
        name:'Alex Carry',
        url:'https://images.pexels.com/photos/5905621/pexels-photo-5905621.jpeg?auto=compress&cs=tinysrgb&w=600'
    }
];
const videoData=[
    {
        url:'https://player.vimeo.com/external/554175140.sd.mp4?s=d99498b1bcf1c831873dafce08cf566c2e46d9d2&profile_id=165&oauth2_token_id=57447761'
    }
];
const playImg=[
    {
        url:'https://images.pexels.com/photos/8613319/pexels-photo-8613319.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
        url:'https://images.pexels.com/photos/8926648/pexels-photo-8926648.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
        url:'https://images.pexels.com/photos/8422262/pexels-photo-8422262.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
        url:'https://images.pexels.com/photos/8613366/pexels-photo-8613366.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
        url:'https://images.pexels.com/photos/8535193/pexels-photo-8535193.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
        url:'	https://images.pexels.com/photos/8471799/pexels-photo-8471799.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
        url:'https://images.pexels.com/photos/5427855/pexels-photo-5427855.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
        url:'	https://images.pexels.com/photos/3041176/pexels-photo-3041176.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
        url:'https://images.pexels.com/photos/3425993/pexels-photo-3425993.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
        url:'	https://images.pexels.com/photos/2968077/pexels-photo-2968077.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
        url:'https://images.pexels.com/photos/2202685/pexels-photo-2202685.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
        url:'	https://images.pexels.com/photos/261060/pexels-photo-261060.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
        url:'	https://images.pexels.com/photos/207693/pexels-photo-207693.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
        url:'	https://images.pexels.com/photos/8941640/pexels-photo-8941640.jpeg?auto=compress&cs=tinysrgb&w=600'
    },

];
const pillars=[
    {
        
        url:'https://images.pexels.com/photos/3760514/pexels-photo-3760514.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
         url:'https://images.pexels.com/photos/8085252/pexels-photo-8085252.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
        
        url:'https://images.pexels.com/photos/864994/pexels-photo-864994.jpeg?auto=compress&cs=tinysrgb&w=600'
    }
];
const message=[
    {
        sender: "Robart Dsoza",
        msg:`I hope the school graduates will become leaders of their chosen fields and contribute positively towards the progress of our nation and of humanity at large. May the beacon of truth and knowledge show us the right path.`,
        designation:"Chairman"
    },
    {
        sender:"Lucy",
        msg:`Wishing all the students, staff, and faculty of this school a wonderful and successful year! May you all find joy in learning and growing together.`,
        designation:"Director"
    },
    {
        sender:"Alice Capsey",
        msg:`I am hugely impressed by the commitment of the management and the staff for providing excellent all-round education for our students in our state of the art facilities`,
        designation:"Principal"
    }
];

const navbar=document.querySelector("#navbar");

window.addEventListener('scroll',()=>{
if(window.scrollY>100){
    navbar.style.position='fixed';
    navbar.style.top='0';
    navbar.style.left='0';
    navbar.style.width='100%';
}else{
    navbar.style.position='fixed';
    navbar.style.top='0';
    navbar.style.left='0';
    navbar.style.width='100%';
}
});
const imageContainer=document.querySelector(".div-md-2");
const image=document.createElement('img');
image.setAttribute("id","img-col-1");
image.style.height='432px';
image.style.width='382px';
image.style.borderTopLeftRadius="20px";
image.style.borderTopRightRadius="20px";
image.style.top='0';
image.style.left='0';
image.style.backgroundSize="cover";
image.style.backgroundPosition="center";
image.style.zIndex='-1';
imageContainer.appendChild(image);
const imageObj=document.querySelector("#img-col-1");
let currentIndex=0;
function changeImage(){
    const currentImage=pillars[currentIndex];
    imageObj.src=currentImage.url;
    currentIndex=(currentIndex+1) % pillars.length;
    setTimeout(changeImage, 5000);
}
changeImage();
const address=document.querySelector(".div-md-3");
const develop=document.createElement("p");
develop.style.fontSize='14px';
develop.style.paddingLeft='10px';
develop.style.color='black';
develop.style.opacity='200%';
develop.style.paddingTop='10px';
develop.setAttribute('id','address');
address.appendChild(develop);
const enterMessage=document.querySelector("#address");
let currentCount=0;
function changeMessage(){
    const currentMessage=message[currentCount];
    enterMessage.textContent=currentMessage.msg;
    currentCount=(currentCount+1) % message.length;
    setTimeout(changeMessage, 5000);
}
changeMessage();
const address1=document.querySelector(".div-md-3");
const develop1=document.createElement("div");
develop1.setAttribute('id',"address1");
develop1.style.paddingTop='5px';
develop1.style.paddingLeft='10px';
develop1.style.color='red';
develop1.style.fontWeight='bold';
address1.appendChild(develop1);
const enterName=document.querySelector("#address1");
let nameCount=0;
function changeName(){
    const currentName=message[nameCount];
    enterName.textContent=currentName.sender;
    nameCount=(nameCount+1) % message.length;
    setTimeout(changeName, 5000);
}
changeName();
const address2=document.querySelector(".div-md-3");
const develop2=document.createElement("div");
develop2.setAttribute('id',"address2");
develop2.style.paddingTop='5px';
develop2.style.paddingLeft='10px';
develop2.style.color='black';
develop2.style.fontWeight='bold';
address2.appendChild(develop2);
const enterdes=document.querySelector("#address2");
let desCount=0;
function changeDes(){
    const currentName=message[desCount];
    enterdes.textContent=currentName.designation;
    desCount=(desCount+1) % message.length;
    setTimeout(changeDes, 5000);
}
changeDes();
const detail=[
    {
        url:'https://images.pexels.com/photos/716411/pexels-photo-716411.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
        url:'https://images.pexels.com/photos/450212/pexels-photo-450212.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
        url:'https://images.pexels.com/photos/6968548/pexels-photo-6968548.jpeg?auto=compress&cs=tinysrgb&w=600'
    }
];
const studentData=[
    {
        id:'Steve John',
        percentage:`Batch - 2017`,
        post:` Software Developer`
    },
    {
        id:'Alex Smith',
        percentage:`Batch - 2014`,
        post:`CEO - InfraTech`
    },
    {
        id:"Jason Roy",
        percentage:`Batch - 2015`,
        post:'CEO - Alexander Hotels'
    }
];
function throttle(func, delay) {
    let lastExecution = 0;

    return function() {
        const context = this;
        const args = arguments;
        const now = Date.now();

        if (now - lastExecution >= delay) {
            func.apply(context, args);
            lastExecution = now;
        }
    };
}

const throttledFunction = throttle(function careerLaunch() {
    console.log("Function executed!");

        const h1=document.getElementById("flow-md-2");
        const head=document.createElement('h1');
        head.textContent="Launch a Sustainable Career & Develop Skills";
        head.style.textAlign="center";
        head.style.marginTop="20px";
        head.style.fontSize='18px';
        head.style.color="#080707";
        h1.appendChild(head);
        const firstDiv=document.createElement("div");
        firstDiv.setAttribute("class","row mt-4");
        firstDiv.style.height='430px';
        firstDiv.style.width="90%";
        firstDiv.style.margin="auto";
        firstDiv.style.marginTop='20px';
        firstDiv.style.display='flex';
        firstDiv.style.justifyContent="space-evenly";
        firstDiv.style.alignItems="center";
        h1.appendChild(firstDiv);
        for(let i=0;i<3;i++){
            const rowDiv=document.createElement("div");
            rowDiv.setAttribute("id",("col-sm-6 col-lg-4 col-xl-3")+(i+0));
            rowDiv.style.height="400px";
            rowDiv.style.width="232px";
            firstDiv.appendChild(rowDiv);
            for(let i=0;i<4;i++){
                const parentDiv=document.createElement('div');
                parentDiv.setAttribute('id',("img1")+(i+0))
                rowDiv.appendChild(parentDiv);
            }
        }
       const getImgs=document.querySelectorAll("#img10");
       const getImg=detail.map(items=>{
        const imgGet=document.createElement("img");
        imgGet.src=items.url;
        imgGet.style.height="200px";
        imgGet.style.width="200px";
        imgGet.style.borderRadius="50%";
        return imgGet;
       });
       getImg.forEach((imgGet,i)=>{
        getImgs[i].appendChild(imgGet);
       });
       const enterName=document.querySelectorAll("#img11");
       const getName=studentData.map(items=>{
        const updateName=document.createElement("p");
        updateName.style.textAlign="center";
        updateName.style.marginTop="20px";
        updateName.style.fontWeight="bold";
        updateName.textContent=items.id;
        return updateName;
       });
       getName.forEach((updateName,i)=>{
        enterName[i].appendChild(updateName);
       });
       const enterBatch=document.querySelectorAll("#img12");
       const getBatch=studentData.map(items=>{
        const updateBatch=document.createElement("p");
        updateBatch.style.textAlign="center";
        updateBatch.style.marginTop="20px";
        updateBatch.style.fontWeight="bold";
        updateBatch.style.color="#262626";
        updateBatch.textContent=items.percentage;
        return updateBatch;
       });
       getBatch.forEach((updateBatch,i)=>{
        enterBatch[i].appendChild(updateBatch);
       });
       const enterPost=document.querySelectorAll("#img13");
       const getPost=studentData.map(items=>{
        const updatePost=document.createElement("p");
        updatePost.style.textAlign="center";
        updatePost.style.marginTop="20px";
        updatePost.style.fontWeight="bold";
        updatePost.style.color="#262626";
        updatePost.textContent=items.post;
        return updatePost;
       });
       getPost.forEach((updatePost,i)=>{
        enterPost[i].appendChild(updatePost);
       });
    }, 1000);

// Call throttledFunction multiple times
throttledFunction();
throttledFunction();
throttledFunction();


