!function () { 
    let view = document.querySelector('section.message')


    var model = { 
        //获取数据
        fetch: function() { 
            var query = new AV.Query('Message');
            return query.find()  //promise对象
                
        },
        //创建数据
        save: function (name, content) {
            var Message = AV.Object.extend('Message');
            var message = new Message();
            return message.save({   //promise对象
                'name':name,
                'content':content
            })
        },
        init: function () { 
            var APP_ID = 'QBR5mLdKQI4tMX8U8VYbtYNm-gzGzoHsz';
            var APP_KEY = 'bFNRmBQnu89bV3IgOR88C4au';
            AV.init({
              appId: APP_ID,
              appKey: APP_KEY
            });
        }
    }
    let controller = {
        view: null,
        model:null,
        messageList: null,
        myForm:null,
        init: function (view,model) { 
            this.view = view
            this.model = model

            this.messageList = view.querySelector('#messageList')
            this.myForm = view.querySelector('#postMessageForm')
            this.model.init()
            this.loadMessage()
            this.bindEvents()
        },
        loadMessage: function () { 
            this.model.fetch().then((message) => {
                    let array = message.map((item) => item.attributes)
                    array.forEach((item) => { 
                        let li = document.createElement('li')
                        li.innerText = `${item.name}:${item.content}`
                        this.messageList.appendChild(li)
                    })
                })
        },
        bindEvents: function () { 
            this.myForm.addEventListener('submit',  (e) => { 
                e.preventDefault()
                this.saveMessage()
            })
        },
        saveMessage: function () {
            myForm = this.myForm
            let content = myForm.querySelector('input[name=content]').value
            let name = myForm.querySelector('input[name=name]').value
            this.model.save(name,content).then((Object) => {
                let li = document.createElement('li')
                li.innerText = `${Object.attributes.name}:${Object.attributes.content}`
                this.messageList.appendChild(li)
                myForm.querySelector('input[name=content]').value = ''
            })
        }
    }
    controller.init(view,model)
}.call()

