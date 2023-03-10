
export class AsyncRequest{
    constructor(url,type,data,isAsync = true,onsuccess = function(data){}, onerror = function(error){}, cache = true, contentType = 'application/x-www-form-urlencoded; charset=UTF-8', headers = {}){
        this.url = url;
        this.type = type;
        this.data = data;
        this.isAsync = isAsync;
        this.cache = cache;
        this.contentType = contentType;
        this.headers = headers;
        this.onsuccess = function(handler){
            onsuccess(handler);
        };
        this.onerror = function(handler){
            onerror(handler);
        }
    }
    setHeaders = (headers = {}) =>{
        this.headers = headers;
    }
    response;

    requestAjax(){
        let success = this.onsuccess;
        let error = this.onerror;
        let status = '';
        let ajaxOptions = {
            url: this.url,
            type:this.type,
            data: this.data,
            async: this.isAsync,
            processData: this.cache,
            contentType: this.contentType,
            success: function(handler){
                success(handler);
                status = handler;
            },
            error: function(handler){
                error(handler);
                status = handler;
            }
        }
        
        if(Object.keys(this.headers).length > 0){
            ajaxOptions.headers = this.headers;
        }
        $.ajax(ajaxOptions);
        this.response = status;
    }
}