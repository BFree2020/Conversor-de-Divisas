function moneda()
{
    var valor=parseFloat(document.getElementById("cantidad").value);
    var de=document.getElementById("de").value;
    var a=document.getElementById("a").value;
    var dolar=3813;
    var euro=4492.11;
    var libraesterlina=5266.67;
    monto=0;
    //peso a dolar
    if(de==1&&a==2)
    {
        monto=valor/dolar;
    }
    //peso a euro
    else if(de==1&&a==3)
    {
        monto=valor/euro;
    }
    //peso a libra esterlina
    else if(de==1&&a==4)
    {
        monto=valor/libraesterlina;
    }

    // dolar a peso
    else if(de==2&&a==1)
    {
        monto=valor*dolar;
    }
    // dolar a euro
    else if(de==2&&a==3)
    {   
        monto=valor*(dolar/euro);
    }
    // dolar a libra esterlina
    else if(de==2&&a==4)
    {   
        monto=valor*(dolar/libraesterlina);
    }

     // Euro a peso
     else if(de==3&&a==1)
     {   
        monto=valor*euro;
     }
      // Euro a dolar
      else if(de==3&&a==2)
      {   
        monto=valor*(euro/dolar);
      }
      // Euro a libra esterlina
      else if(de==3&&a==4)
      {   
        monto=valor*(euro/libraesterlina);
      }

      // libra esterlina a peso
      else if(de==4&&a==1)
      {   
        monto=valor*libraesterlina;
      }
       // libra esterlina a dolar
       else if(de==4&&a==2)
       {   
        monto=valor*(libraesterlina/dolar);
       }
       // libra esterlina a euro
       else if(de==4&&a==3)
       {   
        monto=valor*(libraesterlina/euro);
       }
       // peso a peso. dolar a dolar, euro a euro, libra a libra
       else{
           monto=valor;
       }
       
       document.getElementById("monto").innerHTML="Monto: $"+monto.toFixed(2);

      


}   
