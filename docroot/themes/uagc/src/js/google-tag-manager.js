//Bot detection from here:
//https://antoinevastel.com/bot%20detection/2018/01/17/detect-chrome-headless-v2.html


if (document.cookie.indexOf('donttrackme') < 0) {


    var addGTM = true;


    if (/HeadlessChrome/.test(window.navigator.userAgent)) {
       addGTM = false;
    }

    if (navigator.webdriver) {
        addGTM = false;
    }

    var isChrome = false;
    var isChromium = window.chrome;
    var winNav = window.navigator;
    var vendorName = winNav.vendor;
    var isOpera = typeof window.opr !== "undefined";
    var isIEedge = winNav.userAgent.indexOf("Edge") > -1;
    var isIOSChrome = winNav.userAgent.match("CriOS");
    
    if (isIOSChrome) {

    } else if(
      isChromium !== null &&
      typeof isChromium !== "undefined" &&
      vendorName === "Google Inc." &&
      isOpera === false &&
      isIEedge === false
    ) {
       isChrome = true;
    }


    if (isChrome && !window.chrome) {
        addGTM = false;;
    }



    if (isChrome) {
        
        var perms = navigator.permissions.query({name:'notifications'});

        (async () => {
            const result = await Promise.resolve(perms);
            
            if(Notification.permission === 'denied' && perms.state === 'prompt') {
                addGTM = false;
            } else {
                if (addGTM == true) {
                    appendGTM();
                }
            }  
        })();


        
    } else {
        appendGTM();
    }



    function appendGTM() {

        var request = new XMLHttpRequest();
        request.open('GET', 'https://cdn.optimizely.com/js/18792324065.js', false);  // `false` makes the request synchronous
        request.send(null);
        
        if (request.status === 200) {
        }

        var tag = document.createElement('script');
        tag.setAttribute('src', 'https://cdn.optimizely.com/js/18792324065.js');

        document.querySelector('head').appendChild(tag);

        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        '//www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-PBPJPNX');


    }

}
  
  
  