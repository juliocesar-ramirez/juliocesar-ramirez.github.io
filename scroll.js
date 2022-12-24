document.lastScrollPosition=0;
document.lastCentered=0;
document.onWayTo = null;

document.addEventListener( 'scroll', () => {
    const direction= window.pageYOffset-document.lastScrollPosition > 0 ? 'down' :'up';
    const articles=[...document.querySelectorAll('article')];
    console.log(direction);
    // const portada=[...document.querySelector('.portada')];

    if(document.onWayTo === null){
	const destIndex = direction === 'up' ? document.lastCentered - 1 : document.lastCentered+1;
	if(destIndex >= 0 && destIndex < articles.length){

	    document.onWayTo = destIndex;
	    window.scroll(0, articles[destIndex].offsetTop);
	}
    }    
    articles.forEach((section,index) => {
	if(window.pageYOffset === section.offsetTop){
	    document.lastCentered=index;
	    if(document.onWayTo === index){
		document.onWayTo = null;
	    }
	}
    });
    
    document.lastScrollPosition=window.pageYOffset;
});


