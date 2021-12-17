"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2215],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),u=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},m=function(e){var t=u(e.components);return a.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,f=p["".concat(i,".").concat(d)]||p[d]||c[d]||l;return n?a.createElement(f,s(s({ref:t},m),{},{components:n})):a.createElement(f,s({ref:t},m))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,s=new Array(l);s[0]=p;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var u=2;u<l;u++)s[u]=n[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},4595:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return i},metadata:function(){return u},toc:function(){return m},default:function(){return p}});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),s=["components"],o={},i="AutoML - NLP",u={unversionedId:"Examples/AutoML-NLP",id:"Examples/AutoML-NLP",isDocsHomePage:!1,title:"AutoML - NLP",description:"Requirements",source:"@site/docs/Examples/AutoML-NLP.md",sourceDirName:"Examples",slug:"/Examples/AutoML-NLP",permalink:"/FLAML/docs/Examples/AutoML-NLP",editUrl:"https://github.com/microsoft/FLAML/edit/master/website/docs/Examples/AutoML-NLP.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"AutoML - Classification",permalink:"/FLAML/docs/Examples/AutoML-Classification"},next:{title:"AutoML - Rank",permalink:"/FLAML/docs/Examples/AutoML-Rank"}},m=[{value:"Requirements",id:"requirements",children:[],level:3},{value:"A simple sequence classification example",id:"a-simple-sequence-classification-example",children:[{value:"Sample output",id:"sample-output",children:[],level:4}],level:3},{value:"A simple sequence regression example",id:"a-simple-sequence-regression-example",children:[],level:3}],c={toc:m};function p(e){var t=e.components,n=(0,r.Z)(e,s);return(0,l.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"automl---nlp"},"AutoML - NLP"),(0,l.kt)("h3",{id:"requirements"},"Requirements"),(0,l.kt)("p",null,"This example requires GPU. Install the ","[nlp]"," option:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'pip install "flaml[nlp]"\n')),(0,l.kt)("h3",{id:"a-simple-sequence-classification-example"},"A simple sequence classification example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'from flaml import AutoML\nfrom datasets import load_dataset\n\ntrain_dataset = load_dataset("glue", "mrpc", split="train").to_pandas()\ndev_dataset = load_dataset("glue", "mrpc", split="validation").to_pandas()\ntest_dataset = load_dataset("glue", "mrpc", split="test").to_pandas()\ncustom_sent_keys = ["sentence1", "sentence2"]\nlabel_key = "label"\nX_train, y_train = train_dataset[custom_sent_keys], train_dataset[label_key]\nX_val, y_val = dev_dataset[custom_sent_keys], dev_dataset[label_key]\nX_test = test_dataset[custom_sent_keys]\n\nautoml = AutoML()\nautoml_settings = {\n    "time_budget": 100,\n    "task": "seq-classification",\n    "custom_hpo_args": {"output_dir": "data/output/"},\n    "gpu_per_trial": 1,  # set to 0 if no GPU is available\n}\nautoml.fit(X_train=X_train, y_train=y_train, X_val=X_val, y_val=y_val, **automl_settings)\nautoml.predict(X_test)\n')),(0,l.kt)("h4",{id:"sample-output"},"Sample output"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"[flaml.automl: 12-06 08:21:39] {1943} INFO - task = seq-classification\n[flaml.automl: 12-06 08:21:39] {1945} INFO - Data split method: stratified\n[flaml.automl: 12-06 08:21:39] {1949} INFO - Evaluation method: holdout\n[flaml.automl: 12-06 08:21:39] {2019} INFO - Minimizing error metric: 1-accuracy\n[flaml.automl: 12-06 08:21:39] {2071} INFO - List of ML learners in AutoML Run: ['transformer']\n[flaml.automl: 12-06 08:21:39] {2311} INFO - iteration 0, current learner transformer\n{'data/output/train_2021-12-06_08-21-53/train_8947b1b2_1_n=1e-06,s=9223372036854775807,e=1e-05,s=-1,s=0.45765,e=32,d=42,o=0.0,y=0.0_2021-12-06_08-21-53/checkpoint-53': 53}\n[flaml.automl: 12-06 08:22:56] {2424} INFO - Estimated sufficient time budget=766860s. Estimated necessary time budget=767s.\n[flaml.automl: 12-06 08:22:56] {2499} INFO -  at 76.7s, estimator transformer's best error=0.1740,      best estimator transformer's best error=0.1740\n[flaml.automl: 12-06 08:22:56] {2606} INFO - selected model: <flaml.nlp.huggingface.trainer.TrainerForAuto object at 0x7f49ea8414f0>\n[flaml.automl: 12-06 08:22:56] {2100} INFO - fit succeeded\n[flaml.automl: 12-06 08:22:56] {2101} INFO - Time taken to find the best model: 76.69802761077881\n[flaml.automl: 12-06 08:22:56] {2112} WARNING - Time taken to find the best model is 77% of the provided time budget and not all estimators' hyperparameter search converged. Consider increasing the time budget.\n")),(0,l.kt)("h3",{id:"a-simple-sequence-regression-example"},"A simple sequence regression example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'from flaml import AutoML\nfrom datasets import load_dataset\n\ntrain_dataset = (\n    load_dataset("glue", "stsb", split="train[:1%]").to_pandas().iloc[0:4]\n)\ndev_dataset = (\n    load_dataset("glue", "stsb", split="train[1%:2%]").to_pandas().iloc[0:4]\n)\ncustom_sent_keys = ["sentence1", "sentence2"]\nlabel_key = "label"\nX_train = train_dataset[custom_sent_keys]\ny_train = train_dataset[label_key]\nX_val = dev_dataset[custom_sent_keys]\ny_val = dev_dataset[label_key]\n\nautoml = AutoML()\nautoml_settings = {\n    "gpu_per_trial": 0,\n    "time_budget": 20,\n    "task": "seq-regression",\n    "metric": "rmse",\n}\nautoml_settings["custom_hpo_args"] = {\n    "model_path": "google/electra-small-discriminator",\n    "output_dir": "data/output/",\n    "ckpt_per_epoch": 5,\n    "fp16": False,\n}\nautoml.fit(\n    X_train=X_train, y_train=y_train, X_val=X_val, y_val=y_val, **automl_settings\n)\n')))}p.isMDXComponent=!0}}]);