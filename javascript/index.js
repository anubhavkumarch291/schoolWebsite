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

/* <script>
  const imageObjects = [
    { id: 1, src: 'image1.jpg' },
    { id: 2, src: 'image2.jpg' },
    { id: 3, src: 'image3.jpg' },
    { id: 4, src: 'image4.jpg' },
    { id: 5, src: 'image5.jpg' }
  ];

  const imageContainer = document.getElementById('slideshow-image');
  let currentIndex = 0;

  function changeImage() {
    const currentImage = imageObjects[currentIndex];
    imageContainer.src = currentImage.src;
    currentIndex = (currentIndex + 1) % imageObjects.length; // Cycle through images
    setTimeout(changeImage, 2000); // Change image every 2 seconds
  }

  // Start the slideshow
  changeImage();
// </script> */
// const logoImg=[
//     {
//         url:'https://images.unsplash.com/photo-1493612276216-ee3925520721?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHNjaG9vbCUyMG5hbWV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
//     }
// ];
// const logo=document.querySelectorAll("#nav-1");
// const imgElements=logoImg.map(itemObj=>{
//     const item=document.createElement('img');
//     item.src=itemObj.url;
//     item.style.height='50px';
//     item.style.width='400px';
//     return item
// });
// imgElements.forEach((item,i)=>{
//     logo[i].appendChild(item);
// });