(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{428:function(e,t,n){"use strict";var r=n(10),a=n(21),i=n(19),s=function(){function e(e){this._config=e,this._buffer=[]}return e.prototype.enqueue=function(e){this._buffer.push(e)},e.prototype.count=function(){return this._buffer.length},e.prototype.clear=function(){this._buffer.length=0},e.prototype.getItems=function(){return this._buffer.slice(0)},e.prototype.batchPayloads=function(e){return e&&e.length>0?this._config.emitLineDelimitedJson()?e.join("\n"):"["+e.join(",")+"]":null},e.prototype.markAsSent=function(e){this.clear()},e.prototype.clearSent=function(e){},e}(),o=function(){function e(t,n){this._bufferFullMessageSent=!1,this._logger=t,this._config=n;var r=this.getBuffer(e.BUFFER_KEY),a=this.getBuffer(e.SENT_BUFFER_KEY);this._buffer=r.concat(a),this._buffer.length>e.MAX_BUFFER_SIZE&&(this._buffer.length=e.MAX_BUFFER_SIZE),this.setBuffer(e.SENT_BUFFER_KEY,[]),this.setBuffer(e.BUFFER_KEY,this._buffer)}return e.prototype.enqueue=function(t){this._buffer.length>=e.MAX_BUFFER_SIZE?this._bufferFullMessageSent||(this._logger.throwInternal(i.a.WARNING,i.b.SessionStorageBufferFull,"Maximum buffer size reached: "+this._buffer.length,!0),this._bufferFullMessageSent=!0):(this._buffer.push(t),this.setBuffer(e.BUFFER_KEY,this._buffer))},e.prototype.count=function(){return this._buffer.length},e.prototype.clear=function(){this._buffer.length=0,this.setBuffer(e.BUFFER_KEY,[]),this.setBuffer(e.SENT_BUFFER_KEY,[]),this._bufferFullMessageSent=!1},e.prototype.getItems=function(){return this._buffer.slice(0)},e.prototype.batchPayloads=function(e){return e&&e.length>0?this._config.emitLineDelimitedJson()?e.join("\n"):"["+e.join(",")+"]":null},e.prototype.markAsSent=function(t){this._buffer=this.removePayloadsFromBuffer(t,this._buffer),this.setBuffer(e.BUFFER_KEY,this._buffer);var n=this.getBuffer(e.SENT_BUFFER_KEY);n instanceof Array&&t instanceof Array&&((n=n.concat(t)).length>e.MAX_BUFFER_SIZE&&(this._logger.throwInternal(i.a.CRITICAL,i.b.SessionStorageBufferFull,"Sent buffer reached its maximum size: "+n.length,!0),n.length=e.MAX_BUFFER_SIZE),this.setBuffer(e.SENT_BUFFER_KEY,n))},e.prototype.clearSent=function(t){var n=this.getBuffer(e.SENT_BUFFER_KEY);n=this.removePayloadsFromBuffer(t,n),this.setBuffer(e.SENT_BUFFER_KEY,n)},e.prototype.removePayloadsFromBuffer=function(e,t){var n=[];for(var r in t){var a=!1;for(var i in e)if(e[i]===t[r]){a=!0;break}a||n.push(t[r])}return n},e.prototype.getBuffer=function(e){var t=e;try{t=this._config.namePrefix&&this._config.namePrefix()?this._config.namePrefix()+"_"+t:t;var n=a.e.getSessionStorage(this._logger,t);if(n){var r=JSON.parse(n);if(r)return r}}catch(e){this._logger.throwInternal(i.a.CRITICAL,i.b.FailedToRestoreStorageBuffer," storage key: "+t+", "+a.e.getExceptionName(e),{exception:a.e.dump(e)})}return[]},e.prototype.setBuffer=function(e,t){var n=e;try{n=this._config.namePrefix&&this._config.namePrefix()?this._config.namePrefix()+"_"+n:n;var r=JSON.stringify(t);a.e.setSessionStorage(this._logger,n,r)}catch(e){a.e.setSessionStorage(this._logger,n,JSON.stringify([])),this._logger.throwInternal(i.a.WARNING,i.b.FailedToSetStorageBuffer," storage key: "+n+", "+a.e.getExceptionName(e)+". Buffer cleared",{exception:a.e.dump(e)})}},e.BUFFER_KEY="AI_buffer",e.SENT_BUFFER_KEY="AI_sentBuffer",e.MAX_BUFFER_SIZE=2e3,e}(),l=n(199),u=n(62),c=n(152),f=n(198),p=n(193),d=n(189),h=n(195),g=n(194),_=n(190),m=n(197),y=n(196),b=n(11),v=function(){function e(){}return e.extractPropsAndMeasurements=function(e,t,n){if(!b.a.isNullOrUndefined(e))for(var r in e)if(e.hasOwnProperty(r)){var a=e[r];"number"==typeof a?n[r]=a:t[r]="string"==typeof a?a:JSON.stringify(a)}},e.createEnvelope=function(t,n,r,a){var i=new l.a(t,a,n);r[u.e]&&(i.sampleRate=r[u.e]),i.iKey=r.iKey;var s=r.iKey.replace(/-/g,"");return i.name=i.name.replace("{0}",s),e.extractPartAExtensions(r,i),r.tags||(r.tags=[]),i},e.extractPartAExtensions=function(t,n){if(n.tags||(n.tags={}),t.ext||(t.ext={}),t.tags||(t.tags=[]),t.ext.user){t.ext.user.authId&&(n.tags[c.a.userAuthUserId]=t.ext.user.authId);var a=t.ext.user.id||t.ext.user.localId;a&&(n.tags[c.a.userId]=a)}if(t.ext.app&&t.ext.app.sesId&&(n.tags[c.a.sessionId]=t.ext.app.sesId),t.ext.device&&((t.ext.device.id||t.ext.device.localId)&&(n.tags[c.a.deviceId]=t.ext.device.id||t.ext.device.localId),t.ext.device.deviceClass&&(n.tags[c.a.deviceType]=t.ext.device.deviceClass),t.ext.device.ip&&(n.tags[c.a.deviceIp]=t.ext.device.ip)),t.ext.web){var i=t.ext.web;i.browserLang&&(n.tags[c.a.deviceLanguage]=i.browserLang),i.browserVer&&(n.tags[c.a.deviceBrowserVersion]=i.browserVer),i.browser&&(n.tags[c.a.deviceBrowser]=i.browser),n.data=n.data||{},n.data.baseData=n.data.baseData||{},n.data.baseData.properties=n.data.baseData.properties||{},i.domain&&(n.data.baseData.properties.domain=i.domain),i.isManual&&(n.data.baseData.properties.isManual=i.isManual.toString()),i.screenRes&&(n.data.baseData.properties.screenRes=i.screenRes),i.userConsent&&(n.data.baseData.properties.userConsent=i.userConsent.toString())}t.ext.device&&t.ext.device.model&&(n.tags[c.a.deviceModel]=t.ext.device.model),t.ext.os&&t.ext.os.name&&(n.tags[c.a.deviceOS]=t.ext.os.name),t.ext.device&&t.ext.device.deviceType&&(n.tags[c.a.deviceType]=t.ext.device.deviceType),t.ext.trace&&(t.ext.trace.parentID&&(n.tags[c.a.operationParentId]=t.ext.trace.parentID),t.ext.trace.name&&(n.tags[c.a.operationName]=t.ext.trace.name),t.ext.trace.traceID&&(n.tags[c.a.operationId]=t.ext.trace.traceID));for(var s={},o=function(e){var n=t.tags[e];b.a.arrForEach(b.a.objKeys(n),(function(e){s[e]=n[e]})),t.tags.splice(e,1)},l=t.tags.length-1;l>=0;l--)o(l);for(var u in t.tags)s[u]=t.tags[u];n.tags=r.a({},n.tags,s),n.tags[c.a.internalSdkVersion]||(n.tags[c.a.internalSdkVersion]="javascript:"+e.Version)},e.Version="2.3.1",e}(),I=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return r.b(t,e),t.prototype.Create=function(e,t){this._logger=e,b.a.isNullOrUndefined(t.baseData)&&this._logger.throwInternal(i.a.CRITICAL,i.b.TelemetryEnvelopeInvalid,"telemetryItem.baseData cannot be null.");var n=t.baseData.measurements||{},r=t.baseData.properties||{};v.extractPropsAndMeasurements(t.data,r,n);var a=t.baseData;if(b.a.isNullOrUndefined(a))return e.warnToConsole("Invalid input for dependency data"),null;var s=a.id,o=a.target,l=a.name,c=a.duration,d=a.success,h=a.responseCode,g=a.type,_=a.correlationContext,m=a.properties&&a.properties[u.c]?a.properties[u.c]:"GET",y=new f.a(e,s,o,l,c,d,h,m,g,_,r,n),I=new p.a(f.a.dataType,y);return v.createEnvelope(e,f.a.envelopeType,t,I)},t.DependencyEnvelopeCreator=new t,t}(v),S=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return r.b(t,e),t.prototype.Create=function(e,t){this._logger=e,b.a.isNullOrUndefined(t.baseData)&&this._logger.throwInternal(i.a.CRITICAL,i.b.TelemetryEnvelopeInvalid,"telemetryItem.baseData cannot be null.");var n={},r={};t.baseType!==d.a.dataType&&(n.baseTypeSource=t.baseType),t.baseType===d.a.dataType?(n=t.baseData.properties||{},r=t.baseData.measurements||{}):t.baseData&&v.extractPropsAndMeasurements(t.baseData,n,r),v.extractPropsAndMeasurements(t.data,n,r);var a=t.baseData.name,s=new d.a(e,a,n,r),o=new p.a(d.a.dataType,s);return v.createEnvelope(e,d.a.envelopeType,t,o)},t.EventEnvelopeCreator=new t,t}(v),E=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return r.b(t,e),t.prototype.Create=function(e,t){this._logger=e,b.a.isNullOrUndefined(t.baseData)&&this._logger.throwInternal(i.a.CRITICAL,i.b.TelemetryEnvelopeInvalid,"telemetryItem.baseData cannot be null.");var n=t.baseData,r=h.a.CreateFromInterface(e,n),a=new p.a(h.a.dataType,r);return v.createEnvelope(e,h.a.envelopeType,t,a)},t.ExceptionEnvelopeCreator=new t,t}(v),w=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return r.b(t,e),t.prototype.Create=function(e,t){this._logger=e,b.a.isNullOrUndefined(t.baseData)&&this._logger.throwInternal(i.a.CRITICAL,i.b.TelemetryEnvelopeInvalid,"telemetryItem.baseData cannot be null.");var n=t.baseData.properties||{},r=t.baseData.measurements||{};v.extractPropsAndMeasurements(t.data,n,r);var a=t.baseData.name,s=t.baseData.average,o=t.baseData.sampleCount,l=t.baseData.min,u=t.baseData.max,c=new g.a(e,a,s,o,l,u,n,r),f=new p.a(g.a.dataType,c);return v.createEnvelope(e,g.a.envelopeType,t,f)},t.MetricEnvelopeCreator=new t,t}(v),T=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return r.b(t,e),t.prototype.Create=function(e,t){var n;this._logger=e,b.a.isNullOrUndefined(t.baseData)&&this._logger.throwInternal(i.a.CRITICAL,i.b.TelemetryEnvelopeInvalid,"telemetryItem.baseData cannot be null."),b.a.isNullOrUndefined(t.baseData)||b.a.isNullOrUndefined(t.baseData.properties)||b.a.isNullOrUndefined(t.baseData.properties.duration)?b.a.isNullOrUndefined(t.data)||b.a.isNullOrUndefined(t.data.duration)||(n=t.data.duration,delete t.data.duration):(n=t.baseData.properties.duration,delete t.baseData.properties.duration);var r,a=t.baseData;t.ext&&t.ext.trace&&t.ext.trace.traceID&&(r=t.ext.trace.traceID);var s=a.id||r,o=a.name,l=a.uri,u=a.properties||{},c=a.measurements||{};if(b.a.isNullOrUndefined(a.refUri)||(u.refUri=a.refUri),b.a.isNullOrUndefined(a.pageType)||(u.pageType=a.pageType),b.a.isNullOrUndefined(a.isLoggedIn)||(u.isLoggedIn=a.isLoggedIn.toString()),!b.a.isNullOrUndefined(a.properties)){var f=a.properties;for(var d in f)f.hasOwnProperty(d)&&(u[d]=f[d])}v.extractPropsAndMeasurements(t.data,u,c);var h=new _.a(e,o,l,n,u,c,s),g=new p.a(_.a.dataType,h);return v.createEnvelope(e,_.a.envelopeType,t,g)},t.PageViewEnvelopeCreator=new t,t}(v),C=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return r.b(t,e),t.prototype.Create=function(e,t){this._logger=e,b.a.isNullOrUndefined(t.baseData)&&this._logger.throwInternal(i.a.CRITICAL,i.b.TelemetryEnvelopeInvalid,"telemetryItem.baseData cannot be null.");var n=t.baseData,r=n.name,a=n.uri||n.url,s=n.properties||{},o=n.measurements||{};v.extractPropsAndMeasurements(t.data,s,o);var l=new m.a(e,r,a,void 0,s,o,n),u=new p.a(m.a.dataType,l);return v.createEnvelope(e,m.a.envelopeType,t,u)},t.PageViewPerformanceEnvelopeCreator=new t,t}(v),x=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return r.b(t,e),t.prototype.Create=function(e,t){this._logger=e,b.a.isNullOrUndefined(t.baseData)&&this._logger.throwInternal(i.a.CRITICAL,i.b.TelemetryEnvelopeInvalid,"telemetryItem.baseData cannot be null.");var n=t.baseData.message,r=t.baseData.severityLevel,a=t.baseData.properties||{},s=t.baseData.measurements||{};v.extractPropsAndMeasurements(t.data,a,s);var o=new y.a(e,n,r,a,s),l=new p.a(y.a.dataType,o);return v.createEnvelope(e,y.a.envelopeType,t,l)},t.TraceEnvelopeCreator=new t,t}(v),R=n(6),A=function(){function e(e){this._logger=e}return e.prototype.serialize=function(e){var t=this._serializeObject(e,"root");return JSON.stringify(t)},e.prototype._serializeObject=function(e,t){var n={};if(!e)return this._logger.throwInternal(i.a.CRITICAL,i.b.CannotSerializeObject,"cannot serialize object because it is null or undefined",{name:t},!0),n;if(e.__aiCircularRefCheck)return this._logger.throwInternal(i.a.WARNING,i.b.CircularReferenceDetected,"Circular reference detected while serializing object",{name:t},!0),n;if(!e.aiDataContract){if("measurements"===t)n=this._serializeStringMap(e,"number",t);else if("properties"===t)n=this._serializeStringMap(e,"string",t);else if("tags"===t)n=this._serializeStringMap(e,"string",t);else if(a.e.isArray(e))n=this._serializeArray(e,t);else{this._logger.throwInternal(i.a.WARNING,i.b.CannotSerializeObjectNonSerializable,"Attempting to serialize an object which does not implement ISerializable",{name:t},!0);try{JSON.stringify(e),n=e}catch(e){this._logger.throwInternal(i.a.CRITICAL,i.b.CannotSerializeObject,e&&"function"==typeof e.toString?e.toString():"Error serializing object",null,!0)}}return n}for(var r in e.__aiCircularRefCheck=!0,e.aiDataContract){var s=e.aiDataContract[r],o="function"==typeof s?s()&R.b.Required:s&R.b.Required,l="function"==typeof s?s()&R.b.Hidden:s&R.b.Hidden,u=s&R.b.Array,c=void 0!==e[r],f="object"==typeof e[r]&&null!==e[r];if(!o||c||u){if(!l){var p=void 0;void 0!==(p=f?u?this._serializeArray(e[r],r):this._serializeObject(e[r],r):e[r])&&(n[r]=p)}}else this._logger.throwInternal(i.a.CRITICAL,i.b.MissingRequiredFieldSpecification,"Missing required field specification. The field is required but not present on source",{field:r,name:t})}return delete e.__aiCircularRefCheck,n},e.prototype._serializeArray=function(e,t){var n;if(e)if(a.e.isArray(e)){n=[];for(var r=0;r<e.length;r++){var s=e[r],o=this._serializeObject(s,t+"["+r+"]");n.push(o)}}else this._logger.throwInternal(i.a.CRITICAL,i.b.ItemNotInArray,"This field was specified as an array in the contract but the item is not an array.\r\n",{name:t},!0);return n},e.prototype._serializeStringMap=function(e,t,n){var r;if(e)for(var a in r={},e){var s=e[a];if("string"===t)void 0===s?r[a]="undefined":null===s?r[a]="null":s.toString?r[a]=s.toString():r[a]="invalid field: toString() is not defined.";else if("number"===t)if(void 0===s)r[a]="undefined";else if(null===s)r[a]="null";else{var o=parseFloat(s);isNaN(o)?r[a]="NaN":r[a]=o}else r[a]="invalid field: "+n+" is of unknown type.",this._logger.throwInternal(i.a.CRITICAL,r[a],null,!0)}return r},e}(),D=n(26),N=n(192),F=n(113),B=function(){function e(){this._onlineStatus=!0;try{"undefined"==typeof window?this.isListening=!1:window&&window.addEventListener?(window.addEventListener("online",this._setOnline.bind(this),!1),window.addEventListener("offline",this._setOffline.bind(this),!1),this.isListening=!0):document&&document.body?(document.body.ononline=this._setOnline.bind(this),document.body.onoffline=this._setOffline.bind(this),this.isListening=!0):document?(document.ononline=this._setOnline.bind(this),document.onoffline=this._setOffline.bind(this),this.isListening=!0):this.isListening=!1}catch(e){this.isListening=!1}}return e.prototype.isOnline=function(){return this.isListening?this._onlineStatus:!(navigator&&!b.a.isNullOrUndefined(navigator.onLine))||navigator.onLine},e.prototype.isOffline=function(){return!this.isOnline()},e.prototype._setOnline=function(){this._onlineStatus=!0},e.prototype._setOffline=function(){this._onlineStatus=!1},e.Offline=new e,e}().Offline,O=function(){function e(){}return e.prototype.getHashCodeScore=function(t){return 100*(this.getHashCode(t)/e.INT_MAX_VALUE)},e.prototype.getHashCode=function(t){if(""===t)return 0;for(;t.length<e.MIN_INPUT_LENGTH;)t=t.concat(t);for(var n=5381,r=0;r<t.length;++r)n=(n<<5)+n+t.charCodeAt(r),n&=n;return Math.abs(n)},e.INT_MAX_VALUE=2147483647,e.MIN_INPUT_LENGTH=8,e}(),M=n(114),U=function(){function e(){this.hashCodeGeneragor=new O,this.keys=new M.a}return e.prototype.getSamplingScore=function(e){return e.tags&&e.tags[this.keys.userId]?this.hashCodeGeneragor.getHashCodeScore(e.tags[this.keys.userId]):e.ext&&e.ext.user&&e.ext.user.id?this.hashCodeGeneragor.getHashCodeScore(e.ext.user.id):e.tags&&e.tags[this.keys.operationId]?this.hashCodeGeneragor.getHashCodeScore(e.tags[this.keys.operationId]):e.ext&&e.ext.telemetryTrace&&e.ext.telemetryTrace.traceID?this.hashCodeGeneragor.getHashCodeScore(e.ext.telemetryTrace.traceID):100*Math.random()},e}(),L=n(159),P=function(){function e(e,t){this.INT_MAX_VALUE=2147483647,this._logger=b.a.isNullOrUndefined(t)?new L.a:t,(e>100||e<0)&&(this._logger.throwInternal(i.a.WARNING,i.b.SampleRateOutOfRange,"Sampling rate is out of range (0..100). Sampling will be disabled, you may be sending too much data which may affect your AI service level.",{samplingRate:e},!0),this.sampleRate=100),this.sampleRate=e,this.samplingScoreGenerator=new U}return e.prototype.isSampledIn=function(e){var t=this.sampleRate;return null==t||t>=100||(e.baseType===g.a.dataType||this.samplingScoreGenerator.getSamplingScore(e)<t)},e}();n.d(t,"a",(function(){return z}));var z=function(){function e(){this.priority=1001,this.identifier=D.a,this._XMLHttpRequestSupported=!1}return e.constructEnvelope=function(e,t,n){var a;switch((a=t===e.iKey||b.a.isNullOrUndefined(t)?e:r.a({},e,{iKey:t})).baseType){case d.a.dataType:return S.EventEnvelopeCreator.Create(n,a);case y.a.dataType:return x.TraceEnvelopeCreator.Create(n,a);case _.a.dataType:return T.PageViewEnvelopeCreator.Create(n,a);case m.a.dataType:return C.PageViewPerformanceEnvelopeCreator.Create(n,a);case h.a.dataType:return E.ExceptionEnvelopeCreator.Create(n,a);case g.a.dataType:return w.MetricEnvelopeCreator.Create(n,a);case f.a.dataType:return I.DependencyEnvelopeCreator.Create(n,a);default:return S.EventEnvelopeCreator.Create(n,a)}},e._getDefaultAppInsightsChannelConfig=function(){return{endpointUrl:function(){return"https://dc.services.visualstudio.com/v2/track"},emitLineDelimitedJson:function(){return!1},maxBatchInterval:function(){return 15e3},maxBatchSizeInBytes:function(){return 102400},disableTelemetry:function(){return!1},enableSessionStorageBuffer:function(){return!0},isRetryDisabled:function(){return!1},isBeaconApiDisabled:function(){return!0},onunloadDisableBeacon:function(){return!1},instrumentationKey:function(){},namePrefix:function(){},samplingPercentage:function(){return 100}}},e._getEmptyAppInsightsChannelConfig=function(){return{endpointUrl:void 0,emitLineDelimitedJson:void 0,maxBatchInterval:void 0,maxBatchSizeInBytes:void 0,disableTelemetry:void 0,enableSessionStorageBuffer:void 0,isRetryDisabled:void 0,isBeaconApiDisabled:void 0,onunloadDisableBeacon:void 0,instrumentationKey:void 0,namePrefix:void 0,samplingPercentage:void 0}},e.prototype.pause=function(){throw new Error("Method not implemented.")},e.prototype.resume=function(){throw new Error("Method not implemented.")},e.prototype.flush=function(){try{this.triggerSend()}catch(e){this._logger.throwInternal(i.a.CRITICAL,i.b.FlushFailed,"flush failed, telemetry will not be collected: "+a.e.getExceptionName(e),{exception:a.e.dump(e)})}},e.prototype.onunloadFlush=function(){if(!1!==this._config.onunloadDisableBeacon()&&!1!==this._config.isBeaconApiDisabled()||!a.e.IsBeaconApiSupported())this.flush();else try{this.triggerSend(!0,this._beaconSender)}catch(e){this._logger.throwInternal(i.a.CRITICAL,i.b.FailedToSendQueuedTelemetry,"failed to flush with beacon sender on page unload, telemetry will not be collected: "+a.e.getExceptionName(e),{exception:a.e.dump(e)})}},e.prototype.teardown=function(){throw new Error("Method not implemented.")},e.prototype.initialize=function(t,n,r){var i=this;this._logger=n.logger,this._serializer=new A(n.logger),this._consecutiveErrors=0,this._retryAt=null,this._lastSend=0,this._sender=null;var l=e._getDefaultAppInsightsChannelConfig();this._config=e._getEmptyAppInsightsChannelConfig();var u=function(e){c._config[e]=function(){return N.a.getConfig(t,e,i.identifier,l[e]())}},c=this;for(var f in l)u(f);(this._buffer=this._config.enableSessionStorageBuffer&&a.e.canUseSessionStorage()?new o(this._logger,this._config):new s(this._config),this._sample=new P(this._config.samplingPercentage(),this._logger),!this._config.isBeaconApiDisabled()&&a.e.IsBeaconApiSupported())?this._sender=this._beaconSender:"undefined"!=typeof XMLHttpRequest&&("withCredentials"in new XMLHttpRequest?(this._sender=this._xhrSender,this._XMLHttpRequestSupported=!0):"undefined"!=typeof XDomainRequest&&(this._sender=this._xdrSender))},e.prototype.processTelemetry=function(t){var n=this;try{if(this._config.disableTelemetry())return;if(!t)return void this._logger.throwInternal(i.a.CRITICAL,i.b.CannotSendEmptyTelemetry,"Cannot send empty telemetry");if(t.baseData&&!t.baseType)return void this._logger.throwInternal(i.a.CRITICAL,i.b.InvalidEvent,"Cannot send telemetry without baseData and baseType");if(t.baseType||(t.baseType="EventData"),!this._sender)return void this._logger.throwInternal(i.a.CRITICAL,i.b.SenderNotInitialized,"Sender was not initialized");if(!this._isSampledIn(t))return void this._logger.throwInternal(i.a.WARNING,i.b.TelemetrySampledAndNotSent,"Telemetry item was sampled out and not sent",{SampleRate:this._sample.sampleRate});t[u.e]=this._sample.sampleRate;var r=e.constructEnvelope(t,this._config.instrumentationKey(),this._logger);if(!r)return void this._logger.throwInternal(i.a.CRITICAL,i.b.CreateEnvelopeError,"Unable to create an AppInsights envelope");var s=!1;if(t.tags&&t.tags[u.d]&&(b.a.arrForEach(t.tags[u.d],(function(e){try{e&&!1===e(r)&&(s=!0,n._logger.warnToConsole("Telemetry processor check returns false"))}catch(e){n._logger.throwInternal(i.a.CRITICAL,i.b.TelemetryInitializerFailed,"One of telemetry initializers failed, telemetry item will not be sent: "+a.e.getExceptionName(e),{exception:a.e.dump(e)},!0)}})),delete t.tags[u.d]),s)return;var o=this._serializer.serialize(r),l=this._buffer.getItems(),c=this._buffer.batchPayloads(l);c&&c.length+o.length>this._config.maxBatchSizeInBytes()&&this.triggerSend(),this._buffer.enqueue(o),this._setupTimer()}catch(e){this._logger.throwInternal(i.a.WARNING,i.b.FailedAddingTelemetryToBuffer,"Failed adding telemetry to the sender's buffer, some telemetry will be lost: "+a.e.getExceptionName(e),{exception:a.e.dump(e)})}b.a.isNullOrUndefined(this._nextPlugin)||this._nextPlugin.processTelemetry(t)},e.prototype.setNextPlugin=function(e){this._nextPlugin=e},e.prototype._xhrReadyStateChange=function(e,t,n){if(4===e.readyState){var r=null;if(this._appId||(r=this._parseResponse(e.responseText||e.response))&&r.appId&&(this._appId=r.appId),(e.status<200||e.status>=300)&&0!==e.status)!this._config.isRetryDisabled()&&this._isRetriable(e.status)?(this._resendPayload(t),this._logger.throwInternal(i.a.WARNING,i.b.TransmissionFailed,". Response code "+e.status+". Will retry to send "+t.length+" items.")):this._onError(t,this._formatErrorMessageXhr(e));else if(B.isOffline()){if(!this._config.isRetryDisabled()){this._resendPayload(t,10),this._logger.throwInternal(i.a.WARNING,i.b.TransmissionFailed,". Offline - Response Code: "+e.status+". Offline status: "+B.isOffline()+". Will retry to send "+t.length+" items.")}}else 206===e.status?(r||(r=this._parseResponse(e.responseText||e.response)),r&&!this._config.isRetryDisabled()?this._onPartialSuccess(t,r):this._onError(t,this._formatErrorMessageXhr(e))):(this._consecutiveErrors=0,this._onSuccess(t,n))}},e.prototype.triggerSend=function(e,t){void 0===e&&(e=!0);try{if(this._config.disableTelemetry())this._buffer.clear();else{if(this._buffer.count()>0){var n=this._buffer.getItems();t?t.call(this,n,e):this._sender(n,e)}this._lastSend=+new Date}clearTimeout(this._timeoutHandle),this._timeoutHandle=null,this._retryAt=null}catch(e){(!a.e.getIEVersion()||a.e.getIEVersion()>9)&&this._logger.throwInternal(i.a.CRITICAL,i.b.TransmissionFailed,"Telemetry transmission failed, some telemetry will be lost: "+a.e.getExceptionName(e),{exception:a.e.dump(e)})}},e.prototype._onError=function(e,t,n){this._logger.throwInternal(i.a.WARNING,i.b.OnError,"Failed to send telemetry.",{message:t}),this._buffer.clearSent(e)},e.prototype._onPartialSuccess=function(e,t){for(var n=[],r=[],a=0,s=t.errors.reverse();a<s.length;a++){var o=s[a],l=e.splice(o.index,1)[0];this._isRetriable(o.statusCode)?r.push(l):n.push(l)}e.length>0&&this._onSuccess(e,t.itemsAccepted),n.length>0&&this._onError(n,this._formatErrorMessageXhr(null,["partial success",t.itemsAccepted,"of",t.itemsReceived].join(" "))),r.length>0&&(this._resendPayload(r),this._logger.throwInternal(i.a.WARNING,i.b.TransmissionFailed,"Partial success. Delivered: "+e.length+", Failed: "+n.length+". Will retry to send "+r.length+" our of "+t.itemsReceived+" items"))},e.prototype._onSuccess=function(e,t){this._buffer.clearSent(e)},e.prototype._xdrOnLoad=function(e,t){if(!e||e.responseText+""!="200"&&""!==e.responseText){var n=this._parseResponse(e.responseText);n&&n.itemsReceived&&n.itemsReceived>n.itemsAccepted&&!this._config.isRetryDisabled()?this._onPartialSuccess(t,n):this._onError(t,this._formatErrorMessageXdr(e))}else this._consecutiveErrors=0,this._onSuccess(t,0)},e.prototype._isSampledIn=function(e){return this._sample.isSampledIn(e)},e.prototype._beaconSender=function(e,t){var n=this._config.endpointUrl(),r=this._buffer.batchPayloads(e),a=new Blob([r],{type:"text/plain;charset=UTF-8"});navigator.sendBeacon(n,a)?(this._buffer.markAsSent(e),this._onSuccess(e,e.length)):(this._xhrSender(e,!0),this._logger.throwInternal(i.a.WARNING,i.b.TransmissionFailed,". Failed to send telemetry with Beacon API, retried with xhrSender."))},e.prototype._xhrSender=function(e,t){var n=this,r=new XMLHttpRequest;r[u.b]=!0,r.open("POST",this._config.endpointUrl(),t),r.setRequestHeader("Content-type","application/json"),a.e.isInternalApplicationInsightsEndpoint(this._config.endpointUrl())&&r.setRequestHeader(F.a.sdkContextHeader,F.a.sdkContextHeaderAppIdRequest),r.onreadystatechange=function(){return n._xhrReadyStateChange(r,e,e.length)},r.onerror=function(t){return n._onError(e,n._formatErrorMessageXhr(r),t)};var i=this._buffer.batchPayloads(e);r.send(i),this._buffer.markAsSent(e)},e.prototype._parseResponse=function(e){try{if(e&&""!==e){var t=JSON.parse(e);if(t&&t.itemsReceived&&t.itemsReceived>=t.itemsAccepted&&t.itemsReceived-t.itemsAccepted===t.errors.length)return t}}catch(t){this._logger.throwInternal(i.a.CRITICAL,i.b.InvalidBackendResponse,"Cannot parse the response. "+a.e.getExceptionName(t),{response:e})}return null},e.prototype._resendPayload=function(e,t){if(void 0===t&&(t=1),e&&0!==e.length){this._buffer.clearSent(e),this._consecutiveErrors++;for(var n=0,r=e;n<r.length;n++){var a=r[n];this._buffer.enqueue(a)}this._setRetryTime(t),this._setupTimer()}},e.prototype._setRetryTime=function(e){var t;if(this._consecutiveErrors<=1)t=10;else{var n=(Math.pow(2,this._consecutiveErrors)-1)/2,r=Math.floor(Math.random()*n*10)+1;r*=e,t=Math.max(Math.min(r,3600),10)}var a=Date.now()+1e3*t;this._retryAt=a},e.prototype._setupTimer=function(){var e=this;if(!this._timeoutHandle){var t=this._retryAt?Math.max(0,this._retryAt-Date.now()):0,n=Math.max(this._config.maxBatchInterval(),t);this._timeoutHandle=setTimeout((function(){e.triggerSend()}),n)}},e.prototype._isRetriable=function(e){return 408===e||429===e||500===e||503===e},e.prototype._formatErrorMessageXhr=function(e,t){return e?"XMLHttpRequest,Status:"+e.status+",Response:"+e.responseText||!1:t},e.prototype._xdrSender=function(e,t){var n=this,r=new XDomainRequest;r.onload=function(){return n._xdrOnLoad(r,e)},r.onerror=function(t){return n._onError(e,n._formatErrorMessageXdr(r),t)};var a="object"==typeof window&&window.location&&window.location.protocol||"";if(0!==this._config.endpointUrl().lastIndexOf(a,0))return this._logger.throwInternal(i.a.WARNING,i.b.TransmissionFailed,". Cannot send XDomain request. The endpoint URL protocol doesn't match the hosting page protocol."),void this._buffer.clear();var s=this._config.endpointUrl().replace(/^(https?:)/,"");r.open("POST",s);var o=this._buffer.batchPayloads(e);r.send(o),this._buffer.markAsSent(e)},e.prototype._formatErrorMessageXdr=function(e,t){return e?"XDomainRequest,Response:"+e.responseText||!1:t},e}()}}]);