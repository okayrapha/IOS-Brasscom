// Busca pelos elementos do Formulário
const  meuFormulário  =  documento . querySelector ( '# meu-formulário' ) ;
const  nameInput  =  documento . querySelector ( '#name' ) ;
const emailInput = document . querySelector ( '#email' ) ;   

 data  const =  documento . querySelector ( '#date' ) ;
const  msg  =  documento . querySelector ( '.msg' ) ;
const msg_email = document . querySelector ( '.msg_email' ) ;   

const  userList  =  document . querySelector ( '#users' ) ;
const  dateMsg  =  document . querySelector ( '.msg_data' ) ;


// Método addEventListener
@@ -27,45 +28,63 @@ function onSubmit (e) {
    const  temp  =  new  Date ( date . value ) . getFullYear ( )

    // let anoInput = parseInt (date.value.split ('-') [0], 10) // Transformando string em decimal 

    if  ( nameInput . value  ===  ''  ||  emailInput . value  ===  ''  ||  ( ano  -  temp )  <  18  )  {
    if  ( nameInput . value  ===  ''  ||  date . value  ===  ''  )  {
        // alert ('Por favor, preencha os dados.');
        msg . classList . add ( 'erro' ) ; 
        msg . innerHTML  =  'Por favor, preencha os dados.' ;
        setTimeout ( ( )  =>  msg . remove ( ) ,  3000 ) ;
    }  else  {


    } else  if ( ( ano  -  temp )  <  18 ) {
            dateMsg . classList . add ( 'erro' ) ; 
            dateMsg . innerHTML  =  'Menor de idade' ;
            setTimeout ( ( )  =>  dateMsg . remove ( ) ,  3000 ) ;

    } else  {
        // console.log ('sucesso');
        const  li  =  documento . createElement ( 'li' ) ;
        li . appendChild (
            documento . createTextNode (
                ` $ { nameInput . valor } : $ { emailInput . valor } : $ { data . valor } `
            )
        ) ;
        userList . appendChild ( li ) ;
        // Limpa o formulário
        nameInput . valor  =  '' ;
        emailInput . valor  =  '' ;
        data . getElementsByTagName ( 'item2' ) [ 0 ] . selecionado  =  'selecionado' ;
        nameInput . foco ( ) ;  // Coloca o foco no elmento
        documento . createTextNode (
        ` $ { nameInput . valor } : $ { data . valor } ` )
        ) ;
         userList . appendChild ( li ) ;

        // criar extensão
        const  mySpan  =  document . createElement ( 'span' ) ;
        mySpan . innerHTML  =  'x'
        li . appendChild ( mySpan ) ; 

        // Botão deletar
        const  close  =  document . querySelectorAll ( 'span' ) ;
            para ( deixe  i = 0 ;  i  <  fechar . comprimento ;  i ++ ) {
                fechar [ i ] . addEventListener ( 'click' ,  ( )  => {
                    fechar [ i ] . parentElement . estilo . opacidade  =  0 ;

                    setTimeout ( ( )  => {
                        fechar [ i ] . parentElement . estilo . display  =  'nenhum' ;
                        fechar [ i ] . parentElement . remove ( ) ;

                    } ,  500 ) ;
                } ) ;
            }
             // Limpa o formulário
                nameInput . valor  =  '' ;
                data . valor  =  '' ;
                data . getElementsByTagName ( 'li' ) [ 0 ] . selecionado  =  'selecionado' ;
                nameInput . foco ( ) ;  // Coloca o foco no elmento

    }
}


// Excluir o elemento
function  deleteButton ( ) {
    const  deleteBu  =  document . getElementsByTagName ( 'li' )
    console . log ( deleteBu )
    deleteBu [ 0 ] . remover ( )  
}

// Validando e-mail
emailInput . addEventListener ( 'alterar' ,  ( e )  =>  {
    deixe  padrao  =  novo  RegExp ( / . * @. * \ . * / i ) ;
    if  ( ! padrao . test ( emailInput . value ) )  {
        // alert ('Por favor insira, um e-mail válido.');
        msg_email . classList . add ( 'erro' ) ;
        msg_email . innerHTML  =  'Por favor insira, um e-mail válido.' ;
        setTimeout ( ( )  =>  msg . remove ( ) ,  3000 ) ;
    }
} ) ;

    }





// // Excluir o elemento
// função deleteButton () {
// const deleteBu = document.getElementsByTagName ('li')
// console.log (deleteBu)
// deleteBu [0] .remove ()  
//}

  9  dom 3 / index.html 
@@ -18,20 +18,15 @@
                        < label  for = " name " > Nome: </ label >
                        < input  type = " text " id = " name " />
                    </ div >
                    < div >
                        < label  for = " email " > E-mail: </ label >
                        < input  type = " text " id = " email " />
                    </ div >
                    < div  class = " msg_email " > </ div >

                    < div  class = " aniv " >
                    < label  for = " date " > Data de Nascimento: </ label >
                    < input  type = " date " id = " date " >
                    < div  class = " msg_date " > </ div >
                    < div  class = " msg_data " > </ div >
                    </ div >

                    < input  class = " botao " type = " submit " value = " Enviar " />
                    < input class = " botao " id = " delete " type = " submit " value = " Excluir " onclick = " deleteButton () " ; > 

            </ form >
            < ul  id = " users " > < ul >
        </ seção >
  27  dom 3 / style.css 
@@ -6,23 +6,36 @@

corpo {
    família da fonte : Arial , Helvetica , sans-serif;
    altura da linha : 1,6 ; 
    cor de fundo : rgba ( 0 , 143 , 238 , 0,349 ) ;    
}

ul {
    estilo de lista : nenhum;
}

ul  li {
    margem : 1 rem ; 
    preenchimento : .4 rem .4 rem ;  
    cor : branco ;
    plano de fundo : # 292424 ; 
    tamanho da fonte : 1,5 rem ; 
    largura : 95 % ; 
    fundo : # fff ; 
    altura : 40 px ; 
    altura da linha :  40 px ;
    cursor : ponteiro;
    sombra da caixa :  -3 px  6 px  4 px  # 222 ;
    preenchimento :  0  5 px ;
    posição : relativa;
    display : bloco;
    margem :  10 px  0 ;
    sombra da caixa :  3 px  6 px  4 px  rgb ( 117 ,  115 ,  115 );
    transição :  0,5 s linear;
}

ul  li  span {
    posição : absoluta;
    topo : 0 ;
    direita :  0 ;
    largura :  50 px ;
    altura :  40 px ;
    alinhamento de texto : centro;
    fundo :  # e00 ;
}

. conteudo {
    margem : automático;