#Document Object Model (DOM) Level 3 Events Specification  
###W3C Working Draft 06 September 2012  
该版本  <http://www.w3.org/TR/2012/WD-DOM-Level-3-Events-20120906/>  
上个稳定版本 <http://www.w3.org/TR/DOM-Level-3-Events/>  
上个版本 <http://www.w3.org/TR/2012/WD-DOM-Level-3-Events-20120614/>  
草案 <http://dev.w3.org/2006/webapi/DOM-Level-3-Events/html/DOM3-Events.html>  
公共注释  <www-dom@w3.org>（[存档](http://lists.w3.org/Archives/Public/www-dom/)）  

编辑：  
Travis Leithead, Microsoft  
Jacob Rossi, Microsoft  
Doug Schepers, W3C (until May 2011)  
Björn Höhrmann, Invited Expert (until December 2007)  
Philippe Le Hégaret, W3C (until November 2003)  
Tom Pixley, Netscape Communications Corporation (until July 2002)  
Copyright © 2012 W3C® (MIT, ERCIM, Keio), All Rights Reserved. W3C liability, trademark and document use rules apply.    

##摘要  
该规范定义了DOM 3级事件，这是一个允许注册事件处理器，通过树结构描述事件流，给每个事件提供基本的上下文环境，并且和平台、语言无关的事件系统。它建立在[DOM 2级事件](http://www.w3.org/TR/DOM-Level-3-Events/#references-DOM2Events)的基础之上。  

##规范状态  
（尚未翻译）  

##目录  
1. DOM事件  
2. 词汇表  
3. DOM事件结构  
4. 基本事件接口  
5. 事件模块  
6. 键盘事件和键值  
附录A：初始化新事件接口  
附录B：遗留属性：keyCode，charCode和which  
附录C：扩展事件  
附录D：安全  
附录E：修改列表  
附录F：致谢  
附录G：参考  

##[1. DOM事件](#dom-events)  
###[1.1 介绍](#dom-events-overview)  
DOM事件在设计上有两个大的目标。其一，设计一个允许注册事件监听器，通过树结构描述事件流的事件系统。此外，该规范为用户界面控制提供了标准的事件模块，比如，为这些事件定义了上下文信息。
其二，为当前浏览器的事件系统定义了一个公共子集。其目的是形成现有脚本和内容的互操作能力。并不能期望它能够向后兼容，但是，该规范会尽可能向后兼容。  
###[1.2 一致性](#dom-events-conformance)  
**这部分是规范的。（待确认）**  
该规范中，关键字 必须（MUST，REQUIRED，SHALL），禁止（MUST NOT，SHALL NOT），推荐（SHOULD，RECOMMENDED），不推荐（SHOULD NOT），可选（MAY，OPTIONAL）按照[RFC 2119](http://www.ietf.org/rfc/rfc2119.txt) 【[RFC2119](#ref-rfc2119)】来解释。  



