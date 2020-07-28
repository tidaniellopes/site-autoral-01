$(function(){

    //Variáveis

	var indiceAtual = 0;
	var indiceMaximo = $('.slider img').length; //Contador de slider img
	var delay = 4000;

    //Iniciando funções

	initSlider();
    cliqueSlider();
    
    //Funções

	function initSlider(){ // Função Initial slider 
        $('.slider img').eq(0).fadeIn(); //A img posição 0 será a inicial 
        
		setInterval(function(){ //Nesse tempo execute
			alternarSlider(); //Execute essa função
		},delay); //tempo
	}

    function cliqueSlider(){// Função clique slider
        $('.bullets-nav span').click(function(){ //Se ocorrer a ação do clique no slider
            $('.slider img').eq(indiceAtual).stop().fadeOut(2000); //Tire a imagem atual 
            indiceAtual = $(this).index(); //O indice atual vira o mesmo que estamos clicando
            $('.slider img').eq(indiceAtual).stop().fadeIn(2000); //Coloque a imagem atual
            $('.bullets-nav span').css('background-color','#ccc'); //Tire a cor de todas as bolinhas
            $(this).css('background-color','#069'); //Menos a que clicamos, nela aplique:
            
        });
    }

    function alternarSlider(){ //Função altern ar slider
		$('.slider img').eq(indiceAtual).stop().fadeOut(2000); //Retire a imagem do indice atual, pare a animação quando solicitado, em 2 ssegundos. 0
        indiceAtual+=1; //Incremente o índice
        
		if(indiceAtual == indiceMaximo){ //Se o índice atual for igual ao índice máximo 
            indiceAtual = 0; //zere o índice
        }    
        
		$('.bullets-nav span').css('background-color','#ccc');//Zere todas as bolihnhas
		$('.bullets-nav span').eq(indiceAtual).css('background-color','#069'); //Associe com o índice atual ( nova bolinha);
		$('.slider img').eq(indiceAtual).stop().fadeIn(2000); //Apareça a nova foto
	}
	
});


/*

HTML

<div id="slider1" class="slider">
        <img src="imagens/img1.jpg" />
        <img src="imagens/img2.jpg" />
        <img src="imagens/img3.jpg" />
        <img src="imagens/img4.jpg" />
        <img src="imagens/img5.jpg" />

        <div class="bullets-nav">
            <span style="background-color:#069"></span>   
            <span></span>  
            <span></span>  
            <span></span>
            <span></span>
        </div><!--bullets-nav-->
    </div><!--slider-->



CSS:

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html,body{
        height: 100%;
    }

    Slide

    .slider{
        background-color: black;
        O segredo 
        Colocar a posição relativa, altura e largura em 100% sendo limitados
        position: relative;
        width: 100%;
        max-width: 800px;
        height: 100%;
        max-height: 500px;
        margin: 0 auto;
    }

    Imagem totalmente responsiva

    .slider img{
        background-size: contain;
        width: 100%;
        height: 100%;
        display: none;
        position: absolute;
        left: 50%; 
        top: 50%;
        transform:translate(-50%,-50%);
        -ms-transform:translate(-50%,-50%);
        max-width: 100%;
        max-height: 100%;
    }

    .bullets-nav{
        position: absolute;
        left: 50%;
        bottom:10px;
        transform:translateX(-50%);
        -ms-transform:translateX(-50%);
        width: 100%;/
        z-index: 3;
        text-align: center;
    }

    .bullets-nav span{
        width: 16px;
        height: 16px;
        display: inline-block;
        border-radius: 8px;
        background-color: #ccc;
        cursor: pointer; 
        margin:0 20px;
    }

    @media screen and (max-width: 600px){
        .slider{
            height: auto;
            padding-top: 70%;
        }
        
        .bullets-nav span{
        width: 16px;
        height: 16px;
        border-radius: 8px;
        background-color: #ccc;
        cursor: pointer;
        margin:0 5%;
        } 
    }

*/