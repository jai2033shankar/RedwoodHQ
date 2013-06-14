var automationframework = connect('localhost:27017/automationframework');

var ClickID = ObjectId();
automationframework.actions.save({"tag":["selenium"],"params":[{"name":"ID","possiblevalues":[],"parametertype":"String","id":"1361857038191-12505-27095"},{"name":"ID Type","possiblevalues":["ID","XPath","Class Name","Tag Name","Css Selector","Link Text","Partial Link Text","Name"],"parametertype":"String","id":"1361857045292-1778-6378"}],"name":"Click","description":"","type":"script","status":"Automated","_id":ClickID,"collection":[],"script":"actions.selenium.Click.run","project":projectName});
var OpenBrowserID = ObjectId();
automationframework.actions.save({"tag":["selenium"],"params":[{"name":"URL","possiblevalues":[],"parametertype":"String","id":"1361857291996-19836-917"},{"name":"Browser","possiblevalues":["Internet Explorer","Firefox","Chrome"],"parametertype":"String","id":"1361857319350-22783-32022"}],"name":"Open Browser","description":"","type":"script","status":"Automated","_id":OpenBrowserID,"collection":[],"script":"actions.selenium.Browser.run","project":projectName});
var SendKeysID = ObjectId();
automationframework.actions.save({"tag":["selenium"],"params":[{"name":"ID","possiblevalues":[],"parametertype":"String","id":"1361859197536-31667-17007"},{"name":"ID Type","possiblevalues":["ID","XPath","Class Name","Tag Name","Css Selector","Link Text","Partial Link Text","Name"],"parametertype":"String","id":"1361859201529-30055-7133"},{"name":"Keys","possiblevalues":[],"parametertype":"String","id":"1361859371895-8512-9793"}],"name":"Send Keys","description":"","type":"script","status":"Automated","_id":SendKeysID,"collection":[],"script":"actions.selenium.SendKeys.run","project":projectName});
var SearchGoogleID = ObjectId();
automationframework.actions.save({"tag":["google"],"params":[{"name":"search for","possiblevalues":[],"parametertype":"String","id":"1361857485948-2237-13684"}],"name":"Search Google","description":"","type":"collection","status":"Automated","_id":SearchGoogleID,"collection":[{"order":"1","actionid":SendKeysID.toString(),"host":"Default","executionflow":"Record Error Stop Test Case","returnvalue":"","parameters":[{"paramname":"ID","paramid":"1361859197536-31667-17007","paramvalue":"q"},{"paramname":"ID Type","paramid":"1361859201529-30055-7133","paramvalue":"Name"},{"paramname":"Keys","paramid":"1361859371895-8512-9793","paramvalue":"${search for}"}]},{"order":"2","actionid":ClickID.toString(),"host":"Default","executionflow":"Record Error Stop Test Case","returnvalue":"","parameters":[{"paramname":"ID","paramid":"1361857038191-12505-27095","paramvalue":"btnK"},{"paramname":"ID Type","paramid":"1361857045292-1778-6378","paramvalue":"Name"}]}],"script":"","project":projectName});
var VerifyTextID = ObjectId();
automationframework.actions.save({"tag":["selenium"],"params":[{"name":"ID","possiblevalues":[],"parametertype":"String","id":"1361900718349-8440-28310"},{"name":"IDType","possiblevalues":["ID","XPath","Class Name","Tag Name","Css Selector","Link Text","Partial Link Text","Name"],"parametertype":"String","id":"1361900724396-8476-16304"},{"name":"Text","possiblevalues":[],"parametertype":"String","id":"1361900791173-11855-8017"}],"name":"Verify Text","description":"","type":"script","status":"Automated","_id":VerifyTextID,"collection":[],"script":"actions.selenium.VerifyText.run","project":projectName});
var SearchAmazonID = ObjectId();
automationframework.actions.save({"tag":["amazon","search"],"params":[{"name":"search for","possiblevalues":[],"parametertype":"String","id":"1361901171879-59-24985"}],"name":"Search Amazon","description":"","type":"collection","status":"Automated","_id":SearchAmazonID,"collection":[{"order":"1","actionid":SendKeysID.toString(),"host":"Default","executionflow":"Record Error Stop Test Case","returnvalue":"","parameters":[{"paramname":"ID","paramid":"1361859197536-31667-17007","paramvalue":"twotabsearchtextbox"},{"paramname":"ID Type","paramid":"1361859201529-30055-7133","paramvalue":"ID"},{"paramname":"Keys","paramid":"1361859371895-8512-9793","paramvalue":"${search for}"}]},{"order":"2","actionid":ClickID.toString(),"host":"Default","executionflow":"Record Error Stop Test Case","returnvalue":"","parameters":[{"paramname":"ID","paramid":"1361857038191-12505-27095","paramvalue":"nav-submit-input"},{"paramname":"ID Type","paramid":"1361857045292-1778-6378","paramvalue":"Class Name"}]}],"script":"","project":projectName});
var SelectItemID = ObjectId();
automationframework.actions.save({"tag":["amazon"],"params":[{"name":"Item Index","possiblevalues":[],"parametertype":"String","id":"1361902537334-29436-6570"}],"name":"Select Item","description":"","type":"collection","status":"Automated","_id":SelectItemID,"collection":[{"order":"1","actionid":ClickID.toString(),"host":"Default","executionflow":"Record Error Stop Test Case","returnvalue":"","parameters":[{"paramname":"ID","paramid":"1361857038191-12505-27095","paramvalue":"//*[@id=\"result_${Item Index}\"]/h3/a"},{"paramname":"ID Type","paramid":"1361857045292-1778-6378","paramvalue":"XPath"}]}],"script":"","project":projectName});
var AddToCartID = ObjectId();
automationframework.actions.save({"tag":["amazon","cart"],"params":[],"name":"Add to Cart","description":"","type":"collection","status":"Automated","_id":AddToCartID,"collection":[{"order":"1","actionid":ClickID.toString(),"host":"Default","executionflow":"Record Error Stop Test Case","returnvalue":"","parameters":[{"paramname":"ID","paramid":"1361857038191-12505-27095","paramvalue":"bb_atc_button"},{"paramname":"ID Type","paramid":"1361857045292-1778-6378","paramvalue":"ID"}]}],"script":"","project":projectName});
var VerifyItemAddedToCartID = ObjectId();
automationframework.actions.save({"tag":["amazon","cart"],"params":[],"name":"Verify Item Added to Cart","description":"","type":"collection","status":"Automated","_id":VerifyItemAddedToCartID,"collection":[{"order":"1","actionid":VerifyTextID.toString(),"host":"Default","executionflow":"Record Error Stop Test Case","returnvalue":"","parameters":[{"paramname":"ID","paramid":"1361900718349-8440-28310","paramvalue":"confirm-text"},{"paramname":"IDType","paramid":"1361900724396-8476-16304","paramvalue":"ID"},{"paramname":"Text","paramid":"1361900791173-11855-8017","paramvalue":"1 item added to Cart"}]}],"script":"","project":projectName});

var FindPrimaTestID = ObjectId();
automationframework.testcases.save({"tag":[],"name":"Find PrimaTest in Google","description":"","status":"To be Automated","_id":FindPrimaTestID,"collection":[{"order":"1","actionid":OpenBrowserID.toString(),"host":"Default","executionflow":"Record Error Stop Test Case","returnvalue":"","parameters":[{"paramname":"URL","paramid":"1361857291996-19836-917","paramvalue":"www.google.com"},{"paramname":"Browser","paramid":"1361857319350-22783-32022","paramvalue":"${Browser}"}]},{"order":"2","actionid":SearchGoogleID.toString(),"host":"Default","executionflow":"Record Error Stop Test Case","returnvalue":"","parameters":[{"paramname":"search for","paramid":"1361857485948-2237-13684","paramvalue":"PrimaTest"}]}],"script":"","host":"","type":"collection","project":projectName});
var AddStarTreckID = ObjectId();
automationframework.testcases.save({"tag":["amazon"],"name":"Add Star Trek to Cart","description":"","status":"Automated","_id":AddStarTreckID,"collection":[{"order":"1","actionid":OpenBrowserID.toString(),"host":"Default","executionflow":"Record Error Stop Test Case","returnvalue":"","parameters":[{"paramname":"URL","paramid":"1361857291996-19836-917","paramvalue":"www.amazon.com"},{"paramname":"Browser","paramid":"1361857319350-22783-32022","paramvalue":"${Browser}"}]},{"order":"2","actionid":SearchAmazonID,"host":"Default","executionflow":"Record Error Stop Test Case","returnvalue":"","parameters":[{"paramname":"search for","paramid":"1361901171879-59-24985","paramvalue":"Star Trek Blu Ray"}]},{"order":"3","actionid":SelectItemID.toString(),"host":"Default","executionflow":"Record Error Stop Test Case","returnvalue":"","parameters":[{"paramname":"Item Index","paramid":"1361902537334-29436-6570","paramvalue":"0"}]},{"order":"4","actionid":AddToCartID.toString(),"host":"Default","executionflow":"Record Error Stop Test Case","returnvalue":"","parameters":[]},{"order":"5","actionid":VerifyItemAddedToCartID.toString(),"host":"Default","executionflow":"Record Error Stop Test Case","returnvalue":"","parameters":[]}],"script":"","host":"","type":"collection","project":projectName});

var GoogleSearchTSID = ObjectId();
automationframework.testsets.save({"name":"Google Search","testcases":[{"_id":FindPrimaTestID.toString()}],"project":projectName,"_id":GoogleSearchTSID});
var AmazonShoppingTSID = ObjectId();
automationframework.testsets.save({"name":"Amazon Shopping","testcases":[{"_id":AddStarTreckID.toString()}],"_id":AmazonShoppingTSID,"project":projectName});

var GoogleSearchEXID = ObjectId();
automationframework.executions.save({"name":"Google Search","status":"Ready To Run","ignoreStatus":false,"testset":GoogleSearchTSID.toString(),"resultID":"","baseStateTCID":"","testsetname":"Google Search","tag":[],"variables":[{"name":"Browser","value":"Firefox","tag":[""],"possibleValues":["Internet Explorer","Firefox","Chrome"],"_id":BrowserVarID.toString()}],"machines":[{"host":"dmitri-pc","vncport":"3006","port":"5009","tag":["qualification","aga","sadfasdf"],"state":"","baseState":"","resultID":"","baseStateTCID":"1370382646780-24450-28606","result":"","description":"host name is:Dmitri-PC","roles":["Default"],"_id":"5116ada4a5c8d4f00d000002"},{"host":"192.168.220.128","vncport":"3006","port":"5009","tag":[""],"state":"","baseState":"","resultID":"","baseStateTCID":"1370382646780-22669-30141","result":"","description":"host name is:SilkDevSQLVS2","roles":["Default"],"_id":"5117db04898578bc2f000001"},{"host":"192.168.8.1","vncport":"3006","port":"5009","tag":"","state":"","baseState":"","resultID":"","baseStateTCID":"1370382646780-474-22129","result":"","description":"host name is:Dmitri-PC","roles":["Default"],"_id":"514798379c05dd140f000002"}],"_id":GoogleSearchEXID.toString(),"project":projectName});
var AmazonShoppingEXID = ObjectId();
automationframework.executions.save({"name":"Amazon Shopping","status":"Ready To Run","ignoreStatus":false,"testset":AmazonShoppingTSID.toString(),"resultID":"","baseStateTCID":"","testsetname":"Amazon Shopping","tag":[],"variables":[{"name":"Browser","value":"Firefox","tag":[""],"possibleValues":["Internet Explorer","Firefox","Chrome"],"_id":BrowserVarID.toString()}],"machines":[{"host":"dmitri-pc","vncport":"3006","port":"5009","tag":["qualification","aga","sadfasdf"],"state":"","baseState":"","resultID":"","baseStateTCID":"1370382670808-29606-27201","result":"","description":"host name is:Dmitri-PC","roles":["Default"],"_id":"5116ada4a5c8d4f00d000002"},{"host":"192.168.220.128","vncport":"3006","port":"5009","tag":[""],"state":"","baseState":"","resultID":"","baseStateTCID":"1370382670808-3320-9747","result":"","description":"host name is:SilkDevSQLVS2","roles":["Default"],"_id":"5117db04898578bc2f000001"},{"host":"192.168.8.1","vncport":"3006","port":"5009","tag":"","state":"","baseState":"","resultID":"","baseStateTCID":"1370382670808-10943-29261","result":"","description":"host name is:Dmitri-PC","roles":["Default"],"_id":"514798379c05dd140f000002"}],"_id":AmazonShoppingEXID.toString(),"project":projectName});

var BrowserVarID = ObjectId();
automationframework.variables.save({"tag":[""],"name":"Browser","value":"<NULL>","taskVar":true,"possibleValues":["Internet Explorer","Firefox","Chrome"],"project":projectName,"_id":BrowserVarID});


automationframework.actionTags.save({"value":"selenium","project":projectName,"_id":ObjectId()});
automationframework.actionTags.save({"value":"google","project":projectName,"_id":ObjectId()});
automationframework.actionTags.save({"value":"amazon","project":projectName,"_id":ObjectId()});
automationframework.actionTags.save({"value":"search","project":projectName,"_id":ObjectId()});
automationframework.actionTags.save({"value":"cart","project":projectName,"_id":ObjectId()});

automationframework.testcaseTags.save({"value":"amazon","project":projectName,"_id":ObjectId()});

automationframework.executiontestcases.save({"name":"Find PrimaTest in Google","tag":[],"status":"Not Run","host":"","vncport":"","resultID":"","result":"","startdate":null,"enddate":null,"runtime":"","error":"","_id":ObjectId().toString(),"testcaseID":FindPrimaTestID.toString(),"executionID":GoogleSearchEXID.toString(),"project":projectName});
automationframework.executiontestcases.save({"name":"Add Star Trek to Cart","tag":["amazon"],"status":"Not Run","host":"","vncport":"","resultID":"","result":"","startdate":null,"enddate":null,"runtime":"","error":"","_id":ObjectId().toString(),"testcaseID":AddStarTreckID,"executionID":AmazonShoppingEXID.toString(),"project":projectName});