function blogcontent_generateSource(){

    ///get the values from the form inputs:
        
        var copyDivid = document.getElementById("dividInput");   
        
        var copyDivtext =     
    document.getElementById("divtextInput");
    
        var copyPtext =    
    document.getElementById("ptextInput");
    
    
    
    ///generate the visual code from the form inputs:
    
    var txt1 ="<div class=\"blogside\" id=\"";
    var txt2=copyDivid.value;
    var txt3="\"> \n";
    var txt4=copyDivtext.value;
    var txt5="\n <p>";
    var txt6=copyPtext.value;
    var txt7="</p> \n </div>";
       
    var copyCode=((((((txt1.concat(" ", txt2)).concat(" ",txt3)).concat(" ",txt4)).concat(" ",txt5)).concat(" ",txt6)).concat(" ",txt7));     
    
    alert("Your code would look up like here:");
    alert(copyCode);
    
    document.getElementById("mastercode").innerHTML = copyCode;
       
       
       
    /// generate the source code from the form inputs
    
    var txt11 ="<pre>&lt;div class=\"blogside\" id=\"";
    
    var txt22=copyDivid.value;
    var txt33="\"> \n";
    var txt44=copyDivtext.value;
    var txt55="\n &lt;p>";
    var txt66=copyPtext.value;
    var txt77="&lt;/p> \n &lt;/div></pre>";
       
    var copyGenCode=((((((txt11.concat("", txt22)).concat("",txt33)).concat(" ",txt44)).concat(" ",txt55)).concat("",txt66)).concat("",txt77));
    
    ///alert("Content is ready to copy and paste into your source code:");
    ///alert(copyGenCode);
    
    document.getElementById("mastergencode").innerHTML = copyGenCode;
    
          }
          