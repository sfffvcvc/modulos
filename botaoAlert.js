class BotaoAlert{
    static config={
        cor:' rgb(22, 114, 189)',
        corTexto:'white'
    }



    
    static mostrar(config,estilo){

        //{cor:'#BA1200',texto:'white'}
        if(estilo!=undefined){
            this.config={cor:estilo.cor,corTexto:estilo.texto}
        }

        const div=document.createElement('div')
        const style=document.createElement('style')


        let css=`
            .fundoEscuroAlert{
                background-color: rgba(0,0,0,0.75);
                display: flex;
                justify-content: center;
                align-items: center;
                position: absolute;
                height: 100vh;
                width: 100%;
                left: 0;
                top: 0;
                z-index: 2;
            }
            .alertDiv{
                width: 100%;
                max-width: 380px;
            }
            .cimaBaixoALert{
                padding: 10px;
            }
            .headerAlert{
                border-radius: 5px 5px 0 0;
                background-color: ${this.config.cor};
                font-size: 30px;
                text-align: center;
                font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
                color:${this.config.corTexto};
            }
            .meioAlert{
                padding: 50px;
                background-color: lightgray;
                font-size: 20px;
                font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;    
                text-align: center;
            }
            .footerAlert{
                border-radius: 0 0 5px 5px;
                display: flex;
                justify-content: center;
                align-items: center;
                background-color: gray;
            }
            .botaoAlert{
                padding: 10px;
                width: 100px;
                border: none;
                border-radius: 10px;
                background-color: ${this.config.cor};
                color:${this.config.corTexto};
                cursor:pointer;
            }    
        `        

        let corpo=`
            <div class="fundoEscuroAlert">
                <div class="alertDiv">
                    <div class="headerAlert cimaBaixoALert"></div>
                    <div class="meioAlert"></div>
                    <div class="footerAlert cimaBaixoALert"></div>
                </div>
            </div>    
        `    
        

        div.id=`divAlertBotao`
        style.id=`estiloAlertBotao`
        div.innerHTML=corpo
        style.innerHTML=css

        document.head.append(style)   
        document.body.prepend(div)           


        
        const header=document.querySelector(".headerAlert")
        const meio=document.querySelector(".meioAlert")   
        const footer=document.querySelector(".footerAlert")   

        //{tipo:`ok`,titulo:`Aviso`,texto:'Usuario não encontrado'}
        switch(config.tipo){
            case `ok`:
                const botao=document.createElement('button')
                botao.className=`botaoAlert`
                botao.innerHTML=`Ok`        

                botao.addEventListener("click",()=>{
                    document.querySelector("#divAlertBotao").remove()
                    document.querySelector("#estiloAlertBotao").remove()
                })

                footer.append(botao)
                header.innerHTML=config.titulo
                meio.innerHTML=config.texto

            break       
        }

    }
}

//export{BotaoAlert}
