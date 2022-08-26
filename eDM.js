window.onload = function() {
  const shotLink = document.querySelectorAll(".shot-link");
  const imgLink = document.querySelectorAll(".img-link");

  function getshotLink() {
    const shotlinkList = [
    'https://link.a-rt.com/97ezhz', 
    'https://link.a-rt.com/dvgjoo', 
    'https://link.a-rt.com/u2ettn', 
    'https://link.a-rt.com/1xhdun', 
    'https://link.a-rt.com/zxjjm8', 
    'https://link.a-rt.com/blqyz3', 
    'https://link.a-rt.com/dtbspx', 
    'https://link.a-rt.com/cczhih', 
    'https://link.a-rt.com/csdmlj', 
    'https://link.a-rt.com/zjxvcu', 
    'https://link.a-rt.com/1r6sl2', 
    'https://link.a-rt.com/vlhmoh', 
    'https://link.a-rt.com/xsrjms', 
    'https://link.a-rt.com/vzyx9e', 
    'https://link.a-rt.com/mccsqd', 
    'https://link.a-rt.com/t86znb', 
    'https://link.a-rt.com/jdmb3p', 
    'https://link.a-rt.com/4cpstw', 
    'https://link.a-rt.com/hrmfzc', 
    'https://link.a-rt.com/hsugnn', 
    'https://link.a-rt.com/tktjto', 
    'https://link.a-rt.com/c7x28q', 
    'https://link.a-rt.com/lzxdbp', 
    'https://link.a-rt.com/wiixuq', 
    'https://link.a-rt.com/wequeg', 
    'https://link.a-rt.com/nqyrmu', 
    'https://link.a-rt.com/pgdpnd', 
    'https://link.a-rt.com/bozosz', 
    'https://link.a-rt.com/c6723s', 
    'https://link.a-rt.com/niou0e', 
    'https://link.a-rt.com/mobiwm', 
    'https://link.a-rt.com/ltve2h', 
    'https://link.a-rt.com/a0rzl7', 
    'https://link.a-rt.com/aho2i9', 
    'https://link.a-rt.com/a0qlxo', 
    'https://link.a-rt.com/etjvyn'
    ];

    for (let i=0; i<shotlinkList.length; i++) {
      shotLink[i].setAttribute('href', shotlinkList[i]);
    }
  }
  function getimgLink() {
    const imglinkList = [
    'https://image.a-rt.com//art/promotion/event/202208/1661318316466.jpg', 
    'https://image.a-rt.com//art/promotion/event/202208/1661318574531.jpg', 
    'https://image.a-rt.com//art/promotion/event/202208/1661318762159.jpg', 
    'https://image.a-rt.com//art/promotion/event/202208/1661318980629.jpg', 
    'https://image.a-rt.com//art/promotion/event/202208/1661469345778.jpg', 
    'https://image.a-rt.com//art/promotion/event/202208/1661319360012.jpg'
    ];

    for (let i=0; i<imglinkList.length; i++) {
      imgLink[i].setAttribute('src', imglinkList[i]);
    }
  }

  getshotLink();
  getimgLink();
}