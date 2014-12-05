CRUD = new function() {
   // console.log("CRUD operations protocol has been initiated ");
    this.getValues = function(){
    var id = Math.floor(Math.random()*100000);
    var d = new Date().toString();
    var dateStr = d.substring(0, d.indexOf(":",20));
    var textFName = document.task.fName.value;
    var textLName = document.task.lName.value;
    var textConNo = document.task.conNo.value;

        $.post("welcome/",
        {
            first: textFName,
            last: textLName,
            contact: textConNo,
            time: dateStr,
            action: "add",
            id:id
        },
        function(data){
            $(data).hide().prependTo(".val").fadeIn("slow");
            console.log("fadein executed");
            $("#message").hide();
            $("#fName").val("");
            $("#lName").val("");
            $("#conNo").val("");
        } );
    }
}