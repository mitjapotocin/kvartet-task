Če spletna stran potrebuje slider – Slick slider 
https://kenwheeler.github.io/slick/

Če spletna stran potrebuje lightbox - Fancybox
http://fancyapps.com/fancybox/3/

CSS – struktura se gradi z less dokumenti
•	variables.less – navedene vse pogosto uporabljene variable – npr osnovna barva (@basecolor: pink; ), tipografija, širine, odmiki
•	mapa default – znotraj so osnovni elementi spletne strani – npr noga, glava (footer, header, navigacija, paginacija ,.. )
•	mapa components – osnovni elementi – npr gumbi (buttons)
•	mapa modules – osnovni gradniki – npr modul za vsebino s sliko, modul galerija ,..  
•	mapa layouts – specifični stili 
•	mape in less dokumente se seveda lahko dodaja – smiselno gradi 


Media queries se uporabljajo znotraj dokumenta npr.:

footer {
color: pink;
@media @bp_768 { 
color: red;                                          
}
@media @bp_1023 { 
color: yellow;                                   
}
}
