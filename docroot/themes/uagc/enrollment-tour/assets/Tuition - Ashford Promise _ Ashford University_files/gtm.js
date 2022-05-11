
// Copyright 2012 Google Inc. All rights reserved.
(function(w,g){w[g]=w[g]||{};w[g].e=function(s){return eval(s);};})(window,'google_tag_manager');(function(){

var data = {
"resource": {
  "version":"356",
  
  "macros":[{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=document.getElementById(\"_ctl0_cphHeader_Header1_CMCLabel1\").innerText.substring(6);if(2\u003Ca.length)return a})();"]
    },{
      "function":"__c",
      "vtp_value":"ashford.edu, chooseashford.com, yourashford.com, bridgepoineducation.com, catalog.instructure.com,discoverashford.com,forbesbootcamp.com,student.ashford.edu,login.ashford.com"
    },{
      "function":"__v",
      "vtp_name":"gtm.elementUrl",
      "vtp_dataLayerVersion":1
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var c=",["escape",["macro",1],8,16],".split(\",\"),d=",["escape",["macro",2],8,16],".toLowerCase(),a=\"false\";if(-1\u003Cd.toLowerCase().indexOf(document.domain))a=\"true\";else for(var b=0;b\u003Cc.length;b++)if(-1\u003Cd.indexOf(c[b].trim().toLowerCase())){a=\"true\";break}return a})();"]
    },{
      "function":"__v",
      "vtp_name":"gtm.element",
      "vtp_dataLayerVersion":1
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){for(var b=",["escape",["macro",4],8,16],",a=0;a\u003Cb.length;a++)if(\"newInterests\"==b[a].id)for(var c=0;c\u003Cb[a].length;c++)if(b[a][c].selected)return b[a][c].text})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){for(var b=",["escape",["macro",4],8,16],",a=0;a\u003Cb.length;a++)if(\"gv\"==b[a].id)for(var c=0;c\u003Cb[a].length;c++)if(b[a][c].selected)return b[a][c].text})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){for(var b=",["escape",["macro",4],8,16],",a=0;a\u003Cb.length;a++)if(\"ddClientDegreeId\"==b[a].name)for(var c=0;c\u003Cb[a].length;c++)if(b[a][c].selected)return b[a][c].text})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){for(var b=",["escape",["macro",4],8,16],",a=0;a\u003Cb.length;a++)if(\"agegroup\"==b[a].id)for(var c=0;c\u003Cb[a].length;c++)if(b[a][c].selected)return b[a][c].text})();"]
    },{
      "function":"__v",
      "vtp_name":"gtm.element",
      "vtp_dataLayerVersion":1
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(a){return ",["escape",["macro",9],8,16],".parentElement.className})();"]
    },{
      "function":"__c",
      "vtp_value":"UA-33253183-20"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){try{var b=ga.getAll(),c;var a=0;for(c=b.length;a\u003Cc;a+=1)if(b[a].get(\"trackingId\")===",["escape",["macro",11],8,16],")return b[a].get(\"clientId\")}catch(d){}return\"false\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",4],8,16],".querySelector('input[name\\x3d\"clientid\"]');return a?a.value:void 0})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(d,e,f,b,c){if(d\u0026\u0026e){b=b?\"; path\\x3d\"+b:\"\";c=c?\"; domain\\x3d\"+c:\"\";var a=\"\";f\u0026\u0026(a=new Date,a.setTime(a.getTime()+f),a=\"; expires\\x3d\"+a.toUTCString());document.cookie=d+\"\\x3d\"+e+a+b+c}}})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"optimizedKeyword"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){if(\"",["escape",["macro",15],7],"\"!=\"undefined\")return\"",["escape",["macro",15],7],"\";else if($(\"meta[name\\x3d'keywords']\").attr(\"content\"))return $(\"meta[name\\x3d'keywords']\").attr(\"content\");else if($(\"h1:eq(0)\"))return $(\"h1:eq(0)\").text()})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var b={desktop:1024,tablet:768,mobile:0},a;for(a in b)if(window.screen.width\u003E=b[a])return a})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",4],8,16],".querySelector('input[name\\x3d\"device_type\"]');return a?a.value:void 0})();"]
    },{
      "function":"__v",
      "vtp_name":"gtm.videoStatus",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.videoPercent",
      "vtp_dataLayerVersion":1
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",19],8,16],";switch(a){case \"start\":return\"Start playing\";case \"pause\":return\"Pause\";case \"buffering\":return\"Buffering\";case \"progress\":return\"Reached \"+",["escape",["macro",20],8,16],"+\"%\";case \"complete\":return\"Reached the end\"}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var b=26;return function(a){a.set(\"dimension\"+b,a.get(\"clientId\"))}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=document.getElementById(\"edit-phone1\").value;return a=\/[0-9]{3}\/.exec(a)[0]})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=document.getElementById(\"edit-emailaddress\").value;return a=a.replace(\/.*@\/,\"\")})();"]
    },{
      "function":"__u",
      "vtp_component":"URL",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__e"
    },{
      "function":"__r"
    },{
      "function":"__u",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"contentType"
    },{
      "function":"__gas",
      "vtp_cookieDomain":"auto",
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_fieldsToSet":["list",["map","fieldName","allowLinker","value","true"]],
      "vtp_useHashAutoLink":false,
      "vtp_contentGroup":["list",["map","index","1","group",["macro",29]]],
      "vtp_decorateFormsAutoLink":true,
      "vtp_autoLinkDomains":["macro",1],
      "vtp_enableLinkId":true,
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",11],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false
    },{
      "function":"__j",
      "vtp_name":"navigator.userAgent"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"visitorUUID"
    },{
      "function":"__v",
      "vtp_name":"eventCategory",
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_name":"eventAction",
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_name":"eventNonInt",
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_name":"eventValue",
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_name":"eventLabel",
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_name":"gtm.triggers",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":""
    },{
      "function":"__aev",
      "vtp_varType":"TEXT"
    },{
      "function":"__v",
      "vtp_name":"socialNetwork",
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_name":"socialAction",
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_name":"socialTarget",
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_name":"gtm.elementId",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementClasses",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementId",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"gtm.element.2.value"
    },{
      "function":"__smm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",46],
      "vtp_map":["list",["map","key","1295","value","Education"],["map","key","1296","value","Political Science"],["map","key","1298","value","Accounting \u0026 Finance"],["map","key","1300","value","Social \u0026 Behavioral Science"],["map","key","1301","value","Liberal Arts"],["map","key","1302","value","Business"],["map","key","1303","value","Business"],["map","key","1304","value","Information Technology"],["map","key","1305","value","Business"],["map","key","1306","value","Education"],["map","key","1307","value","Social \u0026 Behavioral Science"],["map","key","1308","value","Communications"],["map","key","1309","value","Health Care"],["map","key","1310","value","Accounting \u0026 Finance"],["map","key","1311","value","Social \u0026 Behavioral Science"],["map","key","1312","value","Education"],["map","key","1313","value","Education"],["map","key","1315","value","Education"],["map","key","1316","value","Business"],["map","key","1317","value","Liberal Arts"],["map","key","1318","value","Education"],["map","key","1319","value","Business"],["map","key","1320","value","Liberal Arts"],["map","key","1321","value","Accounting \u0026 Finance"],["map","key","1322","value","Health Care"],["map","key","1323","value","Health Care"],["map","key","1324","value","Health Care"],["map","key","1325","value","Health Care"],["map","key","1327","value","Health Care"],["map","key","1330","value","Liberal Arts"],["map","key","1331","value","Criminal Justice"],["map","key","1332","value","Business"],["map","key","1333","value","Education"],["map","key","1334","value","Business"],["map","key","1335","value","Liberal Arts"],["map","key","1336","value","Criminal Justice"],["map","key","1337","value","Liberal Arts"],["map","key","1338","value","Education"],["map","key","1339","value","Political Science"],["map","key","1340","value","Business"],["map","key","1341","value","Business"],["map","key","1342","value","Political Science"],["map","key","1343","value","Business"],["map","key","1344","value","Social \u0026 Behavioral Science"],["map","key","1345","value","Political Science"],["map","key","1346","value","Communications"],["map","key","1347","value","Business"],["map","key","1348","value","Business"],["map","key","1349","value","Criminal Justice"],["map","key","1350","value","Social \u0026 Behavioral Science"],["map","key","1351","value","Social \u0026 Behavioral Science"],["map","key","1352","value","Business"],["map","key","1353","value","Business"],["map","key","1355","value","Education"],["map","key","1370","value","Health Care"],["map","key","1371","value","Business"],["map","key","1372","value","Education"],["map","key","1373","value","Business"],["map","key","1387","value","Political Science"],["map","key","1681","value","Health Care"],["map","key","1688","value","Accounting \u0026 Finance"],["map","key","1689","value","Social \u0026 Behavioral Science"],["map","key","1694","value","Criminal Justice"],["map","key","1817","value","Education"],["map","key","1818","value","Health Care"],["map","key","1823","value","Business"],["map","key","1824","value","Business"],["map","key","1829","value","Accounting \u0026 Finance"],["map","key","1830","value","Business"],["map","key","1831","value","Communications"],["map","key","1832","value","Criminal Justice"],["map","key","1833","value","Education"],["map","key","1834","value","Heath Care"],["map","key","1835","value","Information Technology"],["map","key","1836","value","Liberal Arts"],["map","key","1837","value","Political Science"],["map","key","1838","value","Social \u0026 Behavioral Science"],["map","key","1840","value","Information Technology"],["map","key","1841","value","Business"],["map","key","1845","value","Education"],["map","key","1846","value","Education"]]
    },{
      "function":"__v",
      "vtp_name":"gtm.elementClasses",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"optimizely-dimension-number"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"optimizely-dimension-value"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"optimizely-referrer"
    },{
      "function":"__u",
      "vtp_component":"PATH",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__aev",
      "vtp_varType":"TEXT"
    },{
      "function":"__v",
      "vtp_name":"gtm.videoTitle",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.videoUrl",
      "vtp_dataLayerVersion":1
    },{
      "function":"__c",
      "vtp_value":"experiments"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"visitor_type"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"device_type"
    },{
      "function":"__smm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",46],
      "vtp_map":["list",["map","key","1295","value","AA Early Childhood Education"],["map","key","1296","value","AA Military Studies"],["map","key","1298","value","BA Accounting"],["map","key","1300","value","BA Applied Behavioral Science"],["map","key","1301","value","BA Applied Linguistics"],["map","key","1302","value","BA Business Administration"],["map","key","1303","value","BA Business Economics"],["map","key","1304","value","BA Business Information Systems"],["map","key","1305","value","BA Business Leadership"],["map","key","1306","value","BA Child Development"],["map","key","1307","value","BA Cognitive Studies"],["map","key","1308","value","BA Communication Studies"],["map","key","1309","value","BA Complementary and Alternative Health"],["map","key","1310","value","BA Consumer and Family Financial Services"],["map","key","1311","value","BA Cultural Anthropology"],["map","key","1312","value","BA Early Childhood Education"],["map","key","1313","value","BA Early Childhood Education Administration"],["map","key","1315","value","BA Education Studies"],["map","key","1316","value","BA eMarketing"],["map","key","1317","value","BA English"],["map","key","1318","value","BA English Language Learner Studies"],["map","key","1319","value","BA Entrepreneurship"],["map","key","1320","value","BA Environmental Studies"],["map","key","1321","value","BA Finance"],["map","key","1322","value","BA Gerontology"],["map","key","1323","value","BA Health and Human Services"],["map","key","1324","value","BA Health and Wellness"],["map","key","1325","value","BA Health Care Administration"],["map","key","1327","value","BA Health Education"],["map","key","1330","value","BA History"],["map","key","1331","value","BA Homeland Security and Emergency Management"],["map","key","1332","value","BA Human Resources Management"],["map","key","1333","value","BA Instructional Design"],["map","key","1334","value","BA International Business"],["map","key","1335","value","BA Journalism and Mass Communication"],["map","key","1336","value","BA Law Enforcement Administration"],["map","key","1337","value","BA Liberal Arts"],["map","key","1338","value","BA Library Science and Media"],["map","key","1339","value","BA Military Studies"],["map","key","1340","value","BA Operations Management and Analysis"],["map","key","1341","value","BA Organizational Management"],["map","key","1342","value","BA Political Science and Government"],["map","key","1343","value","BA Project Management"],["map","key","1344","value","BA Psychology"],["map","key","1345","value","BA Public Administration"],["map","key","1346","value","BA Public Relations and Marketing"],["map","key","1347","value","BA Real Estate Studies"],["map","key","1348","value","BA Service Management"],["map","key","1349","value","BA Social and Criminal Justice"],["map","key","1350","value","BA Social Science"],["map","key","1351","value","BA Sociology"],["map","key","1352","value","BA Sports and Recreation Management"],["map","key","1353","value","BA Supply Chain Management"],["map","key","1355","value","MA Education"],["map","key","1370","value","MA Health Care Administration"],["map","key","1371","value","MA Organizational Management"],["map","key","1372","value","MA Teaching and Learning with Technology"],["map","key","1373","value","MBA"],["map","key","1387","value","MA Public Administration"],["map","key","1681","value","BS Health Information Management"],["map","key","1688","value","MA Accountancy"],["map","key","1689","value","MA Psychology"],["map","key","1694","value","MS Criminal Justice"],["map","key","1817","value","MA Special Education"],["map","key","1818","value","BS Nursing"],["map","key","1823","value","MBA-Hybrid"],["map","key","1824","value","BA Business Administration-Hybrid"],["map","key","1829","value","Undecided - Accounting \u0026 Finance"],["map","key","1830","value","Undecided - Business"],["map","key","1831","value","Undecided - Communications"],["map","key","1832","value","Undecided - Criminal Justice"],["map","key","1833","value","Undecided - Education"],["map","key","1834","value","Undecided - Heath Care"],["map","key","1835","value","Undecided - Information Technology"],["map","key","1836","value","Undecided - Liberal Arts"],["map","key","1837","value","Undecided - Political Science"],["map","key","1838","value","Undecided - Social \u0026 Behavioral Science"],["map","key","1840","value","Master of Information Systems Management"],["map","key","1841","value","MA Human Resource Management"],["map","key","1845","value","MS Instructional Design and Technology"],["map","key","1846","value","MA Early Childhood Education Leadership"]]
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"_ga"
    },{
      "function":"__f"
    },{
      "function":"__e"
    },{
      "function":"__c",
      "vtp_value":"auto"
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"Affiliateid",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"sourceid",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__v",
      "vtp_name":"Error Type",
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_name":"School",
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_name":"School Type",
      "vtp_dataLayerVersion":2
    },{
      "function":"__f",
      "vtp_component":"URL"
    },{
      "function":"__v",
      "vtp_setDefaultValue":true,
      "vtp_name":"origReferrer",
      "vtp_defaultValue":["macro",69],
      "vtp_dataLayerVersion":2
    },{
      "function":"__u",
      "vtp_stripWww":false,
      "vtp_component":"HOST",
      "vtp_customUrlSource":["macro",61],
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__smm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",71],
      "vtp_map":["list",["map","key","www.google.com","value","Organic Search"],["map","key","www.bing.com","value","Organic Search"],["map","key","r.search.yahoo.com","value","Organic Search"],["map","key","www.ashford.edu","value","Direct"],["map","key","t.co","value","Social Media"],["map","key","www.facebook.com","value","Social Media"],["map","key","www.pinterest.com","value","Social Media"]]
    },{
      "function":"__v",
      "vtp_setDefaultValue":false,
      "vtp_dataLayerVersion":2,
      "vtp_name":"attributes.videoAction"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"traffic_src"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":["macro",74]
    },{
      "function":"__k",
      "vtp_decodeCookie":true,
      "vtp_name":"ashford_lfs"
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"utm_term",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__smm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",77],
      "vtp_map":["list",["map","key","","value",""]]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"gtm.element.1.value"
    },{
      "function":"__smm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",79],
      "vtp_map":["list",["map","key","0","value","Accounting \u0026 Finance"],["map","key","1","value","Business"],["map","key","2","value","Communications"],["map","key","3","value","Criminal Justice"],["map","key","4","value","Education"],["map","key","5","value","Health Care"],["map","key","6","value","Information Technology"],["map","key","7","value","Liberal Arts"],["map","key","8","value","Political Science"],["map","key","9","value","Social \u0026 Behavioral Science"]]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ClientID"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"Client Status"
    },{
      "function":"__f",
      "vtp_component":"PATH",
      "vtp_defaultPages":["list"]
    },{
      "function":"__u",
      "vtp_component":"FRAGMENT",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"programselect"
    },{
      "function":"__u",
      "vtp_component":"FRAGMENT",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__e"
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":["macro",81],
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"cid"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"visitorUUID"
    },{
      "function":"__u",
      "vtp_component":"HOST",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__e"
    },{
      "function":"__v",
      "vtp_name":"gtm.elementTarget",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementTarget",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementUrl",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.errorMessage",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.errorUrl",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.errorLineNumber",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.newUrlFragment",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.oldUrlFragment",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.newHistoryState",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.oldHistoryState",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.historyChangeSource",
      "vtp_dataLayerVersion":1
    },{
      "function":"__ctv"
    },{
      "function":"__dbg"
    },{
      "function":"__r"
    },{
      "function":"__cid"
    },{
      "function":"__hid"
    },{
      "function":"__v",
      "vtp_name":"gtm.videoProvider",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.videoDuration",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.videoVisible",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.videoCurrentTime",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.scrollThreshold",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.scrollUnits",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.scrollDirection",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.visibleRatio",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.visibleTime",
      "vtp_dataLayerVersion":1
    }],
  "tags":[{
      "function":"__html",
      "priority":99,
      "once_per_load":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(a,b,c,e,d,f,g){a.GoogleAnalyticsObject=d;a[d]=a[d]||function(){(a[d].q=a[d].q||[]).push(arguments)};a[d].l=1*new Date;f=b.createElement(c);g=b.getElementsByTagName(c)[0];f.async=1;f.src=e;g.parentNode.insertBefore(f,g)})(window,document,\"script\",\"\/\/www.google-analytics.com\/analytics.js\",\"ga\");ga(\"create\",\"UA-1721107-1\",\"auto\");ga(\"create\",\"UA-33253183-12\",{name:\"rollup\"});ga(\"require\",\"displayfeatures\");ga(\"rollup.require\",\"displayfeatures\");ga(\"myMasterProfile.require\",\"displayfeatures\");\nga(\"send\",\"pageview\");ga(\"rollup.send\",\"pageview\");ga(\"myMasterProfile.send\",\"pageview\");function recordOutboundLink(a,b,c,e){ga(\"send\",\"event\",b,c,e);ga(\"rollup.send\",\"event\",b,c,e);ga(\"myMasterProfile.send\",\"event\",b,c,e);setTimeout('document.location \\x3d \"'+a.href+'\"',100)};\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":14
    },{
      "function":"__ua",
      "priority":1,
      "once_per_load":true,
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":true,
      "vtp_fieldsToSet":["list",["map","fieldName","allowLinker","value","true"],["map","fieldName","customTask","value",["macro",22]]],
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_contentGroup":["list",["map","index","1","group",["macro",29]]],
      "vtp_autoLinkDomains":["macro",1],
      "vtp_decorateFormsAutoLink":true,
      "vtp_enableLinkId":true,
      "vtp_gaSettings":["macro",30],
      "vtp_dimension":["list",["map","index","3","dimension",["macro",31]],["map","index","46","dimension",["macro",32]]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":105
    },{
      "function":"__img",
      "vtp_useCacheBuster":true,
      "vtp_url":["template","https:\/\/","sp.analytics.yahoo.com\/spp.pl?a=1000632462979\u0026.yp=12237\u0026js=no"],
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",27],
      "tag_id":9
    },{
      "function":"__paused",
      "vtp_originalTagType":"img",
      "tag_id":35
    },{
      "function":"__flc",
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"uniqu0",
      "vtp_useImageTag":false,
      "vtp_activityTag":"uniqu002",
      "vtp_ordinalType":"UNIQUE",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"4694432",
      "vtp_ordinalUnique":"1",
      "vtp_number":["macro",27],
      "vtp_url":["macro",28],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":37
    },{
      "function":"__ua",
      "vtp_nonInteraction":["macro",35],
      "vtp_overrideGaSettings":false,
      "vtp_eventValue":["macro",36],
      "vtp_eventCategory":"outbound link",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",30],
      "vtp_eventAction":["macro",34],
      "vtp_eventLabel":["macro",37],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":107
    },{
      "function":"__ua",
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"outbound link",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",30],
      "vtp_eventAction":["macro",39],
      "vtp_eventLabel":["macro",2],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":108
    },{
      "function":"__ua",
      "vtp_overrideGaSettings":false,
      "vtp_trackType":"TRACK_SOCIAL",
      "vtp_socialAction":["macro",41],
      "vtp_gaSettings":["macro",30],
      "vtp_socialActionTarget":["macro",42],
      "vtp_socialNetwork":["macro",40],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsSocial":true,
      "tag_id":110
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Conversions",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",30],
      "vtp_eventAction":"Request Info - Button Start",
      "vtp_eventLabel":["template","Page: ",["macro",25]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":142
    },{
      "function":"__ua",
      "once_per_load":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Conversions",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",30],
      "vtp_eventAction":"Request Info - Form Started",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":143
    },{
      "function":"__ua",
      "once_per_load":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Conversions",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",30],
      "vtp_eventAction":"Request Info - Form Completed",
      "vtp_eventLabel":"Lead",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":144
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"outbound link",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",30],
      "vtp_eventAction":"Student Portal",
      "vtp_eventLabel":["macro",25],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":145
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"outbound link",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",30],
      "vtp_eventAction":"OAP",
      "vtp_eventLabel":["macro",25],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":146
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"outbound link",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",30],
      "vtp_eventAction":"Email",
      "vtp_eventLabel":["macro",2],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":157
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Request Info",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",30],
      "vtp_eventAction":"Talk to an Advisor",
      "vtp_eventLabel":"CTA - Step 1 of 2",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":158
    },{
      "function":"__ua",
      "once_per_load":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":true,
      "vtp_fieldsToSet":["list",["map","fieldName","allowLinker","value","true"]],
      "vtp_eventCategory":"request info",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_contentGroup":["list",["map","index","1","group",["macro",29]]],
      "vtp_enableLinkId":true,
      "vtp_gaSettings":["macro",30],
      "vtp_eventAction":"form submit",
      "vtp_eventLabel":["macro",25],
      "vtp_dimension":["list",["map","index","30","dimension","Lead - Ashford"],["map","index","11","dimension",["macro",47]],["map","index","37","dimension",["macro",23]],["map","index","38","dimension",["macro",24]]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":159
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Request Info",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",30],
      "vtp_eventAction":"Talk to an Advisor",
      "vtp_eventLabel":"Full Width CTA - Step 1 of 2",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":160
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Request Info",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",30],
      "vtp_eventAction":"Talk to an Advisor",
      "vtp_eventLabel":"Header CTA Click",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":163
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Request Info",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",30],
      "vtp_eventAction":"Form Field Clicks",
      "vtp_eventLabel":["macro",45],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":164
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"engagement",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",30],
      "vtp_eventAction":"Degree Finder",
      "vtp_eventLabel":"Get Started Click",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":165
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Request Info",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",30],
      "vtp_eventAction":"Talk to an Advisor",
      "vtp_eventLabel":"Footer CTA",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":169
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Request Info",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",30],
      "vtp_eventAction":"Talk to an Advisor",
      "vtp_eventLabel":"Hero Image CTA - Step 1 of 2",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":171
    },{
      "function":"__hjtc",
      "once_per_event":true,
      "vtp_hotjar_site_id":"378396",
      "tag_id":172
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Accordian Click",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",30],
      "vtp_eventAction":["macro",39],
      "vtp_eventLabel":["macro",25],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":174
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Optimizely",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_contentGroup":["list",["map","index","1","group",["macro",29]]],
      "vtp_gaSettings":["macro",30],
      "vtp_eventAction":"Assigned to Campaign",
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_fieldsToSet":["list",["map","fieldName","allowLinker","value","true"]],
      "vtp_enableLinkId":true,
      "vtp_dimension":["list",["map","index",["macro",49],"dimension",["macro",50]]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":176
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_fieldsToSet":["list",["map","fieldName","referrer","value",["macro",51]],["map","fieldName","allowLinker","value","true"]],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_contentGroup":["list",["map","index","1","group",["macro",29]]],
      "vtp_enableLinkId":true,
      "vtp_gaSettings":["macro",30],
      "vtp_enableEcommerce":false,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":177
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Request Info",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",30],
      "vtp_eventAction":"Talk to an Advisor",
      "vtp_eventLabel":"Mobile Footer CTA",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":180
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Request Info",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",30],
      "vtp_eventAction":"Talk to an Advisor",
      "vtp_eventLabel":"Pop-up CTA",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":185
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Request Info",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",30],
      "vtp_eventAction":"Talk to an Advisor",
      "vtp_eventLabel":"Pop-up Close",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":186
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Request Info",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",30],
      "vtp_eventAction":"Talk to an Advisor",
      "vtp_eventLabel":"Mobile Footer Call",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":188
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":191
    },{
      "function":"__ua",
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"internal link",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",30],
      "vtp_eventAction":["template",["macro",39]," - ",["macro",48]],
      "vtp_eventLabel":["macro",2],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":192
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"User Experience",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",30],
      "vtp_eventAction":"Stat Icon Click",
      "vtp_eventLabel":["template",["macro",48]," - ",["macro",52]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":218
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Request Info",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",30],
      "vtp_eventAction":"Start Now Button Click",
      "vtp_eventLabel":["macro",25],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":230
    },{
      "function":"__flc",
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"everg0",
      "vtp_useImageTag":false,
      "vtp_activityTag":"everg0",
      "vtp_ordinalType":"STANDARD",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"4694432",
      "vtp_ordinalStandard":["macro",27],
      "vtp_url":["macro",28],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":231
    },{
      "function":"__opt",
      "once_per_event":true,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_optimizeContainerId":"GTM-PBVTNS",
      "vtp_trackingId":"UA-33253183-20",
      "tag_id":235
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Click",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",30],
      "vtp_eventAction":"Internal Click",
      "vtp_eventLabel":"Graduate Education",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":237
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventValue":["macro",37],
      "vtp_eventCategory":["macro",33],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",30],
      "vtp_eventAction":["macro",34],
      "vtp_eventLabel":["macro",37],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":243
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Request Info",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",30],
      "vtp_eventAction":"Request Info Button Click",
      "vtp_eventLabel":["macro",52],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":244
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"YouTube",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",30],
      "vtp_eventAction":["macro",21],
      "vtp_eventLabel":["template",["macro",54]," -",["macro",55]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":248
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Button\/Link Tracking",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",30],
      "vtp_eventAction":["template","Link - ",["macro",52]],
      "vtp_eventLabel":["template",["macro",48],"|",["macro",43]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":252
    },{
      "function":"__paused",
      "vtp_originalTagType":"ua",
      "tag_id":253
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"https:\/\/dc.ads.linkedin.com\/collect\/?pid=54825\u0026conversionId=393122\u0026fmt=gif",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",27],
      "tag_id":261
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":264
    },{
      "function":"__gclidw",
      "once_per_event":true,
      "vtp_enableCookieOverrides":false,
      "vtp_enableCrossDomainFeature":true,
      "vtp_enableCookieUpdateFeature":false,
      "tag_id":266
    },{
      "function":"__paused",
      "vtp_originalTagType":"sp",
      "tag_id":268
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Ivy Chat",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",30],
      "vtp_eventAction":"Sticky Chat Click",
      "vtp_eventLabel":["macro",25],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":272
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":275
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":276
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":280
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"966556521",
      "vtp_conversionLabel":"QaJ6CP_nxgkQ6fbxzAM",
      "vtp_url":["macro",28],
      "vtp_enableProductReportingCheckbox":false,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "tag_id":281
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"966556521",
      "vtp_conversionLabel":"OYkmCJqPnJYBEOn28cwD",
      "vtp_url":["macro",28],
      "vtp_enableProductReportingCheckbox":false,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "tag_id":282
    },{
      "function":"__ua",
      "once_per_load":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":["macro",56],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",30],
      "vtp_eventAction":"step1",
      "vtp_eventLabel":"story rfi",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":286
    },{
      "function":"__ua",
      "once_per_load":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":["macro",56],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",30],
      "vtp_eventAction":"step2-confirmgeo",
      "vtp_eventLabel":"story rfi",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":287
    },{
      "function":"__ua",
      "once_per_load":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":["macro",56],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",30],
      "vtp_eventAction":"step2-yesgeo",
      "vtp_eventLabel":"story rfi",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":288
    },{
      "function":"__ua",
      "once_per_load":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":["macro",56],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",30],
      "vtp_eventAction":"step2-nogeo",
      "vtp_eventLabel":"story rfi",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":289
    },{
      "function":"__ua",
      "once_per_load":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":["macro",56],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",30],
      "vtp_eventAction":"step3-yes-specific1",
      "vtp_eventLabel":"story rfi",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":290
    },{
      "function":"__ua",
      "once_per_load":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":["macro",56],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",30],
      "vtp_eventAction":"step3-no-specific1",
      "vtp_eventLabel":"story rfi",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":291
    },{
      "function":"__ua",
      "once_per_load":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":["macro",56],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",30],
      "vtp_eventAction":"step4-yes-specific2",
      "vtp_eventLabel":"story rfi",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":292
    },{
      "function":"__ua",
      "once_per_load":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":["macro",56],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",30],
      "vtp_eventAction":"step4-no-specific2",
      "vtp_eventLabel":"story rfi",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":293
    },{
      "function":"__ua",
      "once_per_load":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":["macro",56],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",30],
      "vtp_eventAction":"step5",
      "vtp_eventLabel":"story rfi",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":294
    },{
      "function":"__ua",
      "once_per_load":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":["macro",56],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",30],
      "vtp_eventAction":"step6",
      "vtp_eventLabel":"story rfi",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":295
    },{
      "function":"__ua",
      "once_per_load":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":["macro",56],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",30],
      "vtp_eventAction":"step7",
      "vtp_eventLabel":"story rfi",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":296
    },{
      "function":"__ua",
      "unlimited":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"page goals",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",30],
      "vtp_eventAction":"individual degree click",
      "vtp_eventLabel":"degree interest",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":297
    },{
      "function":"__ua",
      "unlimited":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"page goals",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",30],
      "vtp_eventAction":"degree filter clicks",
      "vtp_eventLabel":"degree interest",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":298
    },{
      "function":"__ua",
      "unlimited":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"page goals",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",30],
      "vtp_eventAction":"career link click",
      "vtp_eventLabel":"degree interest",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":300
    },{
      "function":"__ua",
      "unlimited":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"page goals",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",30],
      "vtp_eventAction":"box link click",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":301
    },{
      "function":"__ua",
      "unlimited":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"page goals",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",30],
      "vtp_eventAction":"header cta click",
      "vtp_eventLabel":"home",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":303
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"hot jar",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",30],
      "vtp_eventAction":["macro",48],
      "vtp_eventLabel":["macro",39],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":304
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"488071_86",
      "tag_id":309
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"488071_89",
      "tag_id":310
    },{
      "function":"__cl",
      "tag_id":311
    },{
      "function":"__cl",
      "tag_id":312
    },{
      "function":"__cl",
      "tag_id":313
    },{
      "function":"__cl",
      "tag_id":314
    },{
      "function":"__cl",
      "tag_id":315
    },{
      "function":"__cl",
      "tag_id":316
    },{
      "function":"__cl",
      "tag_id":317
    },{
      "function":"__cl",
      "tag_id":318
    },{
      "function":"__cl",
      "tag_id":319
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"488071_114",
      "tag_id":320
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"488071_115",
      "tag_id":321
    },{
      "function":"__cl",
      "tag_id":322
    },{
      "function":"__cl",
      "tag_id":323
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"488071_127",
      "tag_id":324
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"488071_132",
      "tag_id":325
    },{
      "function":"__fsl",
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"488071_134",
      "tag_id":326
    },{
      "function":"__fsl",
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"488071_135",
      "tag_id":327
    },{
      "function":"__fsl",
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"488071_136",
      "tag_id":328
    },{
      "function":"__fsl",
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"488071_144",
      "tag_id":329
    },{
      "function":"__cl",
      "tag_id":330
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"488071_149",
      "tag_id":331
    },{
      "function":"__cl",
      "tag_id":332
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"488071_163",
      "tag_id":333
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"488071_169",
      "tag_id":334
    },{
      "function":"__cl",
      "tag_id":335
    },{
      "function":"__cl",
      "tag_id":336
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"488071_199",
      "tag_id":337
    },{
      "function":"__cl",
      "tag_id":338
    },{
      "function":"__cl",
      "tag_id":339
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"488071_215",
      "tag_id":340
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"488071_216",
      "tag_id":341
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"488071_225",
      "tag_id":342
    },{
      "function":"__cl",
      "tag_id":343
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"488071_266",
      "tag_id":344
    },{
      "function":"__cl",
      "tag_id":345
    },{
      "function":"__cl",
      "tag_id":346
    },{
      "function":"__cl",
      "tag_id":347
    },{
      "function":"__fsl",
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"488071_303",
      "tag_id":348
    },{
      "function":"__ytl",
      "vtp_progressThresholdsPercent":"10, 25, 50, 75",
      "vtp_captureComplete":true,
      "vtp_captureStart":true,
      "vtp_fixMissingApi":true,
      "vtp_radioButtonGroup1":"PERCENTAGE",
      "vtp_capturePause":true,
      "vtp_captureProgress":true,
      "vtp_uniqueTriggerId":"488071_309",
      "vtp_enableTriggerStartOption":true,
      "tag_id":349
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"488071_328",
      "tag_id":350
    },{
      "function":"__cl",
      "tag_id":351
    },{
      "function":"__cl",
      "tag_id":352
    },{
      "function":"__cl",
      "tag_id":353
    },{
      "function":"__cl",
      "tag_id":354
    },{
      "function":"__cl",
      "tag_id":355
    },{
      "function":"__cl",
      "tag_id":356
    },{
      "function":"__cl",
      "tag_id":357
    },{
      "function":"__cl",
      "tag_id":358
    },{
      "function":"__cl",
      "tag_id":359
    },{
      "function":"__cl",
      "tag_id":360
    },{
      "function":"__cl",
      "tag_id":361
    },{
      "function":"__cl",
      "tag_id":362
    },{
      "function":"__cl",
      "tag_id":363
    },{
      "function":"__cl",
      "tag_id":364
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"488071_421",
      "tag_id":365
    },{
      "function":"__cl",
      "tag_id":366
    },{
      "function":"__cl",
      "tag_id":367
    },{
      "function":"__cl",
      "tag_id":368
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"488071_427",
      "tag_id":369
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"488071_428",
      "tag_id":370
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"488071_438",
      "tag_id":371
    },{
      "function":"__cl",
      "tag_id":372
    },{
      "function":"__html",
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(d,a,b,f,e){d[e]=d[e]||[];d[e].push({projectId:\"10000\",properties:{pixelId:\"22126\"}});var c=a.createElement(b);c.src=f;c.async=!0;c.onload=c.onreadystatechange=function(){var a=this.readyState,c=d[e];if(!a||\"complete\"==a||\"loaded\"==a)try{var b=YAHOO.ywa.I13N.fireBeacon;d[e]=[];d[e].push=function(a){b([a])};b(c)}catch(g){}};a=a.getElementsByTagName(b)[0];b=a.parentNode;b.insertBefore(c,a)})(window,document,\"script\",\"https:\/\/s.yimg.com\/wi\/ytc.js\",\"dotq\");\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":8
    },{
      "function":"__html",
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(b,c,e,f,d){b[d]=b[d]||[];var g=function(){var a={ti:\"4006668\"};a.q=b[d];b[d]=new UET(a);b[d].push(\"pageLoad\")};var a=c.createElement(e);a.src=f;a.async=1;a.onload=a.onreadystatechange=function(){var b=this.readyState;b\u0026\u0026\"loaded\"!==b\u0026\u0026\"complete\"!==b||(g(),a.onload=a.onreadystatechange=null)};c=c.getElementsByTagName(e)[0];c.parentNode.insertBefore(a,c)})(window,document,\"script\",\"\/\/bat.bing.com\/bat.js\",\"uetq\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":31
    },{
      "function":"__html",
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003EanalyticsEvent=function(a,b,c,d,e){dataLayer.push({event:\"analyticsEvent\",eventCategory:a,eventAction:b,eventLabel:c,eventValue:d,eventNonInt:e})};analyticsSocial=function(a,b,c,d){dataLayer.push({event:\"social\",socialNetwork:a,socialAction:b,socialTarget:c,socialPagePath:d})};\u003C\/script\u003E",
      "vtp_convertJsValuesToExpressions":true,
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":106
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"https:\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"1533480753626722\");fbq(\"track\",\"Lead\",{content_type:\"product\",order_id:\"",["escape",["macro",12],7],"\",current_student:\"no\"});\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?id=1533480753626722\u0026amp;ev=Lead\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E\n\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":154
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"https:\/\/s.yimg.com\/wi\/ytc.js\"\u003E\u003C\/script\u003E\u003Cscript type=\"text\/gtmscript\"\u003EYAHOO.ywa.I13N.fireBeacon([{projectId:\"100026206909\",coloId:\"SP\",properties:{pixelId:\"22126\",qstrings:{}}}]);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":155
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(d,a,b,f,e){d[e]=d[e]||[];d[e].push({projectId:\"100026206909\",properties:{pixelId:\"22126\"}});var c=a.createElement(b);c.src=f;c.async=!0;c.onload=c.onreadystatechange=function(){var a=this.readyState,c=d[e];if(!a||\"complete\"==a||\"loaded\"==a)try{var b=YAHOO.ywa.I13N.fireBeacon;d[e]=[];d[e].push=function(a){b([a])};b(c)}catch(g){}};a=a.getElementsByTagName(b)[0];b=a.parentNode;b.insertBefore(c,a)})(window,document,\"script\",\"https:\/\/s.yimg.com\/wi\/ytc.js\",\"dotq\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":156
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cmeta name=\"msvalidate.01\" content=\"3B653E9D3E4964A517869E68E289214A\"\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":161
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"https:\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"1533480753626722\");fbq(\"track\",\"ViewContent\",{});\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":167
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"application\/ld+json\"\u003E\n                {\n                \"@context\": \"http:\/\/schema.org\",\n                \"@type\": \"WebSite\",\n                \"url\": \"https:\/\/www.ashford.edu\",\n                \"potentialAction\": {\n    \"@type\": \"SearchAction\",\n    \"target\": \"https:\/\/www.ashford.edu\/search\/node?keys={search_term_string}\",\n    \"query-input\": \"required name=search_term_string\"\n                                }\n                }\n                \u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":173
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar DATALAYER_OBJECT_NAME=\"dataLayer\",referrerOverride=function(d){var c=window[DATALAYER_OBJECT_NAME]||[];c.push({event:\"optimizely-referrer-override\",\"optimizely-referrer\":d})},sendCampaignData=function(d,c,h,g,f,k,b,a,e){if(g=optimizely.get(\"data\")\u0026\u0026optimizely.get(\"data\").campaigns[c]\u0026\u0026optimizely.get(\"data\").campaigns[c].integrationSettings\u0026\u0026optimizely.get(\"data\").campaigns[c].integrationSettings.google_universal_analytics\u0026\u0026optimizely.get(\"data\").campaigns[c].integrationSettings.google_universal_analytics.universal_analytics_slot)d=\nd?d+\"(\"+c+\")\":c,h=h.join(\",\"),f=f?f+\"(\"+k+\")\":h+\"(\"+k+\")\",b=b?b+\"(\"+a+\")\":a,e=e?\"holdback\":\"treatment\",e=[d,f,b,e].join(\":\"),b=window[DATALAYER_OBJECT_NAME]||[],b.push({event:\"campaign-decided\",\"optimizely-dimension-value\":e,\"optimizely-dimension-number\":g})},initNewOptimizelyIntegration=function(d,c){var h=!1,g=function(b){var a=window.optimizely.get\u0026\u0026window.optimizely.get(\"state\"),e=a.getRedirectInfo()\u0026\u0026a.getRedirectInfo().referrer;!h\u0026\u0026e\u0026\u0026(d(e),h=!0);a=a.getCampaignStates({isActive:!0});a=a[b];\ne=a.campaignName;if(0\u003Ca.audiences.length){var f=a.audiences.map(function(a){return a.name});var g=a.audiences.map(function(a){return a.id})}else f=[\"everyone_else\"],g=[0];var k=a.experiment.name,l=a.experiment.id,m=a.variation.name,n=a.variation.id;c(e,b,f,g,k,l,m,n,a.isInCampaignHoldback)},f=function(){window.optimizely=window.optimizely||[];window.optimizely.push({type:\"addListener\",filter:{type:\"lifecycle\",name:\"campaignDecided\"},handler:function(b){b=b.data.campaign.id;g(b)}})},k=function(){var b=\nwindow.optimizely.get\u0026\u0026window.optimizely.get(\"state\");if(b){b=b.getCampaignStates({isActive:!0});for(var a in b)g(a)}};k();f()},initOptimizelyIntegration=function(d,c){initNewOptimizelyIntegration(d,c)};initOptimizelyIntegration(referrerOverride,sendCampaignData);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":175
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Efunction printMe(){window.print()}window.onload=printMe;\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":178
    },{
      "function":"__html",
      "teardown_tags":["list",["tag",30,0]],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Evar ClientID=",["escape",["macro",12],8,16],";\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":189
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E$(document).ready(function(){$(\".header__cta-button\").hide();$(\".footer__cta-button\").hide();$(\".mobile-menu__cta\").hide()})(window,document);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":211
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.optimizely=window.optimizely||[];window.optimizely.push({type:\"event\",eventName:\"formsubmit\"});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":213
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.optimizely=window.optimizely||[];window.optimizely.push({type:\"user\",attributes:{visitor_type:\"Student\"}});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":216
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E",["escape",["macro",14],8,16],"(\"organic_convert\",\"Organic\",2628E6,\"\/\",\"ashford.edu\");\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":217
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E_linkedin_data_partner_id=\"54825\";\u003C\/script\u003E\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var b=document.getElementsByTagName(\"script\")[0],a=document.createElement(\"script\");a.type=\"text\/javascript\";a.async=!0;a.src=\"https:\/\/snap.licdn.com\/li.lms-analytics\/insight.min.js\";b.parentNode.insertBefore(a,b)})();\u003C\/script\u003E\n\u003Cnoscript\u003E\n\u003Cimg height=\"1\" width=\"1\" style=\"display:none;\" alt=\"\" src=\"https:\/\/dc.ads.linkedin.com\/collect\/?pid=54825\u0026amp;fmt=gif\"\u003E\n\u003C\/noscript\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":228
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E$(\".mobile-menu__cta\").remove();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":229
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar stb_exitintent=!1;document.addEventListener(\"mousemove\",function(a){var b=window.pageYOffset||document.documentElement.scrollTop;10\u003Ea.pageY-b\u0026\u00260==stb_exitintent\u0026\u0026(dataLayer.push({event:\"exit_intent\"}),stb_exitintent=!0)});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":233
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Evar device_type=",["escape",["macro",17],8,16],";\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":238
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E$(document).ready(function(){$('input[name\\x3d\"device_type\"]').val(device_type)});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":239
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E",["escape",["macro",14],8,16],"(\"visitor_type\",\"Student\",2628E6,\"\/\",\"ashford.edu\");\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":241
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E\/*\n @preserve\n jquery.scrolldepth.js | v0.4.1\n Copyright (c) 2014 Rob Flaherty (@robflaherty)\n Licensed under the MIT and GPL licenses.\n*\/\n(function(c,h,m,u){var n={elements:[],minHeight:0,percentage:!0,testing:!1},k=c(h),f=[];c.scrollDepth=function(d){function l(a,b,e){d.testing?c(\"#console\").html(a+\": \"+b):\"undefined\"!==typeof dataLayer?(dataLayer.push({event:\"ScrollDistance\",eventCategory:\"Scroll Depth\",eventAction:a,eventLabel:b,eventValue:1,eventNonInteraction:!0}),2\u003Carguments.length\u0026\u0026dataLayer.push({event:\"ScrollTiming\",eventCategory:\"Scroll Depth\",eventAction:a,eventLabel:b,eventTiming:e})):(\"undefined\"!==typeof ga\u0026\u0026(ga(\"send\",\n\"event\",\"Scroll Depth\",a,b,1,{nonInteraction:1}),2\u003Carguments.length\u0026\u0026ga(\"send\",\"timing\",\"Scroll Depth\",a,e,b)),\"undefined\"!==typeof _gaq\u0026\u0026(_gaq.push([\"_trackEvent\",\"Scroll Depth\",a,b,1,!0]),2\u003Carguments.length\u0026\u0026_gaq.push([\"_trackTiming\",\"Scroll Depth\",a,e,b,100])))}function p(a,b,e){c.each(a,function(a,g){-1===c.inArray(a,f)\u0026\u0026b\u003E=g\u0026\u0026(l(\"Percentage\",a,e),f.push(a))})}function q(a,b,e){c.each(a,function(a,g){-1===c.inArray(g,f)\u0026\u0026c(g).length\u0026\u0026b\u003E=c(g).offset().top\u0026\u0026(l(\"Elements\",g,e),f.push(g))})}function r(a,\nb){var e,c,g,d=null,f=0,k=function(){f=new Date;d=null;g=a.apply(e,c)};return function(){var h=new Date;f||(f=h);var l=b-(h-f);e=this;c=arguments;0\u003E=l?(clearTimeout(d),d=null,f=h,g=a.apply(e,c)):d||(d=setTimeout(k,l));return g}}var t=+new Date;d=c.extend({},n,d);c(m).height()\u003Cd.minHeight||(l(\"Percentage\",\"Baseline\"),k.on(\"scroll.scrollDepth\",r(function(){var a=c(m).height(),b=h.innerHeight?h.innerHeight:k.height();b=k.scrollTop()+b;a={\"25%\":parseInt(.25*a,10),\"50%\":parseInt(.5*a,10),\"75%\":parseInt(.75*\na,10),\"100%\":a-1};var e=+new Date-t;f.length\u003E=4+d.elements.length?k.off(\"scroll.scrollDepth\"):(d.elements\u0026\u0026q(d.elements,b,e),d.percentage\u0026\u0026p(a,b,e))},500)))}})(jQuery,window,document);jQuery.scrollDepth();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":242
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E$(\"a[href^\\x3d'\/request-information']\").each(function(){this.href=this.href.replace(\"\/request-information\",\"\/student-portal-live-chat\")});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":245
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"https:\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"199288280644877\");fbq(\"track\",\"ViewContent\",{content_id:",["escape",["macro",59],8,16],",content_category:\"ashford.edu landing\",current_student:\"no\"});\u003C\/script\u003E\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":250
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"https:\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"199288280644877\");fbq(\"track\",\"Lead\");\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?id=199288280644877\u0026amp;ev=Lead\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E\n\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":251
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":" \u003Cscript type=\"text\/gtmscript\"\u003E_tcaq.push([\"capture\",\"form_submission\"]);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":256
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E_tcaq.push([\"capture\",\"Start Now\"]);\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":257
    },{
      "function":"__html",
      "teardown_tags":["list",["tag",30,0]],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Evar GACookie=",["escape",["macro",60],8,16],";\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":259
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript id=\"LeadiDscript\" type=\"text\/gtmscript\"\u003E(function(){var a=document.createElement(\"script\");a.id=\"LeadiDscript_campaign\";a.type=\"text\/javascript\";a.async=!0;a.src=\"\/\/create.lidstatic.com\/campaign\/9465c100-a5bc-3ebe-15d9-aa916d591b25.js?snippet_version\\x3d2\";var b=document.getElementById(\"LeadiDscript\");b.parentNode.insertBefore(a,b)})();\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg src=\"\/\/create.leadid.com\/noscript.gif?lac=13dfb90a-9b9d-11e1-b18c-22000a1c5064\u0026amp;lck=9465c100-a5bc-3ebe-15d9-aa916d591b25\u0026amp;snippet_version=2\"\u003E\u003C\/noscript\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":260
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/bot.ivy.ai\/bot\/script\/category\/Vv1K8zqBOmpxaLMKeDlQ6XY20RgkjWw5\"\u003E\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":262
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\n\u003Cscript async data-gtmsrc=\"https:\/\/www.googletagmanager.com\/gtag\/js?id=AW-966556521\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag(\"js\",new Date);gtag(\"config\",\"AW-966556521\");\u003C\/script\u003E\n\n\u003Cscript type=\"text\/gtmscript\"\u003Egtag(\"event\",\"page_view\",{send_to:\"AW-966556521\",user_id:\"",["escape",["macro",12],7],"\"});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":267
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Evar DLareaCode=",["escape",["macro",23],8,16],";\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":269
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"https:\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"1496679027308149\");fbq(\"track\",\"PageView\");\u003C\/script\u003E\n\n\u003Cnoscript\u003E\n\n\u003Cimg height=\"1\" width=\"1\" src=\"https:\/\/www.facebook.com\/tr?id=1496679027308149\u0026amp;ev=PageView\n\n\u0026amp;noscript=1\"\u003E\n\n\u003C\/noscript\u003E\n\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":273
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"https:\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"1496679027308149\");fbq(\"track\",\"PageView\");fbq(\"track\",\"Lead\");\u003C\/script\u003E\n\n\u003Cnoscript\u003E\n\n\u003Cimg height=\"1\" width=\"1\" src=\"https:\/\/www.facebook.com\/tr?id=1496679027308149\u0026amp;ev=PageView\n\n\u0026amp;noscript=1\"\u003E\n\n\u003C\/noscript\u003E\n\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":274
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E$('a[href^\\x3d\"\/request-information\"]').each(function(a){$(this).attr(\"data-opbundled\",\"request-\"+(a+1))});$('a[href^\\x3d\"https:\/\/oap.ashford.edu\/\"]').each(function(a){$(this).attr(\"data-opbundled\",\"apply-\"+(a+1))});$('a[href^\\x3d\"\/request-information\"]').on(\"click\",function(){window.optimizely=window.optimizely||[];window.optimizely.push({type:\"user\",attributes:{CTA:$(this).data(\"opbundled\"),CTALocation:window.location.pathname}})});\n$('a[href^\\x3d\"https:\/\/oap.ashford.edu\/\"]').on(\"click\",function(){window.optimizely=window.optimizely||[];window.optimizely.push({type:\"user\",attributes:{CTA:$(this).data(\"opbundled\"),CTALocation:window.location.pathname}})});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":277
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.optimizely=window.optimizely||[];window.optimizely.push({type:\"user\",attributes:{conversionType:\"RFI\"}});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":278
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.optimizely=window.optimizely||[];\nvoid 0!==window.optimizely.get(\"visitor\").custom\u0026\u0026void 0!==window.optimizely.get(\"visitor\").custom[\"11938561655\"]\u0026\u0026void 0!==window.optimizely.get(\"visitor\").custom[\"11932961320\"]\u0026\u0026(-1!==window.optimizely.get(\"visitor\").custom[\"11938561655\"].value.indexOf(\"request\")\u0026\u0026\"RFI\"==window.optimizely.get(\"visitor\").custom[\"11932961320\"].value\u0026\u0026window.optimizely.push({type:\"event\",eventName:\"bundled-event-cta-rfi\"}),-1!==window.optimizely.get(\"visitor\").custom[\"11938561655\"].value.indexOf(\"apply\")\u0026\u0026\"OAP\"==window.optimizely.get(\"visitor\").custom[\"11932961320\"].value\u0026\u0026\nwindow.optimizely.push({type:\"event\",eventName:\"bundled-event-cta-oap\"}));\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":279
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.optimizely=window.optimizely||[];window.optimizely.push({type:\"user\",attributes:{\"rfi-view\":!0}});\u003C\/script\u003E\n\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":283
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.optimizely=window.optimizely||[];window.optimizely.push({type:\"user\",attributes:{\"rfi-submit\":!0}});\u003C\/script\u003E\n\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":284
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Efunction clientId_int(){function g(e){e+=\"\\x3d\";for(var f=document.cookie.split(\";\"),b=0;b\u003Cf.length;b++){for(var a=f[b];\" \"==a.charAt(0);)a=a.substring(1,a.length);if(0==a.indexOf(e))return a.substring(e.length,a.length)}return null}function h(e,f,b){if(b){var a=new Date;a.setTime(a.getTime()+864E5*b);b=\"; expires\\x3d\"+a.toGMTString()}else b=\"\";document.cookie=e+\"\\x3d\"+f+b+\";domain\\x3d.ashford.edu;path\\x3d\/\"}var d=g(\"visitorUUID\");null==d\u0026\u0026(function(){var e=\"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz\".split(\"\");\nMath.uuid=function(){for(var f=e,b=Array(36),a=0,d,c=0;36\u003Ec;c++)8==c||13==c||18==c||23==c?b[c]=\"-\":14==c?b[c]=\"4\":(2\u003E=a\u0026\u0026(a=33554432+16777216*Math.random()|0),d=a\u002615,a\u003E\u003E=4,b[c]=f[19==c?d\u00263|8:d]);return b.join(\"\")}}(),d=Math.uuid(),h(\"visitorUUID\",d,365));1\u003C=$('input[name\\x3d\"clientid\"]').length\u0026\u0026$('input[name\\x3d\"clientid\"]').each(function(){$(this).val(d)})}!0===window.ashfordLoaded?clientId_int():window.addEventListener(\"ashfordLoaded\",function(){clientId_int()});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":302
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.optimizely=window.optimizely||[];window.optimizely.push({type:\"event\",eventName:\"formsubmitv2\"});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":305
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/728-ct.c3tag.com\/c3metrics-728.js\"\u003E\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":306
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/728-ct.c3tag.com\/c3metrics-728.js?c3_type=1\u0026amp;account_id=",["escape",["macro",32],12],"\"\u003E\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":307
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"https:\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"199288280644877\");fbq(\"track\",\"PageView\",{content_category:\"ashford.edu landing\",current_student:\"no\"});\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":308
    }],
  "predicates":[{
      "function":"_cn",
      "arg0":["macro",25],
      "arg1":"\/request-information\/thank-you"
    },{
      "function":"_eq",
      "arg0":["macro",26],
      "arg1":"gtm.js"
    },{
      "function":"_eq",
      "arg0":["macro",26],
      "arg1":"gtm.dom"
    },{
      "function":"_eq",
      "arg0":["macro",33],
      "arg1":"undefined"
    },{
      "function":"_eq",
      "arg0":["macro",34],
      "arg1":"undefined"
    },{
      "function":"_eq",
      "arg0":["macro",26],
      "arg1":"analyticsEvent"
    },{
      "function":"_eq",
      "arg0":["macro",3],
      "arg1":"false"
    },{
      "function":"_eq",
      "arg0":["macro",26],
      "arg1":"gtm.linkClick"
    },{
      "function":"_re",
      "arg0":["macro",38],
      "arg1":"(^$|((^|,)488071_86($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",40],
      "arg1":"undefined"
    },{
      "function":"_eq",
      "arg0":["macro",41],
      "arg1":"undefined"
    },{
      "function":"_eq",
      "arg0":["macro",42],
      "arg1":"undefined"
    },{
      "function":"_eq",
      "arg0":["macro",26],
      "arg1":"social"
    },{
      "function":"_cn",
      "arg0":["macro",2],
      "arg1":"static\/info\/information.htm"
    },{
      "function":"_eq",
      "arg0":["macro",26],
      "arg1":"gtm.click"
    },{
      "function":"_cn",
      "arg0":["macro",43],
      "arg1":"shortform-submit"
    },{
      "function":"_cn",
      "arg0":["macro",25],
      "arg1":"info\/information"
    },{
      "function":"_cn",
      "arg0":["macro",43],
      "arg1":"emailaddress"
    },{
      "function":"_cn",
      "arg0":["macro",44],
      "arg1":"webform-submission-lead-flow-system-form"
    },{
      "function":"_re",
      "arg0":["macro",38],
      "arg1":"(^$|((^|,)488071_114($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",2],
      "arg1":"login.uagc.edu\/"
    },{
      "function":"_re",
      "arg0":["macro",38],
      "arg1":"(^$|((^|,)488071_115($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",2],
      "arg1":"oap.ashford.edu\/"
    },{
      "function":"_cn",
      "arg0":["macro",2],
      "arg1":"mailto:"
    },{
      "function":"_re",
      "arg0":["macro",38],
      "arg1":"(^$|((^|,)488071_132($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",45],
      "arg1":"yamlform-submission-lead-flow-system-short-form"
    },{
      "function":"_eq",
      "arg0":["macro",26],
      "arg1":"gtm.formSubmit"
    },{
      "function":"_re",
      "arg0":["macro",38],
      "arg1":"(^$|((^|,)488071_134($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",44],
      "arg1":"webform-submission-lead-flow-system-form|webform-submission-hero-request-information-form"
    },{
      "function":"_re",
      "arg0":["macro",38],
      "arg1":"(^$|((^|,)488071_136($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",44],
      "arg1":"webform-submission-lead-flow-system-cta-form"
    },{
      "function":"_re",
      "arg0":["macro",38],
      "arg1":"(^$|((^|,)488071_135($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",48],
      "arg1":"button button--cta-with-icon --cta-arrow"
    },{
      "function":"_cn",
      "arg0":["macro",25],
      "arg1":"https:\/\/www.ashford.edu\/request-information"
    },{
      "function":"_re",
      "arg0":["macro",38],
      "arg1":"(^$|((^|,)488071_149($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",43],
      "arg1":"edit-"
    },{
      "function":"_cn",
      "arg0":["macro",25],
      "arg1":"\/online-degrees\/degree-finder"
    },{
      "function":"_eq",
      "arg0":["macro",43],
      "arg1":"edit-path"
    },{
      "function":"_eq",
      "arg0":["macro",48],
      "arg1":"button button--cta"
    },{
      "function":"_cn",
      "arg0":["macro",9],
      "arg1":"https:\/\/www.ashford.edu\/request-information"
    },{
      "function":"_cn",
      "arg0":["macro",43],
      "arg1":"footer-cta"
    },{
      "function":"_re",
      "arg0":["macro",38],
      "arg1":"(^$|((^|,)488071_163($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",48],
      "arg1":"button--transparent"
    },{
      "function":"_cn",
      "arg0":["macro",39],
      "arg1":"GET STARTED"
    },{
      "function":"_re",
      "arg0":["macro",38],
      "arg1":"(^$|((^|,)488071_169($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",10],
      "arg1":"accordion"
    },{
      "function":"_eq",
      "arg0":["macro",26],
      "arg1":"campaign-decided"
    },{
      "function":"_eq",
      "arg0":["macro",26],
      "arg1":"optimizely-referrer-override"
    },{
      "function":"_cn",
      "arg0":["macro",48],
      "arg1":"mobile-menu__cta-link"
    },{
      "function":"_cn",
      "arg0":["macro",43],
      "arg1":"mobile-footer-cta"
    },{
      "function":"_re",
      "arg0":["macro",38],
      "arg1":"(^$|((^|,)488071_199($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",2],
      "arg1":"ModalPopUp_Desktop"
    },{
      "function":"_cn",
      "arg0":["macro",2],
      "arg1":"ModalPopUp_CloseButton2"
    },{
      "function":"_cn",
      "arg0":["macro",48],
      "arg1":"mobile-menu__cta-call"
    },{
      "function":"_re",
      "arg0":["macro",38],
      "arg1":"(^$|((^|,)488071_215($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",12],
      "arg1":"false"
    },{
      "function":"_eq",
      "arg0":["macro",26],
      "arg1":"gtm.load"
    },{
      "function":"_eq",
      "arg0":["macro",3],
      "arg1":"true"
    },{
      "function":"_re",
      "arg0":["macro",38],
      "arg1":"(^$|((^|,)488071_225($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",48],
      "arg1":"section__stat"
    },{
      "function":"_re",
      "arg0":["macro",48],
      "arg1":"mobile-menu__cta-link|button button--cta-with-icon --cta-arrow-test",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",25],
      "arg1":"https:\/\/www.ashford.edu"
    },{
      "function":"_eq",
      "arg0":["macro",39],
      "arg1":"Graduate Education"
    },{
      "function":"_eq",
      "arg0":["macro",26],
      "arg1":"ScrollDistance"
    },{
      "function":"_re",
      "arg0":["macro",53],
      "arg1":"START NOW",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",53],
      "arg1":"NEXT.*",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",38],
      "arg1":"(^$|((^|,)488071_303($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",26],
      "arg1":"gtm.video"
    },{
      "function":"_re",
      "arg0":["macro",38],
      "arg1":"(^$|((^|,)488071_309($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",38],
      "arg1":"(^$|((^|,)488071_328($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",2],
      "arg1":"https:\/\/bot.ivy.ai\/storage\/bot\/Vv1K8zqBOmpxaLMKeDlQ6XY20RgkjWw5\/image-8221114a-f0cd-4b7b-9fb2-684d28aaa5ff.jpg"
    },{
      "function":"_cn",
      "arg0":["macro",25],
      "arg1":"request-information\/thank-you"
    },{
      "function":"_css",
      "arg0":["macro",9],
      "arg1":".ASHAB406.step-1 \u003E button"
    },{
      "function":"_css",
      "arg0":["macro",9],
      "arg1":"button.ASHAB406.step-2__substep-2__next"
    },{
      "function":"_css",
      "arg0":["macro",9],
      "arg1":".ASHAB406.step-2__substep-1.--active \u003E button[value=\"yes\"]"
    },{
      "function":"_css",
      "arg0":["macro",9],
      "arg1":".ASHAB406.step-2__substep-1.--active \u003E button[value=\"no\"]"
    },{
      "function":"_css",
      "arg0":["macro",9],
      "arg1":".step-3__substep-1 \u003E button[value=\"yes\"]"
    },{
      "function":"_css",
      "arg0":["macro",9],
      "arg1":".step-3__substep-1 \u003E button[value=\"no\"]"
    },{
      "function":"_css",
      "arg0":["macro",9],
      "arg1":"button.ASHAB406.step-3__substep-2__next"
    },{
      "function":"_css",
      "arg0":["macro",9],
      "arg1":".step-3__substep-3__content \u003E ul \u003E li \u003E button"
    },{
      "function":"_css",
      "arg0":["macro",9],
      "arg1":".step-3__substep-3 \u003E button"
    },{
      "function":"_css",
      "arg0":["macro",9],
      "arg1":".step-4.--active \u003E button.ASHAB406.step-4__next"
    },{
      "function":"_cn",
      "arg0":["macro",25],
      "arg1":"https:\/\/www.ashford.edu\/request-information\/thank-you"
    },{
      "function":"_css",
      "arg0":["macro",9],
      "arg1":".ASHAB406B__left \u003E div \u003E a"
    },{
      "function":"_css",
      "arg0":["macro",9],
      "arg1":".ASHAB406B__right \u003E div \u003E a"
    },{
      "function":"_re",
      "arg0":["macro",25],
      "arg1":"www.ashford.edu\/online-degrees\/(accounting-finance|business|communications|criminal-justice|education|health-care|information-technology|liberal-arts|political-science|social-behavioral-science)",
      "ignore_case":true
    },{
      "function":"_cn",
      "arg0":["macro",2],
      "arg1":"careers"
    },{
      "function":"_re",
      "arg0":["macro",2],
      "arg1":"www.ashford.edu\/online-degrees\/(.accounting-finance|business|communications|criminal-justice|education|health-care|information-technology|liberal-arts|political-science|social-behavioral-science)+\/(.*)$",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",38],
      "arg1":"(^$|((^|,)488071_421($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",25],
      "arg1":"www.ashford.edu\/online-degrees\/(accounting-finance|business|communications|criminal-justice|education|health-care|information-technology|liberal-arts|political-science|social-behavioral-science)"
    },{
      "function":"_eq",
      "arg0":["macro",43],
      "arg1":"edit-field-degree-level-target-id"
    },{
      "function":"_eq",
      "arg0":["macro",43],
      "arg1":"edit-items-per-page"
    },{
      "function":"_css",
      "arg0":["macro",48],
      "arg1":".pager__items li a.pager__link"
    },{
      "function":"_cn",
      "arg0":["macro",2],
      "arg1":"\/careers"
    },{
      "function":"_re",
      "arg0":["macro",38],
      "arg1":"(^$|((^|,)488071_427($|,)))"
    },{
      "function":"_css",
      "arg0":["macro",9],
      "arg1":".section--image-cta a.section__item"
    },{
      "function":"_re",
      "arg0":["macro",38],
      "arg1":"(^$|((^|,)488071_428($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",25],
      "arg1":"https:\/\/www.ashford.edu\/"
    },{
      "function":"_css",
      "arg0":["macro",9],
      "arg1":".section--feature-space-video .section__header-buttons a.section__link"
    },{
      "function":"_re",
      "arg0":["macro",38],
      "arg1":"(^$|((^|,)488071_438($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",48],
      "arg1":"_hj-f5b2a1eb-9b07"
    },{
      "function":"_cn",
      "arg0":["macro",25],
      "arg1":"request-information\/thank-you\/"
    },{
      "function":"_cn",
      "arg0":["macro",2],
      "arg1":"gedt_print.html"
    },{
      "function":"_cn",
      "arg0":["macro",25],
      "arg1":"program-disclosure"
    },{
      "function":"_sw",
      "arg0":["macro",25],
      "arg1":"https:\/\/www.ashford.edu\/student-portal-live-chat"
    },{
      "function":"_eq",
      "arg0":["macro",57],
      "arg1":"Student"
    },{
      "function":"_cn",
      "arg0":["macro",25],
      "arg1":"\/tuition-financial-aid\/education-partnerships"
    },{
      "function":"_cn",
      "arg0":["macro",25],
      "arg1":"\/online-learning\/does-technology-and-education-move-faster-than-culture"
    },{
      "function":"_eq",
      "arg0":["macro",58],
      "arg1":"false"
    },{
      "function":"_eq",
      "arg0":["macro",60],
      "arg1":"false"
    },{
      "function":"_cn",
      "arg0":["macro",25],
      "arg1":"www.ashford.edu\/request-information"
    },{
      "function":"_cn",
      "arg0":["macro",25],
      "arg1":"request-information"
    },{
      "function":"_cn",
      "arg0":["macro",25],
      "arg1":"thank-you"
    }],
  "rules":[
    [["if",0,1],["add",2,4,42,158,170,174]],
    [["if",1],["add",3,22,34,35,44,47,133,0,134,135,139,140,142,149,157,162,163,166,168,175,177,48,49,141,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132]],
    [["if",2],["add",1,155,173]],
    [["if",5],["unless",3,4],["add",5]],
    [["if",6,7,8],["add",6]],
    [["if",12],["unless",9,10,11],["add",7]],
    [["if",13,14],["add",8]],
    [["if",14,15],["add",8]],
    [["if",14,16,17],["add",9]],
    [["if",7,18,19],["add",10]],
    [["if",7,20,21],["add",11,154]],
    [["if",14,22],["add",12]],
    [["if",7,23,24],["add",13]],
    [["if",25,26,27],["add",14]],
    [["if",26,28,29],["add",15,146,148,159,165,167,169,176]],
    [["if",26,30,31],["add",16]],
    [["if",7,32,34],["unless",33],["add",17]],
    [["if",14,35],["add",18]],
    [["if",14,36,37],["add",19]],
    [["if",7,38,39,40,41],["add",20]],
    [["if",7,42,43,44],["add",21]],
    [["if",14,45],["add",23]],
    [["if",46],["add",24]],
    [["if",47],["add",25]],
    [["if",7,48,49,50],["add",26]],
    [["if",14,51],["add",27]],
    [["if",14,52],["add",28]],
    [["if",7,53,54],["add",29]],
    [["if",56],["unless",55],["add",30,144]],
    [["if",7,57,58],["add",31]],
    [["if",14,59],["add",32]],
    [["if",14,60],["add",33,160]],
    [["if",14,61,62],["add",36]],
    [["if",63],["add",37]],
    [["if",14,64],["add",38]],
    [["if",26,65,66],["add",38]],
    [["if",67,68],["add",39]],
    [["if",7,69],["add",40]],
    [["if",14],["add",41]],
    [["if",56],["add",43,45,164]],
    [["if",14,70],["add",46]],
    [["if",56,71],["add",50,51,136,172]],
    [["if",14,33,72],["add",52]],
    [["if",14,33,73],["add",53]],
    [["if",14,33,74],["add",54]],
    [["if",14,33,75],["add",55]],
    [["if",14,33,76],["add",56]],
    [["if",14,33,77],["add",57]],
    [["if",14,33,78],["add",58]],
    [["if",14,33,79],["add",59]],
    [["if",14,33,80],["add",59]],
    [["if",14,33,81],["add",60]],
    [["if",1,82],["add",61]],
    [["if",14,82,83],["add",62]],
    [["if",14,82,84],["add",62]],
    [["if",7,85,87,88],["unless",86],["add",63]],
    [["if",14,89,90],["add",64]],
    [["if",14,85,91],["add",64]],
    [["if",14,85,92],["add",64]],
    [["if",7,85,93,94],["add",65]],
    [["if",7,95,96],["add",66]],
    [["if",7,97,98,99],["add",67]],
    [["if",14,100],["add",68]],
    [["if",1,101],["add",137,138]],
    [["if",14,102,103],["add",143]],
    [["if",1,104],["add",145]],
    [["if",1,105],["add",147,156]],
    [["if",1,106],["add",150]],
    [["if",1,107],["add",151]],
    [["if",56],["unless",108],["add",152,153]],
    [["if",56],["unless",109],["add",161]],
    [["if",56,111],["unless",112],["add",171]],
    [["if",1,110],["block",163]]]
},
"runtime":[
[],[]
]



};
var aa,ba=this||self,da=/^[\w+/_-]+[=]{0,2}$/,ea=null;var fa=function(){},ha=function(a){return"function"==typeof a},ia=function(a){return"string"==typeof a},ja=function(a){return"number"==typeof a&&!isNaN(a)},ka=function(a){return"[object Array]"==Object.prototype.toString.call(Object(a))},la=function(a,b){if(Array.prototype.indexOf){var c=a.indexOf(b);return"number"==typeof c?c:-1}for(var d=0;d<a.length;d++)if(a[d]===b)return d;return-1},ma=function(a,b){if(a&&ka(a))for(var c=0;c<a.length;c++)if(a[c]&&b(a[c]))return a[c]},oa=function(a,b){if(!ja(a)||
!ja(b)||a>b)a=0,b=2147483647;return Math.floor(Math.random()*(b-a+1)+a)},qa=function(a,b){for(var c=new pa,d=0;d<a.length;d++)c.set(a[d],!0);for(var e=0;e<b.length;e++)if(c.get(b[e]))return!0;return!1},ra=function(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b(c,a[c])},sa=function(a){return Math.round(Number(a))||0},ta=function(a){return"false"==String(a).toLowerCase()?!1:!!a},ua=function(a){var b=[];if(ka(a))for(var c=0;c<a.length;c++)b.push(String(a[c]));return b},va=function(a){return a?
a.replace(/^\s+|\s+$/g,""):""},wa=function(){return(new Date).getTime()},pa=function(){this.prefix="gtm.";this.values={}};pa.prototype.set=function(a,b){this.values[this.prefix+a]=b};pa.prototype.get=function(a){return this.values[this.prefix+a]};pa.prototype.contains=function(a){return void 0!==this.get(a)};
var xa=function(a,b,c){return a&&a.hasOwnProperty(b)?a[b]:c},ya=function(a){var b=!1;return function(){if(!b)try{a()}catch(c){}b=!0}},za=function(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c])},Aa=function(a){for(var b in a)if(a.hasOwnProperty(b))return!0;return!1},Da=function(a,b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]),c.push.apply(c,b[a[d]]||[]);return c};/*
 jQuery v1.9.1 (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
var Ea=/\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,Fa=function(a){if(null==a)return String(a);var b=Ea.exec(Object.prototype.toString.call(Object(a)));return b?b[1].toLowerCase():"object"},Ga=function(a,b){return Object.prototype.hasOwnProperty.call(Object(a),b)},Ha=function(a){if(!a||"object"!=Fa(a)||a.nodeType||a==a.window)return!1;try{if(a.constructor&&!Ga(a,"constructor")&&!Ga(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}for(var b in a);return void 0===
b||Ga(a,b)},f=function(a,b){var c=b||("array"==Fa(a)?[]:{}),d;for(d in a)if(Ga(a,d)){var e=a[d];"array"==Fa(e)?("array"!=Fa(c[d])&&(c[d]=[]),c[d]=f(e,c[d])):Ha(e)?(Ha(c[d])||(c[d]={}),c[d]=f(e,c[d])):c[d]=e}return c};var u=window,C=document,Ia=navigator,Ja=C.currentScript&&C.currentScript.src,Ka=function(a,b){var c=u[a];u[a]=void 0===c?b:c;return u[a]},La=function(a,b){b&&(a.addEventListener?a.onload=b:a.onreadystatechange=function(){a.readyState in{loaded:1,complete:1}&&(a.onreadystatechange=null,b())})},Ma=function(a,b,c){var d=C.createElement("script");d.type="text/javascript";d.async=!0;d.src=a;La(d,b);c&&(d.onerror=c);var e;if(null===ea)b:{var g=ba.document,h=g.querySelector&&g.querySelector("script[nonce]");
if(h){var k=h.nonce||h.getAttribute("nonce");if(k&&da.test(k)){ea=k;break b}}ea=""}e=ea;e&&d.setAttribute("nonce",e);var l=C.getElementsByTagName("script")[0]||C.body||C.head;l.parentNode.insertBefore(d,l);return d},Na=function(){if(Ja){var a=Ja.toLowerCase();if(0===a.indexOf("https://"))return 2;if(0===a.indexOf("http://"))return 3}return 1},Oa=function(a,b){var c=C.createElement("iframe");c.height="0";c.width="0";c.style.display="none";c.style.visibility="hidden";var d=C.body&&C.body.lastChild||
C.body||C.head;d.parentNode.insertBefore(c,d);La(c,b);void 0!==a&&(c.src=a);return c},Pa=function(a,b,c){var d=new Image(1,1);d.onload=function(){d.onload=null;b&&b()};d.onerror=function(){d.onerror=null;c&&c()};d.src=a;return d},Qa=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,!!d):a.attachEvent&&a.attachEvent("on"+b,c)},Ra=function(a,b,c){a.removeEventListener?a.removeEventListener(b,c,!1):a.detachEvent&&a.detachEvent("on"+b,c)},D=function(a){u.setTimeout(a,0)},Sa=function(a,b){return a&&
b&&a.attributes&&a.attributes[b]?a.attributes[b].value:null},Wa=function(a){var b=a.innerText||a.textContent||"";b&&" "!=b&&(b=b.replace(/^[\s\xa0]+|[\s\xa0]+$/g,""));b&&(b=b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g," "));return b},Xa=function(a){var b=C.createElement("div");b.innerHTML="A<div>"+a+"</div>";b=b.lastChild;for(var c=[];b.firstChild;)c.push(b.removeChild(b.firstChild));return c},Ya=function(a,b,c){c=c||100;for(var d={},e=0;e<b.length;e++)d[b[e]]=!0;for(var g=a,h=0;g&&h<=c;h++){if(d[String(g.tagName).toLowerCase()])return g;
g=g.parentElement}return null},Za=function(a,b){var c=a[b];c&&"string"===typeof c.animVal&&(c=c.animVal);return c};var $a=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;var ab={},bb=function(a,b){ab[a]=ab[a]||[];ab[a][b]=!0},cb=function(a){for(var b=[],c=ab[a]||[],d=0;d<c.length;d++)c[d]&&(b[Math.floor(d/6)]^=1<<d%6);for(var e=0;e<b.length;e++)b[e]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(b[e]||0);return b.join("")};var db=/:[0-9]+$/,eb=function(a,b,c){for(var d=a.split("&"),e=0;e<d.length;e++){var g=d[e].split("=");if(decodeURIComponent(g[0]).replace(/\+/g," ")===b){var h=g.slice(1).join("=");return c?h:decodeURIComponent(h).replace(/\+/g," ")}}},ib=function(a,b,c,d,e){b&&(b=String(b).toLowerCase());if("protocol"===b||"port"===b)a.protocol=fb(a.protocol)||fb(u.location.protocol);"port"===b?a.port=String(Number(a.hostname?a.port:u.location.port)||("http"==a.protocol?80:"https"==a.protocol?443:"")):"host"===b&&
(a.hostname=(a.hostname||u.location.hostname).replace(db,"").toLowerCase());var g=b,h,k=fb(a.protocol);g&&(g=String(g).toLowerCase());switch(g){case "url_no_fragment":h=hb(a);break;case "protocol":h=k;break;case "host":h=a.hostname.replace(db,"").toLowerCase();if(c){var l=/^www\d*\./.exec(h);l&&l[0]&&(h=h.substr(l[0].length))}break;case "port":h=String(Number(a.port)||("http"==k?80:"https"==k?443:""));break;case "path":a.pathname||a.hostname||bb("TAGGING",1);h="/"==a.pathname.substr(0,1)?a.pathname:
"/"+a.pathname;var m=h.split("/");0<=la(d||[],m[m.length-1])&&(m[m.length-1]="");h=m.join("/");break;case "query":h=a.search.replace("?","");e&&(h=eb(h,e,void 0));break;case "extension":var n=a.pathname.split(".");h=1<n.length?n[n.length-1]:"";h=h.split("/")[0];break;case "fragment":h=a.hash.replace("#","");break;default:h=a&&a.href}return h},fb=function(a){return a?a.replace(":","").toLowerCase():""},hb=function(a){var b="";if(a&&a.href){var c=a.href.indexOf("#");b=0>c?a.href:a.href.substr(0,c)}return b},
jb=function(a){var b=C.createElement("a");a&&(b.href=a);var c=b.pathname;"/"!==c[0]&&(a||bb("TAGGING",1),c="/"+c);var d=b.hostname.replace(db,"");return{href:b.href,protocol:b.protocol,host:b.host,hostname:d,pathname:c,search:b.search,hash:b.hash,port:b.port}};var kb=function(a,b,c){for(var d=[],e=String(b||document.cookie).split(";"),g=0;g<e.length;g++){var h=e[g].split("="),k=h[0].replace(/^\s*|\s*$/g,"");if(k&&k==a){var l=h.slice(1).join("=").replace(/^\s*|\s*$/g,"");l&&c&&(l=decodeURIComponent(l));d.push(l)}}return d},nb=function(a,b,c,d){var e=lb(a,d);if(1===e.length)return e[0].id;if(0!==e.length){e=mb(e,function(g){return g.Ib},b);if(1===e.length)return e[0].id;e=mb(e,function(g){return g.eb},c);return e[0]?e[0].id:void 0}};
function ob(a,b,c){var d=document.cookie;document.cookie=a;var e=document.cookie;return d!=e||void 0!=c&&0<=kb(b,e).indexOf(c)}
var sb=function(a,b,c,d,e,g){d=d||"auto";var h={path:c||"/"};e&&(h.expires=e);"none"!==d&&(h.domain=d);var k;a:{var l=b,m;if(void 0==l)m=a+"=deleted; expires="+(new Date(0)).toUTCString();else{g&&(l=encodeURIComponent(l));var n=l;n&&1200<n.length&&(n=n.substring(0,1200));l=n;m=a+"="+l}var p=void 0,t=void 0,q;for(q in h)if(h.hasOwnProperty(q)){var r=h[q];if(null!=r)switch(q){case "secure":r&&(m+="; secure");break;case "domain":p=r;break;default:"path"==q&&(t=r),"expires"==q&&r instanceof Date&&(r=
r.toUTCString()),m+="; "+q+"="+r}}if("auto"===p){for(var v=pb(),w=0;w<v.length;++w){var x="none"!=v[w]?v[w]:void 0;if(!rb(x,t)&&ob(m+(x?"; domain="+x:""),a,l)){k=!0;break a}}k=!1}else p&&"none"!=p&&(m+="; domain="+p),k=!rb(p,t)&&ob(m,a,l)}return k};function mb(a,b,c){for(var d=[],e=[],g,h=0;h<a.length;h++){var k=a[h],l=b(k);l===c?d.push(k):void 0===g||l<g?(e=[k],g=l):l===g&&e.push(k)}return 0<d.length?d:e}
function lb(a,b){for(var c=[],d=kb(a),e=0;e<d.length;e++){var g=d[e].split("."),h=g.shift();if(!b||-1!==b.indexOf(h)){var k=g.shift();k&&(k=k.split("-"),c.push({id:g.join("."),Ib:1*k[0]||1,eb:1*k[1]||1}))}}return c}
var tb=/^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,ub=/(^|\.)doubleclick\.net$/i,rb=function(a,b){return ub.test(document.location.hostname)||"/"===b&&tb.test(a)},pb=function(){var a=[],b=document.location.hostname.split(".");if(4===b.length){var c=b[b.length-1];if(parseInt(c,10).toString()===c)return["none"]}for(var d=b.length-2;0<=d;d--)a.push(b.slice(d).join("."));a.push("none");return a};
var vb=[],wb={"\x00":"&#0;",'"':"&quot;","&":"&amp;","'":"&#39;","<":"&lt;",">":"&gt;","\t":"&#9;","\n":"&#10;","\x0B":"&#11;","\f":"&#12;","\r":"&#13;"," ":"&#32;","-":"&#45;","/":"&#47;","=":"&#61;","`":"&#96;","\u0085":"&#133;","\u00a0":"&#160;","\u2028":"&#8232;","\u2029":"&#8233;"},xb=function(a){return wb[a]},yb=/[\x00\x22\x26\x27\x3c\x3e]/g;var Cb=/[\x00\x08-\x0d\x22\x26\x27\/\x3c-\x3e\\\x85\u2028\u2029]/g,Db={"\x00":"\\x00","\b":"\\x08","\t":"\\t","\n":"\\n","\x0B":"\\x0b",
"\f":"\\f","\r":"\\r",'"':"\\x22","&":"\\x26","'":"\\x27","/":"\\/","<":"\\x3c","=":"\\x3d",">":"\\x3e","\\":"\\\\","\u0085":"\\x85","\u2028":"\\u2028","\u2029":"\\u2029",$:"\\x24","(":"\\x28",")":"\\x29","*":"\\x2a","+":"\\x2b",",":"\\x2c","-":"\\x2d",".":"\\x2e",":":"\\x3a","?":"\\x3f","[":"\\x5b","]":"\\x5d","^":"\\x5e","{":"\\x7b","|":"\\x7c","}":"\\x7d"},Eb=function(a){return Db[a]};vb[7]=function(a){return String(a).replace(Cb,Eb)};
vb[8]=function(a){if(null==a)return" null ";switch(typeof a){case "boolean":case "number":return" "+a+" ";default:return"'"+String(String(a)).replace(Cb,Eb)+"'"}};var Kb=/['()]/g,Lb=function(a){return"%"+a.charCodeAt(0).toString(16)};vb[12]=function(a){var b=
encodeURIComponent(String(a));Kb.lastIndex=0;return Kb.test(b)?b.replace(Kb,Lb):b};var Mb=/[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,Nb={"\x00":"%00","\u0001":"%01","\u0002":"%02","\u0003":"%03","\u0004":"%04","\u0005":"%05","\u0006":"%06","\u0007":"%07","\b":"%08","\t":"%09","\n":"%0A","\x0B":"%0B","\f":"%0C","\r":"%0D","\u000e":"%0E","\u000f":"%0F","\u0010":"%10",
"\u0011":"%11","\u0012":"%12","\u0013":"%13","\u0014":"%14","\u0015":"%15","\u0016":"%16","\u0017":"%17","\u0018":"%18","\u0019":"%19","\u001a":"%1A","\u001b":"%1B","\u001c":"%1C","\u001d":"%1D","\u001e":"%1E","\u001f":"%1F"," ":"%20",'"':"%22","'":"%27","(":"%28",")":"%29","<":"%3C",">":"%3E","\\":"%5C","{":"%7B","}":"%7D","\u007f":"%7F","\u0085":"%C2%85","\u00a0":"%C2%A0","\u2028":"%E2%80%A8","\u2029":"%E2%80%A9","\uff01":"%EF%BC%81","\uff03":"%EF%BC%83","\uff04":"%EF%BC%84","\uff06":"%EF%BC%86",
"\uff07":"%EF%BC%87","\uff08":"%EF%BC%88","\uff09":"%EF%BC%89","\uff0a":"%EF%BC%8A","\uff0b":"%EF%BC%8B","\uff0c":"%EF%BC%8C","\uff0f":"%EF%BC%8F","\uff1a":"%EF%BC%9A","\uff1b":"%EF%BC%9B","\uff1d":"%EF%BC%9D","\uff1f":"%EF%BC%9F","\uff20":"%EF%BC%A0","\uff3b":"%EF%BC%BB","\uff3d":"%EF%BC%BD"},Ob=function(a){return Nb[a]};vb[16]=function(a){return a};var Qb=[],Rb=[],Sb=[],Tb=[],Ub=[],Wb={},Xb,Yb,Zb,$b=function(a,b){var c={};c["function"]="__"+a;for(var d in b)b.hasOwnProperty(d)&&(c["vtp_"+d]=b[d]);return c},ac=function(a,b){var c=a["function"];if(!c)throw Error("Error: No function name given for function call.");var d=!!Wb[c],e={},g;for(g in a)a.hasOwnProperty(g)&&0===g.indexOf("vtp_")&&(e[d?g:g.substr(4)]=a[g]);return d?Wb[c](e):(void 0)(c,e,b)},cc=function(a,b,c){c=c||[];var d={},e;for(e in a)a.hasOwnProperty(e)&&(d[e]=bc(a[e],b,c));return d},
dc=function(a){var b=a["function"];if(!b)throw"Error: No function name given for function call.";var c=Wb[b];return c?c.priorityOverride||0:0},bc=function(a,b,c){if(ka(a)){var d;switch(a[0]){case "function_id":return a[1];case "list":d=[];for(var e=1;e<a.length;e++)d.push(bc(a[e],b,c));return d;case "macro":var g=a[1];if(c[g])return;var h=Qb[g];if(!h||b.Cc(h))return;c[g]=!0;try{var k=cc(h,b,c);k.vtp_gtmEventId=b.id;d=ac(k,b);Zb&&(d=Zb.Gf(d,k))}catch(w){b.ae&&b.ae(w,Number(g)),d=!1}c[g]=!1;return d;
case "map":d={};for(var l=1;l<a.length;l+=2)d[bc(a[l],b,c)]=bc(a[l+1],b,c);return d;case "template":d=[];for(var m=!1,n=1;n<a.length;n++){var p=bc(a[n],b,c);Yb&&(m=m||p===Yb.wb);d.push(p)}return Yb&&m?Yb.Jf(d):d.join("");case "escape":d=bc(a[1],b,c);if(Yb&&ka(a[1])&&"macro"===a[1][0]&&Yb.kg(a))return Yb.wg(d);d=String(d);for(var t=2;t<a.length;t++)vb[a[t]]&&(d=vb[a[t]](d));return d;case "tag":var q=a[1];if(!Tb[q])throw Error("Unable to resolve tag reference "+q+".");return d={Nd:a[2],index:q};case "zb":var r=
{arg0:a[2],arg1:a[3],ignore_case:a[5]};r["function"]=a[1];var v=ec(r,b,c);a[4]&&(v=!v);return v;default:throw Error("Attempting to expand unknown Value type: "+a[0]+".");}}return a},ec=function(a,b,c){try{return Xb(cc(a,b,c))}catch(d){JSON.stringify(a)}return null};var fc=function(){var a=function(b){return{toString:function(){return b}}};return{ed:a("convert_case_to"),fd:a("convert_false_to"),gd:a("convert_null_to"),hd:a("convert_true_to"),jd:a("convert_undefined_to"),eh:a("debug_mode_metadata"),ka:a("function"),Ue:a("instance_name"),Ve:a("live_only"),We:a("malware_disabled"),Xe:a("metadata"),gh:a("original_vendor_template_id"),Ye:a("once_per_event"),Cd:a("once_per_load"),Dd:a("setup_tags"),Ed:a("tag_id"),Fd:a("teardown_tags")}}();var gc=null,jc=function(a){function b(p){for(var t=0;t<p.length;t++)d[p[t]]=!0}var c=[],d=[];gc=hc(a);for(var e=0;e<Rb.length;e++){var g=Rb[e],h=ic(g);if(h){for(var k=g.add||[],l=0;l<k.length;l++)c[k[l]]=!0;b(g.block||[])}else null===h&&b(g.block||[])}for(var m=[],n=0;n<Tb.length;n++)c[n]&&!d[n]&&(m[n]=!0);return m},ic=function(a){for(var b=a["if"]||[],c=0;c<b.length;c++){var d=gc(b[c]);if(!d)return null===d?null:!1}for(var e=a.unless||[],g=0;g<e.length;g++){var h=gc(e[g]);if(null===h)return null;
if(h)return!1}return!0},hc=function(a){var b=[];return function(c){void 0===b[c]&&(b[c]=ec(Sb[c],a));return b[c]}};/*
 Copyright (c) 2014 Derek Brans, MIT license https://github.com/krux/postscribe/blob/master/LICENSE. Portions derived from simplehtmlparser, which is licensed under the Apache License, Version 2.0 */

var kc,lc=function(){};(function(){function a(k,l){k=k||"";l=l||{};for(var m in b)b.hasOwnProperty(m)&&(l.sf&&(l["fix_"+m]=!0),l.Od=l.Od||l["fix_"+m]);var n={comment:/^\x3c!--/,endTag:/^<\//,atomicTag:/^<\s*(script|style|noscript|iframe|textarea)[\s\/>]/i,startTag:/^</,chars:/^[^<]/},p={comment:function(){var q=k.indexOf("--\x3e");if(0<=q)return{content:k.substr(4,q),length:q+3}},endTag:function(){var q=k.match(d);if(q)return{tagName:q[1],length:q[0].length}},atomicTag:function(){var q=p.startTag();
if(q){var r=k.slice(q.length);if(r.match(new RegExp("</\\s*"+q.tagName+"\\s*>","i"))){var v=r.match(new RegExp("([\\s\\S]*?)</\\s*"+q.tagName+"\\s*>","i"));if(v)return{tagName:q.tagName,F:q.F,content:v[1],length:v[0].length+q.length}}}},startTag:function(){var q=k.match(c);if(q){var r={};q[2].replace(e,function(v,w,x,y,z){var B=x||y||z||g.test(w)&&w||null,A=document.createElement("div");A.innerHTML=B;r[w]=A.textContent||A.innerText||B});return{tagName:q[1],F:r,jb:!!q[3],length:q[0].length}}},chars:function(){var q=
k.indexOf("<");return{length:0<=q?q:k.length}}},t=function(){for(var q in n)if(n[q].test(k)){var r=p[q]();return r?(r.type=r.type||q,r.text=k.substr(0,r.length),k=k.slice(r.length),r):null}};l.Od&&function(){var q=/^(AREA|BASE|BASEFONT|BR|COL|FRAME|HR|IMG|INPUT|ISINDEX|LINK|META|PARAM|EMBED)$/i,r=/^(COLGROUP|DD|DT|LI|OPTIONS|P|TD|TFOOT|TH|THEAD|TR)$/i,v=[];v.$d=function(){return this[this.length-1]};v.Gc=function(A){var E=this.$d();return E&&E.tagName&&E.tagName.toUpperCase()===A.toUpperCase()};v.Ff=
function(A){for(var E=0,F;F=this[E];E++)if(F.tagName===A)return!0;return!1};var w=function(A){A&&"startTag"===A.type&&(A.jb=q.test(A.tagName)||A.jb);return A},x=t,y=function(){k="</"+v.pop().tagName+">"+k},z={startTag:function(A){var E=A.tagName;"TR"===E.toUpperCase()&&v.Gc("TABLE")?(k="<TBODY>"+k,B()):l.oh&&r.test(E)&&v.Ff(E)?v.Gc(E)?y():(k="</"+A.tagName+">"+k,B()):A.jb||v.push(A)},endTag:function(A){v.$d()?l.Tf&&!v.Gc(A.tagName)?y():v.pop():l.Tf&&(x(),B())}},B=function(){var A=k,E=w(x());k=A;if(E&&
z[E.type])z[E.type](E)};t=function(){B();return w(x())}}();return{append:function(q){k+=q},Fg:t,uh:function(q){for(var r;(r=t())&&(!q[r.type]||!1!==q[r.type](r)););},clear:function(){var q=k;k="";return q},vh:function(){return k},stack:[]}}var b=function(){var k={},l=this.document.createElement("div");l.innerHTML="<P><I></P></I>";k.Bh="<P><I></P></I>"!==l.innerHTML;l.innerHTML="<P><i><P></P></i></P>";k.xh=2===l.childNodes.length;return k}(),c=/^<([\-A-Za-z0-9_]+)((?:\s+[\w\-]+(?:\s*=?\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/,
d=/^<\/([\-A-Za-z0-9_]+)[^>]*>/,e=/([\-A-Za-z0-9_]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))?/g,g=/^(checked|compact|declare|defer|disabled|ismap|multiple|nohref|noresize|noshade|nowrap|readonly|selected)$/i;a.supports=b;a.Ch=function(k){var l={comment:function(m){return"<--"+m.content+"--\x3e"},endTag:function(m){return"</"+m.tagName+">"},atomicTag:function(m){return l.startTag(m)+m.content+l.endTag(m)},startTag:function(m){var n="<"+m.tagName,p;for(p in m.F){var t=m.F[p];
n+=" "+p+'="'+(t?t.replace(/(^|[^\\])"/g,'$1\\"'):"")+'"'}return n+(m.jb?"/>":">")},chars:function(m){return m.text}};return l[k.type](k)};a.nh=function(k){var l={},m;for(m in k){var n=k[m];l[m]=n&&n.replace(/(^|[^\\])"/g,'$1\\"')}return l};for(var h in b)a.xf=a.xf||!b[h]&&h;kc=a})();(function(){function a(){}function b(p){return void 0!==p&&null!==p}function c(p,t,q){var r,v=p&&p.length||0;for(r=0;r<v;r++)t.call(q,p[r],r)}function d(p,t,q){for(var r in p)p.hasOwnProperty(r)&&t.call(q,r,p[r])}function e(p,
t){d(t,function(q,r){p[q]=r});return p}function g(p,t){p=p||{};d(t,function(q,r){b(p[q])||(p[q]=r)});return p}function h(p){try{return m.call(p)}catch(q){var t=[];c(p,function(r){t.push(r)});return t}}var k={ef:a,ff:a,hf:a,jf:a,tf:a,uf:function(p){return p},done:a,error:function(p){throw p;},Jg:!1},l=this;if(!l.postscribe){var m=Array.prototype.slice,n=function(){function p(q,r,v){var w="data-ps-"+r;if(2===arguments.length){var x=q.getAttribute(w);return b(x)?String(x):x}b(v)&&""!==v?q.setAttribute(w,
v):q.removeAttribute(w)}function t(q,r){var v=q.ownerDocument;e(this,{root:q,options:r,kb:v.defaultView||v.parentWindow,Ca:v,Pb:kc("",{sf:!0}),nc:[q],Qc:"",Rc:v.createElement(q.nodeName),hb:[],qa:[]});p(this.Rc,"proxyof",0)}t.prototype.write=function(){[].push.apply(this.qa,arguments);for(var q;!this.Hb&&this.qa.length;)q=this.qa.shift(),"function"===typeof q?this.Bf(q):this.ad(q)};t.prototype.Bf=function(q){var r={type:"function",value:q.name||q.toString()};this.Mc(r);q.call(this.kb,this.Ca);this.de(r)};
t.prototype.ad=function(q){this.Pb.append(q);for(var r,v=[],w,x;(r=this.Pb.Fg())&&!(w=r&&"tagName"in r?!!~r.tagName.toLowerCase().indexOf("script"):!1)&&!(x=r&&"tagName"in r?!!~r.tagName.toLowerCase().indexOf("style"):!1);)v.push(r);this.bh(v);w&&this.Zf(r);x&&this.$f(r)};t.prototype.bh=function(q){var r=this.yf(q);r.Hd&&(r.Ac=this.Qc+r.Hd,this.Qc+=r.Bg,this.Rc.innerHTML=r.Ac,this.$g())};t.prototype.yf=function(q){var r=this.nc.length,v=[],w=[],x=[];c(q,function(y){v.push(y.text);if(y.F){if(!/^noscript$/i.test(y.tagName)){var z=
r++;w.push(y.text.replace(/(\/?>)/," data-ps-id="+z+" $1"));"ps-script"!==y.F.id&&"ps-style"!==y.F.id&&x.push("atomicTag"===y.type?"":"<"+y.tagName+" data-ps-proxyof="+z+(y.jb?" />":">"))}}else w.push(y.text),x.push("endTag"===y.type?y.text:"")});return{Dh:q,raw:v.join(""),Hd:w.join(""),Bg:x.join("")}};t.prototype.$g=function(){for(var q,r=[this.Rc];b(q=r.shift());){var v=1===q.nodeType;if(!v||!p(q,"proxyof")){v&&(this.nc[p(q,"id")]=q,p(q,"id",null));var w=q.parentNode&&p(q.parentNode,"proxyof");
w&&this.nc[w].appendChild(q)}r.unshift.apply(r,h(q.childNodes))}};t.prototype.Zf=function(q){var r=this.Pb.clear();r&&this.qa.unshift(r);q.src=q.F.src||q.F.hh;q.src&&this.hb.length?this.Hb=q:this.Mc(q);var v=this;this.ah(q,function(){v.de(q)})};t.prototype.$f=function(q){var r=this.Pb.clear();r&&this.qa.unshift(r);q.type=q.F.type||q.F.ih||"text/css";this.dh(q);r&&this.write()};t.prototype.dh=function(q){var r=this.Af(q);this.ig(r);q.content&&(r.styleSheet&&!r.sheet?r.styleSheet.cssText=q.content:
r.appendChild(this.Ca.createTextNode(q.content)))};t.prototype.Af=function(q){var r=this.Ca.createElement(q.tagName);r.setAttribute("type",q.type);d(q.F,function(v,w){r.setAttribute(v,w)});return r};t.prototype.ig=function(q){this.ad('<span id="ps-style"/>');var r=this.Ca.getElementById("ps-style");r.parentNode.replaceChild(q,r)};t.prototype.Mc=function(q){q.rg=this.qa;this.qa=[];this.hb.unshift(q)};t.prototype.de=function(q){q!==this.hb[0]?this.options.error({message:"Bad script nesting or script finished twice"}):
(this.hb.shift(),this.write.apply(this,q.rg),!this.hb.length&&this.Hb&&(this.Mc(this.Hb),this.Hb=null))};t.prototype.ah=function(q,r){var v=this.zf(q),w=this.Pg(v),x=this.options.ef;q.src&&(v.src=q.src,this.Ng(v,w?x:function(){r();x()}));try{this.hg(v),q.src&&!w||r()}catch(y){this.options.error(y),r()}};t.prototype.zf=function(q){var r=this.Ca.createElement(q.tagName);d(q.F,function(v,w){r.setAttribute(v,w)});q.content&&(r.text=q.content);return r};t.prototype.hg=function(q){this.ad('<span id="ps-script"/>');
var r=this.Ca.getElementById("ps-script");r.parentNode.replaceChild(q,r)};t.prototype.Ng=function(q,r){function v(){q=q.onload=q.onreadystatechange=q.onerror=null}var w=this.options.error;e(q,{onload:function(){v();r()},onreadystatechange:function(){/^(loaded|complete)$/.test(q.readyState)&&(v(),r())},onerror:function(){var x={message:"remote script failed "+q.src};v();w(x);r()}})};t.prototype.Pg=function(q){return!/^script$/i.test(q.nodeName)||!!(this.options.Jg&&q.src&&q.hasAttribute("async"))};
return t}();l.postscribe=function(){function p(){var w=r.shift(),x;w&&(x=w[w.length-1],x.ff(),w.stream=t.apply(null,w),x.hf())}function t(w,x,y){function z(F){F=y.uf(F);v.write(F);y.jf(F)}v=new n(w,y);v.id=q++;v.name=y.name||v.id;var B=w.ownerDocument,A={close:B.close,open:B.open,write:B.write,writeln:B.writeln};e(B,{close:a,open:a,write:function(){return z(h(arguments).join(""))},writeln:function(){return z(h(arguments).join("")+"\n")}});var E=v.kb.onerror||a;v.kb.onerror=function(F,I,S){y.error({rh:F+
" - "+I+":"+S});E.apply(v.kb,arguments)};v.write(x,function(){e(B,A);v.kb.onerror=E;y.done();v=null;p()});return v}var q=0,r=[],v=null;return e(function(w,x,y){"function"===typeof y&&(y={done:y});y=g(y,k);w=/^#/.test(w)?l.document.getElementById(w.substr(1)):w.ph?w[0]:w;var z=[w,x,y];w.vg={cancel:function(){z.stream?z.stream.abort():z[1]=a}};y.tf(z);r.push(z);v||p();return w.vg},{streams:{},th:r,jh:n})}();lc=l.postscribe}})();for(var mc="floor ceil round max min abs pow sqrt".split(" "),nc=0;nc<mc.length;nc++)Math.hasOwnProperty(mc[nc]);var G={$b:"event_callback",Na:"event_timeout",U:"gtag.config",N:"allow_ad_personalization_signals",P:"cookie_expires",Ma:"cookie_update",xa:"session_duration"};var Cc=/[A-Z]+/,Dc=/\s/,Ec=function(a){if(ia(a)&&(a=va(a),!Dc.test(a))){var b=a.indexOf("-");if(!(0>b)){var c=a.substring(0,b);if(Cc.test(c)){for(var d=a.substring(b+1).split("/"),e=0;e<d.length;e++)if(!d[e])return;return{id:a,prefix:c,containerId:c+"-"+d[0],M:d}}}}},Gc=function(a){for(var b={},c=0;c<a.length;++c){var d=Ec(a[c]);d&&(b[d.id]=d)}Fc(b);var e=[];ra(b,function(g,h){e.push(h)});return e};
function Fc(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];"AW"===d.prefix&&d.M[1]&&b.push(d.containerId)}for(var e=0;e<b.length;++e)delete a[b[e]]};var Hc={},Ic=null,Jc=Math.random();Hc.i="GTM-TD4RZ4";Hc.Ab="8l2";var Kc={__cl:!0,__ecl:!0,__ehl:!0,__evl:!0,__fal:!0,__fil:!0,__fsl:!0,__hl:!0,__jel:!0,__lcl:!0,__sdl:!0,__tl:!0,__ytl:!0,__paused:!0},Lc="www.googletagmanager.com/gtm.js";var Mc=Lc,Nc=null,Oc=null,Pc=null,Qc="//www.googletagmanager.com/a?id="+Hc.i+"&cv=356",Rc={},Sc={},Tc=function(){var a=Ic.sequence||0;Ic.sequence=a+1;return a};
var Uc=function(){return"&tc="+Tb.filter(function(a){return a}).length},cd=function(){Vc&&(u.clearTimeout(Vc),Vc=void 0);void 0===Wc||Xc[Wc]&&!Yc||(Zc[Wc]||$c.mg()||0>=ad--?(bb("GTM",1),Zc[Wc]=!0):($c.Hg(),Pa(bd()),Xc[Wc]=!0,Yc=""))},bd=function(){var a=Wc;if(void 0===a)return"";var b=cb("GTM"),c=cb("TAGGING");return[dd,Xc[a]?"":"&es=1",ed[a],b?"&u="+b:"",c?"&ut="+c:"",Uc(),Yc,"&z=0"].join("")},fd=function(){return[Qc,"&v=3&t=t","&pid="+oa(),"&rv="+Hc.Ab].join("")},gd="0.005000">
Math.random(),dd=fd(),hd=function(){dd=fd()},Xc={},Yc="",Wc=void 0,ed={},Zc={},Vc=void 0,$c=function(a,b){var c=0,d=0;return{mg:function(){if(c<a)return!1;wa()-d>=b&&(c=0);return c>=a},Hg:function(){wa()-d>=b&&(c=0);c++;d=wa()}}}(2,1E3),ad=1E3,id=function(a,b){if(gd&&!Zc[a]&&Wc!==a){cd();Wc=a;Yc="";var c;c=0===b.indexOf("gtm.")?encodeURIComponent(b):"*";ed[a]="&e="+c+"&eid="+a;Vc||(Vc=u.setTimeout(cd,500))}},jd=function(a,b,c){if(gd&&!Zc[a]&&b){a!==Wc&&(cd(),Wc=a);var d=String(b[fc.ka]||"").replace(/_/g,
"");0===d.indexOf("cvt")&&(d="cvt");var e=c+d;Yc=Yc?Yc+"."+e:"&tr="+e;Vc||(Vc=u.setTimeout(cd,500));2022<=bd().length&&cd()}};var kd={},ld=new pa,md={},nd={},rd={name:"dataLayer",set:function(a,b){f(od(a,b),md);pd()},get:function(a){return qd(a,2)},reset:function(){ld=new pa;md={};pd()}},qd=function(a,b){if(2!=b){var c=ld.get(a);if(gd){var d=sd(a);c!==d&&bb("GTM",5)}return c}return sd(a)},sd=function(a,b,c){var d=a.split("."),e=!1,g=void 0;return e?g:ud(d)},ud=function(a){for(var b=md,c=0;c<a.length;c++){if(null===b)return!1;if(void 0===b)break;b=b[a[c]]}return b};
var xd=function(a,b){nd.hasOwnProperty(a)||(ld.set(a,b),f(od(a,b),md),pd())},od=function(a,b){for(var c={},d=c,e=a.split("."),g=0;g<e.length-1;g++)d=d[e[g]]={};d[e[e.length-1]]=b;return c},pd=function(a){ra(nd,function(b,c){ld.set(b,c);f(od(b,void 0),md);f(od(b,c),md);a&&delete nd[b]})},yd=function(a,b,c){kd[a]=kd[a]||{};var d=1!==c?sd(b):ld.get(b);"array"===Fa(d)||"object"===Fa(d)?kd[a][b]=f(d):kd[a][b]=d},zd=function(a,b){if(kd[a])return kd[a][b]};var Ad=function(){var a=!1;return a};var H=function(a,b,c,d){return(2===Bd()||d||"http:"!=u.location.protocol?a:b)+c},Bd=function(){var a=Na(),b;if(1===a)a:{var c=Mc;c=c.toLowerCase();for(var d="https://"+c,e="http://"+c,g=1,h=C.getElementsByTagName("script"),k=0;k<h.length&&100>k;k++){var l=h[k].src;if(l){l=l.toLowerCase();if(0===l.indexOf(e)){b=3;break a}1===g&&0===l.indexOf(d)&&(g=2)}}b=g}else b=a;return b};var Pd=new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),Qd={cl:["ecl"],customPixels:["nonGooglePixels"],ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],customScripts:["html","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],nonGooglePixels:[],nonGoogleScripts:["nonGooglePixels"],nonGoogleIframes:["nonGooglePixels"]},Rd={cl:["ecl"],customPixels:["customScripts","html"],
ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts"],customScripts:["html"],nonGooglePixels:["customPixels","customScripts","html","nonGoogleScripts","nonGoogleIframes"],nonGoogleScripts:["customScripts","html"],nonGoogleIframes:["customScripts","html","nonGoogleScripts"]},Sd="google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" ");
var Ud=function(a){var b=qd("gtm.whitelist");b&&bb("GTM",9);var c=b&&Da(ua(b),Qd),d=qd("gtm.blacklist");d||(d=qd("tagTypeBlacklist"))&&bb("GTM",3);
d?bb("GTM",8):d=[];Td()&&(d=ua(d),d.push("nonGooglePixels","nonGoogleScripts"));0<=la(ua(d),"google")&&bb("GTM",2);var e=d&&Da(ua(d),Rd),g={};return function(h){var k=h&&h[fc.ka];if(!k||"string"!=typeof k)return!0;k=k.replace(/^_*/,"");if(void 0!==g[k])return g[k];var l=Sc[k]||[],m=a(k);if(b){var n;if(n=m)a:{if(0>la(c,k))if(l&&0<l.length)for(var p=0;p<l.length;p++){if(0>
la(c,l[p])){bb("GTM",11);n=!1;break a}}else{n=!1;break a}n=!0}m=n}var t=!1;if(d){var q=0<=la(e,k);if(q)t=q;else{var r=qa(e,l||[]);r&&bb("GTM",10);t=r}}var v=!m||t;v||!(0<=la(l,"sandboxedScripts"))||c&&-1!==la(c,"sandboxedScripts")||(v=qa(e,Sd));return g[k]=v}},Td=function(){return Pd.test(u.location&&u.location.hostname)};var Vd={Gf:function(a,b){b[fc.ed]&&"string"===typeof a&&(a=1==b[fc.ed]?a.toLowerCase():a.toUpperCase());b.hasOwnProperty(fc.gd)&&null===a&&(a=b[fc.gd]);b.hasOwnProperty(fc.jd)&&void 0===a&&(a=b[fc.jd]);b.hasOwnProperty(fc.hd)&&!0===a&&(a=b[fc.hd]);b.hasOwnProperty(fc.fd)&&!1===a&&(a=b[fc.fd]);return a}};var Wd={active:!0,isWhitelisted:function(){return!0}},Xd=function(a){var b=Ic.zones;!b&&a&&(b=Ic.zones=a());return b};var Yd=!1,Zd=0,$d=[];function ae(a){if(!Yd){var b=C.createEventObject,c="complete"==C.readyState,d="interactive"==C.readyState;if(!a||"readystatechange"!=a.type||c||!b&&d){Yd=!0;for(var e=0;e<$d.length;e++)D($d[e])}$d.push=function(){for(var g=0;g<arguments.length;g++)D(arguments[g]);return 0}}}function be(){if(!Yd&&140>Zd){Zd++;try{C.documentElement.doScroll("left"),ae()}catch(a){u.setTimeout(be,50)}}}var ce=function(a){Yd?a():$d.push(a)};var de={},ee={},fe=function(a,b,c,d){if(!ee[a]||Kc[b]||"__zone"===b)return-1;var e={};Ha(d)&&(e=f(d,e));e.id=c;e.status="timeout";return ee[a].tags.push(e)-1},ge=function(a,b,c,d){if(ee[a]){var e=ee[a].tags[b];e&&(e.status=c,e.executionTime=d)}};function he(a){for(var b=de[a]||[],c=0;c<b.length;c++)b[c]();de[a]={push:function(d){d(Hc.i,ee[a])}}}
var ke=function(a,b,c){ee[a]={tags:[]};ha(b)&&ie(a,b);c&&u.setTimeout(function(){return he(a)},Number(c));return je(a)},ie=function(a,b){de[a]=de[a]||[];de[a].push(ya(function(){return D(function(){b(Hc.i,ee[a])})}))};function je(a){var b=0,c=0,d=!1;return{add:function(){c++;return ya(function(){b++;d&&b>=c&&he(a)})},qf:function(){d=!0;b>=c&&he(a)}}};var le=function(){function a(d){return!ja(d)||0>d?0:d}if(!Ic._li&&u.performance&&u.performance.timing){var b=u.performance.timing.navigationStart,c=ja(rd.get("gtm.start"))?rd.get("gtm.start"):0;Ic._li={cst:a(c-b),cbt:a(Oc-b)}}};var pe=!1,qe=function(){return u.GoogleAnalyticsObject&&u[u.GoogleAnalyticsObject]},re=!1;
var se=function(a){u.GoogleAnalyticsObject||(u.GoogleAnalyticsObject=a||"ga");var b=u.GoogleAnalyticsObject;if(u[b])u.hasOwnProperty(b)||bb("GTM",12);else{var c=function(){c.q=c.q||[];c.q.push(arguments)};c.l=Number(new Date);u[b]=c}le();return u[b]},te=function(a,b,c,d){b=String(b).replace(/\s+/g,"").split(",");var e=qe();e(a+"require","linker");e(a+"linker:autoLink",b,c,d)};
var ve=function(){},ue=function(){return u.GoogleAnalyticsObject||"ga"};var Ce=function(a){};function Be(a,b){a.containerId=Hc.i;var c={type:"GENERIC",value:a};b.length&&(c.trace=b);return c};function De(a,b,c,d){var e=Tb[a],g=Ee(a,b,c,d);if(!g)return null;var h=bc(e[fc.Dd],c,[]);if(h&&h.length){var k=h[0];g=De(k.index,{I:g,S:1===k.Nd?b.terminate:g,terminate:b.terminate},c,d)}return g}
function Ee(a,b,c,d){function e(){if(g[fc.We])k();else{var w=cc(g,c,[]),x=fe(c.id,String(g[fc.ka]),Number(g[fc.Ed]),w[fc.Xe]),y=!1;w.vtp_gtmOnSuccess=function(){if(!y){y=!0;var A=wa()-B;jd(c.id,Tb[a],"5");ge(c.id,x,"success",A);h()}};w.vtp_gtmOnFailure=function(){if(!y){y=!0;var A=wa()-B;jd(c.id,Tb[a],"6");ge(c.id,x,"failure",A);k()}};w.vtp_gtmTagId=g.tag_id;
w.vtp_gtmEventId=c.id;jd(c.id,g,"1");var z=function(A){var E=wa()-B;Ce(A);jd(c.id,g,"7");ge(c.id,x,"exception",E);y||(y=!0,k())};var B=wa();try{ac(w,c)}catch(A){z(A)}}}var g=Tb[a],h=b.I,k=b.S,l=b.terminate;if(c.Cc(g))return null;var m=bc(g[fc.Fd],c,[]);if(m&&m.length){var n=m[0],p=De(n.index,{I:h,S:k,terminate:l},c,d);if(!p)return null;h=p;k=2===n.Nd?l:p}if(g[fc.Cd]||g[fc.Ye]){var t=g[fc.Cd]?Ub:c.Rg,q=h,r=k;if(!t[a]){e=ya(e);var v=Fe(a,t,e);h=v.I;k=v.S}return function(){t[a](q,r)}}return e}
function Fe(a,b,c){var d=[],e=[];b[a]=Ge(d,e,c);return{I:function(){b[a]=He;for(var g=0;g<d.length;g++)d[g]()},S:function(){b[a]=Ie;for(var g=0;g<e.length;g++)e[g]()}}}function Ge(a,b,c){return function(d,e){a.push(d);b.push(e);c()}}function He(a){a()}function Ie(a,b){b()};var Le=function(a,b){for(var c=[],d=0;d<Tb.length;d++)if(a.cb[d]){var e=Tb[d];var g=b.add();try{var h=De(d,{I:g,S:g,terminate:g},a,d);h?c.push({te:d,ie:dc(e),Rf:h}):(Je(d,a),g())}catch(l){g()}}b.qf();c.sort(Ke);for(var k=0;k<c.length;k++)c[k].Rf();return 0<c.length};function Ke(a,b){var c,d=b.ie,e=a.ie;c=d>e?1:d<e?-1:0;var g;if(0!==c)g=c;else{var h=a.te,k=b.te;g=h>k?1:h<k?-1:0}return g}
function Je(a,b){if(!gd)return;var c=function(d){var e=b.Cc(Tb[d])?"3":"4",g=bc(Tb[d][fc.Dd],b,[]);g&&g.length&&c(g[0].index);jd(b.id,Tb[d],e);var h=bc(Tb[d][fc.Fd],b,[]);h&&h.length&&c(h[0].index)};c(a);}
var Me=!1,Ne=function(a,b,c,d,e){if("gtm.js"==b){if(Me)return!1;Me=!0}id(a,b);var g=ke(a,d,e);yd(a,"event",1);yd(a,"ecommerce",1);yd(a,"gtm");var h={id:a,name:b,Cc:Ud(c),cb:[],Rg:[],ae:function(n){bb("GTM",6);Ce(n)}};h.cb=jc(h);var k=Le(h,g);"gtm.js"!==b&&"gtm.sync"!==b||ve();if(!k)return k;for(var l=0;l<h.cb.length;l++)if(h.cb[l]){var m=
Tb[l];if(m&&!Kc[String(m[fc.ka])])return!0}return!1};var Pe=function(a,b,c){var d=this;this.eventModel=a;this.targetConfig=b||{};this.globalConfig=c||{};this.getWithConfig=function(e){if(d.eventModel.hasOwnProperty(e))return d.eventModel[e];if(d.targetConfig.hasOwnProperty(e))return d.targetConfig[e];if(d.globalConfig.hasOwnProperty(e))return d.globalConfig[e]}};function Qe(){var a=Ic;return a.gcq=a.gcq||new Re}
var Te=function(a,b){Qe().register(a,b)},Ue=function(a,b,c,d){Qe().push("event",[b,a],c,d)},Ve=function(){this.status=1;this.uc={};this.je=null;this.Xd=!1},We=function(a,b,c,d,e){this.type=a;this.Wg=b;this.oa=c||"";this.Db=d;this.defer=e},Re=function(){this.ue={};this.Sd={};this.Xa=[]},Xe=function(a,b){return a.ue[b]=a.ue[b]||new Ve},Ye=function(a,b,c,d){var e=Xe(a,d.oa).je;if(e){var g=f(c),h=f(Xe(a,d.oa).uc),k=f(a.Sd),l=new Pe(g,h,k);try{e(b,d.Wg,l)}catch(m){}}};
Re.prototype.register=function(a,b){3!==Xe(this,a).status&&(Xe(this,a).je=b,Xe(this,a).status=3,this.flush())};Re.prototype.push=function(a,b,c,d){var e=Math.floor(wa()/1E3);if(c&&1===Xe(this,c).status&&(Xe(this,c).status=2,this.push("require",[],c),!Ad())){var g=encodeURIComponent(c);Ma(("http:"!=u.location.protocol?"https:":"http:")+("//www.googletagmanager.com/gtag/js?id="+g+"&l=dataLayer&cx=c"))}this.Xa.push(new We(a,e,c,b,d));d||this.flush()};
Re.prototype.flush=function(a){for(var b=this;this.Xa.length;){var c=this.Xa[0];if(c.defer)c.defer=!1,this.Xa.push(c);else switch(c.type){case "require":if(3!==Xe(this,c.oa).status&&!a)return;break;case "set":ra(c.Db[0],function(h,k){b.Sd[h]=k});break;case "config":var d=c.Db[0],e=!!d[G.ub];delete d[G.ub];var g=Xe(this,c.oa);e||(g.uc={});g.Xd&&e||Ye(this,G.U,d,c);g.Xd=!0;f(d,g.uc);break;case "event":Ye(this,c.Db[1],c.Db[0],c)}this.Xa.shift()}};var Ze=new function(){this.Nc={}};var $e=null,af={},bf={},cf,df=function(a,b){var c={event:a};b&&(c.eventModel=f(b),b[G.$b]&&(c.eventCallback=b[G.$b]),b[G.Na]&&(c.eventTimeout=b[G.Na]));return c};
var kf={config:function(a){},event:function(a){var b=a[1];if(ia(b)&&!(3<a.length)){var c;
if(2<a.length){if(!Ha(a[2]))return;c=a[2]}var d=df(b,c);return d}},js:function(a){if(2==a.length&&a[1].getTime)return{event:"gtm.js","gtm.start":a[1].getTime()}},policy:function(a){if(3===a.length){var b=a[1],c=a[2];Ze.Nc[b]?Ze.Nc[b].push(c):Ze.Nc[b]=[c]}},set:function(a){var b;2==a.length&&Ha(a[1])?b=f(a[1]):3==a.length&&ia(a[1])&&(b={},b[a[1]]=a[2]);if(b){
b._clear=!0;return b}}},lf={policy:!0};var nf=function(a){return mf?C.querySelectorAll(a):null},of=function(a,b){if(!mf)return null;if(Element.prototype.closest)try{return a.closest(b)}catch(e){return null}var c=Element.prototype.matches||Element.prototype.webkitMatchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector,d=a;if(!C.documentElement.contains(d))return null;do{try{if(c.call(d,b))return d}catch(e){break}d=d.parentElement||d.parentNode}while(null!==d&&1===d.nodeType);
return null},pf=!1;if(C.querySelectorAll)try{var qf=C.querySelectorAll(":root");qf&&1==qf.length&&qf[0]==C.documentElement&&(pf=!0)}catch(a){}var mf=pf;var xf=function(a){if(wf(a))return a;this.Zg=a};xf.prototype.Yf=function(){return this.Zg};var wf=function(a){return!a||"object"!==Fa(a)||Ha(a)?!1:"getUntrustedUpdateValue"in a};xf.prototype.getUntrustedUpdateValue=xf.prototype.Yf;var yf=!1,zf=[];function Af(){if(!yf){yf=!0;for(var a=0;a<zf.length;a++)D(zf[a])}}var Bf=function(a){yf?D(a):zf.push(a)};var Cf=[],Df=!1,Ef=function(a){return u["dataLayer"].push(a)},Ff=function(a){var b=Ic["dataLayer"],c=b?b.subscribers:1,d=0;return function(){++d===c&&a()}},Hf=function(a){var b=a._clear;ra(a,function(g,h){"_clear"!==g&&(b&&xd(g,void 0),xd(g,h))});Nc||(Nc=a["gtm.start"]);var c=a.event;if(!c)return!1;var d=a["gtm.uniqueEventId"];d||(d=Tc(),a["gtm.uniqueEventId"]=d,xd("gtm.uniqueEventId",d));Pc=c;var e=Gf(a);
Pc=null;switch(c){case "gtm.init":bb("GTM",19),e&&bb("GTM",20)}return e};function Gf(a){var b=a.event,c=a["gtm.uniqueEventId"],d,e=Ic.zones;d=e?e.checkState(Hc.i,c):Wd;return d.active?Ne(c,b,d.isWhitelisted,a.eventCallback,a.eventTimeout)?!0:!1:!1}
var If=function(){for(var a=!1;!Df&&0<Cf.length;){Df=!0;delete md.eventModel;pd();var b=Cf.shift();if(null!=b){var c=wf(b);if(c){var d=b;b=wf(d)?d.getUntrustedUpdateValue():void 0;for(var e=["gtm.whitelist","gtm.blacklist","tagTypeBlacklist"],g=0;g<e.length;g++){var h=e[g],k=qd(h,1);if(ka(k)||Ha(k))k=f(k);nd[h]=k}}try{if(ha(b))try{b.call(rd)}catch(v){}else if(ka(b)){var l=b;if(ia(l[0])){var m=
l[0].split("."),n=m.pop(),p=l.slice(1),t=qd(m.join("."),2);if(void 0!==t&&null!==t)try{t[n].apply(t,p)}catch(v){}}}else{var q=b;if(q&&("[object Arguments]"==Object.prototype.toString.call(q)||Object.prototype.hasOwnProperty.call(q,"callee"))){a:{if(b.length&&ia(b[0])){var r=kf[b[0]];if(r&&(!c||!lf[b[0]])){b=r(b);break a}}b=void 0}if(!b){Df=!1;continue}}a=Hf(b)||a}}finally{c&&pd(!0)}}Df=!1}
return!a},Jf=function(){var a=If();try{var b=Hc.i,c=u["dataLayer"].hide;if(c&&void 0!==c[b]&&c.end){c[b]=!1;var d=!0,e;for(e in c)if(c.hasOwnProperty(e)&&!0===c[e]){d=!1;break}d&&(c.end(),c.end=null)}}catch(g){}return a},Kf=function(){var a=Ka("dataLayer",[]),b=Ka("google_tag_manager",{});b=b["dataLayer"]=b["dataLayer"]||{};ce(function(){b.gtmDom||(b.gtmDom=!0,a.push({event:"gtm.dom"}))});Bf(function(){b.gtmLoad||(b.gtmLoad=!0,a.push({event:"gtm.load"}))});b.subscribers=(b.subscribers||
0)+1;var c=a.push;a.push=function(){var d;if(0<Ic.SANDBOXED_JS_SEMAPHORE){d=[];for(var e=0;e<arguments.length;e++)d[e]=new xf(arguments[e])}else d=[].slice.call(arguments,0);var g=c.apply(a,d);Cf.push.apply(Cf,d);if(300<this.length)for(bb("GTM",4);300<this.length;)this.shift();var h="boolean"!==typeof g||g;return If()&&h};Cf.push.apply(Cf,a.slice(0));D(Jf)};var Lf;var gg={};gg.wb=new String("undefined");
var hg=function(a){this.resolve=function(b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]===gg.wb?b:a[d]);return c.join("")}};hg.prototype.toString=function(){return this.resolve("undefined")};hg.prototype.valueOf=hg.prototype.toString;gg.$e=hg;gg.kc={};gg.Jf=function(a){return new hg(a)};var ig={};gg.Ig=function(a,b){var c=Tc();ig[c]=[a,b];return c};gg.Kd=function(a){var b=a?0:1;return function(c){var d=ig[c];if(d&&"function"===typeof d[b])d[b]();ig[c]=void 0}};gg.kg=function(a){for(var b=!1,c=!1,
d=2;d<a.length;d++)b=b||8===a[d],c=c||16===a[d];return b&&c};gg.wg=function(a){if(a===gg.wb)return a;var b=Tc();gg.kc[b]=a;return'google_tag_manager["'+Hc.i+'"].macro('+b+")"};gg.og=function(a,b,c){a instanceof gg.$e&&(a=a.resolve(gg.Ig(b,c)),b=fa);return{Ac:a,I:b}};var jg=function(a,b,c){function d(g,h){var k=g[h];return k}var e={event:b,"gtm.element":a,"gtm.elementClasses":d(a,"className"),"gtm.elementId":a["for"]||Sa(a,"id")||"","gtm.elementTarget":a.formTarget||d(a,"target")||""};c&&(e["gtm.triggers"]=c.join(","));e["gtm.elementUrl"]=(a.attributes&&a.attributes.formaction?a.formAction:"")||a.action||d(a,"href")||a.src||a.code||a.codebase||
"";return e},kg=function(a){Ic.hasOwnProperty("autoEventsSettings")||(Ic.autoEventsSettings={});var b=Ic.autoEventsSettings;b.hasOwnProperty(a)||(b[a]={});return b[a]},lg=function(a,b,c){kg(a)[b]=c},mg=function(a,b,c,d){var e=kg(a),g=xa(e,b,d);e[b]=c(g)},ng=function(a,b,c){var d=kg(a);return xa(d,b,c)};var og=function(){for(var a=Ia.userAgent+(C.cookie||"")+(C.referrer||""),b=a.length,c=u.history.length;0<c;)a+=c--^b++;var d=1,e,g,h;if(a)for(d=0,g=a.length-1;0<=g;g--)h=a.charCodeAt(g),d=(d<<6&268435455)+h+(h<<14),e=d&266338304,d=0!=e?d^e>>21:d;return[Math.round(2147483647*Math.random())^d&2147483647,Math.round(wa()/1E3)].join(".")},rg=function(a,b,c,d){var e=pg(b);return nb(a,e,qg(c),d)},sg=function(a,b,c,d){var e=""+pg(c),g=qg(d);1<g&&(e+="-"+g);return[b,e,a].join(".")},pg=function(a){if(!a)return 1;
a=0===a.indexOf(".")?a.substr(1):a;return a.split(".").length},qg=function(a){if(!a||"/"===a)return 1;"/"!==a[0]&&(a="/"+a);"/"!==a[a.length-1]&&(a+="/");return a.split("/").length-1};var tg=["1"],ug={},yg=function(a,b,c,d){var e=vg(a);ug[e]||wg(e,b,c)||(xg(e,og(),b,c,d),wg(e,b,c))};function xg(a,b,c,d,e){var g=sg(b,"1",d,c);sb(a,g,c,d,0==e?void 0:new Date(wa()+1E3*(void 0==e?7776E3:e)))}function wg(a,b,c){var d=rg(a,b,c,tg);d&&(ug[a]=d);return d}function vg(a){return(a||"_gcl")+"_au"};var zg=function(){for(var a=[],b=C.cookie.split(";"),c=/^\s*_gac_(UA-\d+-\d+)=\s*(.+?)\s*$/,d=0;d<b.length;d++){var e=b[d].match(c);e&&a.push({Yc:e[1],value:e[2]})}var g={};if(!a||!a.length)return g;for(var h=0;h<a.length;h++){var k=a[h].value.split(".");"1"==k[0]&&3==k.length&&k[1]&&(g[a[h].Yc]||(g[a[h].Yc]=[]),g[a[h].Yc].push({timestamp:k[1],Vf:k[2]}))}return g};function Ag(){for(var a=Bg,b={},c=0;c<a.length;++c)b[a[c]]=c;return b}function Cg(){var a="ABCDEFGHIJKLMNOPQRSTUVWXYZ";a+=a.toLowerCase()+"0123456789-_";return a+"."}
var Bg,Dg,Eg=function(a){Bg=Bg||Cg();Dg=Dg||Ag();for(var b=[],c=0;c<a.length;c+=3){var d=c+1<a.length,e=c+2<a.length,g=a.charCodeAt(c),h=d?a.charCodeAt(c+1):0,k=e?a.charCodeAt(c+2):0,l=g>>2,m=(g&3)<<4|h>>4,n=(h&15)<<2|k>>6,p=k&63;e||(p=64,d||(n=64));b.push(Bg[l],Bg[m],Bg[n],Bg[p])}return b.join("")},Fg=function(a){function b(l){for(;d<a.length;){var m=a.charAt(d++),n=Dg[m];if(null!=n)return n;if(!/^[\s\xa0]*$/.test(m))throw Error("Unknown base64 encoding at char: "+m);}return l}Bg=Bg||Cg();Dg=Dg||
Ag();for(var c="",d=0;;){var e=b(-1),g=b(0),h=b(64),k=b(64);if(64===k&&-1===e)return c;c+=String.fromCharCode(e<<2|g>>4);64!=h&&(c+=String.fromCharCode(g<<4&240|h>>2),64!=k&&(c+=String.fromCharCode(h<<6&192|k)))}};var Gg;function Hg(a,b){if(!a||b===C.location.hostname)return!1;for(var c=0;c<a.length;c++)if(a[c]instanceof RegExp){if(a[c].test(b))return!0}else if(0<=b.indexOf(a[c]))return!0;return!1}
var Lg=function(){var a=Ig,b=Jg,c=Kg(),d=function(h){a(h.target||h.srcElement||{})},e=function(h){b(h.target||h.srcElement||{})};if(!c.init){Qa(C,"mousedown",d);Qa(C,"keyup",d);Qa(C,"submit",e);var g=HTMLFormElement.prototype.submit;HTMLFormElement.prototype.submit=function(){b(this);g.call(this)};c.init=!0}},Kg=function(){var a=Ka("google_tag_data",{}),b=a.gl;b&&b.decorators||(b={decorators:[]},a.gl=b);return b};var Mg=/(.*?)\*(.*?)\*(.*)/,Ng=/^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,Og=/^(?:www\.|m\.|amp\.)+/,Pg=/([^?#]+)(\?[^#]*)?(#.*)?/,Qg=/(.*?)(^|&)_gl=([^&]*)&?(.*)/,Sg=function(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];void 0!==d&&d===d&&null!==d&&"[object Object]"!==d.toString()&&(b.push(c),b.push(Eg(String(d))))}var e=b.join("*");return["1",Rg(e),e].join("*")},Rg=function(a,b){var c=[window.navigator.userAgent,(new Date).getTimezoneOffset(),window.navigator.userLanguage||
window.navigator.language,Math.floor((new Date).getTime()/60/1E3)-(void 0===b?0:b),a].join("*"),d;if(!(d=Gg)){for(var e=Array(256),g=0;256>g;g++){for(var h=g,k=0;8>k;k++)h=h&1?h>>>1^3988292384:h>>>1;e[g]=h}d=e}Gg=d;for(var l=4294967295,m=0;m<c.length;m++)l=l>>>8^Gg[(l^c.charCodeAt(m))&255];return((l^-1)>>>0).toString(36)},Ug=function(){return function(a){var b=jb(u.location.href),c=b.search.replace("?",""),d=eb(c,"_gl",!0)||"";a.query=Tg(d)||{};var e=ib(b,"fragment").match(Qg);a.fragment=Tg(e&&e[3]||
"")||{}}},Vg=function(){var a=Ug(),b=Kg();b.data||(b.data={query:{},fragment:{}},a(b.data));var c={},d=b.data;d&&(za(c,d.query),za(c,d.fragment));return c},Tg=function(a){var b;b=void 0===b?3:b;try{if(a){var c;a:{for(var d=a,e=0;3>e;++e){var g=Mg.exec(d);if(g){c=g;break a}d=decodeURIComponent(d)}c=void 0}var h=c;if(h&&"1"===h[1]){var k=h[3],l;a:{for(var m=h[2],n=0;n<b;++n)if(m===Rg(k,n)){l=!0;break a}l=!1}if(l){for(var p={},t=k?k.split("*"):[],q=0;q<t.length;q+=2)p[t[q]]=Fg(t[q+1]);return p}}}}catch(r){}};
function Wg(a,b,c){function d(m){var n=m,p=Qg.exec(n),t=n;if(p){var q=p[2],r=p[4];t=p[1];r&&(t=t+q+r)}m=t;var v=m.charAt(m.length-1);m&&"&"!==v&&(m+="&");return m+l}c=void 0===c?!1:c;var e=Pg.exec(b);if(!e)return"";var g=e[1],h=e[2]||"",k=e[3]||"",l="_gl="+a;c?k="#"+d(k.substring(1)):h="?"+d(h.substring(1));return""+g+h+k}
function Xg(a,b,c){for(var d={},e={},g=Kg().decorators,h=0;h<g.length;++h){var k=g[h];(!c||k.forms)&&Hg(k.domains,b)&&(k.fragment?za(e,k.callback()):za(d,k.callback()))}if(Aa(d)){var l=Sg(d);if(c){if(a&&a.action){var m=(a.method||"").toLowerCase();if("get"===m){for(var n=a.childNodes||[],p=!1,t=0;t<n.length;t++){var q=n[t];if("_gl"===q.name){q.setAttribute("value",l);p=!0;break}}if(!p){var r=C.createElement("input");r.setAttribute("type","hidden");r.setAttribute("name","_gl");r.setAttribute("value",
l);a.appendChild(r)}}else if("post"===m){var v=Wg(l,a.action);$a.test(v)&&(a.action=v)}}}else Yg(l,a,!1)}if(!c&&Aa(e)){var w=Sg(e);Yg(w,a,!0)}}function Yg(a,b,c){if(b.href){var d=Wg(a,b.href,void 0===c?!1:c);$a.test(d)&&(b.href=d)}}
var Ig=function(a){try{var b;a:{for(var c=a,d=100;c&&0<d;){if(c.href&&c.nodeName.match(/^a(?:rea)?$/i)){b=c;break a}c=c.parentNode;d--}b=null}var e=b;if(e){var g=e.protocol;"http:"!==g&&"https:"!==g||Xg(e,e.hostname,!1)}}catch(h){}},Jg=function(a){try{if(a.action){var b=ib(jb(a.action),"host");Xg(a,b,!0)}}catch(c){}},Zg=function(a,b,c,d){Lg();var e={callback:a,domains:b,fragment:"fragment"===c,forms:!!d};Kg().decorators.push(e)},$g=function(){var a=C.location.hostname,b=Ng.exec(C.referrer);if(!b)return!1;
var c=b[2],d=b[1],e="";if(c){var g=c.split("/"),h=g[1];e="s"===h?decodeURIComponent(g[2]):decodeURIComponent(h)}else if(d){if(0===d.indexOf("xn--"))return!1;e=d.replace(/-/g,".").replace(/\.\./g,"-")}var k=a.replace(Og,""),l=e.replace(Og,""),m;if(!(m=k===l)){var n="."+l;m=k.substring(k.length-n.length,k.length)===n}return m},ah=function(a,b){return!1===a?!1:a||b||$g()};var bh={};var ch=/^\w+$/,dh=/^[\w-]+$/,eh=/^~?[\w-]+$/,fh={aw:"_aw",dc:"_dc",gf:"_gf",ha:"_ha"};function gh(a){return a&&"string"==typeof a&&a.match(ch)?a:"_gcl"}var ih=function(){var a=jb(u.location.href),b=ib(a,"query",!1,void 0,"gclid"),c=ib(a,"query",!1,void 0,"gclsrc"),d=ib(a,"query",!1,void 0,"dclid");if(!b||!c){var e=a.hash.replace("#","");b=b||eb(e,"gclid",void 0);c=c||eb(e,"gclsrc",void 0)}return hh(b,c,d)};
function hh(a,b,c){var d={},e=function(g,h){d[h]||(d[h]=[]);d[h].push(g)};if(void 0!==a&&a.match(dh))switch(b){case void 0:e(a,"aw");break;case "aw.ds":e(a,"aw");e(a,"dc");break;case "ds":e(a,"dc");break;case "3p.ds":(void 0==bh.gtm_3pds?0:bh.gtm_3pds)&&e(a,"dc");break;case "gf":e(a,"gf");break;case "ha":e(a,"ha")}c&&e(c,"dc");return d}
function jh(a,b,c){function d(p,t){var q=kh(p,e);q&&sb(q,t,h,g,l,!0)}b=b||{};var e=gh(b.prefix),g=b.domain||"auto",h=b.path||"/",k=void 0==b.be?7776E3:b.be;c=c||wa();var l=0==k?void 0:new Date(c+1E3*k),m=Math.round(c/1E3),n=function(p){return["GCL",m,p].join(".")};a.aw&&(!0===b.Fh?d("aw",n("~"+a.aw[0])):d("aw",n(a.aw[0])));a.dc&&d("dc",n(a.dc[0]));a.gf&&d("gf",n(a.gf[0]));a.ha&&d("ha",n(a.ha[0]))}
var kh=function(a,b){var c=fh[a];if(void 0!==c)return b+c},lh=function(a){var b=a.split(".");return 3!==b.length||"GCL"!==b[0]?0:1E3*(Number(b[1])||0)};function mh(a){var b=a.split(".");if(3==b.length&&"GCL"==b[0]&&b[1])return b[2]}
var nh=function(a,b,c,d,e){if(ka(b)){var g=gh(e);Zg(function(){for(var h={},k=0;k<a.length;++k){var l=kh(a[k],g);if(l){var m=kb(l,C.cookie);m.length&&(h[l]=m.sort()[m.length-1])}}return h},b,c,d)}},oh=function(a){return a.filter(function(b){return eh.test(b)})},qh=function(a){for(var b=["aw","dc"],c=gh(a&&a.prefix),d={},e=0;e<b.length;e++)fh[b[e]]&&(d[b[e]]=fh[b[e]]);ra(d,function(g,h){var k=kb(c+h,C.cookie);if(k.length){var l=k[0],m=lh(l),n={};n[g]=[mh(l)];jh(n,a,m)}})};var rh=/^\d+\.fls\.doubleclick\.net$/;function sh(a){var b=jb(u.location.href),c=ib(b,"host",!1);if(c&&c.match(rh)){var d=ib(b,"path").split(a+"=");if(1<d.length)return d[1].split(";")[0].split("?")[0]}}
function th(a,b){if("aw"==a||"dc"==a){var c=sh("gcl"+a);if(c)return c.split(".")}var d=gh(b);if("_gcl"==d){var e;e=ih()[a]||[];if(0<e.length)return e}var g=kh(a,d),h;if(g){var k=[];if(C.cookie){var l=kb(g,C.cookie);if(l&&0!=l.length){for(var m=0;m<l.length;m++){var n=mh(l[m]);n&&-1===la(k,n)&&k.push(n)}h=oh(k)}else h=k}else h=k}else h=[];return h}
var uh=function(){var a=sh("gac");if(a)return decodeURIComponent(a);var b=zg(),c=[];ra(b,function(d,e){for(var g=[],h=0;h<e.length;h++)g.push(e[h].Vf);g=oh(g);g.length&&c.push(d+":"+g.join(","))});return c.join(";")},vh=function(a,b,c,d,e){yg(b,c,d,e);var g=ug[vg(b)],h=ih().dc||[],k=!1;if(g&&0<h.length){var l=Ic.joined_au=Ic.joined_au||{},m=b||"_gcl";if(!l[m])for(var n=0;n<h.length;n++){var p="https://adservice.google.com/ddm/regclk",t=p=p+"?gclid="+h[n]+"&auiddc="+g;Ia.sendBeacon&&Ia.sendBeacon(t)||Pa(t);k=l[m]=
!0}}null==a&&(a=k);if(a&&g){var q=vg(b),r=ug[q];r&&xg(q,r,c,d,e)}};var wh;if(3===Hc.Ab.length)wh="g";else{var xh="G";wh=xh}
var yh={"":"n",UA:"u",AW:"a",DC:"d",G:"e",GF:"f",HA:"h",GTM:wh,OPT:"o"},zh=function(a){var b=Hc.i.split("-"),c=b[0].toUpperCase(),d=yh[c]||"i",e=a&&"GTM"===c?b[1]:"OPT"===c?b[1]:"",g;if(3===Hc.Ab.length){var h=void 0;g="2"+(h||"w")}else g=
"";return g+d+Hc.Ab+e};
var Ah=function(a){return!(void 0===a||null===a||0===(a+"").length)},Bh=function(a,b){var c;if(2===b.L)return a("ord",oa(1E11,1E13)),!0;if(3===b.L)return a("ord","1"),a("num",oa(1E11,1E13)),!0;if(4===b.L)return Ah(b.sessionId)&&a("ord",b.sessionId),!0;if(5===b.L)c="1";else if(6===b.L)c=b.Sc;else return!1;Ah(c)&&a("qty",c);Ah(b.Fb)&&a("cost",b.Fb);Ah(b.transactionId)&&a("ord",b.transactionId);return!0},Ch=encodeURIComponent,Dh=function(a,b){function c(n,p,t){g.hasOwnProperty(n)||(p+="",e+=";"+n+"="+
(t?p:Ch(p)))}var d=a.xc,e=a.protocol;e+=a.Qb?"//"+d+".fls.doubleclick.net/activityi":"//ad.doubleclick.net/activity";e+=";src="+Ch(d)+(";type="+Ch(a.zc))+(";cat="+Ch(a.Wa));var g=a.Lf||{};ra(g,function(n,p){e+=";"+Ch(n)+"="+Ch(p+"")});if(Bh(c,a)){Ah(a.Wb)&&c("u",a.Wb);Ah(a.Vb)&&c("tran",a.Vb);c("gtm",zh());!1===a.kf&&c("npa","1");if(a.vc){var h=th("dc",a.Aa);h&&h.length&&c("gcldc",h.join("."));var k=th("aw",a.Aa);k&&k.length&&c("gclaw",k.join("."));var l=uh();l&&c("gac",l);yg(a.Aa,void 0,a.Hf,a.If);
var m=ug[vg(a.Aa)];m&&c("auiddc",m)}Ah(a.Oc)&&c("prd",a.Oc,!0);ra(a.$c,function(n,p){c(n,p)});e+=b||"";Ah(a.Ob)&&c("~oref",a.Ob);a.Qb?Oa(e+"?",a.I):Pa(e+"?",a.I,a.S)}else D(a.S)};var Eh=["input","select","textarea"],Fh=["button","hidden","image","reset","submit"],Gh=function(a){var b=a.tagName.toLowerCase();return!ma(Eh,function(c){return c===b})||"input"===b&&ma(Fh,function(c){return c===a.type.toLowerCase()})?!1:!0},Hh=function(a){return a.form?a.form.tagName?a.form:C.getElementById(a.form):Ya(a,["form"],100)},Ih=function(a,b,c){if(!a.elements)return 0;for(var d=b.getAttribute(c),e=0,g=1;e<a.elements.length;e++){var h=a.elements[e];if(Gh(h)){if(h.getAttribute(c)===d)return g;
g++}}return 0};var Lh=!!u.MutationObserver,Mh=void 0,Nh=function(a){if(!Mh){var b=function(){var c=C.body;if(c)if(Lh)(new MutationObserver(function(){for(var e=0;e<Mh.length;e++)D(Mh[e])})).observe(c,{childList:!0,subtree:!0});else{var d=!1;Qa(c,"DOMNodeInserted",function(){d||(d=!0,D(function(){d=!1;for(var e=0;e<Mh.length;e++)D(Mh[e])}))})}};Mh=[];C.body?b():D(b)}Mh.push(a)};
var ei=function(){var a=C.body,b=C.documentElement||a&&a.parentElement,c,d;if(C.compatMode&&"BackCompat"!==C.compatMode)c=b?b.clientHeight:0,d=b?b.clientWidth:0;else{var e=function(g,h){return g&&h?Math.min(g,h):Math.max(g,h)};bb("GTM",7);c=e(b?b.clientHeight:0,a?a.clientHeight:0);d=e(b?b.clientWidth:0,a?a.clientWidth:0)}return{width:d,height:c}},fi=function(a){var b=ei(),c=b.height,d=b.width,e=a.getBoundingClientRect(),g=e.bottom-e.top,h=e.right-e.left;return g&&h?(1-Math.min((Math.max(0-e.left,
0)+Math.max(e.right-d,0))/h,1))*(1-Math.min((Math.max(0-e.top,0)+Math.max(e.bottom-c,0))/g,1)):0},gi=function(a){if(C.hidden)return!0;var b=a.getBoundingClientRect();if(b.top==b.bottom||b.left==b.right||!u.getComputedStyle)return!0;var c=u.getComputedStyle(a,null);if("hidden"===c.visibility)return!0;for(var d=a,e=c;d;){if("none"===e.display)return!0;var g=e.opacity,h=e.filter;if(h){var k=h.indexOf("opacity(");0<=k&&(h=h.substring(k+8,h.indexOf(")",k)),"%"==h.charAt(h.length-1)&&(h=h.substring(0,h.length-
1)),g=Math.min(h,g))}if(void 0!==g&&0>=g)return!0;(d=d.parentElement)&&(e=u.getComputedStyle(d,null))}return!1};
var ni=function(a,b,c){function d(){var h=a();g+=e?(wa()-e)*h.playbackRate/1E3:0;e=wa()}var e=0,g=0;return{Jb:function(h,k,l){var m=a(),n=m.Ld,p=void 0!==l?Math.round(l):void 0!==k?Math.round(m.Ld*k):Math.round(m.Kf),t=void 0!==k?Math.round(100*k):0>=n?0:Math.round(p/n*100),q=C.hidden?!1:.5<=fi(c);d();var r=jg(c,"gtm.video",[b]);r["gtm.videoProvider"]="youtube";r["gtm.videoStatus"]=h;r["gtm.videoUrl"]=m.url;r["gtm.videoTitle"]=m.title;r["gtm.videoDuration"]=Math.round(n);r["gtm.videoCurrentTime"]=
Math.round(p);r["gtm.videoElapsedTime"]=Math.round(g);r["gtm.videoPercent"]=t;r["gtm.videoVisible"]=q;Ef(r)},Kg:function(){e=wa()},mc:function(){d()}}};var oi=u.clearTimeout,pi=u.setTimeout,L=function(a,b,c){if(Ad()){b&&D(b)}else return Ma(a,b,c)},qi=function(){return new Date},ri=function(){return u.location.href},si=function(a){return ib(jb(a),"fragment")},ti=function(a){return hb(jb(a))},ui=null;
var vi=function(a,b){return qd(a,b||2)},wi=function(a,b,c){b&&(a.eventCallback=b,c&&(a.eventTimeout=c));return Ef(a)},xi=function(a,b){u[a]=b},M=function(a,b,c){b&&(void 0===u[a]||c&&!u[a])&&(u[a]=b);return u[a]},yi=function(a,b,c){return kb(a,b,void 0===c?!0:!!c)},zi=function(a,b,c,d){var e={prefix:a,path:b,domain:c,be:d},g=ih();jh(g,e);qh(e)},Ai=function(a,b,c,d,e){for(var g=Vg(),h=gh(b),k=0;k<a.length;++k){var l=a[k];if(void 0!==fh[l]){var m=kh(l,h),
n=g[m];if(n){var p=Math.min(lh(n),wa()),t;b:{for(var q=p,r=kb(m,C.cookie),v=0;v<r.length;++v)if(lh(r[v])>q){t=!0;break b}t=!1}t||sb(m,n,c,d,0==e?void 0:new Date(p+1E3*(null==e?7776E3:e)),!0)}}}var w={prefix:b,path:c,domain:d};jh(hh(g.gclid,g.gclsrc),w);},Bi=function(a,b,c,d,e){nh(a,b,c,d,e);},Ci=function(a,b){if(Ad()){
b&&D(b)}else Oa(a,b)},Di=function(a){return!!ng(a,"init",!1)},Ei=function(a){lg(a,"init",!0)},Fi=function(a,b,c){var d=(void 0===c?0:c)?"www.googletagmanager.com/gtag/js":Mc;d+="?id="+encodeURIComponent(a)+"&l=dataLayer";b&&ra(b,function(e,g){g&&(d+="&"+e+"="+encodeURIComponent(g))});L(H("https://","http://",d))},Gi=function(a,b){var c=a[b];return c};

var Ii=gg.og;
var Ji=new pa,Ki=function(a,b){function c(h){var k=jb(h),l=ib(k,"protocol"),m=ib(k,"host",!0),n=ib(k,"port"),p=ib(k,"path").toLowerCase().replace(/\/$/,"");if(void 0===l||"http"==l&&"80"==n||"https"==l&&"443"==n)l="web",n="default";return[l,m,n,p]}for(var d=c(String(a)),e=c(String(b)),g=0;g<d.length;g++)if(d[g]!==e[g])return!1;return!0},Li=function(a){var b=a.arg0,c=a.arg1;if(a.any_of&&ka(c)){for(var d=0;d<c.length;d++)if(Li({"function":a["function"],arg0:b,arg1:c[d]}))return!0;return!1}switch(a["function"]){case "_cn":return 0<=
String(b).indexOf(String(c));case "_css":var e;a:{if(b){var g=["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"];try{for(var h=0;h<g.length;h++)if(b[g[h]]){e=b[g[h]](c);break a}}catch(v){}}e=!1}return e;case "_ew":var k,l;k=String(b);l=String(c);var m=k.length-l.length;return 0<=m&&k.indexOf(l,m)==m;case "_eq":return String(b)==String(c);case "_ge":return Number(b)>=Number(c);case "_gt":return Number(b)>Number(c);case "_lc":var n;n=String(b).split(",");
return 0<=la(n,String(c));case "_le":return Number(b)<=Number(c);case "_lt":return Number(b)<Number(c);case "_re":var p;var t=a.ignore_case?"i":void 0;try{var q=String(c)+t,r=Ji.get(q);r||(r=new RegExp(c,t),Ji.set(q,r));p=r.test(b)}catch(v){p=!1}return p;case "_sw":return 0==String(b).indexOf(String(c));case "_um":return Ki(b,c)}return!1};var Ni=function(a,b){var c=function(){};c.prototype=a.prototype;var d=new c;a.apply(d,Array.prototype.slice.call(arguments,1));return d};var Oi={},Pi=encodeURI,W=encodeURIComponent,Qi=Pa;var Ri=function(a,b){if(!a)return!1;var c=ib(jb(a),"host");if(!c)return!1;for(var d=0;b&&d<b.length;d++){var e=b[d]&&b[d].toLowerCase();if(e){var g=c.length-e.length;0<g&&"."!=e.charAt(0)&&(g--,e="."+e);if(0<=g&&c.indexOf(e,g)==g)return!0}}return!1};
var Si=function(a,b,c){for(var d={},e=!1,g=0;a&&g<a.length;g++)a[g]&&a[g].hasOwnProperty(b)&&a[g].hasOwnProperty(c)&&(d[a[g][b]]=a[g][c],e=!0);return e?d:null};Oi.lg=function(){var a=!1;return a};var rj=function(){var a=u.gaGlobal=u.gaGlobal||{};a.hid=a.hid||oa();return a.hid};var ak=window,bk=document,ck=function(a){var b=ak._gaUserPrefs;if(b&&b.ioo&&b.ioo()||a&&!0===ak["ga-disable-"+a])return!0;try{var c=ak.external;if(c&&c._gaUserPrefs&&"oo"==c._gaUserPrefs)return!0}catch(g){}for(var d=kb("AMP_TOKEN",bk.cookie,!0),e=0;e<d.length;e++)if("$OPT_OUT"==d[e])return!0;return bk.getElementById("__gaOptOutExtension")?!0:!1};var hk=function(a,b,c){Ue(b,c,a)},ik=function(a,b,c){Ue(b,c,a,!0)},kk=function(a,b){},jk=function(a,b){},
lk=function(a){return"_"===a.charAt(0)},mk=function(a){ra(a,function(c){lk(c)&&delete a[c]});var b=a[G.vb]||{};ra(b,function(c){lk(c)&&delete b[c]})};var Y={a:{}};
Y.a.ctv=["google"],function(){(function(a){Y.__ctv=a;Y.__ctv.b="ctv";Y.__ctv.g=!0;Y.__ctv.priorityOverride=0})(function(){return"356"})}();

Y.a.jsm=["customScripts"],function(){(function(a){Y.__jsm=a;Y.__jsm.b="jsm";Y.__jsm.g=!0;Y.__jsm.priorityOverride=0})(function(a){if(void 0!==a.vtp_javascript){var b=a.vtp_javascript;try{var c=M("google_tag_manager");return c&&c.e&&c.e(b)}catch(d){}}})}();
Y.a.flc=[],function(){function a(b,c){c=c?c.slice(0,-1):void 0;Dh(b,c)}(function(b){Y.__flc=b;Y.__flc.b="flc";Y.__flc.g=!0;Y.__flc.priorityOverride=0})(function(b){var c=!b.hasOwnProperty("vtp_enableConversionLinker")||b.vtp_enableConversionLinker,d=Si(b.vtp_customVariable||[],"key","value")||{},e={Wa:b.vtp_activityTag,vc:c,Aa:b.vtp_conversionCookiePrefix||void 0,Fb:void 0,L:{UNIQUE:3,SESSION:4}[b.vtp_ordinalType]||2,xc:b.vtp_advertiserId,zc:b.vtp_groupTag,S:b.vtp_gtmOnFailure,I:b.vtp_gtmOnSuccess,
Ob:b.vtp_useImageTag?void 0:b.vtp_url,protocol:"",Sc:void 0,Qb:!b.vtp_useImageTag,sessionId:b.vtp_sessionId,Vb:b.vtp_transactionVariable,transactionId:void 0,Wb:b.vtp_userVariable,$c:d};if(b.vtp_enableAttribution){var g=b.vtp_attributionFields||[];if(g.length){L("//www.gstatic.com/attribution/collection/attributiontools.js",function(){a(e,M("google_attr").build([Si(g,"key","value")||{}]))},b.vtp_gtmOnFailure);return}}a(e)})}();Y.a.c=["google"],function(){(function(a){Y.__c=a;Y.__c.b="c";Y.__c.g=!0;Y.__c.priorityOverride=0})(function(a){return a.vtp_value})}();

Y.a.e=["google"],function(){(function(a){Y.__e=a;Y.__e.b="e";Y.__e.g=!0;Y.__e.priorityOverride=0})(function(a){return String(zd(a.vtp_gtmEventId,"event"))})}();
Y.a.f=["google"],function(){(function(a){Y.__f=a;Y.__f.b="f";Y.__f.g=!0;Y.__f.priorityOverride=0})(function(a){var b=vi("gtm.referrer",1)||C.referrer;return b?a.vtp_component&&"URL"!=a.vtp_component?ib(jb(String(b)),a.vtp_component,a.vtp_stripWww,a.vtp_defaultPages,a.vtp_queryKey):ti(String(b)):String(b)})}();
Y.a.cl=["google"],function(){function a(b){var c=b.target;if(c){var d=jg(c,"gtm.click");wi(d)}}(function(b){Y.__cl=b;Y.__cl.b="cl";Y.__cl.g=!0;Y.__cl.priorityOverride=0})(function(b){if(!Di("cl")){var c=M("document");Qa(c,"click",a,!0);Ei("cl")}D(b.vtp_gtmOnSuccess)})}();
Y.a.j=["google"],function(){(function(a){Y.__j=a;Y.__j.b="j";Y.__j.g=!0;Y.__j.priorityOverride=0})(function(a){for(var b=String(a.vtp_name).split("."),c=M(b.shift()),d=0;d<b.length;d++)c=c&&c[b[d]];return c})}();Y.a.k=["google"],function(){(function(a){Y.__k=a;Y.__k.b="k";Y.__k.g=!0;Y.__k.priorityOverride=0})(function(a){return yi(a.vtp_name,vi("gtm.cookie",1),!!a.vtp_decodeCookie)[0]})}();

Y.a.r=["google"],function(){(function(a){Y.__r=a;Y.__r.b="r";Y.__r.g=!0;Y.__r.priorityOverride=0})(function(a){return oa(a.vtp_min,a.vtp_max)})}();
Y.a.u=["google"],function(){var a=function(b){return{toString:function(){return b}}};(function(b){Y.__u=b;Y.__u.b="u";Y.__u.g=!0;Y.__u.priorityOverride=0})(function(b){var c;c=(c=b.vtp_customUrlSource?b.vtp_customUrlSource:vi("gtm.url",1))||ri();var d=b[a("vtp_component")];if(!d||"URL"==d)return ti(String(c));var e=jb(String(c)),g;if("QUERY"===d)a:{var h=b[a("vtp_multiQueryKeys").toString()],k=b[a("vtp_queryKey").toString()]||"",l=b[a("vtp_ignoreEmptyQueryParam").toString()],m;m=h?ka(k)?k:String(k).replace(/\s+/g,
"").split(","):[String(k)];for(var n=0;n<m.length;n++){var p=ib(e,"QUERY",void 0,void 0,m[n]);if(void 0!=p&&(!l||""!==p)){g=p;break a}}g=void 0}else g=ib(e,d,"HOST"==d?b[a("vtp_stripWww")]:void 0,"PATH"==d?b[a("vtp_defaultPages")]:void 0,void 0);return g})}();
Y.a.v=["google"],function(){(function(a){Y.__v=a;Y.__v.b="v";Y.__v.g=!0;Y.__v.priorityOverride=0})(function(a){var b=a.vtp_name;if(!b||!b.replace)return!1;var c=vi(b.replace(/\\\./g,"."),a.vtp_dataLayerVersion||1);return void 0!==c?c:a.vtp_defaultValue})}();
Y.a.ua=["google"],function(){var a,b={},c=function(d){var e={},g={},h={},k={},l={},m=void 0;if(d.vtp_gaSettings){var n=d.vtp_gaSettings;f(Si(n.vtp_fieldsToSet,"fieldName","value"),g);f(Si(n.vtp_contentGroup,"index","group"),h);f(Si(n.vtp_dimension,"index","dimension"),k);f(Si(n.vtp_metric,"index","metric"),l);d.vtp_gaSettings=null;n.vtp_fieldsToSet=void 0;n.vtp_contentGroup=void 0;n.vtp_dimension=void 0;n.vtp_metric=void 0;var p=f(n);d=f(d,p)}f(Si(d.vtp_fieldsToSet,"fieldName","value"),g);f(Si(d.vtp_contentGroup,
"index","group"),h);f(Si(d.vtp_dimension,"index","dimension"),k);f(Si(d.vtp_metric,"index","metric"),l);var t=se(d.vtp_functionName);if(ha(t)){var q="",r="";d.vtp_setTrackerName&&"string"==typeof d.vtp_trackerName?""!==d.vtp_trackerName&&(r=d.vtp_trackerName,q=r+"."):(r="gtm"+Tc(),q=r+".");var v={name:!0,clientId:!0,sampleRate:!0,siteSpeedSampleRate:!0,alwaysSendReferrer:!0,allowAnchor:!0,allowLinker:!0,cookieName:!0,cookieDomain:!0,cookieExpires:!0,cookiePath:!0,cookieUpdate:!0,legacyCookieDomain:!0,
legacyHistoryImport:!0,storage:!0,useAmpClientId:!0,storeGac:!0},w={allowAnchor:!0,allowLinker:!0,alwaysSendReferrer:!0,anonymizeIp:!0,cookieUpdate:!0,exFatal:!0,forceSSL:!0,javaEnabled:!0,legacyHistoryImport:!0,nonInteraction:!0,useAmpClientId:!0,useBeacon:!0,storeGac:!0,allowAdFeatures:!0},x=function(R){var O=[].slice.call(arguments,0);O[0]=q+O[0];t.apply(window,O)},y=function(R,O){return void 0===O?O:R(O)},z=function(R,O){if(O)for(var na in O)O.hasOwnProperty(na)&&x("set",R+na,O[na])},B=function(){},A=function(R,O,na){var Ta=0;if(R)for(var Ba in R)if(R.hasOwnProperty(Ba)&&(na&&v[Ba]||!na&&void 0===v[Ba])){var Ua=w[Ba]?ta(R[Ba]):R[Ba];"anonymizeIp"!=Ba||Ua||(Ua=void 0);O[Ba]=Ua;Ta++}return Ta},E={name:r};A(g,E,!0);t("create",d.vtp_trackingId||e.trackingId,E);x("set","&gtm",zh(!0));d.vtp_enableRecaptcha&&x("require","recaptcha","recaptcha.js");(function(R,O){void 0!==d[O]&&x("set",R,d[O])})("nonInteraction","vtp_nonInteraction");z("contentGroup",h);z("dimension",k);z("metric",l);var F={};A(g,F,!1)&&x("set",F);var I;
d.vtp_enableLinkId&&x("require","linkid","linkid.js");x("set","hitCallback",function(){var R=g&&g.hitCallback;ha(R)&&R();d.vtp_gtmOnSuccess()});if("TRACK_EVENT"==d.vtp_trackType){d.vtp_enableEcommerce&&(x("require","ec","ec.js"),B());var S={hitType:"event",eventCategory:String(d.vtp_eventCategory||e.category),eventAction:String(d.vtp_eventAction||e.action),eventLabel:y(String,d.vtp_eventLabel||e.label),eventValue:y(sa,d.vtp_eventValue||
e.value)};A(I,S,!1);x("send",S);}else if("TRACK_SOCIAL"==d.vtp_trackType){var T={hitType:"social",socialNetwork:String(d.vtp_socialNetwork),socialAction:String(d.vtp_socialAction),socialTarget:String(d.vtp_socialActionTarget)};A(I,T,!1);x("send",T);}else if("TRACK_TRANSACTION"==d.vtp_trackType){}else if("TRACK_TIMING"==
d.vtp_trackType){}else if("DECORATE_LINK"==d.vtp_trackType){}else if("DECORATE_FORM"==d.vtp_trackType){}else if("TRACK_DATA"==d.vtp_trackType){}else{d.vtp_enableEcommerce&&(x("require","ec","ec.js"),B());if(d.vtp_doubleClick||"DISPLAY_FEATURES"==d.vtp_advertisingFeaturesType){var X=
"_dc_gtm_"+String(d.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");x("require","displayfeatures",void 0,{cookieName:X})}if("DISPLAY_FEATURES_WITH_REMARKETING_LISTS"==d.vtp_advertisingFeaturesType){var Z="_dc_gtm_"+String(d.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");x("require","adfeatures",{cookieName:Z})}I?x("send","pageview",I):x("send","pageview");d.vtp_autoLinkDomains&&te(q,d.vtp_autoLinkDomains,!!d.vtp_useHashAutoLink,!!d.vtp_decorateFormsAutoLink);
}if(!a){var ca=d.vtp_useDebugVersion?"u/analytics_debug.js":"analytics.js";d.vtp_useInternalVersion&&!d.vtp_useDebugVersion&&(ca="internal/"+ca);a=!0;var Ca=H("https:","http:","//www.google-analytics.com/"+ca,g&&g.forceSSL);L(Ca,function(){var R=qe();R&&R.loaded||d.vtp_gtmOnFailure();},d.vtp_gtmOnFailure)}}else D(d.vtp_gtmOnFailure)};Y.__ua=c;Y.__ua.b="ua";Y.__ua.g=!0;Y.__ua.priorityOverride=0}();



Y.a.ytl=["google"],function(){function a(){var w=Math.round(1E9*Math.random())+"";return C.getElementById(w)?a():w}function b(w,x){if(!w)return!1;for(var y=0;y<t.length;y++)if(0<=w.indexOf("//"+t[y]+"/"+x))return!0;return!1}function c(w){var x=-1!==w.indexOf("?")?"&":"?";if(-1<w.indexOf("origin="))return w+x+"enablejsapi=1";if(!r){var y=M("document");r=y.location.protocol+"//"+y.location.hostname;y.location.port&&(r+=":"+y.location.port)}return w+x+"enablejsapi=1&origin="+encodeURIComponent(r)}function d(w,
x){var y=w.getAttribute("src");if(b(y,"embed/")){if(0<y.indexOf("enablejsapi=1"))return!0;if(x)return w.setAttribute("src",c(y)),!0}return!1}function e(w,x){if(!w.getAttribute("data-gtm-yt-inspected-"+x.Zc)&&(w.setAttribute("data-gtm-yt-inspected-"+x.Zc,"true"),d(w,x.Pd))){w.id||(w.id=a());var y=M("YT"),z=y.get(w.id);z||(z=new y.Player(w.id));var B=h(z,x),A={},E;for(E in B)A.Ja=E,B.hasOwnProperty(A.Ja)&&z.addEventListener(A.Ja,function(F){return function(I){return B[F.Ja](I.data)}}(A)),A={Ja:A.Ja}}}
function g(w){D(function(){function x(){for(var z=y.getElementsByTagName("iframe"),B=z.length,A=0;A<B;A++)e(z[A],w)}var y=M("document");x();Nh(x)})}function h(w,x){var y,z;function B(){N=ni(function(){return{url:P,title:U,Ld:J,Kf:w.getCurrentTime(),playbackRate:X}},x.Zc,w.getIframe());J=0;U=P="";X=1;return A}function A(R){switch(R){case q.PLAYING:J=Math.round(w.getDuration());P=w.getVideoUrl();if(w.getVideoData){var O=w.getVideoData();U=O?O.title:""}X=w.getPlaybackRate();x.Ef?N.Jb("start"):N.mc();
K=m(x.zg,x.yg,w.getDuration());return E(R);default:return A}}function E(){Z=w.getCurrentTime();ca=qi().getTime();N.Kg();Q();return F}function F(R){var O;switch(R){case q.ENDED:return S(R);case q.PAUSED:O="pause";case q.BUFFERING:var na=w.getCurrentTime()-Z;O=1<Math.abs((qi().getTime()-ca)/1E3*X-na)?"seek":O||"buffering";w.getCurrentTime()&&(x.Df?N.Jb(O):N.mc());V();return I;case q.UNSTARTED:return B(R);default:return F}}function I(R){switch(R){case q.ENDED:return S(R);case q.PLAYING:return E(R);case q.UNSTARTED:return B(R);
default:return I}}function S(){for(;z;){var R=y;oi(z);R()}x.Cf&&N.Jb("complete",1);return B(q.UNSTARTED)}function T(){}function V(){z&&(oi(z),z=0,y=T)}function Q(){if(K.length&&0!==X){var R=-1,O;do{O=K[0];if(O.na>w.getDuration())return;R=(O.na-w.getCurrentTime())/X;if(0>R&&(K.shift(),0===K.length))return}while(0>R);y=function(){z=0;y=T;0<K.length&&K[0].na===O.na&&(K.shift(),N.Jb("progress",O.he,O.pe));Q()};z=pi(y,1E3*R)}}var N,K=[],J,P,U,X,Z,ca,Ca=B(q.UNSTARTED);z=0;y=T;return{onStateChange:function(R){Ca=
Ca(R)},onPlaybackRateChange:function(R){Z=w.getCurrentTime();ca=qi().getTime();N.mc();X=R;V();Q()}}}function k(w){for(var x=w.split(","),y=x.length,z=[],B=0;B<y;B++){var A=parseInt(x[B],10);isNaN(A)||100<A||0>A||z.push(A/100)}z.sort(function(E,F){return E-F});return z}function l(w){for(var x=w.split(","),y=x.length,z=[],B=0;B<y;B++){var A=parseInt(x[B],10);isNaN(A)||0>A||z.push(A)}z.sort(function(E,F){return E-F});return z}function m(w,x,y){var z=w.map(function(E){return{na:E,pe:E,he:void 0}});if(!x.length)return z;
var B=x.map(function(E){return{na:E*y,pe:void 0,he:E}});if(!z.length)return B;var A=z.concat(B);A.sort(function(E,F){return E.na-F.na});return A}function n(w){w.vtp_triggerStartOption?p(w):ce(function(){p(w)})}function p(w){var x=!!w.vtp_captureStart,y=!!w.vtp_captureComplete,z=!!w.vtp_capturePause,B=k(w.vtp_progressThresholdsPercent+""),A=l(w.vtp_progressThresholdsTimeInSeconds+""),E=!!w.vtp_fixMissingApi;if(x||y||z||B.length||A.length){var F={Ef:x,Cf:y,Df:z,yg:B,zg:A,Pd:E,Zc:void 0===w.vtp_uniqueTriggerId?
"":w.vtp_uniqueTriggerId},I=M("YT"),S=function(){g(F)};D(w.vtp_gtmOnSuccess);if(I)I.ready&&I.ready(S);else{var T=M("onYouTubeIframeAPIReady");xi("onYouTubeIframeAPIReady",function(){T&&T();S()});D(function(){for(var V=M("document"),Q=V.getElementsByTagName("script"),N=Q.length,K=0;K<N;K++){var J=Q[K].getAttribute("src");if(b(J,"iframe_api")||b(J,"player_api"))return}for(var P=V.getElementsByTagName("iframe"),U=P.length,X=0;X<U;X++)if(!v&&d(P[X],F.Pd)){L("https://www.youtube.com/iframe_api");v=!0;
break}})}}else D(w.vtp_gtmOnSuccess)}var t=["www.youtube.com","www.youtube-nocookie.com"],q={UNSTARTED:-1,ENDED:0,PLAYING:1,PAUSED:2,BUFFERING:3,CUED:5},r,v=!1;Y.__ytl=n;Y.__ytl.b="ytl";Y.__ytl.g=!0;Y.__ytl.priorityOverride=0}();
Y.a.opt=["google"],function(){var a,b=function(c){var d={};if(c.vtp_gaSettings){var e=c.vtp_gaSettings;f(Si(e.vtp_fieldsToSet,"fieldName","value"),d);c.vtp_gaSettings=null;e.vtp_fieldsToSet=void 0;var g=f(e);c=f(c,g)||{}}f(Si(c.vtp_fieldsToSet,"fieldName","value"),d);var h=se(c.vtp_functionName);if(ha(h)){h.r=!0;var k="",l="";c.vtp_setTrackerName&&"string"===typeof c.vtp_trackerName?""!==c.vtp_trackerName&&(l=c.vtp_trackerName,k=l+"."):(l="gtm"+Tc(),k=l+".");var m={name:!0,clientId:!0,sampleRate:!0,
siteSpeedSampleRate:!0,alwaysSendReferrer:!0,allowAnchor:!0,allowLinker:!0,cookieName:!0,cookieDomain:!0,cookieExpires:!0,cookiePath:!0,cookieUpdate:!0,legacyCookieDomain:!0,legacyHistoryImport:!0,storage:!0,useAmpClientId:!0,storeGac:!0},n={allowAnchor:!0,allowLinker:!0,alwaysSendReferrer:!0,anonymizeIp:!0,cookieUpdate:!0,exFatal:!0,forceSSL:!0,javaEnabled:!0,legacyHistoryImport:!0,nonInteraction:!0,useAmpClientId:!0,useBeacon:!0,storeGac:!0},p=function(x,y,z){var B=0,A;for(A in x)if(x.hasOwnProperty(A)&&
(z&&m[A]||!z&&void 0===m[A])){var E=n[A]?ta(x[A]):x[A];"anonymizeIp"!==A||E||(E=void 0);y[A]=E;B++}return B},t={name:l};p(d,t,!0);var q={"&gtm":zh(!0)};p(d,q,!1);var r=encodeURI(H("https:","http:","//www.google-analytics.com/"+(c.vtp_useDebugVersion?"u/analytics_debug.js":"analytics.js"),!!d.forceSSL));h("create",c.vtp_trackingId,t);h(k+"set",q);h(k+"require",c.vtp_optimizeContainerId,{dataLayer:"dataLayer"});h(c.vtp_gtmOnSuccess);h(k+"require","render");a||(a=!0,L(r,function(){return qe().loaded||
c.vtp_gtmOnFailure()},c.vtp_gtmOnFailure));var v=M("dataLayer"),w=v&&v.hide;w&&w.end&&(w[c.vtp_optimizeContainerId]=!0)}else D(c.vtp_gtmOnFailure)};Y.__opt=b;Y.__opt.b="opt";Y.__opt.g=!0;Y.__opt.priorityOverride=0}();
Y.a.cid=["google"],function(){(function(a){Y.__cid=a;Y.__cid.b="cid";Y.__cid.g=!0;Y.__cid.priorityOverride=0})(function(){return Hc.i})}();
Y.a.hjtc=["nonGoogleScripts"],function(){(function(a){Y.__hjtc=a;Y.__hjtc.b="hjtc";Y.__hjtc.g=!0;Y.__hjtc.priorityOverride=0})(function(a){var b=a.vtp_hotjar_site_id;xi("hj",function(){(window.hj.q=window.hj.q||[]).push(arguments)});xi("_hjSettings",{hjid:b,hjsv:5});L("//static.hotjar.com/c/hotjar-"+W(b)+".js?sv=5",a.vtp_gtmOnSuccess,a.vtp_gtmOnFailure)})}();
Y.a.gclidw=["google"],function(){var a=["aw","dc","gf","ha"];(function(b){Y.__gclidw=b;Y.__gclidw.b="gclidw";Y.__gclidw.g=!0;Y.__gclidw.priorityOverride=100})(function(b){D(b.vtp_gtmOnSuccess);var c,d,e;b.vtp_enableCookieOverrides&&(e=b.vtp_cookiePrefix,c=b.vtp_path,d=b.vtp_domain);var g=null;b.vtp_enableCookieUpdateFeature&&(g=!0,void 0!==b.vtp_cookieUpdate&&(g=!!b.vtp_cookieUpdate));var h=e,k=c,l=d;b.vtp_enableCrossDomainFeature&&(b.vtp_enableCrossDomain&&!1===b.vtp_acceptIncoming||(b.vtp_enableCrossDomain||
$g())&&Ai(a,h,k,l));zi(e,c,d);vh(g,e,c,d);var m=e;if(b.vtp_enableCrossDomainFeature&&b.vtp_enableCrossDomain&&b.vtp_linkerDomains){var n=b.vtp_linkerDomains.toString().replace(/\s+/g,"").split(",");Bi(a,n,b.vtp_urlPosition,!!b.vtp_formDecoration,m)}})}();

Y.a.aev=["google"],function(){function a(q,r){var v=zd(q,"gtm");if(v)return v[r]}function b(q,r,v,w){w||(w="element");var x=q+"."+r,y;if(n.hasOwnProperty(x))y=n[x];else{var z=a(q,w);if(z&&(y=v(z),n[x]=y,p.push(x),35<p.length)){var B=p.shift();delete n[B]}}return y}function c(q,r,v){var w=a(q,t[r]);return void 0!==w?w:v}function d(q,r){if(!q)return!1;var v=e(ri());ka(r)||(r=String(r||"").replace(/\s+/g,"").split(","));for(var w=[v],x=0;x<r.length;x++)if(r[x]instanceof RegExp){if(r[x].test(q))return!1}else{var y=
r[x];if(0!=y.length){if(0<=e(q).indexOf(y))return!1;w.push(e(y))}}return!Ri(q,w)}function e(q){m.test(q)||(q="http://"+q);return ib(jb(q),"HOST",!0)}function g(q,r,v){switch(q){case "SUBMIT_TEXT":return b(r,"FORM."+q,h,"formSubmitElement")||v;case "LENGTH":var w=b(r,"FORM."+q,k);return void 0===w?v:w;case "INTERACTED_FIELD_ID":return l(r,"id",v);case "INTERACTED_FIELD_NAME":return l(r,"name",v);case "INTERACTED_FIELD_TYPE":return l(r,"type",v);case "INTERACTED_FIELD_POSITION":var x=a(r,"interactedFormFieldPosition");
return void 0===x?v:x;case "INTERACT_SEQUENCE_NUMBER":var y=a(r,"interactSequenceNumber");return void 0===y?v:y;default:return v}}function h(q){switch(q.tagName.toLowerCase()){case "input":return Sa(q,"value");case "button":return Wa(q);default:return null}}function k(q){if("form"===q.tagName.toLowerCase()&&q.elements){for(var r=0,v=0;v<q.elements.length;v++)Gh(q.elements[v])&&r++;return r}}function l(q,r,v){var w=a(q,"interactedFormField");return w&&Sa(w,r)||v}var m=/^https?:\/\//i,n={},p=[],t={ATTRIBUTE:"elementAttribute",
CLASSES:"elementClasses",ELEMENT:"element",ID:"elementId",HISTORY_CHANGE_SOURCE:"historyChangeSource",HISTORY_NEW_STATE:"newHistoryState",HISTORY_NEW_URL_FRAGMENT:"newUrlFragment",HISTORY_OLD_STATE:"oldHistoryState",HISTORY_OLD_URL_FRAGMENT:"oldUrlFragment",TARGET:"elementTarget"};(function(q){Y.__aev=q;Y.__aev.b="aev";Y.__aev.g=!0;Y.__aev.priorityOverride=0})(function(q){var r=q.vtp_gtmEventId,v=q.vtp_defaultValue,w=q.vtp_varType;switch(w){case "TAG_NAME":var x=a(r,"element");return x&&x.tagName||
v;case "TEXT":return b(r,w,Wa)||v;case "URL":var y;a:{var z=String(a(r,"elementUrl")||v||""),B=jb(z),A=String(q.vtp_component||"URL");switch(A){case "URL":y=z;break a;case "IS_OUTBOUND":y=d(z,q.vtp_affiliatedDomains);break a;default:y=ib(B,A,q.vtp_stripWww,q.vtp_defaultPages,q.vtp_queryKey)}}return y;case "ATTRIBUTE":var E;if(void 0===q.vtp_attribute)E=c(r,w,v);else{var F=q.vtp_attribute,I=a(r,"element");E=I&&Sa(I,F)||v||""}return E;case "MD":var S=q.vtp_mdValue,T=b(r,"MD",ai);return S&&T?di(T,S)||
v:T||v;case "FORM":return g(String(q.vtp_component||"SUBMIT_TEXT"),r,v);default:return c(r,w,v)}})}();
Y.a.gas=["google"],function(){(function(a){Y.__gas=a;Y.__gas.b="gas";Y.__gas.g=!0;Y.__gas.priorityOverride=0})(function(a){var b=f(a),c=b;c[fc.ka]=null;c[fc.Ue]=null;var d=b=c;d.vtp_fieldsToSet=d.vtp_fieldsToSet||[];var e=d.vtp_cookieDomain;void 0!==e&&(d.vtp_fieldsToSet.push({fieldName:"cookieDomain",value:e}),delete d.vtp_cookieDomain);return b})}();

Y.a.awct=["google"],function(){var a=!1,b=[],c=function(k){var l=M("google_trackConversion"),m=k.gtm_onFailure;"function"==typeof l?l(k)||m():m()},d=function(){for(;0<b.length;)c(b.shift())},e=function(){return function(){d();a=!1}},g=function(){return function(){d();b={push:c};}},h=function(k){le();var l={google_basket_transaction_type:"purchase",google_conversion_domain:"",google_conversion_id:k.vtp_conversionId,google_conversion_label:k.vtp_conversionLabel,
google_conversion_value:k.vtp_conversionValue||0,google_remarketing_only:!1,onload_callback:k.vtp_gtmOnSuccess,gtm_onFailure:k.vtp_gtmOnFailure,google_gtm:zh()},m=function(t){return function(q,r,v){var w="DATA_LAYER"==t?vi(v):k[r];w&&(l[q]=w)}},n=m("JSON");n("google_conversion_currency","vtp_currencyCode");n("google_conversion_order_id","vtp_orderId");k.vtp_enableProductReporting&&(n=m(k.vtp_productReportingDataSource),n("google_conversion_merchant_id","vtp_awMerchantId","aw_merchant_id"),n("google_basket_feed_country",
"vtp_awFeedCountry","aw_feed_country"),n("google_basket_feed_language","vtp_awFeedLanguage","aw_feed_language"),n("google_basket_discount","vtp_discount","discount"),n("google_conversion_items","vtp_items","items"),l.google_conversion_items=l.google_conversion_items.map(function(t){return{value:t.price,quantity:t.quantity,item_id:t.id}}));!k.hasOwnProperty("vtp_enableConversionLinker")||k.vtp_enableConversionLinker?(k.vtp_conversionCookiePrefix&&(l.google_gcl_cookie_prefix=k.vtp_conversionCookiePrefix),
l.google_read_gcl_cookie_opt_out=!1):l.google_read_gcl_cookie_opt_out=!0;var p=!0;p&&b.push(l);a||(a=!0,L("//www.googleadservices.com/pagead/conversion_async.js",g(),e("//www.googleadservices.com/pagead/conversion_async.js")))};Y.__awct=h;Y.__awct.b="awct";Y.__awct.g=!0;Y.__awct.priorityOverride=0}();
Y.a.fsl=[],function(){function a(){var e=M("document"),g=c(),h=HTMLFormElement.prototype.submit;Qa(e,"click",function(k){var l=k.target;if(l&&(l=Ya(l,["button","input"],100))&&("submit"==l.type||"image"==l.type)&&l.name&&Sa(l,"value")){var m;(m=l.form?l.form.tagName?l.form:C.getElementById(l.form):Ya(l,["form"],100))&&g.store(m,l)}},!1);Qa(e,"submit",function(k){var l=k.target;if(!l)return k.returnValue;var m=k.defaultPrevented||!1===k.returnValue,n=b(l)&&!m,p=g.get(l),t=!0;if(d(l,function(){if(t){var q;
p&&(q=e.createElement("input"),q.type="hidden",q.name=p.name,q.value=p.value,l.appendChild(q));h.call(l);q&&l.removeChild(q)}},m,n,p))t=!1;else return m||(k.preventDefault&&k.preventDefault(),k.returnValue=!1),!1;return k.returnValue},!1);HTMLFormElement.prototype.submit=function(){var k=this,l=b(k),m=!0;d(k,function(){m&&h.call(k)},!1,l)&&(h.call(k),m=!1)}}function b(e){var g=e.target;return g&&"_self"!==g&&"_parent"!==g&&"_top"!==g?!1:!0}function c(){var e=[],g=function(h){return ma(e,function(k){return k.form===
h})};return{store:function(h,k){var l=g(h);l?l.button=k:e.push({form:h,button:k})},get:function(h){var k=g(h);return k?k.button:null}}}function d(e,g,h,k,l){var m=ng("fsl",h?"nv.mwt":"mwt",0),n;n=h?ng("fsl","nv.ids",[]):ng("fsl","ids",[]);if(!n.length)return!0;var p=jg(e,"gtm.formSubmit",n),t=e.action;t&&t.tagName&&(t=e.cloneNode(!1).action);p["gtm.elementUrl"]=t;l&&(p["gtm.formSubmitElement"]=l);if(k&&m){if(!wi(p,Ff(g),m))return!1}else wi(p,function(){},m||2E3);return!0}(function(e){Y.__fsl=e;Y.__fsl.b=
"fsl";Y.__fsl.g=!0;Y.__fsl.priorityOverride=0})(function(e){var g=e.vtp_waitForTags,h=e.vtp_checkValidation,k=Number(e.vtp_waitForTagsTimeout);if(!k||0>=k)k=2E3;var l=e.vtp_uniqueTriggerId||"0";if(g){var m=function(p){return Math.max(k,p)};mg("fsl","mwt",m,0);h||mg("fsl","nv.mwt",m,0)}var n=function(p){p.push(l);return p};mg("fsl","ids",n,[]);h||mg("fsl","nv.ids",n,[]);Di("fsl")||(a(),Ei("fsl"));D(e.vtp_gtmOnSuccess)})}();Y.a.smm=["google"],function(){(function(a){Y.__smm=a;Y.__smm.b="smm";Y.__smm.g=!0;Y.__smm.priorityOverride=0})(function(a){var b=a.vtp_input,c=Si(a.vtp_map,"key","value")||{};return c.hasOwnProperty(b)?c[b]:a.vtp_defaultValue})}();




Y.a.paused=[],function(){(function(a){Y.__paused=a;Y.__paused.b="paused";Y.__paused.g=!0;Y.__paused.priorityOverride=0})(function(a){D(a.vtp_gtmOnFailure)})}();Y.a.hid=["google"],function(){(function(a){Y.__hid=a;Y.__hid.b="hid";Y.__hid.g=!0;Y.__hid.priorityOverride=0})(function(){return gg.wb})}();

Y.a.html=["customScripts"],function(){function a(d,e,g,h){return function(){try{if(0<e.length){var k=e.shift(),l=a(d,e,g,h);if("SCRIPT"==String(k.nodeName).toUpperCase()&&"text/gtmscript"==k.type){var m=C.createElement("script");m.async=!1;m.type="text/javascript";m.id=k.id;m.text=k.text||k.textContent||k.innerHTML||"";k.charset&&(m.charset=k.charset);var n=k.getAttribute("data-gtmsrc");n&&(m.src=n,La(m,l));d.insertBefore(m,null);n||l()}else if(k.innerHTML&&0<=k.innerHTML.toLowerCase().indexOf("<script")){for(var p=
[];k.firstChild;)p.push(k.removeChild(k.firstChild));d.insertBefore(k,null);a(k,p,l,h)()}else d.insertBefore(k,null),l()}else g()}catch(t){D(h)}}}var b=function(d,e,g){ce(function(){var h,k=Ic;k.postscribe||(k.postscribe=lc);h=k.postscribe;var l={done:e},m=C.createElement("div");m.style.display="none";m.style.visibility="hidden";C.body.appendChild(m);try{h(m,d,l)}catch(n){D(g)}})};var c=function(d){if(C.body){var e=
d.vtp_gtmOnFailure,g=Ii(d.vtp_html,d.vtp_gtmOnSuccess,e),h=g.Ac,k=g.I;if(d.vtp_useIframe){}else d.vtp_supportDocumentWrite?b(h,k,e):a(C.body,Xa(h),k,e)()}else pi(function(){c(d)},
200)};Y.__html=c;Y.__html.b="html";Y.__html.g=!0;Y.__html.priorityOverride=0}();
Y.a.dbg=["google"],function(){(function(a){Y.__dbg=a;Y.__dbg.b="dbg";Y.__dbg.g=!0;Y.__dbg.priorityOverride=0})(function(){return!1})}();


Y.a.img=["customPixels"],function(){(function(a){Y.__img=a;Y.__img.b="img";Y.__img.g=!0;Y.__img.priorityOverride=0})(function(a){var b=Xa('<a href="'+a.vtp_url+'"></a>')[0].href,c=a.vtp_cacheBusterQueryParam;if(a.vtp_useCacheBuster){c||(c="gtmcb");var d=b.charAt(b.length-1),e=0<=b.indexOf("?")?"?"==d||"&"==d?"":"&":"?";b+=e+c+"="+a.vtp_randomNumber}Qi(b,a.vtp_gtmOnSuccess,a.vtp_gtmOnFailure)})}();


Y.a.lcl=[],function(){function a(){var c=M("document"),d=0,e=function(g){var h=g.target;if(h&&3!==g.which&&(!g.timeStamp||g.timeStamp!==d)){d=g.timeStamp;h=Ya(h,["a","area"],100);if(!h)return g.returnValue;var k=g.defaultPrevented||!1===g.returnValue,l=ng("lcl",k?"nv.mwt":"mwt",0),m;m=k?ng("lcl","nv.ids",[]):ng("lcl","ids",[]);if(m.length){var n=jg(h,"gtm.linkClick",m);if(b(g,h,c)&&!k&&l&&h.href){var p=M((Gi(h,"target")||"_self").substring(1)),t=!0;if(wi(n,Ff(function(){t&&p&&(p.location.href=Gi(h,
"href"))}),l))t=!1;else return g.preventDefault&&g.preventDefault(),g.returnValue=!1}else wi(n,function(){},l||2E3);return!0}}};Qa(c,"click",e,!1);Qa(c,"auxclick",e,!1)}function b(c,d,e){if(2===c.which||c.ctrlKey||c.shiftKey||c.altKey||c.metaKey)return!1;var g=Gi(d,"href"),h=g.indexOf("#"),k=Gi(d,"target");if(k&&"_self"!==k&&"_parent"!==k&&"_top"!==k||0===h)return!1;if(0<h){var l=ti(g),m=ti(e.location);return l!==m}return!0}(function(c){Y.__lcl=c;Y.__lcl.b="lcl";Y.__lcl.g=!0;Y.__lcl.priorityOverride=
0})(function(c){var d=void 0===c.vtp_waitForTags?!0:c.vtp_waitForTags,e=void 0===c.vtp_checkValidation?!0:c.vtp_checkValidation,g=Number(c.vtp_waitForTagsTimeout);if(!g||0>=g)g=2E3;var h=c.vtp_uniqueTriggerId||"0";if(d){var k=function(m){return Math.max(g,m)};mg("lcl","mwt",k,0);e||mg("lcl","nv.mwt",k,0)}var l=function(m){m.push(h);return m};mg("lcl","ids",l,[]);e||mg("lcl","nv.ids",l,[]);Di("lcl")||(a(),Ei("lcl"));D(c.vtp_gtmOnSuccess)})}();

var nk={};nk.macro=function(a){if(gg.kc.hasOwnProperty(a))return gg.kc[a]},nk.onHtmlSuccess=gg.Kd(!0),nk.onHtmlFailure=gg.Kd(!1);nk.dataLayer=rd;nk.callback=function(a){Rc.hasOwnProperty(a)&&ha(Rc[a])&&Rc[a]();delete Rc[a]};nk.vf=function(){Ic[Hc.i]=nk;za(Sc,Y.a);Yb=Yb||gg;Zb=Vd};
nk.gg=function(){bh.gtm_3pds=!0;Ic=u.google_tag_manager=u.google_tag_manager||{};if(Ic[Hc.i]){var a=Ic.zones;a&&a.unregisterChild(Hc.i)}else{for(var b=data.resource||{},c=b.macros||[],d=0;d<c.length;d++)Qb.push(c[d]);for(var e=b.tags||[],g=0;g<e.length;g++)Tb.push(e[g]);for(var h=b.predicates||[],
k=0;k<h.length;k++)Sb.push(h[k]);for(var l=b.rules||[],m=0;m<l.length;m++){for(var n=l[m],p={},t=0;t<n.length;t++)p[n[t][0]]=Array.prototype.slice.call(n[t],1);Rb.push(p)}Wb=Y;Xb=Li;nk.vf();Kf();Yd=!1;Zd=0;if("interactive"==C.readyState&&!C.createEventObject||"complete"==C.readyState)ae();else{Qa(C,"DOMContentLoaded",ae);Qa(C,"readystatechange",ae);if(C.createEventObject&&C.documentElement.doScroll){var q=!0;try{q=!u.frameElement}catch(x){}q&&be()}Qa(u,"load",ae)}yf=!1;"complete"===C.readyState?Af():
Qa(u,"load",Af);a:{if(!gd)break a;u.setInterval(hd,864E5);}
Oc=(new Date).getTime();}};(0,nk.gg)();

})()
