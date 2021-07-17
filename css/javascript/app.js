let pool=function(Number,Age,floaters,Sanitaries){
    this.Number=Number;
    this.Sanitaries=Sanitaries;
    this.Age=Age;
    this.floaters=floaters;
}

   pool.prototype.Tcharges=function(){
       return this.Number * this.Age + this.floaters + this.Sanitaries
   }

$(Document).ready(function(){
         let Fcharges=0;
    $("button.book").click(function(event){
        event.preventDefault();
        let Nnumber=  parseInt($("#Number option:selected").val()); 
        let Nsanitaries= parseInt($("#Sanitaries option:selected").val()); 
        let Nage= parseInt($("#Age option:selected").val()); 
        let Nfloaters= parseInt($("#Floaters option:selected").val()); 

        let Npool= new pool(Nnumber,Nage,Nfloaters,Nsanitaries);

       let Scharges = (Npool.Tcharges());

        Fcharges+=Scharges;



      let Tnumber = $("#Number option:selected").text();
      let Tage = $("#Age option:selected").text();
      let Tfloaters = $("#Floaters option:selected").text();
      let Tsanitaries = $("#Sanitaries option:selected").text();

      $("tbody:last").append("<tr>"+"<td>"+Tnumber+"</td>"+"<td>"+Tage+"</td>"+"<td>" +Tfloaters+ "</td>" +"<td>"+Tsanitaries+ "</td>" + "<td>" + Scharges +"</td>"+"</tr>")

    
    });

    $("button#final").click(function(event){
        $("#price:last").text(Fcharges);
        // $("#last").show();
        var nName= $("#nameO").val();
        // var nlocation=$("#loc").val();
        
            alert("thanks " + nName + " for booking our swimming pool enjoy our services as we look forward to make it more enhanced. the next booking will be in 2 hours");
      

    })
 
})









$(Document).ready(function(){
    $(".pic1").mouseenter(function(){
        $(".txt1").show(2000);
        
    });
     $(".pic1").mouseleave(function(){
       $(".txt1").hide(1000);
      })
    
    $(".pic2").mouseenter(function(){
        $(".txt2").show(2000);
    });
    $(".pic2").mouseleave(function(){
        $(".txt2").hide(1000);
       })
    
       $(".pic3").mouseenter(function(){
        $(".txt3").show(2000);
    });

    $(".pic3").mouseleave(function(){
        $(".txt3").hide(1000);
       })
    
       $(".pic4").mouseenter(function(){
        $(".txt4").show(2000);
    });
    $(".pic4").mouseleave(function(){
        $(".txt4").hide(1000);
       });
    
       $(".pic5").mouseenter(function(){
        $(".txt5").show(2000);
    });
    $(".pic5").mouseleave(function(){
        $(".txt5").hide(1000);
       });
    
       $(".pic6").mouseenter(function(){
        $(".txt6").show(2000);
    });
    $(".pic6").mouseleave(function(){
        $(".txt6").hide(1000);
       });

       $(".pic7").mouseenter(function(){
        $(".txt7").show(2000);
    });
    $(".pic7").mouseleave(function(){
        $(".txt7").hide(1000);
       });
       $(".pic8").mouseenter(function(){
        $(".txt8").show(2000);
    });
    $(".pic8").mouseleave(function(){
        $(".txt8").hide(1000);
       });

    $(".pic9").mouseenter(function(){
        $(".txt9").show(1000);
       });
    
    $(".pic9").mouseleave(function(){
        $(".txt9").hide(1000);
       });

       $(".pic10").mouseenter(function(){
        $(".txt10").show(1000);
       });
    
    $(".pic10").mouseleave(function(){
        $(".txt10").hide(1000);
       });

       $(".pic11").mouseenter(function(){
        $(".txt11").show(1000);
       });
    
    $(".pic11").mouseleave(function(){
        $(".txt11").hide(1000);
       });

       $(".pic12").mouseenter(function(){
        $(".txt12").show(1000);
       });
    
    $(".pic12").mouseleave(function(){
        $(".txt12").hide(1000);
       });
});




