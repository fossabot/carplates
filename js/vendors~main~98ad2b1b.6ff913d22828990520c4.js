(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{416:function(e,t,i){"use strict";var r=i(10),n=i(20),a=i(177),o=i(178),s=i(185),c=i(183),l=i(179),g=i(186),p=i(184),u=i(180),d=i(181),f=i(25),h=i(187),m=i(18),w=i(11),v=function(){function e(e,t,i,r){this.pageViewPerformanceSent=!1,this.overridePageViewDuration=!1,this.overridePageViewDuration=t,this.appInsights=e,this._pageViewPerformanceManager=r,i&&(this._channel=function(){return i.getTransmissionControls()},this._logger=i.logger)}return e.prototype.trackPageView=function(e,t){var i=this,r=e.name;(w.a.isNullOrUndefined(r)||"string"!=typeof r)&&(r=e.name="object"==typeof window&&window.document&&window.document.title||"");var a=e.uri;if((w.a.isNullOrUndefined(a)||"string"!=typeof a)&&(a=e.uri="object"==typeof window&&window.location&&window.location.href||""),!this._pageViewPerformanceManager.isPerformanceTimingSupported())return this.appInsights.sendPageViewInternal(e,t),w.a.arrForEach(this._channel(),(function(e){w.a.arrForEach(e,(function(e){return e.flush(!0)}))})),void this._logger.throwInternal(m.a.WARNING,m.b.NavigationTimingNotSupported,"trackPageView: navigation timing API used for calculation of page duration is not supported in this browser. This page view will be collected without duration and timing info.");var o,s,c=!1,l=this._pageViewPerformanceManager.getPerformanceTiming().navigationStart;o=n.c.GetDuration(l,+new Date),this._pageViewPerformanceManager.shouldCollectDuration(o)||(o=void 0),w.a.isNullOrUndefined(t)||w.a.isNullOrUndefined(t.duration)||(s=t.duration),!this.overridePageViewDuration&&isNaN(s)||(isNaN(s)&&(t||(t={}),t.duration=o),this.appInsights.sendPageViewInternal(e,t),w.a.arrForEach(this._channel(),(function(e){w.a.arrForEach(e,(function(e){return e.flush(!0)}))})),c=!0);t||(t={});var g=setInterval((function(){try{if(i._pageViewPerformanceManager.isPerformanceTimingDataReady()){clearInterval(g);var s={name:r,uri:a};i._pageViewPerformanceManager.populatePageViewPerformanceEvent(s),s.isValid||c?(c||(t.duration=s.durationMs,i.appInsights.sendPageViewInternal(e,t)),i.pageViewPerformanceSent||(i.appInsights.sendPageViewPerformanceInternal(s,t),i.pageViewPerformanceSent=!0),w.a.arrForEach(i._channel(),(function(e){w.a.arrForEach(e,(function(e){return e.flush(!0)}))}))):(t.duration=o,i.appInsights.sendPageViewInternal(e,t),w.a.arrForEach(i._channel(),(function(e){w.a.arrForEach(e,(function(e){return e.flush(!0)}))})))}else n.c.GetDuration(l,+new Date)>6e4&&(clearInterval(g),c||(t.duration=6e4,i.appInsights.sendPageViewInternal(e,t),w.a.arrForEach(i._channel(),(function(e){w.a.arrForEach(e,(function(e){return e.flush(!0)}))}))))}catch(e){i._logger.throwInternal(m.a.CRITICAL,m.b.TrackPVFailedCalc,"trackPageView failed on page load calculation: "+n.e.getExceptionName(e),{exception:n.e.dump(e)})}}),100)},e}(),T=function(){function e(e,t){this.prevPageVisitDataKeyName="prevPageVisitData",this.pageVisitTimeTrackingHandler=t,this._logger=e}return e.prototype.trackPreviousPageVisit=function(e,t){try{var i=this.restartPageVisitTimer(e,t);i&&this.pageVisitTimeTrackingHandler(i.pageName,i.pageUrl,i.pageVisitTime)}catch(e){this._logger.warnToConsole("Auto track page visit time failed, metric will not be collected: "+n.e.dump(e))}},e.prototype.restartPageVisitTimer=function(e,t){try{var i=this.stopPageVisitTimer();return this.startPageVisitTimer(e,t),i}catch(e){return this._logger.warnToConsole("Call to restart failed: "+n.e.dump(e)),null}},e.prototype.startPageVisitTimer=function(e,t){try{if(n.e.canUseSessionStorage()){if(null!=n.e.getSessionStorage(this._logger,this.prevPageVisitDataKeyName))throw new Error("Cannot call startPageVisit consecutively without first calling stopPageVisit");var i=new y(e,t),r=JSON.stringify(i);n.e.setSessionStorage(this._logger,this.prevPageVisitDataKeyName,r)}}catch(e){this._logger.warnToConsole("Call to start failed: "+n.e.dump(e))}},e.prototype.stopPageVisitTimer=function(){try{if(n.e.canUseSessionStorage()){var e=Date.now(),t=n.e.getSessionStorage(this._logger,this.prevPageVisitDataKeyName);if(t){var i=JSON.parse(t);return i.pageVisitTime=e-i.pageVisitStartTime,n.e.removeSessionStorage(this._logger,this.prevPageVisitDataKeyName),i}return null}return null}catch(e){return this._logger.warnToConsole("Stop page visit timer failed: "+n.e.dump(e)),null}},e}(),y=function(e,t){this.pageVisitStartTime=Date.now(),this.pageName=e,this.pageUrl=t},_=function(){function e(e){this.MAX_DURATION_ALLOWED=36e5,e&&(this._logger=e.logger)}return e.prototype.populatePageViewPerformanceEvent=function(e){e.isValid=!1;var t=this.getPerformanceNavigationTiming(),i=this.getPerformanceTiming();if(t||i){if(t)var r=t.duration,a=n.c.GetDuration(t.startTime,t.connectEnd),o=n.c.GetDuration(t.requestStart,t.responseStart),s=n.c.GetDuration(t.responseStart,t.responseEnd),c=n.c.GetDuration(t.responseEnd,t.loadEventEnd);else r=n.c.GetDuration(i.navigationStart,i.loadEventEnd),a=n.c.GetDuration(i.navigationStart,i.connectEnd),o=n.c.GetDuration(i.requestStart,i.responseStart),s=n.c.GetDuration(i.responseStart,i.responseEnd),c=n.c.GetDuration(i.responseEnd,i.loadEventEnd);0===r?this._logger.throwInternal(m.a.WARNING,m.b.ErrorPVCalc,"error calculating page view performance.",{total:r,network:a,request:o,response:s,dom:c}):this.shouldCollectDuration(r,a,o,s,c)?r<Math.floor(a)+Math.floor(o)+Math.floor(s)+Math.floor(c)?this._logger.throwInternal(m.a.WARNING,m.b.ClientPerformanceMathError,"client performance math error.",{total:r,network:a,request:o,response:s,dom:c}):(e.durationMs=r,e.perfTotal=e.duration=n.e.msToTimeSpan(r),e.networkConnect=n.e.msToTimeSpan(a),e.sentRequest=n.e.msToTimeSpan(o),e.receivedResponse=n.e.msToTimeSpan(s),e.domProcessing=n.e.msToTimeSpan(c),e.isValid=!0):this._logger.throwInternal(m.a.WARNING,m.b.InvalidDurationValue,"Invalid page load duration value. Browser perf data won't be sent.",{total:r,network:a,request:o,response:s,dom:c})}},e.prototype.getPerformanceTiming=function(){return this.isPerformanceTimingSupported()?window.performance.timing:null},e.prototype.getPerformanceNavigationTiming=function(){return this.isPerformanceNavigationTimingSupported()?window.performance.getEntriesByType("navigation")[0]:null},e.prototype.isPerformanceNavigationTimingSupported=function(){return"undefined"!=typeof window&&window.performance&&window.performance.getEntriesByType&&window.performance.getEntriesByType("navigation").length>0},e.prototype.isPerformanceTimingSupported=function(){return"undefined"!=typeof window&&window.performance&&window.performance.timing},e.prototype.isPerformanceTimingDataReady=function(){var e="object"==typeof window&&window.performance.timing;return"object"==typeof window&&e.domainLookupStart>0&&e.navigationStart>0&&e.responseStart>0&&e.requestStart>0&&e.loadEventEnd>0&&e.responseEnd>0&&e.connectEnd>0&&e.domLoading>0},e.prototype.shouldCollectDuration=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var i=["googlebot","adsbot-google","apis-google","mediapartners-google"],r=navigator.userAgent,n=!1;if(r)for(var a=0;a<i.length;a++)n=n||-1!==r.toLowerCase().indexOf(i[a]);if(n)return!1;for(a=0;a<e.length;a++)if(e[a]>=this.MAX_DURATION_ALLOWED)return!1;return!0},e}();i.d(t,"a",(function(){return P}));var P=function(){function e(){this.identifier="ApplicationInsightsAnalytics",this.priority=180,this.autoRoutePVDelay=500,this._isInitialized=!1,this._trackAjaxAttempts=0,this._prevUri="object"==typeof window&&window.location&&window.location.href||"",this.initialize=this._initialize.bind(this)}return e.getDefaultConfig=function(e){return e||(e={}),e.sessionRenewalMs=18e5,e.sessionExpirationMs=864e5,e.disableExceptionTracking=n.e.stringToBoolOrDefault(e.disableExceptionTracking),e.autoTrackPageVisitTime=n.e.stringToBoolOrDefault(e.autoTrackPageVisitTime),e.overridePageViewDuration=n.e.stringToBoolOrDefault(e.overridePageViewDuration),(isNaN(e.samplingPercentage)||e.samplingPercentage<=0||e.samplingPercentage>=100)&&(e.samplingPercentage=100),e.isCookieUseDisabled=n.e.stringToBoolOrDefault(e.isCookieUseDisabled),e.isStorageUseDisabled=n.e.stringToBoolOrDefault(e.isStorageUseDisabled),e.isBrowserLinkTrackingEnabled=n.e.stringToBoolOrDefault(e.isBrowserLinkTrackingEnabled),e.enableAutoRouteTracking=n.e.stringToBoolOrDefault(e.enableAutoRouteTracking),e.namePrefix=e.namePrefix||"",e},e.prototype.processTelemetry=function(e){for(var t=!1,i=this._telemetryInitializers.length,r=0;r<i;++r){var a=this._telemetryInitializers[r];if(a)try{if(!1===a.apply(null,[e])){t=!0;break}}catch(e){this._logger.throwInternal(m.a.CRITICAL,m.b.TelemetryInitializerFailed,"One of telemetry initializers failed, telemetry item will not be sent: "+n.e.getExceptionName(e),{exception:n.e.dump(e)},!0)}}t||w.a.isNullOrUndefined(this._nextPlugin)||this._nextPlugin.processTelemetry(e)},e.prototype.setNextPlugin=function(e){this._nextPlugin=e},e.prototype.trackEvent=function(e,t){try{var i=a.a.create(e,o.a.dataType,o.a.envelopeType,this._logger,t);this.core.track(i)}catch(e){this._logger.throwInternal(m.a.WARNING,m.b.TrackTraceFailed,"trackTrace failed, trace will not be collected: "+n.e.getExceptionName(e),{exception:n.e.dump(e)})}},e.prototype.startTrackEvent=function(e){try{this._eventTracking.start(e)}catch(e){this._logger.throwInternal(m.a.CRITICAL,m.b.StartTrackEventFailed,"startTrackEvent failed, event will not be collected: "+n.e.getExceptionName(e),{exception:n.e.dump(e)})}},e.prototype.stopTrackEvent=function(e,t,i){try{this._eventTracking.stop(e,void 0,t)}catch(e){this._logger.throwInternal(m.a.CRITICAL,m.b.StopTrackEventFailed,"stopTrackEvent failed, event will not be collected: "+n.e.getExceptionName(e),{exception:n.e.dump(e)})}},e.prototype.trackTrace=function(e,t){try{var i=a.a.create(e,s.a.dataType,s.a.envelopeType,this._logger,t);this.core.track(i)}catch(e){this._logger.throwInternal(m.a.WARNING,m.b.TrackTraceFailed,"trackTrace failed, trace will not be collected: "+n.e.getExceptionName(e),{exception:n.e.dump(e)})}},e.prototype.trackMetric=function(e,t){try{var i=a.a.create(e,c.a.dataType,c.a.envelopeType,this._logger,t);this.core.track(i)}catch(e){this._logger.throwInternal(m.a.CRITICAL,m.b.TrackMetricFailed,"trackMetric failed, metric will not be collected: "+n.e.getExceptionName(e),{exception:n.e.dump(e)})}},e.prototype.trackPageView=function(e,t){try{var i=e||{};this._pageViewManager.trackPageView(i,r.a({},i.properties,i.measurements,t)),this.config.autoTrackPageVisitTime&&this._pageVisitTimeManager.trackPreviousPageVisit(i.name,i.uri)}catch(e){this._logger.throwInternal(m.a.CRITICAL,m.b.TrackPVFailed,"trackPageView failed, page view will not be collected: "+n.e.getExceptionName(e),{exception:n.e.dump(e)})}},e.prototype.sendPageViewInternal=function(e,t,i){"undefined"!=typeof document&&(e.refUri=void 0===e.refUri?document.referrer:e.refUri);var r=a.a.create(e,l.a.dataType,l.a.envelopeType,this._logger,t,i);this.core.track(r),this._trackAjaxAttempts=0},e.prototype.sendPageViewPerformanceInternal=function(e,t,i){var r=a.a.create(e,g.a.dataType,g.a.envelopeType,this._logger,t,i);this.core.track(r)},e.prototype.trackPageViewPerformance=function(e,t){try{this._pageViewPerformanceManager.populatePageViewPerformanceEvent(e),this.sendPageViewPerformanceInternal(e,t)}catch(e){this._logger.throwInternal(m.a.CRITICAL,m.b.TrackPVFailed,"trackPageViewPerformance failed, page view will not be collected: "+n.e.getExceptionName(e),{exception:n.e.dump(e)})}},e.prototype.startTrackPage=function(e){try{"string"!=typeof e&&(e="object"==typeof window&&window.document&&window.document.title||""),this._pageTracking.start(e)}catch(e){this._logger.throwInternal(m.a.CRITICAL,m.b.StartTrackFailed,"startTrackPage failed, page view may not be collected: "+n.e.getExceptionName(e),{exception:n.e.dump(e)})}},e.prototype.stopTrackPage=function(e,t,i,r){try{"string"!=typeof e&&(e="object"==typeof window&&window.document&&window.document.title||""),"string"!=typeof t&&(t="object"==typeof window&&window.location&&window.location.href||""),this._pageTracking.stop(e,t,i,r),this.config.autoTrackPageVisitTime&&this._pageVisitTimeManager.trackPreviousPageVisit(e,t)}catch(e){this._logger.throwInternal(m.a.CRITICAL,m.b.StopTrackFailed,"stopTrackPage failed, page view will not be collected: "+n.e.getExceptionName(e),{exception:n.e.dump(e)})}},e.prototype.sendExceptionInternal=function(e,t,i){var r=new p.a(this._logger,e.exception||new Error(n.e.NotSpecified),e.properties,e.measurements,e.severityLevel,e.id).toInterface(),o=a.a.create(r,p.a.dataType,p.a.envelopeType,this._logger,t,i);this.core.track(o)},e.prototype.trackException=function(e,t){try{this.sendExceptionInternal(e,t)}catch(e){this._logger.throwInternal(m.a.CRITICAL,m.b.TrackExceptionFailed,"trackException failed, exception will not be collected: "+n.e.getExceptionName(e),{exception:n.e.dump(e)})}},e.prototype._onerror=function(e){try{var t={url:e&&e.url||document.URL,lineNumber:e.lineNumber,columnNumber:e.columnNumber,message:e.message};if(n.e.isCrossOriginError(e.message,e.url,e.lineNumber,e.columnNumber,e.error))this._sendCORSException(t.url);else{if(!n.e.isError(e.error)){var i="window.onerror@"+t.url+":"+e.lineNumber+":"+(e.columnNumber||0);e.error=new Error(e.message),e.error.stack=i}this.trackException({exception:e.error,severityLevel:u.a.Error},t)}}catch(t){var r=e.error?e.error.name+", "+e.error.message:"null";this._logger.throwInternal(m.a.CRITICAL,m.b.ExceptionWhileLoggingError,"_onError threw exception while logging error, error will not be collected: "+n.e.getExceptionName(t),{exception:n.e.dump(t),errorString:r})}},e.prototype.addTelemetryInitializer=function(e){this._telemetryInitializers.push(e)},e.prototype._initialize=function(t,i,r){var a=this;if(!this._isInitialized){if(w.a.isNullOrUndefined(i))throw Error("Error initializing");this.core=i,this._logger=i.logger,this._globalconfig={instrumentationKey:t.instrumentationKey,endpointUrl:t.endpointUrl||"https://dc.services.visualstudio.com/v2/track"},this.config=t.extensionConfig&&t.extensionConfig[this.identifier]?t.extensionConfig[this.identifier]:{};var o=e.getDefaultConfig();if(void 0!==o){for(var s in o)this.config[s]=d.a.getConfig(t,s,this.identifier,o[s]);if(this._globalconfig)for(var s in o)void 0===this._globalconfig[s]&&(this._globalconfig[s]=o[s])}this.config.isCookieUseDisabled&&n.e.disableCookies(),this.config.isStorageUseDisabled&&n.e.disableStorage();var c={instrumentationKey:function(){return t.instrumentationKey},accountId:function(){return a.config.accountId||t.accountId},sessionRenewalMs:function(){return a.config.sessionRenewalMs||t.sessionRenewalMs},sessionExpirationMs:function(){return a.config.sessionExpirationMs||t.sessionExpirationMs},sampleRate:function(){return a.config.samplingPercentage||t.samplingPercentage},cookieDomain:function(){return a.config.cookieDomain||t.cookieDomain},sdkExtension:function(){return a.config.sdkExtension||t.sdkExtension},isBrowserLinkTrackingEnabled:function(){return a.config.isBrowserLinkTrackingEnabled||t.isBrowserLinkTrackingEnabled},appId:function(){return a.config.appId||t.appId}};this._pageViewPerformanceManager=new _(this.core),this._pageViewManager=new v(this,this.config.overridePageViewDuration,this.core,this._pageViewPerformanceManager),this._pageVisitTimeManager=new T(this._logger,(function(e,t,i){return a.trackPageVisitTime(e,t,i)})),this._telemetryInitializers=[],this._addDefaultTelemetryInitializers(c),this._eventTracking=new k(this._logger,"trackEvent"),this._eventTracking.action=function(e,t,i,r){r||(r={}),r.duration=i.toString(),a.trackEvent({name:e,properties:r})},this._pageTracking=new k(this._logger,"trackPageView"),this._pageTracking.action=function(e,t,i,r,n){w.a.isNullOrUndefined(r)&&(r={}),r.duration=i.toString();var o={name:e,uri:t,properties:r,measurements:n};a.sendPageViewInternal(o)};var l,g=this;if(!1===this.config.disableExceptionTracking&&!this.config.autoExceptionInstrumented&&"object"==typeof window){var p=window.onerror;window.onerror=function(e,t,i,r,n){var a=p&&p(e,t,i,r,n);return!0!==a&&g._onerror({message:e,url:t,lineNumber:i,columnNumber:r,error:n}),a},this.config.autoExceptionInstrumented=!0}if(!0===this.config.enableAutoRouteTracking&&"object"==typeof history&&"function"==typeof history.pushState&&"function"==typeof history.replaceState&&"object"==typeof window&&"undefined"!=typeof Event){var u=this;w.a.arrForEach(r,(function(e){e.identifier===f.b&&(a._properties=e)})),history.pushState=(l=history.pushState,function(){var e=l.apply(this,arguments);return window.dispatchEvent(n.e.createDomEvent(u.config.namePrefix+"pushState")),window.dispatchEvent(n.e.createDomEvent(u.config.namePrefix+"locationchange")),e}),history.replaceState=function(e){return function(){var t=e.apply(this,arguments);return window.dispatchEvent(n.e.createDomEvent(u.config.namePrefix+"replaceState")),window.dispatchEvent(n.e.createDomEvent(u.config.namePrefix+"locationchange")),t}}(history.replaceState),window.addEventListener(u.config.namePrefix+"popstate",(function(){window.dispatchEvent(n.e.createDomEvent(u.config.namePrefix+"locationchange"))})),window.addEventListener(u.config.namePrefix+"locationchange",(function(){u._properties&&u._properties.context&&u._properties.context.telemetryTrace&&(u._properties.context.telemetryTrace.traceID=n.e.generateW3CId(),u._properties.context.telemetryTrace.name=window.location&&window.location.pathname||"_unknown_"),a._currUri?(a._prevUri=a._currUri,a._currUri=window.location&&window.location.href||""):a._currUri=window.location&&window.location.href||"",setTimeout(function(e){u.trackPageView({refUri:e,properties:{duration:0}})}.bind(a,a._prevUri),u.autoRoutePVDelay)}))}this._isInitialized=!0}},e.prototype.trackPageVisitTime=function(e,t,i){var r={PageName:e,PageUrl:t};this.trackMetric({name:"PageVisitTime",average:i,max:i,min:i,sampleCount:1},r)},e.prototype._addDefaultTelemetryInitializers=function(e){if(!e.isBrowserLinkTrackingEnabled()){var t=["/browserLinkSignalR/","/__browserLink/"];this._addTelemetryInitializer((function(e){if(e.baseType===h.a.dataType){var i=e.baseData;if(i)for(var r=0;r<t.length;r++)if(i.target&&i.target.indexOf(t[r])>=0)return!1}return!0}))}},e.prototype._addTelemetryInitializer=function(e){this._telemetryInitializers.push(e)},e.prototype._sendCORSException=function(e){var t={message:"Script error: The browser's same-origin policy prevents us from getting the details of this exception. Consider using the 'crossorigin' attribute.",url:e,lineNumber:0,columnNumber:0,error:void 0},i=a.a.create(t,p.a.dataType,p.a.envelopeType,this._logger,{url:e});this.core.track(i)},e.Version="2.3.1",e}(),k=function(){function e(e,t){this._name=t,this._events={},this._logger=e}return e.prototype.start=function(e){void 0!==this._events[e]&&this._logger.throwInternal(m.a.WARNING,m.b.StartCalledMoreThanOnce,"start was called more than once for this event without calling stop.",{name:this._name,key:e},!0),this._events[e]=+new Date},e.prototype.stop=function(e,t,i,r){var a=this._events[e];if(isNaN(a))this._logger.throwInternal(m.a.WARNING,m.b.StopCalledWithoutStart,"stop was called without a corresponding start.",{name:this._name,key:e},!0);else{var o=+new Date,s=n.c.GetDuration(a,o);this.action(e,t,s,i,r)}delete this._events[e],this._events[e]=void 0},e}()}}]);