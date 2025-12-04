
class Login{

    static logado=false
    static matLogado=null
    static nomeLogado=null
    static acessoLogado=null
    static endPoint='http://localhost:8080/'
    static estiloCss=null
    static corpoHtml=null
    static callback_ok=null
    static callback_naook=null
    static config={
        cor:'whitesmoke',img:'Ícone minimalista de halter.png'
    }
    static fechar(){
        document.getElementById('divLogin').remove()
        document.getElementById('estiloLogin').remove()
    }
    static verificaLogin(endp){
        let mat=document.getElementById('f_username').value
        let pas=document.getElementById('f_senha').value
        
        const endPoint=endp+=`?matricula=${mat}&senha=${pas}`

        fetch(endPoint)
        .then(res=>res.json())
        .then(res=>{
            if(res){
                this.logado=true
                this.matLogado=mat
                this.nomeLogado=res.nome
                this.acessoLogado=res.acesso 
                
                this.callback_ok()
                this.fechar()
            }else{
                this.logado=false
                this.matLogado=null
                this.nomeLogado=null
                this.acessoLogado=null    
                this.callback_naook()  
            }
        })

    }


    static Login(callback_ok,callback_naook,config=null,endPoint){

        //config.cor config.img
        if(config!=null){
            this.config=config
        }
        this.callback_ok=()=>{callback_ok()}
        this.callback_naook=()=>{callback_naook()}
        
        this.estiloCss=`
            .fundoLogin{display:flex;justify-content:center;align-items:center;width:100%;height:100vh;position:absolute;top:0;left:0;background-color:rgba(0,0,0,0.75);} 
            .baseLogin{display:flex;justify-content:center;align-items:center;width:inherit;flex-direction:column;width:100%;max-width:400px;} 
            .elementosLogin{display:flex;justify-content:center;align-items:center;flex-direction:column;width:100%;max-height:100%;height:200px;background:#eee;gap:10px;border-radius:10px 10px 0 0;} 
            .campoLogin input{display:flex;height:23px;font-size:15px;border-radius:5px;border:1px solid black;} 
            .logoLogin{display:flex;justify-content:center;align-items:center;width:100%;background:#bbb;border-radius:0 0 10px 10px;} 
            .logoLogin img{width:100px;} 
            .botoesLogin{display:flex;gap:10px;} 
            .botao{padding:10px;width:80px;background-color:${this.config.cor};border-radius:5px;transition:transform .2s,color .2s,background-color .2s;} 
            .botao:hover{transform:scale(1.1);background-color:#dadada;}        
        `
        this.corpoHtml=`
            <div id="fundoLogin" class="fundoLogin">
                <div id="baseLogin" class="baseLogin">
                        <div id="elementosLogin" class="elementosLogin">

                            <div class="campoLogin">
                                <label for="">UserName:</label>
                                <input type="text" name="f_username" id="f_username" autocomplete='off'>
                            </div>
                            <div class="campoLogin">
                                <label for="">Senha:</label>
                                <input type="password" name="f_senha" id="f_senha" autocomplete='off'>
                            </div> 
                            <div class="botoesLogin">
                                <button id="btnLogin" class="botao">Login</button>
                                <button id="btnCancelar" class="botao">Cancelar</button>
                            </div>                     
                                            
                        </div>

                        <div id="logoLogin" class="logoLogin">
                            <img src="${this.config.img}" title="zeka">
                        </div>
                </div>
            </div> 
        `

        const estilo=document.createElement("style")
        const divLogin=document.createElement('div')
        
        divLogin.id='divLogin'
        estilo.id=`estiloLogin`

        estilo.innerHTML=this.estiloCss
        divLogin.innerHTML=this.corpoHtml

        document.body.prepend(divLogin)
        document.head.appendChild(estilo)

        document.querySelector("#btnLogin").addEventListener("click",()=>{
            this.verificaLogin(endPoint)
        })
        document.querySelector("#btnCancelar").addEventListener("click",()=>{
            this.fechar()
        })        


    }
}
//export{Login}