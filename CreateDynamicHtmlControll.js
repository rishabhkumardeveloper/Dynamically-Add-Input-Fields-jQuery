

$(document).ready(function () {
    load();
});

function load() {
    //alert("Working...");
    $("#txtNoOfRec").focus();

    $("#btnNoOfRec").click(function () {
        $("#AddControll").empty();
        var NoOfRec = $("#txtNoOfRec").val();

        //alert("" + NoOfRec);

        if (NoOfRec > 0) {
            createControll(NoOfRec);
        }
    });    
}

function createControll(NoOfRec) {
    var tbl = "";

    tbl = "<table class='table table-bordered table-hover'>"+
                "<tr>"+
                    "<th> S.No </th>"+
                    "<th> Input </th>"+
                    "<th> Processs </th>"+
                    "<th> Output </th>"+
                "</tr>";

    for (i = 1; i <= NoOfRec; i++) {
        tbl += "<tr id=i>" +
                    "<td>" + i + "</td>" +

                    "<td>"+
                        "<input type='text' id='txtInput' placeholder='Input' autofocus />"+
                    "</td>"+

                    "<td>"+
                        "<input type='text' id='txtProcess' placeholder='Process' />"+
                    "</td>"+

                    "<td>"+
                    "<input type='text' id='txtOutput' placeholder='Output' />"+
                    "</td>"
                "</tr>";
    }
    tbl += "</table>";

    $("#AddControll").append(tbl);
}