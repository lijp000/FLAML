"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6493],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=s(n),f=o,d=m["".concat(c,".").concat(f)]||m[f]||u[f]||a;return n?r.createElement(d,i(i({ref:t},p),{},{components:n})):r.createElement(d,i({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3198:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return p},default:function(){return m}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],l={sidebar_label:"flow2",title:"searcher.flow2"},c=void 0,s={unversionedId:"reference/searcher/flow2",id:"reference/searcher/flow2",isDocsHomePage:!1,title:"searcher.flow2",description:"FLOW2 Objects",source:"@site/docs/reference/searcher/flow2.md",sourceDirName:"reference/searcher",slug:"/reference/searcher/flow2",permalink:"/FLAML/docs/reference/searcher/flow2",editUrl:"https://github.com/microsoft/FLAML/edit/master/website/docs/reference/searcher/flow2.md",tags:[],version:"current",frontMatter:{sidebar_label:"flow2",title:"searcher.flow2"},sidebar:"referenceSideBar",previous:{title:"cfo_cat",permalink:"/FLAML/docs/reference/searcher/cfo_cat"},next:{title:"online_searcher",permalink:"/FLAML/docs/reference/searcher/online_searcher"}},p=[{value:"FLOW2 Objects",id:"flow2-objects",children:[{value:"__init__",id:"__init__",children:[],level:4},{value:"complete_config",id:"complete_config",children:[],level:4},{value:"normalize",id:"normalize",children:[],level:4},{value:"denormalize",id:"denormalize",children:[],level:4},{value:"on_trial_complete",id:"on_trial_complete",children:[],level:4},{value:"on_trial_result",id:"on_trial_result",children:[],level:4},{value:"suggest",id:"suggest",children:[],level:4},{value:"can_suggest",id:"can_suggest",children:[],level:4},{value:"config_signature",id:"config_signature",children:[],level:4},{value:"converged",id:"converged",children:[],level:4},{value:"reach",id:"reach",children:[],level:4}],level:2}],u={toc:p};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"flow2-objects"},"FLOW2 Objects"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"class FLOW2(Searcher)\n")),(0,a.kt)("p",null,"Local search algorithm FLOW2, with adaptive step size."),(0,a.kt)("h4",{id:"__init__"},"_","_","init","_","_"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'def __init__(init_config: dict, metric: Optional[str] = None, mode: Optional[str] = None, space: Optional[dict] = None, resource_attr: Optional[str] = None, min_resource: Optional[float] = None, max_resource: Optional[float] = None, resource_multiple_factor: Optional[float] = 4, cost_attr: Optional[str] = "time_total_s", seed: Optional[int] = 20)\n')),(0,a.kt)("p",null,"Constructor."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"init_config")," - a dictionary of a partial or full initial config,\ne.g., from a subset of controlled dimensions\nto the initial low-cost values.\nE.g., {'epochs': 1}."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"metric")," - A string of the metric name to optimize for."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"mode")," - A string in ","['min', 'max']"," to specify the objective as\nminimization or maximization."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"cat_hp_cost")," - A dictionary from a subset of categorical dimensions\nto the relative cost of each choice.\nE.g., ",(0,a.kt)("inlineCode",{parentName:"li"},"{'tree_method': [1, 1, 2]}"),". I.e., the relative cost\nof the three choices of 'tree_method' is 1, 1 and 2 respectively."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"space")," - A dictionary to specify the search space."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"resource_attr")," - A string to specify the resource dimension and the best\nperformance is assumed to be at the max_resource."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"min_resource")," - A float of the minimal resource to use for the resource_attr."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"max_resource")," - A float of the maximal resource to use for the resource_attr."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"resource_multiple_factor")," - A float of the multiplicative factor\nused for increasing resource."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"cost_attr")," - A string of the attribute used for cost."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"seed")," - An integer of the random seed.")),(0,a.kt)("h4",{id:"complete_config"},"complete","_","config"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"def complete_config(partial_config: Dict, lower: Optional[Dict] = None, upper: Optional[Dict] = None) -> Tuple[Dict, Dict]\n")),(0,a.kt)("p",null,"Generate a complete config from the partial config input."),(0,a.kt)("p",null,"Add minimal resource to config if available."),(0,a.kt)("h4",{id:"normalize"},"normalize"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"def normalize(config, recursive=False) -> Dict\n")),(0,a.kt)("p",null,"normalize each dimension in config to ","[0,1]","."),(0,a.kt)("h4",{id:"denormalize"},"denormalize"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"def denormalize(config)\n")),(0,a.kt)("p",null,"denormalize each dimension in config from ","[0,1]","."),(0,a.kt)("h4",{id:"on_trial_complete"},"on","_","trial","_","complete"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"def on_trial_complete(trial_id: str, result: Optional[Dict] = None, error: bool = False)\n")),(0,a.kt)("p",null,"Compare with incumbent.\nIf better, move, reset num_complete and num_proposed.\nIf not better and num_complete >= 2*dim, num_allowed += 2."),(0,a.kt)("h4",{id:"on_trial_result"},"on","_","trial","_","result"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"def on_trial_result(trial_id: str, result: Dict)\n")),(0,a.kt)("p",null,"Early update of incumbent."),(0,a.kt)("h4",{id:"suggest"},"suggest"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"def suggest(trial_id: str) -> Optional[Dict]\n")),(0,a.kt)("p",null,"Suggest a new config, one of the following cases:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"same incumbent, increase resource."),(0,a.kt)("li",{parentName:"ol"},"same resource, move from the incumbent to a random direction."),(0,a.kt)("li",{parentName:"ol"},"same resource, move from the incumbent to the opposite direction.")),(0,a.kt)("h4",{id:"can_suggest"},"can","_","suggest"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"@property\ndef can_suggest() -> bool\n")),(0,a.kt)("p",null,"Can't suggest if 2*dim configs have been proposed for the incumbent\nwhile fewer are completed."),(0,a.kt)("h4",{id:"config_signature"},"config","_","signature"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"def config_signature(config, space: Dict = None) -> tuple\n")),(0,a.kt)("p",null,"Return the signature tuple of a config."),(0,a.kt)("h4",{id:"converged"},"converged"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"@property\ndef converged() -> bool\n")),(0,a.kt)("p",null,"Whether the local search has converged."),(0,a.kt)("h4",{id:"reach"},"reach"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"def reach(other: Searcher) -> bool\n")),(0,a.kt)("p",null,"whether the incumbent can reach the incumbent of other."))}m.isMDXComponent=!0}}]);