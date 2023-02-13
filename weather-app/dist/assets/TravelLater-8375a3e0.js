import{A as v,a as x,b as C,E as g,N as y,S as W,C as w,c as D}from"./SidebarComponent-896a28e6.js";import{_ as A,o as l,c as h,a as e,b as p,t as a,w as n,i as E,F as k,r as f,v as i,d as u,e as d,f as M}from"./index-44121da0.js";const S={data(){return{url:"https://history.openweathermap.org/data/2.5/aggregated/",apikey:"5a6448e0649310a8fe87c095182feec8",notFound:!1,noCheck:!1,loading:!1,noMonth:!1,allWeatherData:[],chosenWeatherData:[],checkedContinents:[],checkedWeather:[],chosenPlaces:[],checkedContinents2:[],options:[{text:"January",id:1},{text:"February",id:2},{text:"March",id:3},{text:"April",id:4},{text:"May",id:5},{text:"June",id:6},{text:"July",id:7},{text:"August",id:8},{text:"September",id:9},{text:"October",id:10},{text:"November",id:11},{text:"December",id:12}],continent:String,selected:"",africa:v,asia:x,australia:C,europe:g,northAmerica:y,southAmerica:W,cities:w,month:"",city_name:{},question1:"Find the average monthly temperature",cta1:"Select the month of travel:",cta2:"Choose your destinations:",cta3:"Choose your temperature prefferences:"}},components:{Sidebar:D},methods:{printMonth(){this.options.forEach(o=>{o.id===this.selected&&(this.month=o.text),this.loading=!1})},getData(){console.log("inside getData ");const o=[];this.chosenPlaces.forEach(t=>{o.push(fetch(`${this.url}month?q=${t}&month=${this.selected}&appid=${this.apikey}`).then(r=>r.json()).then(this.setResults))}),Promise.all(o).then(this.loadWeather).then(this.checkForData).then(this.sort).catch(t=>console.log(t))},setResults(o){this.allWeatherData.push(o)},load(){if(this.loading=!0,this.notFound=!1,this.chosenWeatherData=[],this.allWeatherData=[],this.chosenPlaces=[],console.log("Submit was clicked "+this.chosenWeatherData),this.checkedContinents2=[],this.checkedContinents2=this.checkedContinents,console.log("Checked continents"+this.checkedContinents),console.log("Checked continents2"+this.checkedContinents2),console.log("Inside loading "),this.loading=!0,this.selected==="")return console.log("No month selected"),this.noMonth=!0,this.loading=!1,0;if(this.checkedContinents==0||this.checkedWeather==0)return console.log("No continent or temperature checked "),this.noCheck=!0,this.noMonth=!1,this.loading=!1,0;console.log("Load data normally"),this.noCheck=!1,this.noMonth=!1,this.getPlaces(),this.getData()},getPlaces(){this.checkedContinents2.forEach(o=>{o==="Africa"?this.africa.forEach(t=>this.chosenPlaces.push(t)):o==="Asia"?this.asia.forEach(t=>this.chosenPlaces.push(t)):o==="Australia"?this.australia.forEach(t=>this.chosenPlaces.push(t)):o==="Europe"?this.europe.forEach(t=>this.chosenPlaces.push(t)):o==="North America"?this.northAmerica.forEach(t=>this.chosenPlaces.push(t)):o==="South America"&&this.southAmerica.forEach(t=>this.chosenPlaces.push(t))})},loadWeather(){this.checkedWeather.forEach(o=>{switch(o){case"very hot":this.veryhot();break;case"hot":this.hot();break;case"warm":this.warm();break;case"cooler":this.cooler();break;case"cold":this.cold();break;case"freezing":this.freezing();break}})},converter(o){return Math.round(o-273.15)},freezing(){this.allWeatherData.forEach(o=>{let t=this.converter(o.result.temp.median);t<=0&&this.saveData(o,t)})},cold(){this.allWeatherData.forEach(o=>{let t=this.converter(o.result.temp.median);t>0&&t<=10&&this.saveData(o,t)})},cooler(){this.allWeatherData.forEach(o=>{let t=this.converter(o.result.temp.median);t>10&&t<=18&&this.saveData(o,t)})},warm(){this.allWeatherData.forEach(o=>{let t=this.converter(o.result.temp.median);t>18&&t<=25&&this.saveData(o,t)})},hot(){this.allWeatherData.forEach(o=>{let t=this.converter(o.result.temp.median);t>25&&t<=33&&this.saveData(o,t)})},veryhot(){this.allWeatherData.forEach(o=>{let t=this.converter(o.result.temp.median);t>33&&this.saveData(o,t)})},saveData(o,t){this.findCityName(o.city_id);const r={name:this.city_name.name,temp:t,continent:this.city_name.continent};var m=this.chosenWeatherData.findIndex(s=>s.name===r.name);m===-1?this.chosenWeatherData.push(r):console.log("object already exists"),this.printMonth()},findCityName(o){this.cities.forEach(t=>{t.id===o&&(this.city_name.name=t.name,this.city_name.continent=t.continent)})},checkForData(){if(this.chosenWeatherData.length===0)return console.log("No results "),this.loading=!1,this.notFound=!0,0},clear(){this.checkedContinents=[],this.checkedWeather=[],this.chosenPlaces=[],this.chosenWeatherData=[],this.allWeatherData=[],this.noCheck=!1,this.notFound=!1,this.month="",this.selected="",this.loading=!1,this.noMonth=!1},sort(){this.chosenWeatherData.sort((o,t)=>t.temp-o.temp)}}},V={class:"row main-display"},P={class:"col sidebar"},N={class:"col-md-5 col-sm-12 mb-3 question-field"},F={class:"input-field"},U={class:"question mb-4 mt-3"},L={class:"question mb-3"},q=e("option",{disabled:"",value:""},"Select here...",-1),B=["value"],Z={class:"question mb-2"},z={class:"continents mb-3"},J={class:"row"},j={class:"col col-checkbox"},H={class:"form-check form-check-inline"},I=e("label",{class:"form-check-label",for:"inlineCheckbox1"}," Africa ",-1),R={class:"col col-checkbox"},T={class:"form-check form-check-inline"},O=e("label",{class:"form-check-label",for:"inlineCheckbox2"}," Asia ",-1),G={class:"col col-checkbox"},K={class:"form-check form-check-inline"},Q=e("label",{class:"form-check-label",for:"inlineCheckbox3"}," Australia ",-1),X={class:"row"},Y={class:"col col-checkbox"},$={class:"form-check form-check-inline"},ee=e("label",{class:"form-check-label",for:"inlineCheckbox4"}," Europe ",-1),te={class:"col col-checkbox"},se={class:"form-check form-check-inline"},oe=e("label",{class:"form-check-label",for:"inlineCheckbox5"}," North - America ",-1),ce={class:"col col-checkbox"},ne={class:"form-check form-check-inline"},ie=e("label",{class:"form-check-label",for:"inlineCheckbox6"}," South - America ",-1),le={class:"question mb-2"},he={class:"temperatures mb-3"},ae={class:"row"},re={class:"col col-checkbox"},de={class:"form-check form-check-inline"},ue=e("label",{class:"form-check-label",for:"inlineCheckbox1"}," Very Hot ",-1),me={class:"col col-checkbox"},_e={class:"form-check form-check-inline"},ke=e("label",{class:"form-check-label",for:"inlineCheckbox"}," Hot ",-1),fe={class:"col col-checkbox"},pe={class:"form-check form-check-inline"},be=e("label",{class:"form-check-label",for:"inlineCheckbox3"}," Warm ",-1),ve={class:"row"},xe={class:"col col-checkbox"},Ce={class:"form-check form-check-inline"},ge=e("label",{class:"form-check-label",for:"inlineCheckbox4"}," Cooler ",-1),ye={class:"col col-checkbox"},We={class:"form-check form-check-inline"},we=e("label",{class:"form-check-label",for:"inlineCheckbox5"}," Cold ",-1),De={class:"col col-checkbox"},Ae={class:"form-check form-check-inline"},Ee=e("label",{class:"form-check-label",for:"inlineCheckbox6"}," Freezing ",-1),Me={class:"col-md-4 response-field"},Se={class:"response overflow-auto"},Ve={key:0},Pe={key:0},Ne=e("h4",null,"The results will display here....",-1),Fe={class:"spinner"},Ue=e("div",{class:"spinner-border text-info",role:"status"},[e("span",{class:"visually-hidden"},"Loading...")],-1),Le=[Ue],qe={key:1},Be=e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"50",height:"50",fill:"currentColor",class:"bi bi-exclamation-lg",viewBox:"0 0 16 16",color:"red"},[e("path",{d:"M7.005 3.1a1 1 0 1 1 1.99 0l-.388 6.35a.61.61 0 0 1-1.214 0L7.005 3.1ZM7 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z"})],-1),Ze=e("h3",null,"Please select a month",-1),ze={class:"spinner"},Je=e("div",{class:"spinner-border text-info",role:"status"},[e("span",{class:"visually-hidden"},"Loading...")],-1),je=[Je],He={key:2},Ie=e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"50",height:"50",fill:"currentColor",class:"bi bi-exclamation-lg",viewBox:"0 0 16 16",color:"red"},[e("path",{d:"M7.005 3.1a1 1 0 1 1 1.99 0l-.388 6.35a.61.61 0 0 1-1.214 0L7.005 3.1ZM7 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z"})],-1),Re=e("h2",null," Please make sure you check at least one continent and one preferred temperature. ",-1),Te={class:"spinner"},Oe=e("div",{class:"spinner-border text-info",role:"status"},[e("span",{class:"visually-hidden"},"Loading...")],-1),Ge=[Oe],Ke={key:3},Qe=e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"50",height:"50",fill:"currentColor",class:"bi bi-exclamation-lg",viewBox:"0 0 16 16",color:"red"},[e("path",{d:"M7.005 3.1a1 1 0 1 1 1.99 0l-.388 6.35a.61.61 0 0 1-1.214 0L7.005 3.1ZM7 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z"})],-1),Xe=e("h2",null," Sorry, no such weather found... Please try a different combination of continent and temperature preference. ",-1),Ye={class:"spinner"},$e=e("div",{class:"spinner-border text-info",role:"status"},[e("span",{class:"visually-hidden"},"Loading...")],-1),et=[$e],tt={key:1},st={class:"mb-1"},ot=["value"],ct={class:"col-xs-6"},nt={class:"col-xs-6"},it={class:"spinner"},lt=e("div",{class:"spinner-border text-info",role:"status"},[e("span",{class:"visually-hidden"},"Loading...")],-1),ht=[lt],at={class:"button"};function rt(o,t,r,m,s,_){const b=M("Sidebar");return l(),h("div",V,[e("div",P,[p(b)]),e("div",N,[e("div",F,[e("h5",U,a(s.question1),1),e("h4",L,a(s.cta1),1),n(e("select",{class:"form-select mt-2 mb-4","onUpdate:modelValue":t[0]||(t[0]=c=>s.selected=c),required:""},[q,(l(!0),h(k,null,f(s.options,c=>(l(),h("option",{value:c.id,key:c.id},a(c.text),9,B))),128))],512),[[E,s.selected]]),e("div",null,[e("h4",Z,a(s.cta2),1)]),e("div",z,[e("div",J,[e("div",j,[e("div",H,[n(e("input",{type:"checkbox",class:"form-check-input",id:"inlineCheckbox1",value:"Africa","onUpdate:modelValue":t[1]||(t[1]=c=>s.checkedContinents=c)},null,512),[[i,s.checkedContinents]]),I])]),e("div",R,[e("div",T,[n(e("input",{type:"checkbox",class:"form-check-input",id:"inlineCheckbox2",value:"Asia","onUpdate:modelValue":t[2]||(t[2]=c=>s.checkedContinents=c)},null,512),[[i,s.checkedContinents]]),O])]),e("div",G,[e("div",K,[n(e("input",{type:"checkbox",class:"form-check-input",id:"inlineCheckbox3",value:"Australia","onUpdate:modelValue":t[3]||(t[3]=c=>s.checkedContinents=c)},null,512),[[i,s.checkedContinents]]),Q])])]),e("div",X,[e("div",Y,[e("div",$,[n(e("input",{type:"checkbox",class:"form-check-input",id:"inlineCheckbox4",value:"Europe","onUpdate:modelValue":t[4]||(t[4]=c=>s.checkedContinents=c)},null,512),[[i,s.checkedContinents]]),ee])]),e("div",te,[e("div",se,[n(e("input",{type:"checkbox",class:"form-check-input",id:"inlineCheckbox5",value:"North America","onUpdate:modelValue":t[5]||(t[5]=c=>s.checkedContinents=c)},null,512),[[i,s.checkedContinents]]),oe])]),e("div",ce,[e("div",ne,[n(e("input",{type:"checkbox",class:"form-check-input",id:"inlineCheckbox6",value:"South America","onUpdate:modelValue":t[6]||(t[6]=c=>s.checkedContinents=c)},null,512),[[i,s.checkedContinents]]),ie])])])]),e("div",null,[e("h4",le,a(s.cta3),1)]),e("div",he,[e("div",ae,[e("div",re,[e("div",de,[n(e("input",{type:"checkbox",class:"form-check-input",id:"inlineCheckbox1",value:"very hot","onUpdate:modelValue":t[7]||(t[7]=c=>s.checkedWeather=c)},null,512),[[i,s.checkedWeather]]),ue])]),e("div",me,[e("div",_e,[n(e("input",{type:"checkbox",class:"form-check-input",id:"inlineCheckbox2",value:"hot","onUpdate:modelValue":t[8]||(t[8]=c=>s.checkedWeather=c)},null,512),[[i,s.checkedWeather]]),ke])]),e("div",fe,[e("div",pe,[n(e("input",{type:"checkbox",class:"form-check-input",id:"inlineCheckbox3",value:"warm","onUpdate:modelValue":t[9]||(t[9]=c=>s.checkedWeather=c)},null,512),[[i,s.checkedWeather]]),be])])]),e("div",ve,[e("div",xe,[e("div",Ce,[n(e("input",{type:"checkbox",class:"form-check-input",id:"inlineCheckbox4",value:"cooler","onUpdate:modelValue":t[10]||(t[10]=c=>s.checkedWeather=c)},null,512),[[i,s.checkedWeather]]),ge])]),e("div",ye,[e("div",We,[n(e("input",{type:"checkbox",class:"form-check-input",id:"inlineCheckbox5",value:"cold","onUpdate:modelValue":t[11]||(t[11]=c=>s.checkedWeather=c)},null,512),[[i,s.checkedWeather]]),we])]),e("div",De,[e("div",Ae,[n(e("input",{type:"checkbox",class:"form-check-input",id:"inlineCheckbox6",value:"freezing","onUpdate:modelValue":t[12]||(t[12]=c=>s.checkedWeather=c)},null,512),[[i,s.checkedWeather]]),Ee])])])]),e("button",{type:"submit",onClick:t[13]||(t[13]=c=>_.load()),class:"btn btn-primary"}," Submit ")])]),e("div",Me,[e("div",Se,[s.chosenWeatherData==0?(l(),h("div",Ve,[!s.noCheck&&!s.notFound&&!s.noMonth?(l(),h("div",Pe,[Ne,n(e("div",Fe,Le,512),[[u,s.loading]])])):d("",!0),s.noMonth?(l(),h("div",qe,[Be,Ze,n(e("div",ze,je,512),[[u,s.loading]])])):d("",!0),s.noCheck&&!s.noMonth?(l(),h("div",He,[Ie,Re,n(e("div",Te,Ge,512),[[u,s.loading]])])):d("",!0),s.notFound&&!s.noMonth?(l(),h("div",Ke,[Qe,Xe,n(e("div",Ye,et,512),[[u,s.loading]])])):d("",!0)])):d("",!0),s.chosenWeatherData!=0?(l(),h("div",tt,[e("h1",st,[e("strong",null,a(s.month)+":",1)]),(l(!0),h(k,null,f(s.chosenWeatherData,c=>(l(),h("dl",{class:"row",value:c.name,key:c.name},[e("dt",ct,[e("strong",null,a(c.name),1),e("small",null," ("+a(c.continent)+")",1)]),e("dd",nt,[e("strong",null,a(c.temp)+" C°",1)])],8,ot))),128)),n(e("div",it,ht,512),[[u,s.loading]])])):d("",!0)]),e("div",at,[e("button",{type:"button",class:"btn btn-outline-primary",onClick:t[14]||(t[14]=c=>_.clear())}," Clear ")])])])}const dt=A(S,[["render",rt]]),_t={__name:"TravelLater",setup(o){return(t,r)=>(l(),h("main",null,[p(dt)]))}};export{_t as default};