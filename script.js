
'use strict';

class toolClass {
    constructor(num, page) {
        this.ul = document.getElementById("ulul"); //page list
        this.ullist = document.getElementById("ululul"); // pagination list
        this.ullisspag = this.ullist.getElementsByTagName("LI"); // pagination list
        this.num = num; //num list per page
        this.page = page;

    }
    changePage(){

        this.ul.setAttribute('data-page', this.page);
        this.createPages();
    }

    createPages(){

        this.b = this.ul.getElementsByTagName("LI");

        //Num of pages
        if(this.ullisspag.length == '0'){
            let pages = Math.ceil(this.b.length/this.num);
            this.createPagination(pages);
        }else{
            this.modifyPagination()
        }

        // Page init
        if(!this.ul.getAttribute("data-page") ){        
            var pageInit = this.ul.setAttribute('data-page', '1');
        }else{
            var pageInit = this.ul.getAttribute('data-page');
        }

        var page = this.num*parseInt(pageInit);

        for (var i = 0; i < this.b.length; i++) {

            if((i+1) >= ((page-this.num)+1) && (i+1) <= page){

               this.b[i].style.display ="block";
  
            }else{

                this.b[i].style.display = 'none';

            }
        } 
    }

    modifyPagination(){

        for (var i = 0; i < this.ullisspag.length; i++) {
            
           
            if(this.page == this.ullisspag[i].id ){
                
                this.ullisspag[i].setAttribute('class', 'active');           
 
            }else{

                this.ullisspag[i].setAttribute('class', '');           

            }
        } 
    }


    createPagination(pages){
        
        // num of pagination 
        var numpaglist = Math.ceil((window.innerWidth/45)-2);

        for(var i =0; i < pages; i++){

            var pagination = i+1;

            var li = document.createElement('li'); 
            li.setAttribute('id', pagination);           
            li.setAttribute('onclick', 'page(this.id)');           

            //Pagination ocult
            if(numpaglist < pagination){
                li.style.display = 'none'
            }

            //pagination active
            if(pagination == this.ul.getAttribute('data-page')){
                li.setAttribute('class', 'active');           
            }

            var html =`<a href='#'>${pagination}</a>`

            //Seleccionamos lista
            this.ullist.appendChild(li);
            li.innerHTML = html;


        }
    }
}